# Historial SEO semanal — HumiSalud

Registro semana a semana de la revisión ligera de SEO (indexación, keywords, enlazado interno, velocidad). No se solapa con la auditoría técnica trimestral ni con la revisión mensual de Search Console (tráfico 28 días).

---

## 2026-07-05

**Contenido revisado como "reciente" (últimos 14 días, desde 2026-06-21):**
- Ningún post de blog *publicado* cae dentro de la ventana estricta de 14 días. El último post publicado es `levoit-superior-studio-evaporativo-filtro-dos-anos` (2026-06-20, 15 días antes de hoy).
- Dos posts más nuevos existen en `src/data/blog.ts` con fecha 2026-07-01 (`dyson-ph2-denox-purificador-humidificador-cocinas-gas-espana` y `humidificador-para-bebe-vapor-frio-caliente-donde-poner`) pero tienen `publicado: false` — son borradores, no están en producción, no en sitemap, no indexables.
- No se detectan productos nuevos en `src/data/products.ts` (no hay campo de fecha de alta; todos comparten el batch de estudio de mercado de junio 2026).

**Indexación:**
- `levoit-superior-studio-evaporativo-filtro-dos-anos`: **no indexado**, "Google no reconoce esta URL" (ni siquiera "descubierta sin indexar"). Está incluido en el sitemap (`blogPostsPublicados`), y el sitemap fue leído por Google el 2 jul 2026 sin errores (33 páginas descubiertas), pero Google aún no ha asociado esta URL concreta. Se solicitó indexación manual hoy vía Inspección de URLs.

**Rendimiento / keywords (Search Console, últimos 28 días):**
- Totales: 35 clics, 132 impresiones, CTR 26,5%, posición media 7,3.
- Solo 11 URLs reciben alguna impresión en 28 días — todas son páginas evergreen (home, /mejores-humidificadores, /coste-de-uso, /selector, /guia-de-compra, /calculadora, /sobre-nosotros, /aviso-afiliacion, /en/calculator, /en/running-cost, /categoria/bebe). **Ningún post de blog ni ficha de producto individual aparece con impresiones.**
- Consultas principales con clics: "mejores humidificadores 2026" (2 clics), "un humidificador gasta mucha luz" (0 clics, 1 impresión), "mejores humidificadores 2023" (0 clics, 1 impresión).
- Sin historial previo — esta es la primera entrada, no hay comparación semana a semana todavía.

**Enlazado interno:**
- Home (`index.tsx`), ranking (`mejores-humidificadores.tsx`) y guía de compra (`guia-de-compra.tsx`) **no enlazan a ningún post del blog**, ni siquiera de forma genérica al índice `/blog` con contexto. Solo el nav global enlaza a `/blog` (el índice, no artículos concretos).
- La ficha de producto Levoit Dual 200S (`producto/levoit-dual-200s`) no enlaza de vuelta al artículo "Levoit Superior Studio", a pesar de que el artículo sí enlaza hacia esa ficha (enlace unidireccional).

**Velocidad (PageSpeed Insights, móvil):**
- Home: Rendimiento 83, SEO 85. FCP 3,2 s (mal), LCP 3,2 s (mejorable), CLS 0,126 (mejorable, por encima del umbral "bueno" de 0,1), TBT 0 ms (bien).
- Post reciente (Levoit Superior Studio): Rendimiento 89, SEO 92. FCP 2,9 s (mejorable), LCP 3,0 s (mejorable), CLS 0,001 (excelente), TBT 0 ms (bien).
- Sin alertas graves de Core Web Vitals, pero FCP/LCP rondando los 3 s en ambas páginas es una oportunidad de mejora, más notable en home.

**Acciones tomadas hoy:**
- Solicitada indexación manual de `levoit-superior-studio-evaporativo-filtro-dos-anos`.

---

## 2026-07-15

**Contenido revisado como "reciente" (últimos 14 días, desde 2026-07-01):**
- `levoit-neoclassic-humidificador-lavavajillas` (2026-07-06, `publicado: true`) — nuevo desde la última revisión.
- `aire-acondicionado-reseca-garganta-humidificador-verano` (2026-07-14, `publicado: true`) — nuevo desde la última revisión.
- `dyson-ph2-denox-purificador-humidificador-cocinas-gas-espana` (2026-07-01) sigue con `publicado: false` — borrador, no en sitemap, no indexable.
- `src/data/products.ts` no tiene campo de fecha; no se puede determinar si hay fichas de producto "nuevas" desde código.
- Ambos posts nuevos están confirmados en el sitemap (`blogPostsPublicados` en `sitemap[.]xml.ts` los incluye automáticamente al tener `publicado: true`).

**Indexación:** ⚠️ **Sin acceso esta semana.** El navegador conectado no tiene sesión iniciada en la cuenta de Google de Search Console (la página redirige a la landing pública de marketing, no al panel de la propiedad). No se pudo comprobar el estado de indexación de los dos artículos nuevos ni solicitar indexación manual. Pendiente de reintentar cuando haya sesión activa.

**Rendimiento / keywords:** ⚠️ **Sin acceso esta semana** (mismo motivo — sin sesión GSC). No hay datos de posición ni impresiones para comparar con la entrada del 2026-07-05. Referencia de la semana pasada para cuando se recupere el acceso: 35 clics / 132 impresiones / CTR 26,5% / posición media 7,3 en 28 días, y ningún post de blog aparecía con impresiones propias.

**Enlazado interno:** (verificado por código, no requiere navegador)
- Igual que la semana pasada: `index.tsx` (home), `mejores-humidificadores.tsx` (ranking) y `guia-de-compra.tsx` (guía de compra) **siguen sin enlazar a ningún artículo del blog** — problema no resuelto desde 2026-07-05.
- Los dos artículos nuevos (`levoit-neoclassic-humidificador-lavavajillas`, `aire-acondicionado-reseca-garganta-humidificador-verano`) **no tienen ningún enlace entrante** salvo el cruce automático "otros artículos" dentro de `blog.$slug.tsx` (2 enlaces a posts aleatorios del propio blog, no desde páginas de autoridad).
- Ningún enlace desde fichas de producto relacionadas (p. ej. la ficha del lavavajillas-compatible Levoit no enlaza al artículo NeoClassic).

**Velocidad:** ⚠️ **Sin acceso esta semana.** PageSpeed Insights se quedó bloqueado en "Análisis en curso" más de 2 minutos tanto para la home como para el artículo más reciente, sin devolver resultados. No se reportan cifras para no inventar datos; referencia de la semana pasada: Home Rendimiento 83/SEO 85 (FCP y LCP ~3,2s, mejorables); post reciente Rendimiento 89/SEO 92 (CLS excelente).

**Acciones tomadas hoy:** Ninguna (sin acceso a GSC ni PSI). Se registra el hueco de enlazado interno detectado por código.

**Pendiente para la próxima revisión:** reintentar con sesión de Google Search Console activa en el navegador conectado — sin eso, esta revisión seguirá sin poder cubrir los puntos 1, 2 y 4 de la tarea.
