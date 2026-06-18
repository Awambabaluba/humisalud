import { createFileRoute } from "@tanstack/react-router";
import { CalculatorWidget } from "@/components/site/CalculatorWidget";

export const Route = createFileRoute("/calculadora")({
  head: () => ({
    meta: [
      { title: "Calculadora de humidificador por m² — HumiSalud" },
      { name: "description", content: "Calcula el caudal (g/h) y el depósito que necesitas según el volumen de tu habitación y la humedad objetivo. Fórmula transparente, sin datos inventados." },
      { property: "og:title", content: "Calculadora de humidificador por m² — HumiSalud" },
      { property: "og:url", content: "/calculadora" },
    ],
    links: [
      { rel: "canonical", href: "/calculadora" },
      { rel: "alternate", hrefLang: "es", href: "/calculadora" },
      { rel: "alternate", hrefLang: "en", href: "/en/calculator" },
      { rel: "alternate", hrefLang: "x-default", href: "/calculadora" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">Herramienta</p>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight">Calculadora de humidificador</h1>
        <p className="mt-3 text-base text-muted-foreground">
          Te dice cuántos gramos de agua por hora (g/h) y qué tamaño de depósito necesitas para llegar a la
          humedad que quieres en tu habitación. La fórmula parte de la humedad absoluta a 20 °C y la ajustamos
          por las renovaciones de aire por hora (ACH).
        </p>
      </header>
      <div className="mt-10">
        <CalculatorWidget />
      </div>
    </section>
  );
}
