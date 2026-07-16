import { createFileRoute } from "@tanstack/react-router";
import { CalculatorWidget } from "@/components/site/CalculatorWidget";

export const Route = createFileRoute("/en/calculator")({
  head: () => ({
    meta: [
      { title: "Humidifier calculator by m² — HumiSalud" },
      {
        name: "description",
        content:
          "Calculate the output (g/h) and tank capacity you need based on your room volume and target humidity. Transparent formula, no invented data.",
      },
      { property: "og:title", content: "Humidifier calculator by m² — HumiSalud" },
      { property: "og:url", content: "https://humisalud.com/en/calculator" },
      { property: "og:locale", content: "en_US" },
    ],
    links: [
      { rel: "canonical", href: "https://humisalud.com/en/calculator" },
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
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">Tool</p>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
          Humidifier calculator
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Estimate the output (g/h) and tank capacity you need to reach your target humidity. The
          math uses absolute humidity at 20°C and adjusts by air changes per hour (ACH).
        </p>
      </header>
      <div className="mt-10">
        <CalculatorWidget />
      </div>
    </section>
  );
}
