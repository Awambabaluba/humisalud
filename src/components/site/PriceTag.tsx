import type { Producto } from "@/data/products";
import { useLocale } from "@/i18n/LocaleContext";

interface Props {
  producto: Producto;
  /** Tamaño visual del precio principal. */
  size?: "sm" | "md" | "lg";
  /** Alineación del bloque (para tablas / tarjetas). */
  align?: "left" | "right";
  className?: string;
}

// Formatea un número a precio español: 49,90 € (sin decimales si es entero).
function formatEuro(n: number): string {
  return (
    n.toLocaleString("es-ES", {
      minimumFractionDigits: n % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2,
    }) + " €"
  );
}

/**
 * Muestra el precio comprobado del producto EN LA WEB (no hace falta ir a Amazon).
 * - Si hay precio comprobado (precioMin + precioComprobadoEn): "49,90 €" + referencia
 *   tachada y % de descuento cuando precioMin < precioReferencia.
 * - Si no hay precio comprobado todavía: cae al rango ("Económico", "Medio"…) para
 *   no inventar una cifra que no podamos respaldar.
 * El precio lo actualiza la tarea programada de revisión (scripts/check-prices.js).
 */
export function PriceTag({ producto: p, size = "md", align = "left", className }: Props) {
  const en = useLocale() === "en";

  const tieneComprobado =
    typeof p.precioMin === "number" && Boolean(p.precioComprobadoEn);

  const alignCls = align === "right" ? "items-end text-right" : "items-start text-left";

  if (!tieneComprobado) {
    // Sin precio comprobado: mostramos el rango, sin cifra falsa.
    return (
      <div className={cx("flex flex-col", alignCls, className)}>
        <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
          {en ? "Price range" : "Rango de precio"}
        </span>
        <span className="font-display font-semibold leading-none">{p.rango}</span>
      </div>
    );
  }

  const precio = p.precioMin as number;
  const referencia = p.precioReferencia;
  const enOferta = typeof referencia === "number" && referencia > precio;
  const descuento = enOferta
    ? Math.round(((referencia! - precio) / referencia!) * 100)
    : 0;

  const priceSize =
    size === "lg" ? "text-3xl" : size === "sm" ? "text-lg" : "text-2xl";

  const fecha = p.precioComprobadoEn
    ? new Date(p.precioComprobadoEn).toLocaleDateString(en ? "en-GB" : "es-ES", {
        day: "numeric",
        month: "short",
      })
    : null;

  return (
    <div className={cx("flex flex-col", alignCls, className)}>
      <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
        {en ? "Price" : "Precio"}
      </span>
      <span
        className={cx(
          "flex flex-wrap items-baseline gap-x-2 gap-y-0.5",
          align === "right" ? "justify-end" : "justify-start",
        )}
      >
        <span className={cx("font-display font-semibold leading-none tabular-nums", priceSize)}>
          {formatEuro(precio)}
        </span>
        {enOferta && (
          <>
            <span className="text-sm text-muted-foreground line-through tabular-nums">
              {formatEuro(referencia!)}
            </span>
            <span className="chip bg-affiliate/15 text-affiliate border-affiliate/30 font-semibold">
              −{descuento}%
            </span>
          </>
        )}
      </span>
      {fecha && (
        <span className="mt-1 text-[11px] text-muted-foreground">
          {en
            ? `Checked ${fecha} · ${p.comercio}`
            : `Comprobado el ${fecha} · ${p.comercio}`}
        </span>
      )}
    </div>
  );
}

function cx(...parts: (string | false | undefined)[]): string {
  return parts.filter(Boolean).join(" ");
}
