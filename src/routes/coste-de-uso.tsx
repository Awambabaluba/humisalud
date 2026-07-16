import { createFileRoute } from "@tanstack/react-router";
import { CostTable } from "@/components/site/CostTable";

export const Route = createFileRoute("/coste-de-uso")({
  head: () => ({
    meta: [
      { title: "Coste real de uso de un humidificador — HumiSalud" },
      {
        name: "description",
        content:
          "Cuánto cuesta tener un humidificador encendido cada día: €/mes y €/año por tecnología (ultrasónico, evaporativo, vapor caliente, híbrido).",
      },
      { property: "og:title", content: "Coste real de uso de un humidificador — HumiSalud" },
      { property: "og:url", content: "https://humisalud.com/coste-de-uso" },
    ],
    links: [
      { rel: "canonical", href: "https://humisalud.com/coste-de-uso" },
      { rel: "alternate", hrefLang: "es", href: "/coste-de-uso" },
      { rel: "alternate", hrefLang: "en", href: "/en/running-cost" },
      { rel: "alternate", hrefLang: "x-default", href: "/coste-de-uso" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">Coste de uso</p>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
          ¿Cuánto se gasta de luz un humidificador?
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          La diferencia entre tecnologías es bastante grande: un ultrasónico de andar por casa gasta
          menos de 1 € al mes, mientras que un vapor caliente a tope puede multiplicarlo por diez.
          Ajusta abajo las horas y el precio del kWh para ver tu caso.
        </p>
      </header>
      <div className="mt-10">
        <CostTable />
      </div>
    </section>
  );
}
