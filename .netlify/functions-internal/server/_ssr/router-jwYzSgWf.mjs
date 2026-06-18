import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { D as Droplets, G as Globe } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-BQnfEioG.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/mejores-humidificadores", label: "Mejores 2026" },
  { to: "/selector", label: "Selector" },
  { to: "/calculadora", label: "Calculadora" },
  { to: "/coste-de-uso", label: "Coste de uso" },
  { to: "/guia-de-compra", label: "Guía" },
  { to: "/metodologia", label: "Cómo trabajamos" }
];
const NAV_EN = [
  { to: "/en", label: "Home" },
  { to: "/en/calculator", label: "Calculator" },
  { to: "/en/running-cost", label: "Running cost" }
];
const CATEGORIAS = [
  { slug: "bebe", titulo: "Para el bebé", desc: "Silencio, vapor frío y rellenado seguro.", icon: "baby" },
  { slug: "dormitorio", titulo: "Para dormir", desc: "Por debajo de 35 dB, sin despertarte.", icon: "moon" },
  { slug: "salon", titulo: "Salón y espacios grandes", desc: "Caudal y depósito de sobra.", icon: "sofa" },
  { slug: "alergias", titulo: "Alergias", desc: "Evaporativos, sin polvo blanco.", icon: "leaf" },
  { slug: "inteligente", titulo: "Con app", desc: "Control desde el móvil o por voz.", icon: "wifi" },
  { slug: "economico", titulo: "Barato", desc: "Por menos de 35 €.", icon: "wallet" }
];
const SLUG_MAP = {
  home: { es: "/", en: "/en" },
  best: { es: "/mejores-humidificadores", en: "/mejores-humidificadores" },
  selector: { es: "/selector", en: "/selector" },
  guide: { es: "/guia-de-compra", en: "/guia-de-compra" },
  methodology: { es: "/metodologia", en: "/metodologia" },
  calculator: { es: "/calculadora", en: "/en/calculator" },
  cost: { es: "/coste-de-uso", en: "/en/running-cost" }
};
const equivalentPath = (path, target) => {
  for (const k of Object.keys(SLUG_MAP)) {
    const { es, en } = SLUG_MAP[k];
    if (path === es || path === en) return target === "es" ? es : en;
  }
  return target === "es" ? "/" : "/en";
};
const DICT = {
  es: {
    "nav.home": "Inicio",
    "nav.best": "Mejores 2026",
    "nav.selector": "Selector",
    "nav.guide": "Guía de compra",
    "nav.methodology": "Metodología",
    "nav.calculator": "Calculadora",
    "nav.cost": "Coste de uso",
    "cta.find": "Encuentra el tuyo",
    "cta.open_selector": "Abrir el selector",
    "lang.toggle": "EN",
    "lang.toggle_aria": "Cambiar a inglés",
    "footer.rights": "Todos los derechos reservados.",
    // Calculadora
    "calc.title": "Calculadora de humidificador",
    "calc.subtitle": "Estima el caudal (g/h) y la capacidad de depósito que necesitas según el volumen de tu habitación y la humedad objetivo. Sin inventar datos: el cálculo se basa en la ecuación de humedad absoluta a 20 °C.",
    "calc.area": "Superficie de la estancia (m²)",
    "calc.height": "Altura del techo (m)",
    "calc.current": "Humedad actual (%)",
    "calc.target": "Humedad objetivo (%)",
    "calc.hours": "Horas de uso al día",
    "calc.ach": "Renovaciones de aire por hora",
    "calc.results": "Resultados",
    "calc.flow": "Caudal recomendado",
    "calc.tank": "Depósito mínimo para tu uso diario",
    "calc.matches": "Modelos del catálogo que cubren tu m²",
    "calc.no_matches": "Ningún modelo del catálogo cubre tu superficie con datos verificados. Revisa el ranking grande o reduce el m².",
    "calc.disclaimer": "Estimación orientativa. Los humidificadores no compensan ventilación insuficiente ni filtraciones; ajusta el resultado al uso real.",
    // Coste de uso
    "cost.title": "Coste real de uso por tecnología",
    "cost.subtitle": "Cálculo €/mes y €/año a partir del consumo aproximado de cada tecnología. Los rangos son orientativos: el consumo real depende del modo, la humedad objetivo y el tiempo de funcionamiento.",
    "cost.tech": "Tecnología",
    "cost.power": "Consumo medio",
    "cost.month": "€ / mes",
    "cost.year": "€ / año",
    "cost.hours": "Horas/día",
    "cost.price": "Precio kWh (€)",
    "cost.note": "Datos de potencia agregados a partir del estudio de mercado interno (rango medio por tecnología). Verifica la potencia exacta en la ficha del fabricante antes de decidir."
  },
  en: {
    "nav.home": "Home",
    "nav.best": "Best of 2026",
    "nav.selector": "Selector",
    "nav.guide": "Buying guide",
    "nav.methodology": "Methodology",
    "nav.calculator": "Calculator",
    "nav.cost": "Running cost",
    "cta.find": "Find yours",
    "cta.open_selector": "Open the selector",
    "lang.toggle": "ES",
    "lang.toggle_aria": "Switch to Spanish",
    "footer.rights": "All rights reserved.",
    "calc.title": "Humidifier calculator",
    "calc.subtitle": "Estimate the output (g/h) and tank capacity you need based on your room volume and target humidity. No invented figures: the math uses absolute humidity at 20°C.",
    "calc.area": "Room area (m²)",
    "calc.height": "Ceiling height (m)",
    "calc.current": "Current humidity (%)",
    "calc.target": "Target humidity (%)",
    "calc.hours": "Hours per day",
    "calc.ach": "Air changes per hour",
    "calc.results": "Results",
    "calc.flow": "Recommended output",
    "calc.tank": "Minimum tank for your daily use",
    "calc.matches": "Catalogue models covering your m²",
    "calc.no_matches": "No catalogue model covers your area with verified data. Check the full ranking or reduce the m².",
    "calc.disclaimer": "Indicative estimate. Humidifiers don't compensate for poor ventilation or air leaks; adjust to your real use.",
    "cost.title": "Real running cost by technology",
    "cost.subtitle": "Monthly and yearly cost based on each technology's approximate power draw. Ranges are indicative — real consumption depends on mode, target humidity and runtime.",
    "cost.tech": "Technology",
    "cost.power": "Average draw",
    "cost.month": "€ / month",
    "cost.year": "€ / year",
    "cost.hours": "Hours/day",
    "cost.price": "kWh price (€)",
    "cost.note": "Power figures aggregated from our internal market study (mid-range per technology). Always verify the exact wattage on the manufacturer's spec sheet."
  }
};
const t = (key, locale) => {
  const en = DICT.en[key];
  if (locale === "en" && en) return en;
  return DICT.es[key] ?? key;
};
const LocaleContext = reactExports.createContext("es");
function LocaleProvider({ children }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
  reactExports.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LocaleContext.Provider, { value: locale, children });
}
const useLocale = () => reactExports.useContext(LocaleContext);
const useT = () => {
  const locale = useLocale();
  return (key) => t(key, locale);
};
function LangToggle() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = useLocale();
  const target = locale === "es" ? "en" : "es";
  const to = equivalentPath(pathname, target);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: to,
      className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors",
      "aria-label": target === "en" ? "Switch to English" : "Cambiar a español",
      hrefLang: target,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5" }),
        target.toUpperCase()
      ]
    }
  );
}
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  const locale = useLocale();
  const nav = locale === "en" ? NAV_EN : NAV;
  const selectorTo = "/selector";
  const ctaLabel = locale === "en" ? "Find yours" : "Encuentra el tuyo";
  const homeTo = locale === "en" ? "/en" : "/";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: homeTo, className: "flex items-center gap-2 group", "aria-label": "HumiSalud", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft transition-transform group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "h-5 w-5", "aria-hidden": true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl font-semibold tracking-tight", children: [
          "Humi",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Salud" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-1", "aria-label": "Principal", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          className: "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
          activeProps: { className: "rounded-md px-3 py-2 text-sm text-foreground bg-secondary" },
          activeOptions: { exact: n.to === "/" || n.to === "/en" },
          children: n.label
        },
        n.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LangToggle, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: selectorTo,
            className: "hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]",
            children: ctaLabel
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "md:hidden rounded-md border border-border px-3 py-2 text-sm",
            onClick: () => setOpen((o) => !o),
            "aria-expanded": open,
            "aria-label": "Menú",
            children: "Menú"
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "md:hidden border-t border-border bg-background px-5 py-3", "aria-label": "Móvil", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: n.to,
        onClick: () => setOpen(false),
        className: "rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground",
        activeProps: { className: "rounded-md px-3 py-2.5 text-sm bg-secondary text-foreground" },
        activeOptions: { exact: n.to === "/" || n.to === "/en" },
        children: n.label
      },
      n.to
    )) }) })
  ] });
}
function Footer() {
  const locale = useLocale();
  const en = locale === "en";
  const intro = en ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Independent editorial guide on humidifiers. We don't run physical tests: we analyse official spec sheets, synthesise verified reviews and compute m² coverage and running cost. ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/metodologia", className: "underline underline-offset-4 hover:text-foreground", children: "Read the methodology" }),
    "."
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Guía editorial independiente sobre humidificadores. No realizamos pruebas físicas: analizamos fichas técnicas oficiales, sintetizamos reseñas verificadas y calculamos cobertura por m² y coste de uso. ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/metodologia", className: "underline underline-offset-4 hover:text-foreground", children: "Lee la metodología" }),
    "."
  ] });
  const exploreLinks = en ? [
    { to: "/mejores-humidificadores", label: "Best humidifiers 2026" },
    { to: "/selector", label: "Personalised selector" },
    { to: "/guia-de-compra", label: "Buying guide" },
    { to: "/categoria/bebe", label: "For babies" },
    { to: "/categoria/dormitorio", label: "Silent bedroom" }
  ] : [
    { to: "/mejores-humidificadores", label: "Mejores humidificadores 2026" },
    { to: "/selector", label: "Selector personalizado" },
    { to: "/guia-de-compra", label: "Guía de compra" },
    { to: "/categoria/bebe", label: "Para bebé" },
    { to: "/categoria/dormitorio", label: "Dormitorio silencioso" }
  ];
  const legalLinks = en ? [
    { to: "/aviso-afiliacion", label: "Affiliate disclosure" },
    { to: "/metodologia", label: "Editorial methodology" },
    { to: "/sobre-nosotros", label: "About us" },
    { to: "/privacidad", label: "Privacy" },
    { to: "/cookies", label: "Cookies" },
    { to: "/terminos", label: "Terms" }
  ] : [
    { to: "/aviso-afiliacion", label: "Aviso de afiliación" },
    { to: "/metodologia", label: "Metodología editorial" },
    { to: "/sobre-nosotros", label: "Sobre nosotros" },
    { to: "/privacidad", label: "Privacidad" },
    { to: "/cookies", label: "Cookies" },
    { to: "/terminos", label: "Términos" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-24 border-t border-border bg-secondary/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "h-5 w-5", "aria-hidden": true }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-semibold", children: "HumiSalud" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-sm text-muted-foreground", children: intro })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: en ? "Explore" : "Explorar", links: exploreLinks }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Legal", links: legalLinks })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " HumiSalud. ",
        en ? "All rights reserved." : "Todos los derechos reservados."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: en ? "HumiSalud takes part in affiliate programmes. We may earn a commission on purchases made through our links, at no extra cost to you." : "HumiSalud participa en programas de afiliación. Podemos recibir una comisión por las compras realizadas a través de nuestros enlaces, sin coste adicional para ti." })
    ] }) })
  ] });
}
function FooterCol({ title, links }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-semibold tracking-wide uppercase text-foreground/80", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2.5 text-sm", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "text-muted-foreground hover:text-foreground transition-colors", children: l.label }) }, l.to)) })
  ] });
}
function BreezeBackground() {
  const particles = [
    { top: "12%", left: "8%", size: 8, delay: "0s", duration: "18s", tone: "primary" },
    { top: "22%", left: "72%", size: 5, delay: "3s", duration: "20s", tone: "affiliate" },
    { top: "34%", left: "18%", size: 4, delay: "7s", duration: "22s", tone: "primary" },
    { top: "46%", left: "83%", size: 7, delay: "1s", duration: "19s", tone: "sage" },
    { top: "58%", left: "28%", size: 6, delay: "5s", duration: "24s", tone: "primary" },
    { top: "69%", left: "76%", size: 4, delay: "9s", duration: "21s", tone: "affiliate" },
    { top: "82%", left: "13%", size: 5, delay: "2s", duration: "23s", tone: "sage" },
    { top: "88%", left: "58%", size: 7, delay: "6s", duration: "25s", tone: "primary" },
    { top: "18%", left: "43%", size: 3, delay: "11s", duration: "17s", tone: "sage" },
    { top: "74%", left: "39%", size: 3, delay: "13s", duration: "19s", tone: "primary" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "aria-hidden": true,
      className: "breeze-particle-bg pointer-events-none fixed inset-0 z-0 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "breeze-lines", viewBox: "0 0 1440 960", preserveAspectRatio: "none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M-120 115 C 170 78, 340 168, 585 126 S 1005 58, 1560 104" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M-160 255 C 120 214, 310 286, 555 246 S 1040 177, 1600 232" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M-140 408 C 145 363, 315 464, 575 416 S 1045 320, 1580 384" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M-180 585 C 110 548, 300 620, 560 580 S 1030 505, 1620 548" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M-120 760 C 150 705, 345 805, 610 748 S 1060 670, 1560 720" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "breeze-line-warm", d: "M-180 850 C 140 795, 390 890, 690 830 S 1140 765, 1600 812" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "breeze-streams", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
        ] }),
        particles.map((particle, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `breeze-particle breeze-particle-${particle.tone}`,
            style: {
              top: particle.top,
              left: particle.left,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }
          },
          index
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "breeze-soft-grain" })
      ]
    }
  );
}
const GUARD_KEY = "__chunk_reload_at";
const GUARD_TTL_MS = 3e4;
function isChunkLoadError(message) {
  return message.includes("Failed to fetch dynamically imported module") || message.includes("Importing a module script failed") || message.includes("error loading dynamically imported module") || /ChunkLoadError/i.test(message);
}
function tryReload() {
  try {
    const prev = Number(sessionStorage.getItem(GUARD_KEY) || 0);
    if (prev && Date.now() - prev < GUARD_TTL_MS) return;
    sessionStorage.setItem(GUARD_KEY, String(Date.now()));
  } catch {
    return;
  }
  window.location.reload();
}
function installChunkReloadHandler() {
  if (typeof window === "undefined") return;
  const w = window;
  if (w.__chunkReloadInstalled) return;
  w.__chunkReloadInstalled = true;
  window.addEventListener("error", (event) => {
    const msg = event?.message || "";
    if (isChunkLoadError(msg)) tryReload();
  });
  window.addEventListener("unhandledrejection", (event) => {
    const reason = event?.reason;
    const msg = reason && (reason.message || String(reason)) || "";
    if (isChunkLoadError(msg)) tryReload();
  });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[60vh] items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Error 404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-4xl font-semibold", children: "Esta página se ha evaporado" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "La URL no coincide con ningún análisis ni guía publicada." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground", children: "Volver al inicio" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[60vh] items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold", children: "Algo no ha cargado bien" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Puedes reintentar o volver al inicio." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        router2.invalidate();
        reset();
      }, className: "rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground", children: "Reintentar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "rounded-full border border-border bg-background px-4 py-2 text-sm font-medium", children: "Inicio" })
    ] })
  ] }) });
}
const Route$j = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HumiSalud — Guía editorial de humidificadores" },
      { name: "description", content: "Análisis técnico, comparativas filtrables y cálculo por m². Recomendaciones honestas sobre humidificadores." },
      { name: "author", content: "HumiSalud" },
      { property: "og:site_name", content: "HumiSalud" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0f3b46" },
      { name: "google-site-verification", content: "bwrvMTpyhkgsRLtYeKb56L3ug3x6uHWAisNUJhF-mz0" },
      { property: "og:title", content: "HumiSalud — Guía editorial de humidificadores" },
      { name: "twitter:title", content: "HumiSalud — Guía editorial de humidificadores" },
      { property: "og:description", content: "Análisis técnico, comparativas filtrables y cálculo por m². Recomendaciones honestas sobre humidificadores." },
      { name: "twitter:description", content: "Análisis técnico, comparativas filtrables y cálculo por m². Recomendaciones honestas sobre humidificadores." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/832796ec-ef69-4afb-a42e-5bdc9c58f76a/id-preview-740fd55d--6a5abc99-01da-4eb8-b2ab-527522c0faf1.lovable.app-1781772722178.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/832796ec-ef69-4afb-a42e-5bdc9c58f76a/id-preview-740fd55d--6a5abc99-01da-4eb8-b2ab-527522c0faf1.lovable.app-1781772722178.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "HumiSalud",
          description: "Guía editorial independiente sobre humidificadores."
        })
      },
      ...buildGaScripts()
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function buildGaScripts() {
  return [];
}
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "es", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$j.useRouteContext();
  reactExports.useEffect(() => {
    installChunkReloadHandler();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LocaleProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BreezeBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex min-h-screen flex-col bg-transparent", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] })
  ] }) });
}
const $$splitComponentImporter$g = () => import("./terminos-BLl63yqL.mjs");
const Route$i = createFileRoute("/terminos")({
  head: () => ({
    meta: [{
      title: "Términos legales — HumiSalud"
    }, {
      name: "description",
      content: "Términos legales de uso de HumiSalud."
    }, {
      property: "og:url",
      content: "/terminos"
    }],
    links: [{
      rel: "canonical",
      href: "/terminos"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./sobre-nosotros-Y6-GLikn.mjs");
const Route$h = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [{
      title: "Sobre HumiSalud"
    }, {
      name: "description",
      content: "Quiénes somos y por qué hemos creado una guía editorial sobre humidificadores en lugar de otro catálogo de enlaces."
    }, {
      property: "og:title",
      content: "Sobre HumiSalud"
    }, {
      property: "og:url",
      content: "/sobre-nosotros"
    }],
    links: [{
      rel: "canonical",
      href: "/sobre-nosotros"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const HOY = "2026-06-17";
const PEND = "DATO_PENDIENTE";
const productos = [
  {
    slug: "cecotec-pure-aroma-300-yang",
    nombre: "Cecotec Pure Aroma 300 Yang",
    marca: "Cecotec",
    modelo: "Pure Aroma 300 Yang",
    precioOrientativo: "23,90 €–24,90 €",
    precioMin: 23.9,
    rango: "Económico",
    tecnologia: "Ultrasónico",
    capacidadL: 0.3,
    coberturaM2: 15,
    ruidoDb: PEND,
    // Cecotec no publica dB oficiales
    autonomiaH: 6,
    // estimado por temporizador máx. 6 h (manual técnico)
    valoracionEditorial: 72,
    idealPara: ["Dormitorios pequeños", "Aromaterapia ocasional", "Regalo bajo presupuesto"],
    noRecomendadoPara: ["Salones", "Uso continuo nocturno largo", "Bebés (capacidad insuficiente)"],
    ventajas: [
      "Precio de entrada muy competitivo",
      "Tamaño compacto, fácil de ubicar",
      "Función difusor de aromas"
    ],
    inconvenientes: [
      "Depósito de solo 300 ml: autonomía limitada",
      "Polvo blanco si se usa agua del grifo",
      "Cobertura reducida (~15 m²)"
    ],
    caracteristicas: [
      "Tecnología ultrasónica de vapor frío",
      "Depósito 300 ml",
      "Disponible en Cecotec, PcComponentes y Amazon"
    ],
    atributos: {
      control: {
        higrostato: false,
        modoAuto: false,
        wifiApp: false,
        asistentesVoz: [],
        temporizador: PEND,
        apagadoAutoSinAgua: true
      },
      confort: {
        modoNoche: false,
        luzApagable: PEND,
        boquilla360: true,
        indicadorAgua: true,
        topFill: false
      },
      mantenimiento: {
        filtroRequerido: false,
        bocaAncha: false,
        cartuchoAntical: false,
        autolimpieza: false,
        uvc: false
      },
      extras: {
        aromaterapia: true,
        vaporCaliente: false,
        ionizador: false,
        consumoW: 24
      }
    },
    resumen: "Difusor ultrasónico de entrada que cumple para habitaciones pequeñas y para perfumar el aire de vez en cuando. No le pidas hacer de humidificador en un salón ni tenerlo encendido toda la noche en el cuarto del bebé.",
    enlaceAfiliado: "https://www.amazon.es/s?k=Cecotec+Pure+Aroma+300+Yang",
    comercio: "Amazon",
    fechaActualizacion: HOY,
    fuentes: ["Cecotec.es (17/06/2026)", "PcComponentes (17/06/2026)", "Amazon.es (17/06/2026)"],
    datosPendientes: ["dB de funcionamiento (Cecotec no lo publica)"]
  },
  {
    slug: "levoit-dual-200s",
    nombre: "Levoit Dual 200S",
    marca: "Levoit",
    modelo: "Dual 200S",
    precioOrientativo: "DATO_PENDIENTE",
    rango: "Medio",
    tecnologia: "Ultrasónico",
    capacidadL: 3,
    coberturaM2: 25,
    ruidoDb: 28,
    // ≤28 dB modo bajo (ficha Levoit)
    autonomiaH: 25,
    // a velocidad mínima (levoit.com)
    valoracionEditorial: 84,
    idealPara: ["Dormitorios medianos", "Habitaciones infantiles", "Uso nocturno"],
    noRecomendadoPara: ["Salones grandes", "Quienes buscan vapor caliente esterilizado"],
    ventajas: [
      "Top-fill: rellenado y limpieza sencillos",
      "Control por app y voz",
      "Modo silencioso adecuado para dormitorio"
    ],
    inconvenientes: [
      "Como ultrasónico, exige agua destilada para evitar polvo blanco",
      "Filtro/cartucho antical requiere mantenimiento"
    ],
    caracteristicas: [
      "Ultrasónico vapor frío",
      "Conectado (VeSync)",
      "Top-fill 3 L"
    ],
    atributos: {
      control: {
        higrostato: true,
        modoAuto: true,
        wifiApp: true,
        asistentesVoz: ["Alexa", "Google"],
        temporizador: true,
        apagadoAutoSinAgua: true
      },
      confort: {
        modoNoche: true,
        luzApagable: true,
        boquilla360: true,
        indicadorAgua: true,
        topFill: true
      },
      mantenimiento: {
        filtroRequerido: false,
        bocaAncha: true,
        cartuchoAntical: true,
        autolimpieza: false,
        uvc: false
      },
      extras: {
        aromaterapia: true,
        vaporCaliente: false,
        ionizador: false,
        consumoW: 25
      }
    },
    resumen: "Un conectado de gama media que en las reseñas verificadas siempre sale bien parado: silencioso, con capacidad suficiente y muy fácil de limpiar. Es la apuesta más segura para un dormitorio o la habitación del bebé.",
    enlaceAfiliado: "https://www.amazon.es/s?k=Levoit+Dual+200S",
    comercio: "Amazon",
    fechaActualizacion: HOY,
    fuentes: ["Estudio interno HumiSalud (jun 2026)", "levoit.com ficha Dual 200S"],
    datosPendientes: ["Precio observado"]
  },
  {
    slug: "philips-hu2716-nanocloud",
    nombre: "Philips HU2716 NanoCloud",
    marca: "Philips",
    modelo: "HU2716",
    precioOrientativo: "~80 €–141 € según tienda/fecha",
    rango: "Alto",
    tecnologia: "Evaporativo",
    capacidadL: 2,
    coberturaM2: 32,
    ruidoDb: 34,
    // ficha técnica Philips (topten.eu)
    autonomiaH: 10,
    // 2 L ÷ 200 mL/h a máximo
    valoracionEditorial: 86,
    idealPara: ["Alergias", "Familias con bebés", "Hogares que rechazan polvo blanco"],
    noRecomendadoPara: ["Presupuesto ajustado", "Usuarios que no quieren cambiar filtro"],
    ventajas: [
      "Tecnología NanoCloud: no genera polvo blanco mineral",
      "Higiene superior frente a ultrasónicos",
      "Datos de marca: hasta 99% menos bacterias en el aire (fabricante)"
    ],
    inconvenientes: [
      "Filtro FY3446 con coste recurrente (vida útil recomendada hasta 6 meses)",
      "Precio fluctúa mucho entre tiendas"
    ],
    caracteristicas: [
      "Evaporativo con filtro NanoCloud",
      "Cobertura hasta ~32 m²",
      "Sin emisión visible de vapor"
    ],
    atributos: {
      control: {
        higrostato: true,
        modoAuto: true,
        wifiApp: false,
        asistentesVoz: [],
        temporizador: true,
        apagadoAutoSinAgua: true
      },
      confort: {
        modoNoche: true,
        luzApagable: true,
        boquilla360: false,
        indicadorAgua: true,
        topFill: false
      },
      mantenimiento: {
        filtroRequerido: true,
        filtroCosteAnualEur: 40,
        bocaAncha: true,
        cartuchoAntical: false,
        autolimpieza: false,
        uvc: false
      },
      extras: {
        aromaterapia: false,
        vaporCaliente: false,
        ionizador: false,
        consumoW: 15
      }
    },
    resumen: "Si lo tuyo es la higiene del aire y el precio te da igual, este es el que te recomendaríamos. Eso sí, las cifras antibacterianas que aparecen en su caja son del fabricante, y así te las contamos: como datos de marca, no como comprobación independiente.",
    enlaceAfiliado: "https://www.amazon.es/s?k=Philips+HU2716+NanoCloud",
    comercio: "Amazon",
    fechaActualizacion: HOY,
    fuentes: ["Philips.es (17/06/2026)", "idealo.es histórico"],
    datosPendientes: ["Autonomía oficial a velocidad mínima"]
  },
  {
    slug: "rowenta-aqua-perfect",
    nombre: "Rowenta Aqua Perfect",
    marca: "Rowenta",
    modelo: "Aqua Perfect",
    precioOrientativo: "DATO_PENDIENTE",
    rango: "Alto",
    tecnologia: "Híbrido",
    capacidadL: 4.5,
    coberturaM2: 40,
    ruidoDb: 40,
    // ficha distribuidor (Rowenta no publica en web ES)
    autonomiaH: 12,
    // temporizador máx. en display
    valoracionEditorial: 82,
    idealPara: ["Salones medianos-grandes", "Invierno con calefacción intensa"],
    noRecomendadoPara: ["Dormitorios pequeños", "Quien busca lo más barato"],
    ventajas: [
      "Modo auto con sensor de humedad",
      "Vapor frío y caliente",
      "Datos de marca: 99,9% de eliminación bacteriana (fabricante)"
    ],
    inconvenientes: ["Precio medio-alto", "Mayor tamaño"],
    caracteristicas: ["Híbrido frío/caliente", "Sensor de humedad", "Depósito 4,5 L"],
    atributos: {
      control: {
        higrostato: true,
        modoAuto: true,
        wifiApp: false,
        asistentesVoz: [],
        temporizador: true,
        apagadoAutoSinAgua: true
      },
      confort: {
        modoNoche: true,
        luzApagable: true,
        boquilla360: true,
        indicadorAgua: true,
        topFill: true
      },
      mantenimiento: {
        filtroRequerido: false,
        bocaAncha: true,
        cartuchoAntical: true,
        autolimpieza: PEND,
        uvc: false
      },
      extras: {
        aromaterapia: PEND,
        vaporCaliente: true,
        ionizador: false,
        consumoW: PEND
      }
    },
    resumen: "Buena opción para un salón con la calefacción a tope todo el invierno. El 99,9% de eliminación bacteriana lo dice Rowenta, no nosotros.",
    enlaceAfiliado: "https://www.amazon.es/s?k=Rowenta+Aqua+Perfect+humidificador",
    comercio: "Amazon",
    fechaActualizacion: HOY,
    fuentes: ["Rowenta.es (17/06/2026)"],
    datosPendientes: ["Precio observado actual"]
  },
  {
    slug: "xiaomi-smart-humidifier-2",
    nombre: "Xiaomi Smart Humidifier 2",
    marca: "Xiaomi",
    modelo: "Smart Humidifier 2",
    precioOrientativo: "DATO_PENDIENTE",
    rango: "Medio",
    tecnologia: "UV-C",
    capacidadL: 4.5,
    coberturaM2: 32,
    ruidoDb: 38,
    // ≤38 dB(A) ficha oficial (32 dB en modo silencio)
    autonomiaH: 13,
    // 4,5 L ÷ 350 mL/h a máximo (mi.com)
    valoracionEditorial: 80,
    idealPara: ["Usuarios de domótica Xiaomi", "Salones medianos"],
    noRecomendadoPara: ["Quien no usa apps", "Dormitorio infantil sin supervisión"],
    ventajas: [
      "Lámpara UV-C: dato de marca de 99,9% de eliminación bacteriana",
      "Integración Mi Home / Google / Alexa",
      "Precio competitivo dentro de los conectados"
    ],
    inconvenientes: ["Requiere app", "Mantenimiento estricto para que la UV-C tenga efecto"],
    caracteristicas: ["Ultrasónico con UV-C", "Conectado", "4,5 L"],
    atributos: {
      control: {
        higrostato: true,
        modoAuto: true,
        wifiApp: true,
        asistentesVoz: ["Alexa", "Google"],
        temporizador: true,
        apagadoAutoSinAgua: true
      },
      confort: {
        modoNoche: true,
        luzApagable: true,
        boquilla360: true,
        indicadorAgua: true,
        topFill: true
      },
      mantenimiento: {
        filtroRequerido: false,
        bocaAncha: true,
        cartuchoAntical: false,
        autolimpieza: false,
        uvc: true
      },
      extras: {
        aromaterapia: false,
        vaporCaliente: false,
        ionizador: false,
        consumoW: 32
      }
    },
    resumen: "Un conectado con buena relación calidad-precio, sobre todo si ya tienes cacharros Xiaomi por casa. La eficacia de la luz UV-C es un dato de fabricante y, sobre todo, depende de que limpies el depósito como toca.",
    enlaceAfiliado: "https://www.amazon.es/s?k=Xiaomi+Smart+Humidifier+2",
    comercio: "Amazon",
    fechaActualizacion: HOY,
    fuentes: ["Mi.com (17/06/2026)"],
    datosPendientes: ["Precio observado"]
  },
  {
    slug: "winix-l500",
    nombre: "Winix L500",
    marca: "Winix",
    modelo: "L500",
    precioOrientativo: "DATO_PENDIENTE",
    rango: "Alto",
    tecnologia: "Híbrido",
    capacidadL: 7.5,
    coberturaM2: 55,
    ruidoDb: 30,
    // ≤30 dB nivel máx. (specs Winix)
    autonomiaH: 18,
    // 7,5 L ÷ 400 mL/h a máximo
    valoracionEditorial: 81,
    idealPara: ["Estancias grandes", "Lofts", "Familias numerosas"],
    noRecomendadoPara: ["Dormitorios pequeños", "Espacios reducidos"],
    ventajas: ["Depósito 7,5 L de gran autonomía", "Vapor frío y caliente"],
    inconvenientes: ["Tamaño considerable", "Precio a verificar"],
    caracteristicas: ["Ultrasónico frío + caliente", "7,5 L", "Cobertura amplia"],
    atributos: {
      control: {
        higrostato: true,
        modoAuto: true,
        wifiApp: false,
        asistentesVoz: [],
        temporizador: true,
        apagadoAutoSinAgua: true
      },
      confort: {
        modoNoche: true,
        luzApagable: true,
        boquilla360: true,
        indicadorAgua: true,
        topFill: true
      },
      mantenimiento: {
        filtroRequerido: false,
        bocaAncha: true,
        cartuchoAntical: PEND,
        autolimpieza: PEND,
        uvc: false
      },
      extras: {
        aromaterapia: PEND,
        vaporCaliente: true,
        ionizador: false,
        consumoW: PEND
      }
    },
    resumen: "Para espacios grandes en los que la mayoría de modelos se quedan cortos. Antes de publicarlo definitivamente nos falta confirmar el PVP actual.",
    enlaceAfiliado: "https://www.amazon.es/s?k=Winix+L500+humidifier",
    comercio: "Amazon",
    fechaActualizacion: HOY,
    fuentes: ["Estudio HumiSalud jun 2026"],
    datosPendientes: ["PVP actual"]
  }
];
const getProducto = (slug) => productos.find((p) => p.slug === slug);
const mejoresPorCategoria = {
  general: "levoit-dual-200s",
  calidadPrecio: "xiaomi-smart-humidifier-2",
  economico: "cecotec-pure-aroma-300-yang",
  bebe: "philips-hu2716-nanocloud",
  dormitorioSilencioso: "levoit-dual-200s",
  alergias: "philips-hu2716-nanocloud",
  salon: "rowenta-aqua-perfect",
  inteligente: "xiaomi-smart-humidifier-2",
  estanciasGrandes: "winix-l500"
};
const BASE_URL = "";
const Route$g = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/mejores-humidificadores", changefreq: "weekly", priority: "0.9" },
          { path: "/selector", changefreq: "monthly", priority: "0.8" },
          { path: "/calculadora", changefreq: "monthly", priority: "0.8" },
          { path: "/coste-de-uso", changefreq: "monthly", priority: "0.7" },
          { path: "/guia-de-compra", changefreq: "monthly", priority: "0.8" },
          { path: "/metodologia", changefreq: "monthly", priority: "0.6" },
          { path: "/sobre-nosotros", changefreq: "monthly", priority: "0.4" },
          { path: "/en", changefreq: "weekly", priority: "0.9" },
          { path: "/en/calculator", changefreq: "monthly", priority: "0.7" },
          { path: "/en/running-cost", changefreq: "monthly", priority: "0.6" },
          { path: "/aviso-afiliacion", changefreq: "monthly", priority: "0.4" },
          { path: "/privacidad", changefreq: "monthly", priority: "0.3" },
          { path: "/cookies", changefreq: "monthly", priority: "0.3" },
          { path: "/terminos", changefreq: "monthly", priority: "0.3" },
          ...["bebe", "dormitorio", "salon", "alergias", "inteligente", "economico"].map((s) => ({
            path: `/categoria/${s}`,
            changefreq: "monthly",
            priority: "0.7"
          })),
          ...productos.map((p) => ({ path: `/producto/${p.slug}`, changefreq: "monthly", priority: "0.7" }))
        ];
        const urls = entries.map((e) => [
          `  <url>`,
          `    <loc>${BASE_URL}${e.path}</loc>`,
          e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
          e.priority ? `    <priority>${e.priority}</priority>` : null,
          `  </url>`
        ].filter(Boolean).join("\n"));
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      }
    }
  }
});
const $$splitComponentImporter$e = () => import("./selector-DxzLNGnT.mjs");
const Route$f = createFileRoute("/selector")({
  head: () => ({
    meta: [{
      title: "Selector de humidificador — HumiSalud"
    }, {
      name: "description",
      content: "Responde 5 preguntas y te recomendamos el humidificador que mejor encaja con tu estancia, presupuesto y uso."
    }, {
      property: "og:title",
      content: "Selector de humidificador — HumiSalud"
    }, {
      property: "og:url",
      content: "/selector"
    }],
    links: [{
      rel: "canonical",
      href: "/selector"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
function Breadcrumbs({ items }) {
  const en = useLocale() === "en";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": en ? "Breadcrumbs" : "Migas de pan", className: "text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "flex flex-wrap items-center gap-1.5", children: items.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5", children: [
    c.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: c.to, params: c.params, className: "hover:text-foreground hover:underline underline-offset-4", children: c.label }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-current": "page", className: "text-foreground", children: c.label }),
    i < items.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "/" })
  ] }, i)) }) });
}
function makeLegal(title, slug, body) {
  return {
    head: () => ({
      meta: [
        { title: `${title} — HumiSalud` },
        { name: "description", content: `${title} de HumiSalud.` },
        { name: "robots", content: "index,follow" },
        { property: "og:url", content: `/${slug}` }
      ],
      links: [{ rel: "canonical", href: `/${slug}` }]
    }),
    component: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mx-auto max-w-3xl px-5 py-12 sm:py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { items: [{ to: "/", label: "Inicio" }, { label: title }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-4xl sm:text-5xl font-semibold tracking-tight", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-4 text-base leading-relaxed text-foreground/90", children: body })
    ] })
  };
}
const Route$e = createFileRoute("/privacidad")(makeLegal("Política de privacidad", "privacidad", /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Esta política describe cómo HumiSalud trata los datos personales que puedas facilitar al usar este sitio." }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Datos recogidos." }),
    " No solicitamos datos personales para navegar. Si nos escribes por email recogemos únicamente los datos necesarios para responder."
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cookies." }),
    " Ver ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/cookies", className: "text-primary underline", children: "política de cookies" }),
    "."
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Derechos." }),
    " Puedes ejercer tus derechos de acceso, rectificación y supresión escribiendo a hola@humisalud.example."
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: `{{DATO_PENDIENTE: identidad del responsable, base legal completa y plazos de conservación}}` }),
    "."
  ] })
] })));
const $$splitComponentImporter$d = () => import("./metodologia-DsQDp3TB.mjs");
const Route$d = createFileRoute("/metodologia")({
  head: () => ({
    meta: [{
      title: "Metodología editorial — HumiSalud"
    }, {
      name: "description",
      content: "Cómo evaluamos cada humidificador: rúbrica de 100 puntos, fuentes, fechado de precios y separación de valoraciones."
    }, {
      property: "og:title",
      content: "Metodología editorial — HumiSalud"
    }, {
      property: "og:url",
      content: "/metodologia"
    }],
    links: [{
      rel: "canonical",
      href: "/metodologia"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./mejores-humidificadores-JCYp_clD.mjs");
const TITLE = "Mejores humidificadores 2026: ranking editorial HumiSalud";
const DESC = "Ranking 2026 con cálculo por m², cuánto gastan de luz y nivel de ruido. Mejor opción general, calidad-precio, barato, bebé y dormitorio.";
const Route$c = createFileRoute("/mejores-humidificadores")({
  head: () => ({
    meta: [{
      title: TITLE
    }, {
      name: "description",
      content: DESC
    }, {
      property: "og:title",
      content: TITLE
    }, {
      property: "og:description",
      content: DESC
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:url",
      content: "/mejores-humidificadores"
    }],
    links: [{
      rel: "canonical",
      href: "/mejores-humidificadores"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./guia-de-compra-0ngyQJCs.mjs");
const Route$b = createFileRoute("/guia-de-compra")({
  head: () => ({
    meta: [{
      title: "Guía de compra de humidificadores 2026 — HumiSalud"
    }, {
      name: "description",
      content: "Cómo elegir un humidificador en 2026: tecnología, m², ruido, mantenimiento y lo que cuesta tenerlo encendido."
    }, {
      property: "og:title",
      content: "Guía de compra de humidificadores 2026"
    }, {
      property: "og:url",
      content: "/guia-de-compra"
    }],
    links: [{
      rel: "canonical",
      href: "/guia-de-compra"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./en-BFsOu0JM.mjs");
const Route$a = createFileRoute("/en")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./coste-de-uso-Dj2pnrTC.mjs");
const Route$9 = createFileRoute("/coste-de-uso")({
  head: () => ({
    meta: [{
      title: "Coste real de uso de un humidificador — HumiSalud"
    }, {
      name: "description",
      content: "Cuánto cuesta tener un humidificador encendido cada día: €/mes y €/año por tecnología (ultrasónico, evaporativo, vapor caliente, híbrido)."
    }, {
      property: "og:title",
      content: "Coste real de uso de un humidificador — HumiSalud"
    }, {
      property: "og:url",
      content: "/coste-de-uso"
    }],
    links: [{
      rel: "canonical",
      href: "/coste-de-uso"
    }, {
      rel: "alternate",
      hrefLang: "es",
      href: "/coste-de-uso"
    }, {
      rel: "alternate",
      hrefLang: "en",
      href: "/en/running-cost"
    }, {
      rel: "alternate",
      hrefLang: "x-default",
      href: "/coste-de-uso"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./cookies-ChaXALGF.mjs");
const Route$8 = createFileRoute("/cookies")({
  head: () => ({
    meta: [{
      title: "Política de cookies — HumiSalud"
    }, {
      name: "description",
      content: "Cookies utilizadas en HumiSalud."
    }, {
      property: "og:url",
      content: "/cookies"
    }],
    links: [{
      rel: "canonical",
      href: "/cookies"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./calculadora-CEfLmXv2.mjs");
const Route$7 = createFileRoute("/calculadora")({
  head: () => ({
    meta: [{
      title: "Calculadora de humidificador por m² — HumiSalud"
    }, {
      name: "description",
      content: "Calcula el caudal (g/h) y el depósito que necesitas según el volumen de tu habitación y la humedad objetivo. Fórmula transparente, sin datos inventados."
    }, {
      property: "og:title",
      content: "Calculadora de humidificador por m² — HumiSalud"
    }, {
      property: "og:url",
      content: "/calculadora"
    }],
    links: [{
      rel: "canonical",
      href: "/calculadora"
    }, {
      rel: "alternate",
      hrefLang: "es",
      href: "/calculadora"
    }, {
      rel: "alternate",
      hrefLang: "en",
      href: "/en/calculator"
    }, {
      rel: "alternate",
      hrefLang: "x-default",
      href: "/calculadora"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./aviso-afiliacion-OVkCVgsz.mjs");
const Route$6 = createFileRoute("/aviso-afiliacion")({
  head: () => ({
    meta: [{
      title: "Aviso de afiliación — HumiSalud"
    }, {
      name: "description",
      content: "Cómo funciona el programa de afiliación de HumiSalud y qué relación tenemos con Amazon y otros comercios."
    }, {
      property: "og:title",
      content: "Aviso de afiliación — HumiSalud"
    }, {
      property: "og:url",
      content: "/aviso-afiliacion"
    }],
    links: [{
      rel: "canonical",
      href: "/aviso-afiliacion"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./index-CNi6cB6t.mjs");
const Route$5 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "HumiSalud — Mejores humidificadores 2026, análisis y guía de compra"
    }, {
      name: "description",
      content: "Compara humidificadores con criterio: cálculo por m², cuánto gastan de luz y reseñas verificadas. Para bebés, dormitorio, salón y alergias."
    }, {
      property: "og:title",
      content: "HumiSalud — Guía editorial de humidificadores"
    }, {
      property: "og:description",
      content: "Análisis técnico, comparativas filtrables y selector inteligente."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./en.index-C4waX5IL.mjs");
const Route$4 = createFileRoute("/en/")({
  head: () => ({
    meta: [{
      title: "HumiSalud — Best humidifiers 2026, reviews and buying guide"
    }, {
      name: "description",
      content: "Compare humidifiers with editorial criteria: m² calculator, real running cost and verified reviews. For babies, bedrooms, living rooms and allergies."
    }, {
      property: "og:title",
      content: "HumiSalud — Editorial humidifier guide"
    }, {
      property: "og:url",
      content: "/en"
    }, {
      property: "og:locale",
      content: "en_US"
    }],
    links: [{
      rel: "canonical",
      href: "/en"
    }, {
      rel: "alternate",
      hrefLang: "es",
      href: "/"
    }, {
      rel: "alternate",
      hrefLang: "en",
      href: "/en"
    }, {
      rel: "alternate",
      hrefLang: "x-default",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./producto._slug-Zk-d1hU0.mjs");
const $$splitNotFoundComponentImporter$1 = () => import("./producto._slug-BgPEKXVw.mjs");
const Route$3 = createFileRoute("/producto/$slug")({
  loader: ({
    params
  }) => {
    const p = getProducto(params.slug);
    if (!p) throw notFound();
    return {
      producto: p
    };
  },
  head: ({
    loaderData
  }) => {
    const p = loaderData?.producto;
    const title = p ? `${p.nombre} — análisis HumiSalud` : "Análisis de producto — HumiSalud";
    const desc = p ? `Análisis editorial del ${p.nombre} (${p.marca}): tecnología ${p.tecnologia}, ventajas, inconvenientes y para quién es.` : "";
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: desc
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: desc
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:url",
        content: p ? `/producto/${p.slug}` : "/"
      }],
      links: p ? [{
        rel: "canonical",
        href: `/producto/${p.slug}`
      }] : [],
      scripts: p ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.nombre,
          brand: {
            "@type": "Brand",
            name: p.marca
          },
          description: p.resumen,
          review: {
            "@type": "Review",
            author: {
              "@type": "Organization",
              name: "HumiSalud"
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: p.valoracionEditorial,
              bestRating: 100
            }
          }
        })
      }] : []
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./en.running-cost-BUQD3xvL.mjs");
const Route$2 = createFileRoute("/en/running-cost")({
  head: () => ({
    meta: [{
      title: "Real humidifier running cost — HumiSalud"
    }, {
      name: "description",
      content: "How much does a humidifier cost to run each day: €/month and €/year by technology (ultrasonic, evaporative, warm-mist, hybrid)."
    }, {
      property: "og:title",
      content: "Real humidifier running cost — HumiSalud"
    }, {
      property: "og:url",
      content: "/en/running-cost"
    }, {
      property: "og:locale",
      content: "en_US"
    }],
    links: [{
      rel: "canonical",
      href: "/en/running-cost"
    }, {
      rel: "alternate",
      hrefLang: "es",
      href: "/coste-de-uso"
    }, {
      rel: "alternate",
      hrefLang: "en",
      href: "/en/running-cost"
    }, {
      rel: "alternate",
      hrefLang: "x-default",
      href: "/coste-de-uso"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./en.calculator-CenUk6-L.mjs");
const Route$1 = createFileRoute("/en/calculator")({
  head: () => ({
    meta: [{
      title: "Humidifier calculator by m² — HumiSalud"
    }, {
      name: "description",
      content: "Calculate the output (g/h) and tank capacity you need based on your room volume and target humidity. Transparent formula, no invented data."
    }, {
      property: "og:title",
      content: "Humidifier calculator by m² — HumiSalud"
    }, {
      property: "og:url",
      content: "/en/calculator"
    }, {
      property: "og:locale",
      content: "en_US"
    }],
    links: [{
      rel: "canonical",
      href: "/en/calculator"
    }, {
      rel: "alternate",
      hrefLang: "es",
      href: "/calculadora"
    }, {
      rel: "alternate",
      hrefLang: "en",
      href: "/en/calculator"
    }, {
      rel: "alternate",
      hrefLang: "x-default",
      href: "/calculadora"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const COPY = {
  bebe: {
    h1: "Mejores humidificadores para bebé en 2026",
    lead: "Vapor frío, por debajo de 35 dB y fáciles de rellenar sin acrobacias. En la habitación del bebé, vapor caliente nunca.",
    title: "Humidificador para bebé 2026 — HumiSalud",
    desc: "Humidificadores seguros para el cuarto del bebé: vapor frío, silenciosos y fáciles de limpiar.",
    filtro: (p) => p.idealPara.some((u) => /bebé|infantil/i.test(u)) || ["Ultrasónico", "Evaporativo"].includes(p.tecnologia),
    mejor: "bebe"
  },
  dormitorio: {
    h1: "Humidificadores silenciosos para dormir",
    lead: "Menos de 35 dB y con depósito suficiente para no quedarte a medias a las cuatro de la mañana.",
    title: "Humidificador silencioso para dormitorio — HumiSalud",
    desc: "Modelos pensados para el dormitorio: silenciosos, con autonomía nocturna y fáciles de limpiar.",
    filtro: (p) => p.idealPara.some((u) => /dormitorio|nocturno/i.test(u)),
    mejor: "dormitorioSilencioso"
  },
  salon: {
    h1: "Humidificadores para salón y estancias grandes",
    lead: "Caudal de sobra, depósito amplio y modo automático para espacios de 25 a 55 m².",
    title: "Humidificador para salón 2026 — HumiSalud",
    desc: "Humidificadores con cobertura suficiente para salones y habitaciones grandes.",
    filtro: (p) => typeof p.coberturaM2 === "number" && p.coberturaM2 >= 30,
    mejor: "salon"
  },
  alergias: {
    h1: "Humidificadores para alergias y asma",
    lead: "Evaporativos: ni rastro de polvo blanco, y modelos con filtración cuidada.",
    title: "Humidificador para alergias — HumiSalud",
    desc: "Humidificadores recomendados para personas con alergias o asma: evaporativos sin polvo blanco.",
    filtro: (p) => p.tecnologia === "Evaporativo" || p.idealPara.some((u) => /alergia|asma/i.test(u)),
    mejor: "alergias"
  },
  inteligente: {
    h1: "Humidificadores con app y conectados",
    lead: "Control desde el móvil, Alexa o Google, y programación automática.",
    title: "Humidificador inteligente — HumiSalud",
    desc: "Humidificadores conectados con app, Alexa, Google y modos automáticos.",
    filtro: (p) => ["UV-C"].includes(p.tecnologia) || /inteligente|smart|app/i.test(p.caracteristicas.join(" ")),
    mejor: "inteligente"
  },
  economico: {
    h1: "Humidificadores baratos (por menos de 35 €)",
    lead: "Para habitaciones pequeñas o si solo lo vas a encender alguna noche suelta.",
    title: "Humidificador económico — HumiSalud",
    desc: "Humidificadores baratos con calidad decente para dormitorios pequeños y uso ocasional.",
    filtro: (p) => p.rango === "Económico",
    mejor: "economico"
  }
};
const $$splitComponentImporter = () => import("./categoria._slug-sRcPzJp-.mjs");
const $$splitNotFoundComponentImporter = () => import("./categoria._slug-Dj_TpH3X.mjs");
const Route = createFileRoute("/categoria/$slug")({
  loader: ({
    params
  }) => {
    const copy = COPY[params.slug];
    if (!copy) throw notFound();
    return {
      slug: params.slug,
      title: copy.title,
      desc: copy.desc
    };
  },
  head: ({
    loaderData
  }) => {
    if (!loaderData) return {
      meta: []
    };
    return {
      meta: [{
        title: loaderData.title
      }, {
        name: "description",
        content: loaderData.desc
      }, {
        property: "og:title",
        content: loaderData.title
      }, {
        property: "og:description",
        content: loaderData.desc
      }, {
        property: "og:type",
        content: "article"
      }],
      links: [{
        rel: "canonical",
        href: `/categoria/${loaderData.slug}`
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TerminosRoute = Route$i.update({
  id: "/terminos",
  path: "/terminos",
  getParentRoute: () => Route$j
});
const SobreNosotrosRoute = Route$h.update({
  id: "/sobre-nosotros",
  path: "/sobre-nosotros",
  getParentRoute: () => Route$j
});
const SitemapDotxmlRoute = Route$g.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$j
});
const SelectorRoute = Route$f.update({
  id: "/selector",
  path: "/selector",
  getParentRoute: () => Route$j
});
const PrivacidadRoute = Route$e.update({
  id: "/privacidad",
  path: "/privacidad",
  getParentRoute: () => Route$j
});
const MetodologiaRoute = Route$d.update({
  id: "/metodologia",
  path: "/metodologia",
  getParentRoute: () => Route$j
});
const MejoresHumidificadoresRoute = Route$c.update({
  id: "/mejores-humidificadores",
  path: "/mejores-humidificadores",
  getParentRoute: () => Route$j
});
const GuiaDeCompraRoute = Route$b.update({
  id: "/guia-de-compra",
  path: "/guia-de-compra",
  getParentRoute: () => Route$j
});
const EnRoute = Route$a.update({
  id: "/en",
  path: "/en",
  getParentRoute: () => Route$j
});
const CosteDeUsoRoute = Route$9.update({
  id: "/coste-de-uso",
  path: "/coste-de-uso",
  getParentRoute: () => Route$j
});
const CookiesRoute = Route$8.update({
  id: "/cookies",
  path: "/cookies",
  getParentRoute: () => Route$j
});
const CalculadoraRoute = Route$7.update({
  id: "/calculadora",
  path: "/calculadora",
  getParentRoute: () => Route$j
});
const AvisoAfiliacionRoute = Route$6.update({
  id: "/aviso-afiliacion",
  path: "/aviso-afiliacion",
  getParentRoute: () => Route$j
});
const IndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$j
});
const EnIndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => EnRoute
});
const ProductoSlugRoute = Route$3.update({
  id: "/producto/$slug",
  path: "/producto/$slug",
  getParentRoute: () => Route$j
});
const EnRunningCostRoute = Route$2.update({
  id: "/running-cost",
  path: "/running-cost",
  getParentRoute: () => EnRoute
});
const EnCalculatorRoute = Route$1.update({
  id: "/calculator",
  path: "/calculator",
  getParentRoute: () => EnRoute
});
const CategoriaSlugRoute = Route.update({
  id: "/categoria/$slug",
  path: "/categoria/$slug",
  getParentRoute: () => Route$j
});
const EnRouteChildren = {
  EnCalculatorRoute,
  EnRunningCostRoute,
  EnIndexRoute
};
const EnRouteWithChildren = EnRoute._addFileChildren(EnRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AvisoAfiliacionRoute,
  CalculadoraRoute,
  CookiesRoute,
  CosteDeUsoRoute,
  EnRoute: EnRouteWithChildren,
  GuiaDeCompraRoute,
  MejoresHumidificadoresRoute,
  MetodologiaRoute,
  PrivacidadRoute,
  SelectorRoute,
  SitemapDotxmlRoute,
  SobreNosotrosRoute,
  TerminosRoute,
  CategoriaSlugRoute,
  ProductoSlugRoute
};
const routeTree = Route$j._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Breadcrumbs as B,
  CATEGORIAS as C,
  Route$3 as R,
  useT as a,
  Route as b,
  COPY as c,
  getProducto as g,
  mejoresPorCategoria as m,
  productos as p,
  router as r,
  useLocale as u
};
