import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { u as useLocale } from "./router-jwYzSgWf.mjs";
import { a as Droplet, R as Ruler, V as Volume2, b as Gauge, E as ExternalLink } from "../_libs/lucide-react.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function trackAffiliateClick(payload) {
  if (typeof window === "undefined") return;
  const enriched = {
    ...payload,
    pagina: payload.pagina ?? window.location?.pathname
  };
  try {
    window.gtag?.("event", "affiliate_click", {
      // Convención GA4 para enlaces salientes
      link_url: enriched.href,
      link_domain: safeHostname(enriched.href),
      outbound: true,
      // Dimensiones personalizadas: regístralas en GA4 si quieres filtrar
      merchant: enriched.comercio,
      product_slug: enriched.producto,
      product_name: enriched.nombre,
      brand: enriched.marca,
      position: enriched.posicion,
      page_path: enriched.pagina
    });
  } catch {
  }
  try {
    window.dispatchEvent(new CustomEvent("humisalud:affiliate_click", { detail: enriched }));
  } catch {
  }
}
function safeHostname(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return void 0;
  }
}
function AffiliateButton({
  href,
  comercio,
  size = "default",
  className,
  children,
  producto,
  nombre,
  marca,
  posicion
}) {
  const en = useLocale() === "en";
  const isPlaceholder = !href || href.includes("{{") || href === "#";
  const finalHref = !isPlaceholder ? withAmazonTag(href) : "#";
  const handleClick = (e) => {
    if (isPlaceholder) {
      e.preventDefault();
      return;
    }
    trackAffiliateClick({
      href: finalHref,
      comercio,
      producto,
      nombre,
      marca,
      posicion
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: finalHref,
      target: "_blank",
      rel: "nofollow sponsored noopener noreferrer",
      "aria-disabled": isPlaceholder || void 0,
      onClick: handleClick,
      onAuxClick: handleClick,
      "data-event": "affiliate_click",
      "data-comercio": comercio,
      "data-producto": producto,
      "data-posicion": posicion,
      className: cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-medium text-affiliate-foreground bg-affiliate shadow-cta transition-all hover:brightness-105 hover:translate-y-[-1px] active:translate-y-0",
        size === "lg" && "px-6 py-3.5 text-base",
        size === "default" && "px-5 py-2.5 text-sm",
        size === "sm" && "px-4 py-2 text-xs",
        isPlaceholder && "opacity-70 cursor-not-allowed",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: children ?? (en ? `Check price at ${comercio}` : `Ver precio en ${comercio}`) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4 opacity-80 transition-transform group-hover:translate-x-0.5", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: en ? `(external link to ${comercio})` : `(enlace externo a ${comercio})` })
      ]
    }
  );
}
function withAmazonTag(url) {
  return url;
}
function RatingBar({ value, className }) {
  const pct = Math.max(0, Math.min(100, value));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("relative h-1.5 w-full overflow-hidden rounded-full bg-secondary", className), role: "progressbar", "aria-valuenow": pct, "aria-valuemin": 0, "aria-valuemax": 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-mist-deep via-primary to-sage",
      style: { width: `${pct}%` }
    }
  ) });
}
const cecotec = "/assets/cecotec-pure-aroma-300-yang-xKRhsQ1j.webp";
const levoit = "/assets/levoit-dual-200s-DOVeiBSN.webp";
const philips = "/assets/philips-hu2716-nanocloud-Cbh8C5I5.webp";
const rowenta = "/assets/rowenta-aqua-perfect-L30Q-fkd.webp";
const xiaomi = "data:image/webp;base64,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MTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDIzZTVjZjItODAwMy00ODA3LWE3YWYtODJhYzZjM2NkNmM1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdGRDhCNUNFMEUyMTExRUQ5NjE0QUVDOTY1NzhDQTc4IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdGRDhCNUNEMEUyMTExRUQ5NjE0QUVDOTY1NzhDQTc4IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE0MGNmNjdlLWM2MjUtYjM0Ny04MDZkLTdjOGU4OTA3MTJmYiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmQ5NTM5NzM1LWE2YjctNGM0Ni1iMTdkLWM0YzE4YjdiMDBmYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg==";
const winix = "/assets/winix-l500-D9pT2iiU.webp";
const PRODUCT_IMAGES = {
  "cecotec-pure-aroma-300-yang": cecotec,
  "levoit-dual-200s": levoit,
  "philips-hu2716-nanocloud": philips,
  "rowenta-aqua-perfect": rowenta,
  "xiaomi-smart-humidifier-2": xiaomi,
  "winix-l500": winix
};
const PRODUCT_IMAGE_CREDITS = {
  "cecotec-pure-aroma-300-yang": "Cecotec",
  "levoit-dual-200s": "Levoit / VeSync",
  "philips-hu2716-nanocloud": "Philips / Versuni",
  "rowenta-aqua-perfect": "Rowenta / Groupe SEB",
  "xiaomi-smart-humidifier-2": "Xiaomi",
  "winix-l500": "Winix"
};
function ProductCard({ producto: p, badge, highlight }) {
  const locale = useLocale();
  const en = locale === "en";
  const L = {
    viewAnalysis: en ? `View review of ${p.nombre}` : `Ver análisis de ${p.nombre}`,
    officialImg: en ? `${p.nombre} — official image ${PRODUCT_IMAGE_CREDITS[p.slug] ?? p.marca}` : `${p.nombre} — imagen oficial ${PRODUCT_IMAGE_CREDITS[p.slug] ?? p.marca}`,
    noImg: en ? "No official image" : "Sin imagen oficial",
    rating: en ? "Editorial rating" : "Valoración editorial",
    capacity: en ? "Capacity" : "Capacidad",
    coverage: en ? "Coverage" : "Cobertura",
    noise: en ? "Noise" : "Ruido",
    runtime: en ? "Runtime" : "Autonomía",
    full: en ? "Read full review →" : "Ver análisis completo →",
    priceRange: en ? "Price range" : "Rango de precio",
    seeAt: en ? `View at ${p.comercio}` : `Ver en ${p.comercio}`
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      className: [
        "group relative flex flex-col rounded-2xl border bg-card p-5 sm:p-6 transition-all shadow-soft hover:shadow-card",
        highlight ? "border-primary/40 ring-1 ring-primary/15" : "border-border"
      ].join(" "),
      children: [
        badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-5 chip bg-primary text-primary-foreground border-primary/50", children: badge }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/producto/$slug",
            params: { slug: p.slug },
            className: "block -mx-5 sm:-mx-6 -mt-5 sm:-mt-6 mb-5 aspect-[4/3] rounded-t-2xl bg-gradient-to-br from-mist via-card to-background border-b border-border overflow-hidden",
            "aria-label": L.viewAnalysis,
            children: PRODUCT_IMAGES[p.slug] ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: PRODUCT_IMAGES[p.slug],
                alt: L.officialImg,
                loading: "lazy",
                className: "h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full grid place-items-center text-xs text-muted-foreground", children: L.noImg })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: p.marca }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-lg font-semibold leading-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/producto/$slug", params: { slug: p.slug }, className: "hover:underline underline-offset-4", children: p.nombre }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip shrink-0", children: p.tecnologia })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: L.rating }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-2xl font-semibold text-foreground tabular-nums", children: [
              p.valoracionEditorial,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "/100" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(RatingBar, { value: p.valoracionEditorial, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 grid grid-cols-2 gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Spec, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplet, { className: "h-3.5 w-3.5" }), label: L.capacity, value: fmt(p.capacidadL, "L") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Spec, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Ruler, { className: "h-3.5 w-3.5" }), label: L.coverage, value: fmt(p.coberturaM2, "m²") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Spec, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-3.5 w-3.5" }), label: L.noise, value: fmt(p.ruidoDb, "dB") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Spec, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "h-3.5 w-3.5" }), label: L.runtime, value: fmt(p.autonomiaH, "h") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground line-clamp-3", children: p.resumen }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/producto/$slug",
            params: { slug: p.slug },
            className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4",
            children: L.full
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between gap-3 pt-4 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: L.priceRange }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base font-semibold", children: p.rango })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AffiliateButton,
            {
              href: p.enlaceAfiliado,
              comercio: p.comercio,
              size: "sm",
              producto: p.slug,
              nombre: p.nombre,
              marca: p.marca,
              posicion: "card",
              children: L.seeAt
            }
          )
        ] })
      ]
    }
  );
}
function Spec({ icon, label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 rounded-lg bg-secondary/60 px-2.5 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
      label,
      ":"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto font-medium text-foreground tabular-nums", children: value })
  ] });
}
function fmt(v, unit) {
  if (v === void 0 || v === "DATO_PENDIENTE") return "—";
  return `${v} ${unit}`;
}
export {
  AffiliateButton as A,
  ProductCard as P,
  RatingBar as R,
  PRODUCT_IMAGES as a,
  PRODUCT_IMAGE_CREDITS as b
};
