import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useLocale } from "./router-jwYzSgWf.mjs";
import { C as CircleCheck } from "../_libs/lucide-react.mjs";
function MethodologyBlock({ compact = false }) {
  const en = useLocale() === "en";
  const items = en ? [
    { t: "We don't pretend we tested them", d: "If we haven't had it at home, we say so. We work with official spec sheets and verified reviews." },
    { t: "Square metres and electricity matter", d: "We cross-check output (ml/h), tank size and power draw against your room and the cost of spare parts." },
    { t: "Every figure with its source and date", d: "We say which retailer or manufacturer each figure comes from, and when we checked. Prices change fast and we flag when it's time to re-check." },
    { t: "Our score and buyer reviews stay separate", d: "Our score (0–100) and the average buyer rating are always shown separately." }
  ] : [
    { t: "No fingimos haberlos probado", d: "Si no lo hemos tenido en casa, lo decimos. Trabajamos con fichas técnicas oficiales y reseñas verificadas." },
    { t: "Cuentas con los metros y la luz", d: "Cruzamos el caudal (ml/h), el depósito y el consumo eléctrico con el tamaño de tu habitación y lo que cuestan los recambios." },
    { t: "Cada dato con su fuente y fecha", d: "Decimos de qué tienda o fabricante sale cada dato y cuándo lo miramos. Los precios cambian rápido y avisamos cuando toca volver a comprobarlos." },
    { t: "Nuestra nota va por un lado, la de la gente por otro", d: "Nuestra puntuación (0–100) y la valoración media de los compradores van siempre separadas." }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: compact ? "grid gap-4 sm:grid-cols-2" : "grid gap-5 sm:grid-cols-2", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card p-5 sm:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sage/30 text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-semibold", children: i.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground leading-relaxed", children: i.d })
    ] })
  ] }) }, i.t)) });
}
export {
  MethodologyBlock as M
};
