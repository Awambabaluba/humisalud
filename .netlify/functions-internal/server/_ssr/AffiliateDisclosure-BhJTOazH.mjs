import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useLocale } from "./router-jwYzSgWf.mjs";
import { I as Info } from "../_libs/lucide-react.mjs";
function AffiliateDisclosure({ compact = false }) {
  const en = useLocale() === "en";
  if (compact) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-start gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-3.5 w-3.5 mt-0.5 shrink-0", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        en ? "Tagged links go to external stores (e.g. Amazon). If you buy, we may earn a commission at no extra cost to you. " : "Los enlaces marcados llevan a tiendas externas (p. ej. Amazon). Si compras, podemos recibir una comisión sin coste extra para ti. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/aviso-afiliacion", className: "underline underline-offset-4 hover:text-foreground", children: en ? "More info" : "Más info" }),
        "."
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "aside",
    {
      className: "rounded-2xl border border-border bg-secondary/50 p-4 sm:p-5 text-sm text-muted-foreground flex items-start gap-3",
      role: "note",
      "aria-label": en ? "Affiliate disclosure" : "Aviso de afiliación",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5 mt-0.5 shrink-0 text-primary", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: en ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground font-medium", children: "Affiliate disclosure." }),
          " ",
          "This page contains affiliate links to stores such as Amazon. If you buy through them, HumiSalud may earn a small commission ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "at no extra cost" }),
          " to you. That doesn't shape our recommendations: we always apply the same",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/metodologia", className: "underline underline-offset-4 hover:text-foreground", children: "editorial methodology" }),
          "."
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground font-medium", children: "Aviso de afiliación." }),
          " ",
          "Esta página contiene enlaces de afiliación a tiendas como Amazon. Si compras a través de ellos, HumiSalud puede recibir una pequeña comisión ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "sin coste adicional" }),
          " para ti. Eso no condiciona nuestras recomendaciones: aplicamos siempre la",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/metodologia", className: "underline underline-offset-4 hover:text-foreground", children: "misma metodología editorial" }),
          "."
        ] }) })
      ]
    }
  );
}
export {
  AffiliateDisclosure as A
};
