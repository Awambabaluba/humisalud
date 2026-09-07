// Presentación compartida de datos de producto: la usan la tarjeta, la tabla
// comparativa y la ficha. Vivían tres copias literales de `fmt` y ya habían
// divergido una vez (la ficha devolvía "—" donde las otras dos devolvían "?"),
// así que la web se contradecía a sí misma. Una sola definición.
import { PRODUCT_IMAGE_CREDITS } from "@/assets/product-images";
import type { Producto } from "@/data/products";
import type { Locale } from "@/i18n/dictionary";

/**
 * Formatea un valor de especificación con su unidad.
 *
 * Devuelve "?" cuando el dato no está verificado ({{DATO_PENDIENTE}}) o no
 * existe: preferimos admitir que no lo sabemos a inventarnos una cifra.
 */
export function fmt(v: number | "DATO_PENDIENTE" | undefined, unit: string): string {
  if (v === undefined || v === "DATO_PENDIENTE") return "?";
  return `${v} ${unit}`;
}

/**
 * Texto alternativo de la imagen oficial del producto, con el crédito de la
 * fuente entre paréntesis. Si no hay crédito registrado cae en la marca.
 */
export function productImageAlt(p: Producto, locale: Locale = "es"): string {
  const credito = PRODUCT_IMAGE_CREDITS[p.slug] ?? p.marca;
  return locale === "en"
    ? `Official image of ${p.nombre} (${credito})`
    : `Imagen oficial de ${p.nombre} (${credito})`;
}
