import { Link } from "@tanstack/react-router";
import { Droplets } from "lucide-react";
import { NAV, NAV_EN } from "@/data/site";
import { useState } from "react";
import { useLocale } from "@/i18n/LocaleContext";
import { LangToggle } from "./LangToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const nav = locale === "en" ? NAV_EN : NAV;
  const selectorTo = "/selector";
  const ctaLabel = locale === "en" ? "Find yours" : "Encuentra el tuyo";
  const homeTo = locale === "en" ? "/en" : "/";
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Link to={homeTo} className="flex items-center gap-2 group" aria-label="HumiSalud">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft transition-transform group-hover:scale-105">
            <Droplets className="h-5 w-5" aria-hidden />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            Humi<span className="text-primary">Salud</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Principal">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm text-foreground bg-secondary" }}
              activeOptions={{ exact: n.to === "/" || n.to === "/en" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <Link
            to={selectorTo}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            {ctaLabel}
          </Link>
          <button
            type="button"
            className="md:hidden rounded-md border border-border px-3 py-2 text-sm"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Menú"
          >
            Menú
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-background px-5 py-3" aria-label="Móvil">
          <div className="flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "rounded-md px-3 py-2.5 text-sm bg-secondary text-foreground" }}
                activeOptions={{ exact: n.to === "/" || n.to === "/en" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
