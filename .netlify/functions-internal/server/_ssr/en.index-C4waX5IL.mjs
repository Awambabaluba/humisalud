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
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-primary font-medium", children: "Buying guide · Updated June 2026" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mx-auto mt-4 max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Best humidifiers of 2026:" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "comparison, analysis and buying guide" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-6 max-w-2xl border-y border-primary/25 py-4 font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground leading-[1.18]", children: [
      "Breathe better tonight: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "end the dry throat, blocked nose and broken sleep." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed", children: [
      "We analysed ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground font-medium", children: "42 ultrasonic and evaporative humidifiers" }),
      " for the bedroom, baby, living room and allergies. We compare m² performance, dB noise, runtime, cleaning and real monthly running cost."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 flex flex-wrap justify-center gap-2 text-xs", children: ["For babies", "Bedroom", "Large living room", "Allergies & asthma", "Low consumption", "Silent"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-card px-3 py-1.5 text-muted-foreground", children: t }, t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 rounded-2xl border border-border bg-secondary/40 p-5 sm:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: "Analysed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 font-display text-2xl sm:text-3xl font-semibold", children: "42" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: "Criteria" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 font-display text-2xl sm:text-3xl font-semibold", children: "6" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: "Sponsorships" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 font-display text-2xl sm:text-3xl font-semibold", children: "0" })
      ] })
    ] })
  ] }) });
}
function CategoriasSection() {
  const EN_CAT = {
    bebe: {
      titulo: "For the baby",
      desc: "Silent, cool mist and safe refilling."
    },
    dormitorio: {
      titulo: "For sleeping",
      desc: "Under 35 dB — won't wake you."
    },
    salon: {
      titulo: "Living room & large spaces",
      desc: "Plenty of output and tank."
    },
    alergias: {
      titulo: "Allergies",
      desc: "Evaporative, no white dust."
    },
    inteligente: {
      titulo: "With app",
      desc: "Control from your phone or voice."
    },
    economico: {
      titulo: "Budget",
      desc: "Under €35."
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-5 py-12 sm:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "By use", title: "What will you use it for?", subtitle: "Each situation weighs things differently. The baby's room asks for silence; the living room asks for output." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: CATEGORIAS.map((c) => {
      const tr = EN_CAT[c.slug] ?? {
        titulo: c.titulo,
        desc: c.desc
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/categoria/$slug", params: {
        slug: c.slug
      }, className: "group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-xl bg-mist text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-lg font-semibold", children: tr.titulo }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: tr.desc })
      ] }, c.slug);
    }) })
  ] });
}
function RankingSection({
  productos: productos2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 py-16 sm:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "2026 ranking", title: "The four we would recommend today", subtitle: "If you're in a hurry. If you want to understand why they're here, take a look at how we work." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: productos2.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { producto: p, badge: i === 0 ? "Best pick" : i === 1 ? "Best value" : void 0, highlight: i === 0 }, p.slug)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AffiliateDisclosure, { compact: true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ComparisonTable, { productos: productos2 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/mejores-humidificadores", className: "inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4", children: [
      "See the full ranking ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] }) })
  ] }) });
}
function SelectorSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-5 py-16 sm:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Selector", title: "Tell us about the room and we'll tell you which one", subtitle: "Five questions. No endless forms." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Selector, {}) })
  ] });
}
function MethodSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 py-16 sm:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "How we work", title: "Why this site doesn't look like the rest", subtitle: "Analysis first, commissions after. Never the other way around." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MethodologyBlock, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/metodologia", className: "inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4", children: [
      "Read the full methodology ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] }) })
  ] }) });
}
function FAQSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-3xl px-5 py-16 sm:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: [{
    q: "Do you test the humidifiers in person?",
    a: "No. We say it without dressing it up: we work with official spec sheets and a lot of verified reviews. We think that's better than inventing tests we haven't done."
  }, {
    q: "How do you choose the models in the ranking?",
    a: "We use a rubric with weights for m² performance, value, ease of cleaning, noise, runtime and spare parts. It's published in full in Methodology."
  }, {
    q: "Why are some prices a range or shown as pending?",
    a: "Electronics prices change almost daily. When we can't guarantee the exact figure, we mark it as pending instead of putting up a number that will be a lie tomorrow."
  }, {
    q: "What is the ideal indoor humidity?",
    a: "Between 40% and 60% (per Spanish RITE building code and Philips). Below 30% you'll feel dry skin and mucosa; above 65% mould starts to appear."
  }, {
    q: "Can a humidifier be dangerous?",
    a: "If you don't clean it, yes. There are documented medical cases of humidifier lung. Distilled water, daily change and cleaning every two or three days avoids the problem."
  }] }) });
}
function CTASection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-5 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/90 to-mist-deep p-8 sm:p-14 text-primary-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "vapor-bg opacity-30", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-semibold tracking-tight", children: "Five questions and we'll tell you which one." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base text-primary-foreground/80", children: "Instead of reading ten lists that look alike, tell us the room's square metres, your budget and what you want it for. We'll tell you what fits." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/selector", className: "inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground shadow-soft hover:translate-y-[-1px] transition-transform", children: [
        "Start ",
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
