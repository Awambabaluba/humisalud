import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AffiliateButton } from "./ProductCard-8u9rwUHT.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useLocale } from "./router-jwYzSgWf.mjs";
function ComparisonTable({ productos }) {
  const en = useLocale() === "en";
  const L = {
    product: en ? "Product" : "Producto",
    tech: en ? "Technology" : "Tecnología",
    capacity: en ? "Capacity" : "Capacidad",
    coverage: en ? "Coverage" : "Cobertura",
    rating: en ? "Rating" : "Valoración",
    range: en ? "Range" : "Rango",
    action: en ? "Action" : "Acción"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-2xl border border-border bg-card shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/60 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: L.product }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: L.tech }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { className: "text-right", children: L.capacity }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { className: "text-right", children: L.coverage }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { className: "text-right", children: L.rating }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { className: "text-right", children: L.range }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { className: "text-right sr-only-th", children: L.action })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: productos.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 ? "bg-background/40" : "", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Td, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/producto/$slug", params: { slug: p.slug }, className: "font-medium hover:underline underline-offset-4", children: p.nombre }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: p.marca })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip", children: p.tecnologia }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { className: "text-right tabular-nums", children: fmt(p.capacidadL, "L") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { className: "text-right tabular-nums", children: fmt(p.coberturaM2, "m²") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { className: "text-right tabular-nums font-display font-semibold", children: p.valoracionEditorial }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { className: "text-right", children: p.rango }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        AffiliateButton,
        {
          href: p.enlaceAfiliado,
          comercio: p.comercio,
          size: "sm",
          producto: p.slug,
          nombre: p.nombre,
          marca: p.marca,
          posicion: "comparativa",
          children: en ? `View at ${p.comercio}` : `Ver en ${p.comercio}`
        }
      ) })
    ] }, p.slug)) })
  ] }) });
}
function Th({ children, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: `px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground ${className}`, children });
}
function Td({ children, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: `px-4 py-3.5 align-middle border-t border-border ${className}`, children });
}
function fmt(v, unit) {
  if (v === void 0 || v === "DATO_PENDIENTE") return "—";
  return `${v} ${unit}`;
}
export {
  ComparisonTable as C
};
