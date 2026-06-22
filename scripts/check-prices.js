// Comprueba el precio actual en Amazon de cada producto del catálogo y
// actualiza precioMin/precioReferencia/precioComprobadoEn en src/data/products.ts.
//
// precioReferencia solo SUBE (nunca baja) — representa el precio "normal" más
// alto observado, para poder calcular el % de descuento cuando precioMin < precioReferencia.
//
// Uso: node scripts/check-prices.js [--dry-run] [--verbose]
// Salida: resumen en consola + products.ts actualizado si hubo cambios (salvo --dry-run).

import { readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = resolve(fileURLToPath(import.meta.url), "..");
const ROOT = resolve(__dirname, "..");
const PRODUCTS_FILE = join(ROOT, "src/data/products.ts");

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

async function fetchAmazonPrice(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": UA,
      "Accept-Language": "es-ES,es;q=0.9",
      Accept: "text/html,application/xhtml+xml",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();

  if (/dogs of amazon|sorry.*we just need to make sure/i.test(html)) {
    throw new Error("Bloqueado por Amazon (captcha/anti-bot)");
  }

  // CRÍTICO: anclar al bloque de compra real (corePrice/buybox), no al primer
  // precio de la página, que suele pertenecer al carrusel de productos sugeridos.
  const anchorMatches = [...html.matchAll(/id="corePrice[A-Za-z_]*"/g)];
  if (anchorMatches.length === 0) {
    if (/No disponible\.</.test(html)) {
      throw new Error("Producto no disponible en Amazon ahora mismo (variante agotada)");
    }
    throw new Error("No se encontró el bloque de precio principal (corePrice)");
  }

  const euroPatterns = [
    /a-price-whole">([\d.,]+)</,
    /id="priceblock_ourprice"[^>]*>([\d.,]+)\s*€/,
    /id="priceblock_dealprice"[^>]*>([\d.,]+)\s*€/,
  ];
  for (const anchorMatch of anchorMatches) {
    const buybox = html.slice(anchorMatch.index, anchorMatch.index + 4000);
    for (const re of euroPatterns) {
      const m = buybox.match(re);
      if (m) {
        const num = parseFloat(m[1].replace(/\./g, "").replace(",", "."));
        if (!isNaN(num) && num > 0) return num;
      }
    }
    const jsonMatch = buybox.match(/"priceAmount":([\d.]+)/);
    if (jsonMatch) {
      const num = parseFloat(jsonMatch[1]);
      if (!isNaN(num) && num > 0) return num;
    }
  }

  if (/No disponible\.</.test(html)) {
    throw new Error("Producto no disponible en Amazon ahora mismo (variante agotada)");
  }
  throw new Error("No se encontró el precio en ningún bloque principal de compra");
}

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

async function main() {
  const today = new Date().toISOString().slice(0, 10);
  let content = readFileSync(PRODUCTS_FILE, "utf-8");
  const productLinks = extractProducts(content);

  const results = [];

  for (const [slug, amazonLink] of productLinks) {
    if (!/amazon\./i.test(amazonLink)) {
      results.push({ slug, status: "SKIP", detail: "No es un enlace de Amazon (no se puede comprobar precio)" });
      continue;
    }

    const blockRe = new RegExp(
      `(slug: "${slug}"[\\s\\S]*?precioMin: )([\\d.]+)(,\\r?\\n(?: {4}precioReferencia: ([\\d.]+),\\r?\\n)?(?: {4}precioComprobadoEn: "[^"]+",\\r?\\n)?)`,
    );
    const match = content.match(blockRe);
    if (!match) {
      results.push({ slug, status: "SKIP", detail: "No se encontró el campo precioMin (sin precio numérico registrado)" });
      continue;
    }
    const oldPriceNum = parseFloat(match[2]);
    const oldReferenceNum = match[4] ? parseFloat(match[4]) : oldPriceNum;

    let livePriceNum;
    try {
      livePriceNum = await fetchAmazonPrice(amazonLink);
    } catch (e) {
      results.push({ slug, status: "ERROR", detail: e.message, oldPrice: oldPriceNum });
      continue;
    }

    // Salvaguarda: una caída de precio descabellada (>60%) suele significar que se
    // ha capturado un precio equivocado — no se aplica, se marca para revisión manual.
    const dropPercent = oldPriceNum > 0 ? ((oldPriceNum - livePriceNum) / oldPriceNum) * 100 : 0;
    if (dropPercent > 60) {
      results.push({ slug, status: "SOSPECHOSO", oldPrice: oldPriceNum, detectedPrice: livePriceNum });
      continue;
    }

    const newReferenceNum = Math.max(oldReferenceNum, livePriceNum);
    const changed = Math.abs(livePriceNum - oldPriceNum) > 0.01 || newReferenceNum !== oldReferenceNum;

    if (changed) {
      content = content.replace(
        blockRe,
        `$1${livePriceNum},\n    precioReferencia: ${newReferenceNum},\n    precioComprobadoEn: "${today}",\n`,
      );
    }

    const discountPercent =
      newReferenceNum > 0 ? Math.round(((newReferenceNum - livePriceNum) / newReferenceNum) * 100) : 0;

    results.push({
      slug,
      status: changed ? "ACTUALIZADO" : "SIN CAMBIOS",
      oldPrice: oldPriceNum,
      newPrice: livePriceNum,
      discountPercent: discountPercent >= 5 ? discountPercent : 0,
    });
  }

  const dryRun = process.argv.includes("--dry-run");
  if (!dryRun) {
    writeFileSync(PRODUCTS_FILE, content, "utf-8");
  } else {
    console.log("(--dry-run: no se ha escrito nada en products.ts)");
  }

  console.log("\n=== Comprobación de precios HumiSalud ===\n");
  let updated = 0;
  let errors = 0;
  let ofertas = 0;
  for (const r of results) {
    if (r.status === "ERROR") {
      errors++;
      console.log(`ERROR  ${r.slug}: ${r.detail} (se mantiene ${r.oldPrice}€)`);
    } else if (r.status === "SKIP") {
      console.log(`SKIP   ${r.slug}: ${r.detail}`);
    } else if (r.status === "SOSPECHOSO") {
      console.log(`AVISO  ${r.slug}: caída >60% (${r.oldPrice}€ -> ${r.detectedPrice}€) — revisar a mano, no se aplicó`);
    } else if (r.status === "ACTUALIZADO") {
      updated++;
      const tag = r.discountPercent > 0 ? `  -> OFERTA -${r.discountPercent}%` : "";
      console.log(`OK     ${r.slug}: ${r.oldPrice}€ -> ${r.newPrice}€${tag}`);
      if (r.discountPercent > 0) ofertas++;
    } else if (r.status === "SIN CAMBIOS") {
      if (r.discountPercent > 0) ofertas++;
      if (process.argv.includes("--verbose")) {
        console.log(`=      ${r.slug}: ${r.oldPrice}€ (sin cambios)${r.discountPercent > 0 ? `  -> OFERTA -${r.discountPercent}%` : ""}`);
      }
    }
  }
  console.log(`\nActualizados: ${updated} | Errores: ${errors} | Ofertas activas: ${ofertas} | Total: ${results.length}\n`);
}

main().catch((e) => {
  console.error("Error fatal:", e);
  process.exit(1);
});
