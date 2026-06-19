import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/LocaleContext";

const LEAVES = [
  { id: "l1", delay: 0, x: -8, y: -12, rot: -18, color: "var(--color-sage)", shape: "leaf" },
  { id: "l2", delay: 0.15, x: 14, y: -6, rot: 24, color: "var(--color-primary)", shape: "leaf" },
  { id: "l3", delay: 0.32, x: -18, y: 8, rot: 42, color: "var(--color-affiliate)", shape: "petal" },
  { id: "l4", delay: 0.5, x: 10, y: 16, rot: -30, color: "var(--color-sage)", shape: "petal" },
  { id: "l5", delay: 0.7, x: -4, y: -20, rot: 10, color: "var(--color-mist-deep)", shape: "leaf" },
  { id: "l6", delay: 0.9, x: 22, y: 4, rot: -52, color: "var(--color-sage)", shape: "petal" },
];

export function IntroOverlay() {
  const [mounted, setMounted] = useState(true);
  const [closing, setClosing] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const locale = useLocale();
  const tagline = locale === "en" ? "And breathe better" : "Y respira mejor";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(reduced);

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

  return (
    <div
      aria-hidden
      className={`intro-overlay ${reducedMotion ? "intro-reduced" : ""} ${closing ? "intro-overlay-closing" : ""}`}
    >
      <div className="intro-scene">
        {/* Brisa: anillos en perspectiva acercándose */}
        <div className="intro-rings">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} style={{ animationDelay: `${i * 0.55}s` }} />
          ))}
        </div>

        {/* Hojas y pétalos viniendo desde el fondo */}
        <div className="intro-particles">
          {LEAVES.map((p) => (
            <span
              key={p.id}
              className={`intro-particle intro-${p.shape}`}
              style={{
                left: `calc(50% + ${p.x}vw)`,
                top: `calc(50% + ${p.y}vh)`,
                color: p.color,
                animationDelay: `${p.delay}s`,
                ["--rot" as string]: `${p.rot}deg`,
              }}
            />
          ))}
        </div>

        {/* Wordmark emergiendo del punto de fuga */}
        <div className="intro-wordmark-wrap">
          <h1 className="intro-wordmark">HumiSalud</h1>
          <p className="intro-tagline">{tagline}</p>
        </div>

        <div className="intro-vignette" />
      </div>
    </div>
  );
}
