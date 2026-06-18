import { Link } from "@tanstack/react-router";
import { Droplet, Gauge, Volume2, Ruler } from "lucide-react";
import type { Producto } from "@/data/products";
import { AffiliateButton } from "./AffiliateButton";
import { RatingBar } from "./RatingBar";
import { PRODUCT_IMAGES, PRODUCT_IMAGE_CREDITS } from "@/assets/product-images";
import { useLocale } from "@/i18n/LocaleContext";

interface Props {
  producto: Producto;
  badge?: string;
  highlight?: boolean;
}

export function ProductCard({ producto: p, badge, highlight }: Props) {
  const locale = useLocale();
  const en = locale === "en";
  const L = {
    viewAnalysis: en ? `View review of ${p.nombre}` : `Ver análisis de ${p.nombre}`,
    officialImg: en
      ? `${p.nombre} — official image ${PRODUCT_IMAGE_CREDITS[p.slug] ?? p.marca}`
      : `${p.nombre} — imagen oficial ${PRODUCT_IMAGE_CREDITS[p.slug] ?? p.marca}`,
    noImg: en ? "No official image" : "Sin imagen oficial",
    rating: en ? "Editorial rating" : "Valoración editorial",
    capacity: en ? "Capacity" : "Capacidad",
    coverage: en ? "Coverage" : "Cobertura",
    noise: en ? "Noise" : "Ruido",
    runtime: en ? "Runtime" : "Autonomía",
    full: en ? "Read full review →" : "Ver análisis completo →",
    priceRange: en ? "Price range" : "Rango de precio",
    seeAt: en ? `View at ${p.comercio}` : `Ver en ${p.comercio}`,
  };
  return (
    <article
      className={[
        "group relative flex flex-col rounded-2xl border bg-card p-5 sm:p-6 transition-all shadow-soft hover:shadow-card",
        highlight ? "border-primary/40 ring-1 ring-primary/15" : "border-border",
      ].join(" ")}
    >
      {badge && (
        <span className="absolute -top-3 left-5 chip bg-primary text-primary-foreground border-primary/50">
          {badge}
        </span>
      )}
      <Link
        to="/producto/$slug"
        params={{ slug: p.slug }}
        className="block -mx-5 sm:-mx-6 -mt-5 sm:-mt-6 mb-5 aspect-[4/3] rounded-t-2xl bg-gradient-to-br from-mist via-card to-background border-b border-border overflow-hidden"
        aria-label={L.viewAnalysis}
      >
        {PRODUCT_IMAGES[p.slug] ? (
          <img
            src={PRODUCT_IMAGES[p.slug]}
            alt={L.officialImg}
            loading="lazy"
            className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="h-full w-full grid place-items-center text-xs text-muted-foreground">
            {L.noImg}
          </div>
        )}
      </Link>
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{p.marca}</p>
          <h3 className="mt-1 font-display text-lg font-semibold leading-tight">
            <Link to="/producto/$slug" params={{ slug: p.slug }} className="hover:underline underline-offset-4">
              {p.nombre}
            </Link>
          </h3>
        </div>
        <span className="chip shrink-0">{p.tecnologia}</span>
      </header>

      <div className="mt-4">
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-xs text-muted-foreground">{L.rating}</span>
          <span className="font-display text-2xl font-semibold text-foreground tabular-nums">
            {p.valoracionEditorial}<span className="text-sm text-muted-foreground">/100</span>
          </span>
        </div>
        <RatingBar value={p.valoracionEditorial} className="mt-2" />
      </div>

      <ul className="mt-5 grid grid-cols-2 gap-2 text-xs">
        <Spec icon={<Droplet className="h-3.5 w-3.5" />} label={L.capacity} value={fmt(p.capacidadL, "L")} />
        <Spec icon={<Ruler className="h-3.5 w-3.5" />} label={L.coverage} value={fmt(p.coberturaM2, "m²")} />
        <Spec icon={<Volume2 className="h-3.5 w-3.5" />} label={L.noise} value={fmt(p.ruidoDb, "dB")} />
        <Spec icon={<Gauge className="h-3.5 w-3.5" />} label={L.runtime} value={fmt(p.autonomiaH, "h")} />
      </ul>

      <p className="mt-4 text-sm text-muted-foreground line-clamp-3">{p.resumen}</p>

      <Link
        to="/producto/$slug"
        params={{ slug: p.slug }}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
      >
        {L.full}
      </Link>

      <div className="mt-4 flex items-center justify-between gap-3 pt-4 border-t border-border">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{L.priceRange}</p>
          <p className="font-display text-base font-semibold">{p.rango}</p>
        </div>
        <AffiliateButton
          href={p.enlaceAfiliado}
          comercio={p.comercio}
          size="sm"
          producto={p.slug}
          nombre={p.nombre}
          marca={p.marca}
          posicion="card"
        >
          {L.seeAt}
        </AffiliateButton>
      </div>
    </article>
  );
}

function Spec({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <li className="flex items-center gap-2 rounded-lg bg-secondary/60 px-2.5 py-2">
      <span className="text-primary">{icon}</span>
      <span className="text-muted-foreground">{label}:</span>
      <span className="ml-auto font-medium text-foreground tabular-nums">{value}</span>
    </li>
  );
}

function fmt(v: number | "DATO_PENDIENTE" | undefined, unit: string) {
  if (v === undefined || v === "DATO_PENDIENTE") return "—";
  return `${v} ${unit}`;
}
