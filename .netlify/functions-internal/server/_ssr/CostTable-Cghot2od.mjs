import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as POTENCIA_W, c as costeMensual, a as costeAnual } from "./humidifier-math-Bj3XdEnw.mjs";
import { a as useT } from "./router-jwYzSgWf.mjs";
function CostTable() {
  const t = useT();
  const [horas, setHoras] = reactExports.useState(8);
  const [precio, setPrecio] = reactExports.useState(0.18);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: t("cost.hours") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground tabular-nums", children: [
            horas,
            " h"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 1, max: 24, step: 1, value: horas, onChange: (e) => setHoras(+e.target.value), className: "w-full accent-[var(--color-primary)]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: t("cost.price") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground tabular-nums", children: [
            precio.toFixed(2),
            " €"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 0.05, max: 0.45, step: 0.01, value: precio, onChange: (e) => setPrecio(+e.target.value), className: "w-full accent-[var(--color-primary)]" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-2xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: t("cost.tech") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-medium", children: t("cost.power") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3 font-medium", children: t("cost.month") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3 font-medium", children: t("cost.year") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: Object.entries(POTENCIA_W).map(([tech, { tipico, nota }]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-medium", children: tech }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3 text-muted-foreground", children: [
          tipico,
          " W ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs", children: [
            "(",
            nota,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3 text-right tabular-nums", children: [
          costeMensual(tipico, horas, precio).toFixed(2),
          " €"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3 text-right tabular-nums", children: [
          costeAnual(tipico, horas, precio).toFixed(2),
          " €"
        ] })
      ] }, tech)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: t("cost.note") })
  ] });
}
export {
  CostTable as C
};
