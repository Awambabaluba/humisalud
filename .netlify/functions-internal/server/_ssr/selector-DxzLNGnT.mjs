import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Selector } from "./Selector-CwCJVGyr.mjs";
import { A as AffiliateDisclosure } from "./AffiliateDisclosure-BhJTOazH.mjs";
import { B as Breadcrumbs } from "./router-jwYzSgWf.mjs";
import "./ProductCard-8u9rwUHT.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function SelectorPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-5 py-12 sm:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { items: [{
      to: "/",
      label: "Inicio"
    }, {
      label: "Selector"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mt-6 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-primary font-medium", children: "Selector" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight", children: "Encuentra el que va contigo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Cruzamos los metros de tu habitación, lo que te quieres gastar, el ruido que aguantas y para qué lo vas a usar. Solo te enseñamos modelos con datos contrastados." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Selector, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AffiliateDisclosure, {}) })
  ] });
}
export {
  SelectorPage as component
};
