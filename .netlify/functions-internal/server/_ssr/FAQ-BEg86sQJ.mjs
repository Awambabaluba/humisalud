import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { M as Minus, P as Plus } from "../_libs/lucide-react.mjs";
function FAQ({ items, title = "Preguntas frecuentes" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "aria-labelledby": "faq-title", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "faq-title", className: "font-display text-2xl sm:text-3xl font-semibold tracking-tight", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 divide-y divide-border rounded-2xl border border-border bg-card", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { item: it, index: i }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((i) => ({
              "@type": "Question",
              name: i.q,
              acceptedAnswer: { "@type": "Answer", text: typeof i.a === "string" ? i.a : "" }
            }))
          })
        }
      }
    )
  ] });
}
function Row({ item, index }) {
  const [open, setOpen] = reactExports.useState(index === 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        "aria-expanded": open,
        className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: item.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border bg-background text-muted-foreground", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 text-sm text-muted-foreground leading-relaxed", children: item.a })
  ] });
}
export {
  FAQ as F
};
