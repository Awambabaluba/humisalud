import { useRouterState } from "@tanstack/react-router";
import { useLocale } from "@/i18n/LocaleContext";
import { equivalentPath } from "@/i18n/dictionary";
import { Globe } from "lucide-react";

export function LangToggle() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = useLocale();
  const target = locale === "es" ? "en" : "es";
  const to = equivalentPath(pathname, target);
  return (
    <a
      href={to}
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
      aria-label={target === "en" ? "Switch to English" : "Cambiar a español"}
      hrefLang={target}
    >
      <Globe className="h-3.5 w-3.5" />
      {target.toUpperCase()}
    </a>
  );
}
