import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackAffiliateClick } from "@/lib/analytics";
import { useLocale } from "@/i18n/LocaleContext";

interface Props {
  href: string;
  comercio: string;
  size?: "default" | "lg" | "sm";
  className?: string;
  children?: React.ReactNode;
  // Contexto opcional para analítica (CTR por página y modelo).
  producto?: string; // slug
  nombre?: string;
  marca?: string;
  posicion?: string; // "card" | "ficha-hero" | "ficha-cta" | "comparativa" | etc.
}

// CTA de afiliación: transparente (indica destino externo + comercio).
// No usa urgencia falsa ni descuentos inventados.
export function AffiliateButton({
  href,
  comercio,
  size = "default",
  className,
  children,
  producto,
  nombre,
  marca,
  posicion,
}: Props) {
  const en = useLocale() === "en";
  const isPlaceholder = !href || href.includes("{{") || href === "#";
  const finalHref = !isPlaceholder ? withAmazonTag(href) : "#";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isPlaceholder) {
      e.preventDefault();
      return;
    }
    // No bloqueamos la navegación: el evento se envía de forma síncrona y
    // GA4 hace transport=beacon internamente para enlaces salientes.
    trackAffiliateClick({
      href: finalHref,
      comercio,
      producto,
      nombre,
      marca,
      posicion,
    });
  };

  return (
    <a
      href={finalHref}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      aria-disabled={isPlaceholder || undefined}
      onClick={handleClick}
      onAuxClick={handleClick}
      data-event="affiliate_click"
      data-comercio={comercio}
      data-producto={producto}
      data-posicion={posicion}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-medium text-affiliate-foreground bg-affiliate shadow-cta transition-all hover:brightness-105 hover:translate-y-[-1px] active:translate-y-0",
        size === "lg" && "px-6 py-3.5 text-base",
        size === "default" && "px-5 py-2.5 text-sm",
        size === "sm" && "px-4 py-2 text-xs",
        isPlaceholder && "opacity-70 cursor-not-allowed",
        className,
      )}
    >
      <span>{children ?? (en ? `Check price at ${comercio}` : `Ver precio en ${comercio}`)}</span>
      <ExternalLink className="h-4 w-4 opacity-80 transition-transform group-hover:translate-x-0.5" aria-hidden />
      <span className="sr-only">{en ? `(external link to ${comercio})` : `(enlace externo a ${comercio})`}</span>
    </a>
  );
}

function withAmazonTag(url: string): string {
  const tag = import.meta.env.VITE_AMAZON_TAG as string | undefined;
  if (!tag) return url;
  try {
    const u = new URL(url);
    if (!/(^|\.)amazon\./i.test(u.hostname)) return url;
    u.searchParams.set("tag", tag);
    return u.toString();
  } catch {
    return url;
  }
}
