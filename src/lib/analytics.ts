// Analítica ligera para clics de afiliación.
// - Si hay GA4 cargado (VITE_GA_ID), envía un evento `affiliate_click` con
//   parámetros normalizados para poder optimizar CTR por página y modelo.
// - Siempre dispara un CustomEvent en window para integraciones futuras
//   (Plausible, server beacon, etc.) sin acoplarnos a un proveedor.

export type AffiliateClickPayload = {
  producto?: string; // slug del producto
  nombre?: string;   // nombre legible
  marca?: string;
  comercio: string;  // "Amazon", etc.
  posicion?: string; // p.ej. "card", "ficha-hero", "ficha-cta", "comparativa"
  pagina?: string;   // pathname desde donde se hace clic
  href: string;      // destino final (con tag de afiliado ya aplicado)
};

declare global {
  interface Window {
    // gtag se inyecta por GA4. Tipado laxo a propósito.
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackAffiliateClick(payload: AffiliateClickPayload): void {
  if (typeof window === "undefined") return;

  const enriched: AffiliateClickPayload = {
    ...payload,
    pagina: payload.pagina ?? window.location?.pathname,
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
      page_path: enriched.pagina,
    });
  } catch {
    // no-op
  }

  try {
    window.dispatchEvent(new CustomEvent("humisalud:affiliate_click", { detail: enriched }));
  } catch {
    // no-op
  }
}

function safeHostname(url: string): string | undefined {
  try {
    return new URL(url).hostname;
  } catch {
    return undefined;
  }
}
