import { Info } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLocale } from "@/i18n/LocaleContext";

export function AffiliateDisclosure({ compact = false }: { compact?: boolean }) {
  const en = useLocale() === "en";
  if (compact) {
    return (
      <p className="text-xs text-muted-foreground flex items-start gap-1.5">
        <Info className="h-3.5 w-3.5 mt-0.5 shrink-0" aria-hidden />
        <span>
          {en
            ? "Tagged links go to external stores (e.g. Amazon). If you buy, we may earn a commission at no extra cost to you. "
            : "Los enlaces marcados llevan a tiendas externas (p. ej. Amazon). Si compras, podemos recibir una comisión sin coste extra para ti. "}
          <Link to="/aviso-afiliacion" className="underline underline-offset-4 hover:text-foreground">
            {en ? "More info" : "Más info"}
          </Link>.
        </span>
      </p>
    );
  }
  return (
    <aside
      className="rounded-2xl border border-border bg-secondary/50 p-4 sm:p-5 text-sm text-muted-foreground flex items-start gap-3"
      role="note"
      aria-label={en ? "Affiliate disclosure" : "Aviso de afiliación"}
    >
      <Info className="h-5 w-5 mt-0.5 shrink-0 text-primary" aria-hidden />
      <div>
        {en ? (
          <>
            <strong className="text-foreground font-medium">Affiliate disclosure.</strong>{" "}
            This page contains affiliate links to stores such as Amazon. If you buy through them,
            HumiSalud may earn a small commission <em>at no extra cost</em> to you. That doesn't
            shape our recommendations: we always apply the same{" "}
            <Link to="/metodologia" className="underline underline-offset-4 hover:text-foreground">editorial methodology</Link>.
          </>
        ) : (
          <>
            <strong className="text-foreground font-medium">Aviso de afiliación.</strong>{" "}
            Esta página contiene enlaces de afiliación a tiendas como Amazon. Si compras a través de ellos,
            HumiSalud puede recibir una pequeña comisión <em>sin coste adicional</em> para ti. Eso no
            condiciona nuestras recomendaciones: aplicamos siempre la{" "}
            <Link to="/metodologia" className="underline underline-offset-4 hover:text-foreground">misma metodología editorial</Link>.
          </>
        )}
      </div>
    </aside>
  );
}
