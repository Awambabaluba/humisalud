import { Link } from "@tanstack/react-router";
import { useLocale } from "@/i18n/LocaleContext";

interface Crumb { to?: string; label: string; params?: Record<string, string> }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const en = useLocale() === "en";
  return (
    <nav aria-label={en ? "Breadcrumbs" : "Migas de pan"} className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {c.to ? (
              <Link to={c.to as string} params={c.params as never} className="hover:text-foreground hover:underline underline-offset-4">{c.label}</Link>
            ) : (
              <span aria-current="page" className="text-foreground">{c.label}</span>
            )}
            {i < items.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
