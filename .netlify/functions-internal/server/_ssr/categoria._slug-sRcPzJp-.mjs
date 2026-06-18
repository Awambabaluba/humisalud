import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as Route, p as productos, c as COPY, C as CATEGORIAS, B as Breadcrumbs } from "./router-jwYzSgWf.mjs";
import { P as ProductCard } from "./ProductCard-8u9rwUHT.mjs";
import { C as ComparisonTable } from "./ComparisonTable-DOlKKvZn.mjs";
import { A as AffiliateDisclosure } from "./AffiliateDisclosure-BhJTOazH.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function CategoriaPage() {
  const {
    slug
  } = Route.useLoaderData();
  const copy = COPY[slug];
  const lista = productos.filter(copy.filtro);
  const cat = CATEGORIAS.find((c) => c.slug === slug);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mx-auto max-w-5xl px-5 py-12 sm:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { items: [{
      to: "/",
      label: "Inicio"
    }, {
      label: cat?.titulo ?? "Categoría"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mt-6 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-primary font-medium", children: "Categoría" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight", children: copy.h1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: copy.lead })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AffiliateDisclosure, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: lista.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { producto: p, highlight: i === 0, badge: i === 0 ? "Mejor opción" : void 0 }, p.slug)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold", children: "Comparativa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ComparisonTable, { productos: lista }) })
    ] })
  ] });
}
export {
  CategoriaPage as component
};
