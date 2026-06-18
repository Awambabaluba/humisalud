import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useLocale, p as productos } from "./router-jwYzSgWf.mjs";
import { P as ProductCard } from "./ProductCard-8u9rwUHT.mjs";
import { S as Sparkles, A as ArrowRight } from "../_libs/lucide-react.mjs";
function Selector() {
  const en = useLocale() === "en";
  const [state, setState] = reactExports.useState({
    m2: 20,
    presupuesto: 80,
    uso: "dormitorio",
    silencio: true,
    vapor: "frio"
  });
  const ranking = reactExports.useMemo(() => scoreProductos(productos, state), [state]);
  const top = ranking[0];
  const alts = ranking.slice(1, 3);
  const L = {
    eyebrow: en ? "Personalised recommendation" : "Recomendación personalizada",
    title: en ? "Tell us about your space" : "Cuéntanos cómo es tu espacio",
    subtitle: en ? "We cross-check your answers with our editorial method to suggest a main pick and two alternatives." : "Cruzamos tus respuestas con la metodología editorial para sugerir un modelo principal y dos alternativas.",
    roomSize: en ? "Room size" : "Tamaño de la estancia",
    budget: en ? "Maximum budget" : "Presupuesto máximo",
    use: en ? "Main use" : "Uso principal",
    vapor: en ? "Mist type" : "Tipo de vapor",
    cold: en ? "Cool" : "Frío",
    hot: en ? "Warm" : "Caliente",
    either: en ? "Either" : "Indiferente",
    silent: en ? "I want a silent model for night-time use" : "Quiero un modelo silencioso para uso nocturno",
    mainRec: en ? "Main recommendation" : "Recomendación principal",
    bestFit: en ? "Best fit" : "Mejor encaje",
    alternatives: en ? "Alternatives" : "Alternativas",
    reason: (s) => en ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "We recommend it because it fits your ",
      s.m2,
      " m², budget of ",
      s.presupuesto,
      " € and",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground font-medium", children: labelUso(s.uso, true) }),
      ` use. We don't show products without enough data; where you see "—" there's no verified official figure.`
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Lo recomendamos porque encaja con tus ",
      s.m2,
      " m², presupuesto de ",
      s.presupuesto,
      " € y uso ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground font-medium", children: labelUso(s.uso, false) }),
      '. No mostramos productos sin datos suficientes; donde aparece "—" no hay cifra oficial verificada.'
    ] }),
    empty: en ? "Not enough data to recommend a model with those criteria. Adjust budget or size." : "No tenemos datos suficientes para recomendar un modelo con tus criterios. Ajusta el presupuesto o el tamaño."
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-[1.05fr_1.4fr] items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft", onSubmit: (e) => e.preventDefault(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider font-medium", children: L.eyebrow })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight", children: L.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: L.subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: `${L.roomSize}: ${state.m2} m²`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "range",
            min: 5,
            max: 70,
            step: 1,
            value: state.m2,
            onChange: (e) => setState({ ...state, m2: +e.target.value }),
            className: "w-full accent-[var(--color-primary)]"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: `${L.budget}: ${state.presupuesto} €`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "range",
            min: 20,
            max: 250,
            step: 5,
            value: state.presupuesto,
            onChange: (e) => setState({ ...state, presupuesto: +e.target.value }),
            className: "w-full accent-[var(--color-primary)]"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L.use, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: ["bebe", "dormitorio", "salon", "alergias", "inteligente", "general"].map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { active: state.uso === u, onClick: () => setState({ ...state, uso: u }), children: labelUso(u, en) }, u)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L.vapor, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: ["frio", "caliente", "indiferente"].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { active: state.vapor === v, onClick: () => setState({ ...state, vapor: v }), children: v === "frio" ? L.cold : v === "caliente" ? L.hot : L.either }, v)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 rounded-xl border border-border bg-secondary/40 p-3 cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: state.silencio, onChange: (e) => setState({ ...state, silencio: e.target.checked }), className: "h-4 w-4 accent-[var(--color-primary)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: L.silent })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: top ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" }),
        " ",
        L.mainRec
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { producto: top, badge: L.bestFit, highlight: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: L.reason(state) }),
      alts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground", children: L.alternatives }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: alts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { producto: p }, p.slug)) })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { text: L.empty }) })
  ] });
}
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-foreground mb-2", children: label }),
    children
  ] });
}
function Chip({ active, children, onClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick,
      className: [
        "rounded-full border px-3 py-2 text-sm transition-all",
        active ? "border-primary bg-primary text-primary-foreground shadow-soft" : "border-border bg-background hover:bg-secondary"
      ].join(" "),
      children
    }
  );
}
function labelUso(u, en) {
  const es = { bebe: "Bebé", dormitorio: "Dormitorio", salon: "Salón", alergias: "Alergias", inteligente: "Inteligente", general: "General" };
  const enMap = { bebe: "Baby", dormitorio: "Bedroom", salon: "Living room", alergias: "Allergies", inteligente: "Smart", general: "General" };
  return (en ? enMap : es)[u];
}
function EmptyState({ text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl border border-dashed border-border bg-card p-10 text-center text-sm text-muted-foreground", children: text });
}
function scoreProductos(prods, s) {
  return [...prods].map((p) => ({ p, score: scoreOne(p, s) })).filter((x) => x.score > 0).sort((a, b) => b.score - a.score).map((x) => x.p);
}
function scoreOne(p, s) {
  let score = p.valoracionEditorial;
  if (typeof p.coberturaM2 === "number") {
    if (p.coberturaM2 >= s.m2) score += 8;
    else score -= Math.min(20, s.m2 - p.coberturaM2);
  }
  if (p.precioMin && p.precioMin > s.presupuesto) score -= 25;
  const m = {
    bebe: ["Ultrasónico", "Evaporativo"],
    dormitorio: ["Ultrasónico", "Evaporativo"],
    salon: ["Híbrido", "Evaporativo", "Ultrasónico"],
    alergias: ["Evaporativo"],
    inteligente: ["UV-C", "Ultrasónico"],
    general: ["Ultrasónico", "Híbrido", "Evaporativo", "UV-C", "Vapor caliente"]
  };
  if (m[s.uso].includes(p.tecnologia)) score += 6;
  if (s.silencio && p.tecnologia === "Vapor caliente") score -= 30;
  if (s.vapor === "frio" && p.tecnologia === "Vapor caliente") score -= 40;
  if (s.vapor === "caliente" && !["Vapor caliente", "Híbrido"].includes(p.tecnologia)) score -= 8;
  return Math.max(0, score);
}
export {
  Selector as S
};
