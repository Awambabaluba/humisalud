import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as CalculatorWidget } from "./CalculatorWidget-BH1jiD9x.mjs";
import "./humidifier-math-Bj3XdEnw.mjs";
import "./router-jwYzSgWf.mjs";
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
import "./ProductCard-8u9rwUHT.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-5 py-12 sm:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-primary font-medium", children: "Herramienta" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight", children: "Calculadora de humidificador" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base text-muted-foreground", children: "Te dice cuántos gramos de agua por hora (g/h) y qué tamaño de depósito necesitas para llegar a la humedad que quieres en tu habitación. La fórmula parte de la humedad absoluta a 20 °C y la ajustamos por las renovaciones de aire por hora (ACH)." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalculatorWidget, {}) })
  ] });
}
export {
  Page as component
};
