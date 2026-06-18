import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Breadcrumbs, p as productos, g as getProducto, m as mejoresPorCategoria } from "./router-jwYzSgWf.mjs";
import { P as ProductCard } from "./ProductCard-8u9rwUHT.mjs";
import { C as ComparisonTable } from "./ComparisonTable-DOlKKvZn.mjs";
import { A as AffiliateDisclosure } from "./AffiliateDisclosure-BhJTOazH.mjs";
import { F as FAQ } from "./FAQ-BEg86sQJ.mjs";
import { M as MethodologyBlock } from "./MethodologyBlock-DPUbz2_i.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function Ranking() {
  const slots = [{
    key: "general",
    titulo: "Mejor en general",
    bajada: "El que recomendaríamos a casi cualquiera que entra por la puerta sin tener claro lo que quiere."
  }, {
    key: "calidadPrecio",
    titulo: "Mejor calidad-precio",
    bajada: "El que mejor equilibra prestaciones, autonomía y lo que te van a cobrar."
  }, {
    key: "economico",
    titulo: "Mejor barato",
    bajada: "Menos de 35 € para habitaciones pequeñas o si solo lo vas a encender de vez en cuando."
  }, {
    key: "bebe",
    titulo: "Mejor para bebé",
    bajada: "Silencioso, vapor frío y fácil de rellenar sin sustos."
  }, {
    key: "dormitorioSilencioso",
    titulo: "Mejor para dormir",
    bajada: "Por debajo de 35 dB y con depósito para aguantar toda la noche."
  }, {
    key: "alergias",
    titulo: "Mejor para alergias",
    bajada: "Evaporativos: nada de polvo blanco por toda la habitación."
  }, {
    key: "salon",
    titulo: "Mejor para el salón",
    bajada: "Caudal alto y modo automático para espacios de estar."
  }, {
    key: "inteligente",
    titulo: "Mejor conectado",
    bajada: "Con app, asistente de voz y automatizaciones."
  }, {
    key: "estanciasGrandes",
    titulo: "Mejor para espacios grandes",
    bajada: "Depósito XL para más de 40 m²."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mx-auto max-w-4xl px-5 py-12 sm:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { items: [{
      to: "/",
      label: "Inicio"
    }, {
      label: "Mejores humidificadores 2026"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-primary font-medium", children: "Ranking · Edición 2026" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight", children: "Los mejores humidificadores de 2026" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground leading-relaxed", children: "Selección basada en fichas técnicas oficiales, reseñas verificadas y nuestra rúbrica (cuántos m² cubren, cuánto cuestan de tener encendidos, ruido y facilidad de limpieza). Última revisión: 17 de junio de 2026." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AffiliateDisclosure, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold", children: "Comparativa rápida" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Todos los modelos del ranking, uno al lado del otro." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ComparisonTable, { productos }) })
    ] }),
    slots.map(({
      key,
      titulo,
      bajada
    }) => {
      const p = getProducto(mejoresPorCategoria[key]);
      if (!p) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: titulo }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-1 font-display text-2xl sm:text-3xl font-semibold", children: p.nombre }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: bajada }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-6 md:grid-cols-[1.2fr_1fr] items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed", children: p.resumen }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: "Por qué está aquí" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 list-disc pl-5 text-sm space-y-1", children: p.ventajas.slice(0, 3).map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: v }, v)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: "A quién le encaja" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm", children: p.idealPara.join(" · ") })
            ] }),
            p.datosPendientes && p.datosPendientes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Aún por confirmar: ",
              p.datosPendientes.join(", "),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { producto: p, highlight: true })
        ] })
      ] }, key);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-semibold", children: "Cómo elegir el tuyo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-base text-muted-foreground", children: [
        "Tres preguntas que lo resuelven casi todo: cuántos m² tiene la habitación, cuánto ruido aguantas y si te hace falta vapor caliente. Si te quedas a medias, el ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/selector", className: "underline underline-offset-4 text-primary", children: "selector" }),
        " te lleva de la mano."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MethodologyBlock, { compact: true }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: [{
      q: "¿Cada cuánto actualizáis este ranking?",
      a: "Revisamos precios y stock cada 30 días. Si algo cambia de verdad (sube mucho de precio, lo descatalogan o sale otro mejor al mismo precio), reordenamos."
    }, {
      q: "¿Hay enlaces de afiliación?",
      a: "Sí. Algunos llevan a Amazon, PcComponentes y alguna tienda más. Si compras desde ahí, nos llevamos una comisión pequeñita y a ti no te cuesta nada extra."
    }, {
      q: "¿Por qué no sale la marca X?",
      a: "Si no encontramos ficha técnica oficial accesible y reseñas verificadas suficientes, no lo metemos. Recomendar a ciegas no nos vale."
    }] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-16 rounded-3xl bg-gradient-to-br from-primary/90 to-mist-deep p-8 sm:p-10 text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-semibold", children: "¿Quieres algo más a medida?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-primary-foreground/80", children: "Pásate por el selector y cuéntanos tu caso." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/selector", className: "mt-5 inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground", children: [
        "Abrir el selector ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] })
  ] });
}
export {
  Ranking as component
};
