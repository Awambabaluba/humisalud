// Comprueba el precio actual en Amazon de cada producto del catálogo y actualiza
// precioMin / precioReferencia / precioComprobadoEn en src/data/products.ts.
//
// Motor: Playwright sobre Chrome real (channel "chrome") con perfil persistente.
// El antiguo motor `fetch()` dejó de funcionar porque Amazon devuelve captcha /
// interstitial "Continuar comprando" a las peticiones que no son un navegador.
// Un navegador de verdad con cookies acumuladas sí pasa el anti-bot.
//
// - Si el producto YA tiene precioMin numérico -> se actualiza en su sitio.
// - Si NO lo tiene (solo precioOrientativo) -> se INSERTAN los tres campos justo
//   detrás de precioOrientativo, con el precio real leído. Así no hace falta
//   sembrar precios a mano: la web muestra la cifra solo cuando es real.
//
// precioReferencia solo SUBE (nunca baja): es el precio "normal" más alto visto,
// para calcular el % de descuento cuando precioMin < precioReferencia.
//
// Uso: node scripts/check-prices.js [--dry-run] [--verbose]

import { readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const __dirname = resolve(fileURLToPath(import.meta.url), "..");
const ROOT = resolve(__dirname, "..");
const PRODUCTS_FILE = join(ROOT, "src/data/products.ts");

// Perfil dedicado FUERA del repo (guarda cookies de sesión — no debe subir a GitHub).
// Es el mismo perfil que usa AspiraBot: ya tiene cookies de amazon.es acumuladas.
const PROFILE_DIR = "C:\\Users\\juand\\AppData\\Local\\pw-amazon-profile";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

// "49,90 €" / "1.299,00 €" -> 49.9 / 1299
function parsePriceNumber(price) {
  return parseFloat(
    price
      .replace(/[^\d,.-]/g, "")
      .replace(/\.(?=\d{3}(?:[,.]|$))/g, "")
      .replace(",", "."),
  );
}

// Deja como máximo 2 decimales y sin cola de coma flotante: 49.900000001 -> 49.9
function cleanNumber(n) {
  return Number(n.toFixed(2));
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
function randomDelay(minMs, maxMs) {
  return sleep(minMs + Math.random() * (maxMs - minMs));
}

// Se ejecuta DENTRO de la página. Anclada al buybox real (corePrice/apex) para no
// capturar el precio de un accesorio o de un producto sugerido del carrusel.
function pageExtract() {
  const body = document.body ? document.body.innerText : "";
  if (
    /introduce los caracteres|no soy un robot|dogs of amazon/i.test(body) &&
    document.querySelector('form[action*="validateCaptcha"]')
  ) {
    return { captcha: true, interstitial: false, price: null };
  }
  const isInterstitial =
    !document.querySelector("#corePrice_feature_div, #apex_desktop, #productTitle") &&
    /Continuar comprando|Continue shopping/i.test(body);

  const roots = [
    document.querySelector("#corePrice_feature_div"),
    document.querySelector("#corePriceDisplay_desktop_feature_div"),
    document.querySelector("#corePrice_desktop"),
    document.querySelector("#apex_desktop"),
  ].filter(Boolean);

  const read = (root) => {
    const off = root.querySelector(
      '.a-price[data-a-color="base"] .a-offscreen, .a-price .a-offscreen',
    );
    if (off) return off.textContent.trim();
    const whole = root.querySelector(".a-price-whole");
    if (whole) {
      const frac = root.querySelector(".a-price-fraction");
      return (
        whole.textContent.replace(/[^\d]/g, "") +
        (frac ? "," + frac.textContent.replace(/[^\d]/g, "") : "") +
        "€"
      );
    }
    return null;
  };

  for (const r of roots) {
    const p = read(r);
    if (p) return { captcha: false, interstitial: false, price: p };
  }
  const avail =
    (document.querySelector("#availability")?.innerText || "") +
    (document.querySelector("#outOfStock, #buybox")?.innerText || "");
  const unavailable = /no disponible|no está disponible|currently unavailable/i.test(avail);
  return { captcha: false, interstitial: isInterstitial, price: null, unavailable };
}

let ctx;
let page;

async function initBrowser() {
  ctx = await chromium.launchPersistentContext(PROFILE_DIR, {
    channel: "chrome",
    headless: true,
    locale: "es-ES",
    userAgent: UA,
    viewport: { width: 1366, height: 900 },
    args: ["--disable-blink-features=AutomationControlled"],
  });
  page = ctx.pages()[0] || (await ctx.newPage());
  try {
    await page.goto("https://www.amazon.es/", { waitUntil: "domcontentloaded", timeout: 30000 });
    await dismiss();
    await randomDelay(1000, 2000);
  } catch {
    /* si la home falla seguimos igualmente */
  }
}

async function dismiss() {
  const cookie = await page.$("#sp-cc-accept");
  if (cookie) {
    await cookie.click().catch(() => {});
    await page.waitForTimeout(400);
  }
  const cont = await page.$(
    'button:has-text("Continuar comprando"), button:has-text("Continue shopping"), a:has-text("Continuar comprando")',
  );
  if (cont) {
    await cont.click().catch(() => {});
    await page.waitForLoadState("domcontentloaded").catch(() => {});
    await page.waitForTimeout(800);
  }
}

async function fetchAmazonPrice(url) {
  let lastReason = "sin precio";
  for (let attempt = 0; attempt < 3; attempt++) {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
    await page.waitForTimeout(1200);
    await dismiss();
    const r = await page.evaluate(pageExtract);
    if (r.captcha) throw new Error("Bloqueado por Amazon (captcha)");
    if (r.unavailable) throw new Error("Producto no disponible en Amazon ahora mismo");
    if (r.price) {
      const num = parsePriceNumber(r.price);
      if (!isNaN(num) && num > 0) return num;
    }
    lastReason = r.interstitial ? "interstitial anti-bot" : "sin precio";
    await randomDelay(1500, 3000);
  }
  throw new Error(`No se pudo leer el precio (${lastReason})`);
}

// slug -> enlaceAfiliado (solo los que apuntan a Amazon se pueden comprobar).
function extractProducts(content) {
  const slugs = [...content.matchAll(/^\s+slug: "([\w-]+)",/gm)].map((m) => m[1]);
  const links = new Map();
  for (const slug of slugs) {
    const blockRe = new RegExp(`slug: "${slug}"[\\s\\S]*?enlaceAfiliado: "([^"]+)"`);
    const m = content.match(blockRe);
    if (m) links.set(slug, m[1]);
  }
  return links;
}

// Regex para el caso "ya tiene precioMin": captura precioMin y (opcionales)
// precioReferencia / precioComprobadoEn para reemplazarlos en bloque.
function updateRe(slug) {
  return new RegExp(
    `(slug: "${slug}"(?:(?!slug: ")[\\s\\S])*?precioMin: )([\\d.]+)(,\\r?\\n(?: {4}precioReferencia: ([\\d.]+),\\r?\\n)?(?: {4}precioComprobadoEn: "[^"]+",\\r?\\n)?)`,
  );
}

// Regex para el caso "no tiene precioMin": ancla en la línea precioOrientativo
// para insertar los tres campos justo detrás.
function insertRe(slug) {
  return new RegExp(`(slug: "${slug}"[\\s\\S]*?precioOrientativo: "[^"]*",\\r?\\n)`);
}

async function main() {
  const today = new Date().toISOString().slice(0, 10);
  let content = readFileSync(PRODUCTS_FILE, "utf-8");
  const productLinks = extractProducts(content);

  await initBrowser();

  const results = [];

  let first = true;
  for (const [slug, amazonLink] of productLinks) {
    if (!first) await randomDelay(4000, 9000);
    first = false;

    if (!/amazon\./i.test(amazonLink)) {
      results.push({ slug, status: "SKIP", detail: "No es un enlace de Amazon" });
      continue;
    }

    const hasPrice = updateRe(slug).test(content);

    let livePriceNum;
    try {
      livePriceNum = cleanNumber(await fetchAmazonPrice(amazonLink));
    } catch (e) {
      results.push({ slug, status: "ERROR", detail: e.message });
      continue;
    }

    if (hasPrice) {
      // --- Actualización en su sitio ---
      const re = updateRe(slug);
      const match = content.match(re);
      const oldPriceNum = parseFloat(match[2]);
      const oldReferenceNum = match[4] ? parseFloat(match[4]) : oldPriceNum;

      // Salvaguarda: un cambio descabellado (>60%) suele ser un precio equivocado.
      const changePercent =
        oldPriceNum > 0 ? (Math.abs(livePriceNum - oldPriceNum) / oldPriceNum) * 100 : 0;
      if (changePercent > 60) {
        const dir = livePriceNum < oldPriceNum ? "caída" : "subida";
        results.push({
          slug,
          status: "SOSPECHOSO",
          oldPrice: oldPriceNum,
          detectedPrice: livePriceNum,
          dir,
        });
        continue;
      }

      const newReferenceNum = Math.max(oldReferenceNum, livePriceNum);
      const changed =
        Math.abs(livePriceNum - oldPriceNum) > 0.01 || newReferenceNum !== oldReferenceNum;
      if (changed) {
        content = content.replace(
          re,
          `$1${livePriceNum},\n    precioReferencia: ${newReferenceNum},\n    precioComprobadoEn: "${today}",\n`,
        );
      }
      const discountPercent =
        newReferenceNum > 0
          ? Math.round(((newReferenceNum - livePriceNum) / newReferenceNum) * 100)
          : 0;
      results.push({
        slug,
        status: changed ? "ACTUALIZADO" : "SIN CAMBIOS",
        oldPrice: oldPriceNum,
        newPrice: livePriceNum,
        discountPercent: discountPercent >= 5 ? discountPercent : 0,
      });
    } else {
      // --- Primera inserción de precio real ---
      const re = insertRe(slug);
      if (!re.test(content)) {
        results.push({
          slug,
          status: "SKIP",
          detail: "No se encontró dónde insertar (sin precioOrientativo)",
        });
        continue;
      }
      content = content.replace(
        re,
        `$1    precioMin: ${livePriceNum},\n    precioReferencia: ${livePriceNum},\n    precioComprobadoEn: "${today}",\n`,
      );
      results.push({ slug, status: "NUEVO", newPrice: livePriceNum, discountPercent: 0 });
    }
  }

  await ctx.close();

  const dryRun = process.argv.includes("--dry-run");
  if (!dryRun) {
    writeFileSync(PRODUCTS_FILE, content, "utf-8");
  } else {
    console.log("(--dry-run: no se ha escrito nada en products.ts)");
  }

  console.log("\n=== Comprobación de precios HumiSalud ===\n");
  let updated = 0;
  let inserted = 0;
  let errors = 0;
  let ofertas = 0;
  for (const r of results) {
    if (r.status === "ERROR") {
      errors++;
      console.log(`ERROR  ${r.slug}: ${r.detail}`);
    } else if (r.status === "SKIP") {
      console.log(`SKIP   ${r.slug}: ${r.detail}`);
    } else if (r.status === "SOSPECHOSO") {
      console.log(
        `AVISO  ${r.slug}: ${r.dir} >60% (${r.oldPrice}€ -> ${r.detectedPrice}€) — no se aplicó, revisar a mano`,
      );
    } else if (r.status === "NUEVO") {
      inserted++;
      console.log(`NUEVO  ${r.slug}: ${r.newPrice}€ (primer precio real insertado)`);
    } else if (r.status === "ACTUALIZADO") {
      updated++;
      const tag = r.discountPercent > 0 ? `  -> OFERTA -${r.discountPercent}%` : "";
      console.log(`OK     ${r.slug}: ${r.oldPrice}€ -> ${r.newPrice}€${tag}`);
      if (r.discountPercent > 0) ofertas++;
    } else if (r.status === "SIN CAMBIOS") {
      if (r.discountPercent > 0) ofertas++;
      if (process.argv.includes("--verbose")) {
        console.log(
          `=      ${r.slug}: ${r.oldPrice}€ (sin cambios)${r.discountPercent > 0 ? `  -> OFERTA -${r.discountPercent}%` : ""}`,
        );
      }
    }
  }
  console.log(
    `\nNuevos: ${inserted} | Actualizados: ${updated} | Errores: ${errors} | Ofertas activas: ${ofertas} | Total: ${results.length}\n`,
  );
}

main().catch(async (e) => {
  console.error("Error fatal:", e);
  try {
    if (ctx) await ctx.close();
  } catch {}
  process.exit(1);
});
