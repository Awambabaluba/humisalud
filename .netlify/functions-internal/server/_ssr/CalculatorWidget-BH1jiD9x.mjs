import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as calcular } from "./humidifier-math-Bj3XdEnw.mjs";
import { a as useT, p as productos } from "./router-jwYzSgWf.mjs";
import { P as ProductCard } from "./ProductCard-8u9rwUHT.mjs";
import { D as Droplets } from "../_libs/lucide-react.mjs";
function CalculatorWidget() {
  const t = useT();
  const [m2, setM2] = reactExports.useState(20);
  const [alturaM, setAlturaM] = reactExports.useState(2.5);
  const [humedadActual, setHumedadActual] = reactExports.useState(30);
  const [humedadObjetivo, setHumedadObjetivo] = reactExports.useState(50);
  const [horasUso, setHorasUso] = reactExports.useState(8);
  const [ach, setAch] = reactExports.useState(0.5);
  const result = reactExports.useMemo(
    () => calcular({ m2, alturaM, humedadActual, humedadObjetivo, horasUso, ach }),
    [m2, alturaM, humedadActual, humedadObjetivo, horasUso, ach]
  );
  const matches = reactExports.useMemo(
    () => productos.filter(
      (p) => typeof p.coberturaM2 === "number" && p.coberturaM2 >= m2
    ),
    [m2]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-[1fr_1.1fr] items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        className: "rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft",
        onSubmit: (e) => e.preventDefault(),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(NumberField, { label: t("calc.area"), value: m2, min: 5, max: 120, step: 1, onChange: setM2, unit: "m²" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NumberField, { label: t("calc.height"), value: alturaM, min: 2.2, max: 4, step: 0.1, onChange: setAlturaM, unit: "m" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NumberField, { label: t("calc.current"), value: humedadActual, min: 10, max: 80, step: 1, onChange: setHumedadActual, unit: "%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NumberField, { label: t("calc.target"), value: humedadObjetivo, min: 30, max: 65, step: 1, onChange: setHumedadObjetivo, unit: "%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NumberField, { label: t("calc.hours"), value: horasUso, min: 1, max: 24, step: 1, onChange: setHorasUso, unit: "h" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NumberField, { label: t("calc.ach"), value: ach, min: 0.2, max: 3, step: 0.1, onChange: setAch, unit: "ACH" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-gradient-to-br from-mist via-card to-background p-6 sm:p-8 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider font-medium", children: t("calc.results") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-4 grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: t("calc.flow"), value: `${Math.round(result.caudalGph)} g/h` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: t("calc.tank"), value: `${result.depositoLitrosDia.toFixed(1)} L` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: t("calc.disclaimer") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: t("calc.matches") }),
        matches.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: t("calc.no_matches") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-4 sm:grid-cols-2", children: matches.slice(0, 4).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { producto: p }, p.slug)) })
      ] })
    ] })
  ] });
}
function NumberField({
  label,
  value,
  min,
  max,
  step,
  onChange,
  unit
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block mb-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground tabular-nums", children: [
        value,
        " ",
        unit
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "range",
        min,
        max,
        step,
        value,
        onChange: (e) => onChange(+e.target.value),
        className: "w-full accent-[var(--color-primary)]"
      }
    )
  ] });
}
function Metric({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-background/70 backdrop-blur border border-border p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 font-display text-2xl font-semibold", children: value })
  ] });
}
export {
  CalculatorWidget as C
};
