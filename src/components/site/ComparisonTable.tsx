import type { Producto } from "@/data/products";
import { AffiliateButton } from "./AffiliateButton";
import { PriceTag } from "./PriceTag";
import { Link } from "@tanstack/react-router";
import { useLocale } from "@/i18n/LocaleContext";

export function ComparisonTable({ productos }: { productos: Producto[] }) {
  const en = useLocale() === "en";
  const L = {
    product: en ? "Product" : "Producto",
    tech: en ? "Technology" : "Tecnología",
    capacity: en ? "Capacity" : "Capacidad",
    coverage: en ? "Coverage" : "Cobertura",
    rating: en ? "Rating" : "Valoración",
    price: en ? "Price" : "Precio",
    action: en ? "Action" : "Acción",
  };
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-soft">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-secondary/60 text-left">
            <Th>{L.product}</Th>
            <Th>{L.tech}</Th>
            <Th className="text-right">{L.capacity}</Th>
            <Th className="text-right">{L.coverage}</Th>
            <Th className="text-right">{L.rating}</Th>
            <Th className="text-right">{L.price}</Th>
            <Th className="text-right sr-only-th">{L.action}</Th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p, i) => (
            <tr key={p.slug} className={i % 2 ? "bg-background/40" : ""}>
              <Td>
                <Link to="/producto/$slug" params={{ slug: p.slug }} className="font-medium hover:underline underline-offset-4">
                  {p.nombre}
                </Link>
                <div className="text-xs text-muted-foreground">{p.marca}</div>
              </Td>
              <Td><span className="chip">{p.tecnologia}</span></Td>
              <Td className="text-right tabular-nums">{fmt(p.capacidadL, "L")}</Td>
              <Td className="text-right tabular-nums">{fmt(p.coberturaM2, "m²")}</Td>
              <Td className="text-right tabular-nums font-display font-semibold">{p.valoracionEditorial}</Td>
              <Td className="text-right">
                <PriceTag producto={p} size="sm" align="right" />
              </Td>
              <Td className="text-right">
                <AffiliateButton
                  href={p.enlaceAfiliado}
                  comercio={p.comercio}
                  size="sm"
                  producto={p.slug}
                  nombre={p.nombre}
                  marca={p.marca}
                  posicion="comparativa"
                >
                  {en ? `View at ${p.comercio}` : `Ver en ${p.comercio}`}
                </AffiliateButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <th className={`px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground ${className}`}>{children}</th>;
}
function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-3.5 align-middle border-t border-border ${className}`}>{children}</td>;
}
function fmt(v: number | "DATO_PENDIENTE" | undefined, unit: string) {
  if (v === undefined || v === "DATO_PENDIENTE") return "—";
  return `${v} ${unit}`;
}
