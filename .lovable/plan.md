Voy a ejecutar los 6 pasos en orden. Por volumen y dependencias entre ellos, los agrupo en 3 entregas para que puedas revisar y desbloquear la siguiente. Confirma y arranco por la Entrega 1.

## Entrega 1 — Pasos 1 y 2 (estructura y herramientas)

**1. Versión en inglés (i18n)**
- Diccionario `src/i18n/{es,en}.ts` con todas las cadenas de UI (header, footer, CTAs, FAQ, metodología, selector, fichas).
- Hook `useT()` + provider que detecta locale por ruta (`/en/*` = inglés, raíz = español).
- Duplicar el árbol de rutas bajo `/en` reutilizando los mismos componentes con `locale` prop. Slugs traducidos por mapping (`/mejores-humidificadores` ↔ `/en/best-humidifiers`).
- `<html lang>` dinámico, `hreflang` alternates y `og:locale` en `head()` de cada ruta.
- Toggle ES/EN en el header con preservación del slug equivalente.
- Sitemap se amplía con URLs `/en/*`.

**2. Calculadora de m² + coste real de uso**
- Ruta `/calculadora` (y `/en/calculator`): formulario con superficie, altura de techo, humedad objetivo, horas/día y precio kWh.
- Lógica pura en `src/lib/humidifier-math.ts`: volumen de aire, déficit de humedad → caudal recomendado (g/h), recomendación de capacidad de depósito y modelos del catálogo que la cubren.
- Página `/coste-de-uso` (y `/en/running-cost`): tabla del consumo W de cada tecnología (rango del estudio), cálculo €/mes y €/año por uso típico.
- Widget de coste integrado en cada ficha de producto con valores por defecto editables.

## Entrega 2 — Pasos 3 y 4 (contenido y marca visual)

**3. Hub de marcas + Blog**
- Página índice `/marcas` y rutas dinámicas `/marca/$slug` (cecotec, levoit, philips, rowenta, xiaomi, winix). Cada hub: bio editorial breve, gama, recambios típicos, modelos en catálogo, JSON-LD `Brand`.
- Sistema de blog mínimo basado en archivos: `src/content/blog/*.mdx` (o `.ts` si no añadimos MDX) con frontmatter (título, slug, fecha, autor, categoría, resumen, OG). Rutas `/blog` (índice paginado) y `/blog/$slug` con JSON-LD `Article`, breadcrumbs y CTA a selector.
- 3 posts seed alineados al estudio: humedad ideal en casa, evaporativo vs ultrasónico, limpieza y prevención de "fiebre del humidificador".

**4. Imágenes oficiales e iconografía**
- Slot `imagen` poblado para los 6 modelos del catálogo con assets ubicados en `src/assets/products/` (referencia visual neutra generada — sin falsear branding; nota legal en el footer de cada ficha).
- Iconografía propia por categoría (bebé, dormitorio, salón, alergias, inteligente, económico) generada como SVGs en `src/assets/categories/`, sustituyendo el placeholder único de `Droplets`.
- OG dinámica por ruta usando la imagen del producto/categoría como `og:image`.

## Entrega 3 — Pasos 5 y 6 (infraestructura)

**5. Tracking real de afiliados + GA4**
- Configuración central `src/config/affiliates.ts` con `amazonTag` y soporte Awin (advertiser id + deeplink builder). El campo `enlaceAfiliado` se construye en runtime con el tag correcto según `comercio`.
- `AffiliateButton` añade `?tag=` automático para Amazon y `awinmid/awinaffid` para Awin, mantiene `rel="nofollow sponsored noopener"` y dispara `gtag('event','affiliate_click', { product, merchant, position })`.
- Carga de GA4 vía `<script>` en `__root.tsx` controlada por `VITE_GA_ID`, con consentimiento por defecto denegado y desbloqueo desde el banner de cookies existente.
- Página `/metodologia` actualizada con divulgación técnica del tracking.

**6. Conexión a Lovable Cloud (precios automáticos)**
- Activación de Lovable Cloud.
- Tablas `products` (catálogo editorial) y `product_prices` (snapshots: merchant, price, currency, url, fetched_at) con RLS pública de lectura y escritura sólo desde server functions.
- Server function `refreshPrices` que actualiza `product_prices` (placeholder: lectura desde fuentes públicas con parser por merchant; integrable después con Keepa/PA-API si se aporta clave).
- Endpoint cron `app/routes/api/public/cron/refresh-prices.ts` protegido por secreto compartido para ejecución programada.
- UI: las fichas leen el último precio desde Cloud con `useSuspenseQuery`; si no hay dato, se muestra `DATO_PENDIENTE` igual que ahora. Cada precio muestra "actualizado hace X" y "ver en {merchant}".

## Notas técnicas comunes
- Nada rompe el contrato editorial: si falta dato, se etiqueta; no se inventan reviews ni cifras.
- Todo el copy nuevo pasa por el diccionario i18n desde el paso 1 para no reescribir en la Entrega 2/3.
- Cada entrega termina con sitemap, JSON-LD y `hreflang` revisados.

Confirma "ok" y arranco por la **Entrega 1 (pasos 1 y 2)**.