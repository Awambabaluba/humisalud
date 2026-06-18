import asyncio, re, sys
from pathlib import Path
from playwright.async_api import async_playwright

BASE = "http://localhost:8080"
SHOTS = Path(__file__).parent / "screenshots"
SHOTS.mkdir(exist_ok=True)

# Strings that should NEVER appear in the EN version (Spanish-only words)
ES_MARKERS = [
    "Mejores humidificadores", "Encuentra el tuyo", "Selector personalizado",
    "Guía de compra", "Metodología editorial", "Aviso de afiliación",
    "Todos los derechos reservados", "Cambiar a", "Y respira mejor",
    "Para bebé", "Dormitorio silencioso",
]
# Strings that should NEVER appear in the ES version (English-only)
EN_MARKERS = [
    "Best humidifiers 2026", "Find yours", "Personalised selector",
    "Buying guide", "Editorial methodology", "Affiliate disclosure",
    "All rights reserved", "And breathe better", "For babies",
    "Silent bedroom", "Switch to",
]

def find_hits(text, markers):
    return [m for m in markers if m in text]

async def grab(page, url):
    await page.goto(BASE + url, wait_until="networkidle")
    # wait past intro overlay
    await page.keyboard.press("Escape")
    await page.wait_for_timeout(1200)
    return await page.locator("body").inner_text()

async def main():
    results = []
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        ctx = await browser.new_context(viewport={"width": 1280, "height": 1800})
        page = await ctx.new_page()

        # --- TEST 1: ES home should not contain English-only markers ---
        text_es = await grab(page, "/")
        await page.screenshot(path=str(SHOTS/"es_home.png"))
        en_leak = find_hits(text_es, EN_MARKERS)
        results.append(("ES / : sin textos en inglés", not en_leak, en_leak))
        results.append(("ES / : contiene marcadores ES",
                        any(m in text_es for m in ES_MARKERS), []))

        # --- TEST 2: EN home should not contain Spanish-only markers ---
        text_en = await grab(page, "/en")
        await page.screenshot(path=str(SHOTS/"en_home.png"))
        es_leak = find_hits(text_en, ES_MARKERS)
        results.append(("EN /en : sin textos en español", not es_leak, es_leak))
        results.append(("EN /en : contiene marcadores EN",
                        any(m in text_en for m in EN_MARKERS), []))

        # --- TEST 3: <html lang> coherente ---
        await page.goto(BASE + "/", wait_until="domcontentloaded")
        await page.wait_for_function("document.documentElement.lang === \"es\"", timeout=3000)
        lang_es = await page.evaluate("document.documentElement.lang")
        await page.goto(BASE + "/en", wait_until="domcontentloaded")
        await page.wait_for_function("document.documentElement.lang === \"en\"", timeout=3000)
        lang_en = await page.evaluate("document.documentElement.lang")
        results.append((f"<html lang> en / = '{lang_es}'", lang_es.startswith("es"), []))
        results.append((f"<html lang> en /en = '{lang_en}'", lang_en.startswith("en"), []))

        # --- TEST 4: toggle ES/EN navega al equivalente ---
        await page.goto(BASE + "/", wait_until="networkidle")
        await page.keyboard.press("Escape"); await page.wait_for_timeout(800)
        toggle = page.get_by_role("link", name=re.compile("English", re.I))
        await toggle.first.click()
        await page.wait_for_load_state("networkidle")
        results.append((f"Toggle ES→EN va a /en (url={page.url})",
                        page.url.rstrip('/').endswith('/en'), []))

        toggle2 = page.get_by_role("link", name=re.compile("español", re.I))
        await toggle2.first.click()
        await page.wait_for_load_state("networkidle")
        results.append((f"Toggle EN→ES vuelve a / (url={page.url})",
                        page.url.rstrip('/') == BASE, []))

        # --- TEST 5: footer en /en ---
        await page.goto(BASE + "/en", wait_until="networkidle")
        await page.keyboard.press("Escape"); await page.wait_for_timeout(800)
        footer = await page.locator("footer").inner_text()
        results.append(("Footer /en sin español",
                        not find_hits(footer, ES_MARKERS),
                        find_hits(footer, ES_MARKERS)))

        await browser.close()

    print("\n=== Resultados pruebas i18n ===")
    failed = 0
    for name, ok, detail in results:
        mark = "✓" if ok else "✗"
        print(f"  {mark} {name}")
        if not ok and detail:
            print(f"      ↳ fugas: {detail}")
        if not ok:
            failed += 1
    print(f"\n{len(results)-failed}/{len(results)} pruebas pasadas")
    sys.exit(0 if failed == 0 else 1)

asyncio.run(main())
