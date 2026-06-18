import { Link } from "@tanstack/react-router";
import { Droplets } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";

export function Footer() {
  const locale = useLocale();
  const en = locale === "en";

  const intro = en ? (
    <>
      Independent editorial guide on humidifiers. We don't run physical tests:
      we analyse official spec sheets, synthesise verified reviews and compute
      m² coverage and running cost. <Link to="/metodologia" className="underline underline-offset-4 hover:text-foreground">Read the methodology</Link>.
    </>
  ) : (
    <>
      Guía editorial independiente sobre humidificadores. No realizamos pruebas físicas:
      analizamos fichas técnicas oficiales, sintetizamos reseñas verificadas y calculamos
      cobertura por m² y coste de uso. <Link to="/metodologia" className="underline underline-offset-4 hover:text-foreground">Lee la metodología</Link>.
    </>
  );

  const exploreLinks = en
    ? [
        { to: "/mejores-humidificadores", label: "Best humidifiers 2026" },
        { to: "/selector", label: "Personalised selector" },
        { to: "/guia-de-compra", label: "Buying guide" },
        { to: "/categoria/bebe", label: "For babies" },
        { to: "/categoria/dormitorio", label: "Silent bedroom" },
      ]
    : [
        { to: "/mejores-humidificadores", label: "Mejores humidificadores 2026" },
        { to: "/selector", label: "Selector personalizado" },
        { to: "/guia-de-compra", label: "Guía de compra" },
        { to: "/categoria/bebe", label: "Para bebé" },
        { to: "/categoria/dormitorio", label: "Dormitorio silencioso" },
      ];

  const legalLinks = en
    ? [
        { to: "/aviso-afiliacion", label: "Affiliate disclosure" },
        { to: "/metodologia", label: "Editorial methodology" },
        { to: "/sobre-nosotros", label: "About us" },
        { to: "/privacidad", label: "Privacy" },
        { to: "/cookies", label: "Cookies" },
        { to: "/terminos", label: "Terms" },
      ]
    : [
        { to: "/aviso-afiliacion", label: "Aviso de afiliación" },
        { to: "/metodologia", label: "Metodología editorial" },
        { to: "/sobre-nosotros", label: "Sobre nosotros" },
        { to: "/privacidad", label: "Privacidad" },
        { to: "/cookies", label: "Cookies" },
        { to: "/terminos", label: "Términos" },
      ];

  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Droplets className="h-5 w-5" aria-hidden />
            </span>
            <span className="font-display text-lg font-semibold">HumiSalud</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">{intro}</p>
        </div>
        <FooterCol title={en ? "Explore" : "Explorar"} links={exploreLinks} />
        <FooterCol title="Legal" links={legalLinks} />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HumiSalud. {en ? "All rights reserved." : "Todos los derechos reservados."}</p>
          <p>
            {en
              ? "HumiSalud takes part in affiliate programmes. We may earn a commission on purchases made through our links, at no extra cost to you."
              : "HumiSalud participa en programas de afiliación. Podemos recibir una comisión por las compras realizadas a través de nuestros enlaces, sin coste adicional para ti."}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold tracking-wide uppercase text-foreground/80">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
