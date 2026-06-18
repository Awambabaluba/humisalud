import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as mejoresPorCategoria, p as productos, C as CATEGORIAS } from "./router-jwYzSgWf.mjs";
import { P as ProductCard } from "./ProductCard-8u9rwUHT.mjs";
import { C as ComparisonTable } from "./ComparisonTable-DOlKKvZn.mjs";
import { S as Selector } from "./Selector-CwCJVGyr.mjs";
import { M as MethodologyBlock } from "./MethodologyBlock-DPUbz2_i.mjs";
import { F as FAQ } from "./FAQ-BEg86sQJ.mjs";
import { A as AffiliateDisclosure } from "./AffiliateDisclosure-BhJTOazH.mjs";
import { I as IntroOverlay } from "./IntroOverlay-xgxXOXqJ.mjs";
import { D as Droplets, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
function Home() {
  const rankingSlugs = Array.from(/* @__PURE__ */ new Set([mejoresPorCategoria.general, mejoresPorCategoria.calidadPrecio, mejoresPorCategoria.alergias, mejoresPorCategoria.salon, mejoresPorCategoria.estanciasGrandes]));
  const ranking = rankingSlugs.map((slug) => productos.find((p) => p.slug === slug)).filter((p) => Boolean(p)).slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(IntroOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageTitle, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CategoriasSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RankingSection, { productos: ranking }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectorSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MethodSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
function PageTitle() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 pt-14 pb-12 sm:pt-20 sm:pb-16 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-primary font-medium", children: "Guía de compra · Actualizado junio 2026" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mx-auto mt-4 max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Mejores humidificadores de 2026:" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "comparativa, análisis y guía de compra" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-6 max-w-2xl border-y border-primary/25 py-4 font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground leading-[1.18]", children: [
      "Respira mejor esta noche: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "acaba con la garganta seca, la nariz tapada y las noches a medias." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed", children: [
      "Hemos analizado ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground font-medium", children: "42 humidificadores ultrasónicos y evaporativos" }),
      " para dormitorio, bebé, salón y alergias. Comparamos rendimiento por m², ruido en dB, autonomía, limpieza y coste real de luz al mes."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 flex flex-wrap justify-center gap-2 text-xs", children: ["Para bebé", "Dormitorio", "Salón grande", "Alergias y asma", "Bajo consumo", "Silenciosos"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-card px-3 py-1.5 text-muted-foreground", children: t }, t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 rounded-2xl border border-border bg-secondary/40 p-5 sm:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: "Analizados" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 font-display text-2xl sm:text-3xl font-semibold", children: "42" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: "Criterios" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 font-display text-2xl sm:text-3xl font-semibold", children: "6" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: "Patrocinios" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 font-display text-2xl sm:text-3xl font-semibold", children: "0" })
      ] })
    ] })
  ] }) });
}
function CategoriasSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-5 py-12 sm:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Por uso", title: "¿Para qué lo vas a usar?", subtitle: "Cada situación pesa cosas distintas. El cuarto del bebé pide silencio; el salón pide caudal." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: CATEGORIAS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/categoria/$slug", params: {
      slug: c.slug
    }, className: "group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-xl bg-mist text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-lg font-semibold", children: c.titulo }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: c.desc })
    ] }, c.slug)) })
  ] });
}
function RankingSection({
  productos: productos2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 py-16 sm:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Ranking 2026", title: "Los cuatro que recomendaríamos hoy", subtitle: "Si vas con prisa. Si quieres entender por qué están aquí, échale un ojo a cómo trabajamos." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: productos2.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { producto: p, badge: i === 0 ? "Mejor opción" : i === 1 ? "Calidad-precio" : void 0, highlight: i === 0 }, p.slug)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AffiliateDisclosure, { compact: true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ComparisonTable, { productos: productos2 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/mejores-humidificadores", className: "inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4", children: [
      "Ver el ranking completo ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] }) })
  ] }) });
}
function SelectorSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-5 py-16 sm:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Selector", title: "Dinos cómo es la habitación y te decimos cuál", subtitle: "Cinco preguntas. Nada de formularios eternos." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Selector, {}) })
  ] });
}
function MethodSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 py-16 sm:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Cómo trabajamos", title: "Por qué esta web no se parece al resto", subtitle: "Primero el análisis, después las comisiones. Nunca al revés." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MethodologyBlock, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/metodologia", className: "inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4", children: [
      "Leer la metodología completa ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] }) })
  ] }) });
}
function FAQSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-3xl px-5 py-16 sm:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: [{
    q: "¿Probáis los humidificadores físicamente?",
    a: "No. Lo decimos sin rodeos: trabajamos con las fichas técnicas oficiales y un montón de reseñas verificadas. Nos parece mejor eso que inventarnos pruebas que no hemos hecho."
  }, {
    q: "¿Cómo elegís los modelos del ranking?",
    a: "Usamos una rúbrica con pesos por rendimiento por m², calidad-precio, facilidad de limpieza, ruido, autonomía y recambios. Está publicada entera en Metodología."
  }, {
    q: "¿Por qué algunos precios son un rango o aparecen pendientes?",
    a: "Los precios de electrónica cambian casi a diario. Cuando no podemos garantizar la cifra exacta, lo marcamos como pendiente en vez de poner un número que mañana sea mentira."
  }, {
    q: "¿Cuál es la humedad ideal en casa?",
    a: "Entre el 40% y el 60% (referencia del RITE y de Philips). Por debajo del 30% se notan piel y mucosas secas; por encima del 65% empieza a salir moho."
  }, {
    q: "¿Puede ser peligroso un humidificador?",
    a: 'Si no lo limpias, sí. Hay casos médicos documentados de neumonitis (la llamada "fiebre del humidificador"). Agua destilada, cambio diario y limpieza cada dos o tres días te evitan el problema.'
  }] }) });
}
function CTASection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-5 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/90 to-mist-deep p-8 sm:p-14 text-primary-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "vapor-bg opacity-30", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-semibold tracking-tight", children: "Cinco preguntas y te decimos cuál." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base text-primary-foreground/80", children: "En vez de leerte diez listas que se parecen, dinos los metros de la habitación, el presupuesto y para qué lo quieres. Nosotros te decimos qué encaja." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/selector", className: "inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground shadow-soft hover:translate-y-[-1px] transition-transform", children: [
        "Empezar ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] })
  ] }) });
}
function SectionHeader({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-primary font-medium", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base text-muted-foreground", children: subtitle })
  ] });
}
export {
  Home as component
};
