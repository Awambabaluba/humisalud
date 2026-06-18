import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useLocale } from "./router-jwYzSgWf.mjs";
const LEAVES = [
  { id: "l1", delay: 0, x: -8, y: -12, rot: -18, color: "var(--color-sage)", shape: "leaf" },
  { id: "l2", delay: 0.15, x: 14, y: -6, rot: 24, color: "var(--color-primary)", shape: "leaf" },
  { id: "l3", delay: 0.32, x: -18, y: 8, rot: 42, color: "var(--color-affiliate)", shape: "petal" },
  { id: "l4", delay: 0.5, x: 10, y: 16, rot: -30, color: "var(--color-sage)", shape: "petal" },
  { id: "l5", delay: 0.7, x: -4, y: -20, rot: 10, color: "var(--color-mist-deep)", shape: "leaf" },
  { id: "l6", delay: 0.9, x: 22, y: 4, rot: -52, color: "var(--color-sage)", shape: "petal" }
];
function IntroOverlay() {
  const [mounted, setMounted] = reactExports.useState(false);
  const [closing, setClosing] = reactExports.useState(false);
  const [reducedMotion, setReducedMotion] = reactExports.useState(false);
  const locale = useLocale();
  const tagline = locale === "en" ? "And breathe better" : "Y respira mejor";
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(reduced);
    setMounted(true);
    const t1 = window.setTimeout(() => setClosing(true), reduced ? 2600 : 7500);
    const t2 = window.setTimeout(() => setMounted(false), reduced ? 3100 : 8200);
    const skip = () => {
      setClosing(true);
      window.setTimeout(() => setMounted(false), 500);
    };
    window.addEventListener("keydown", skip, { once: true });
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("keydown", skip);
    };
  }, []);
  if (!mounted) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "aria-hidden": true,
      className: `intro-overlay ${reducedMotion ? "intro-reduced" : ""} ${closing ? "intro-overlay-closing" : ""}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "intro-scene", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "intro-rings", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { animationDelay: `${i * 0.55}s` } }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "intro-particles", children: LEAVES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `intro-particle intro-${p.shape}`,
            style: {
              left: `calc(50% + ${p.x}vw)`,
              top: `calc(50% + ${p.y}vh)`,
              color: p.color,
              animationDelay: `${p.delay}s`,
              ["--rot"]: `${p.rot}deg`
            }
          },
          p.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "intro-wordmark-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "intro-wordmark", children: "HumiSalud" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "intro-tagline", children: tagline })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "intro-vignette" })
      ] })
    }
  );
}
export {
  IntroOverlay as I
};
