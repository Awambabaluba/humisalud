import { createFileRoute } from "@tanstack/react-router";
import { CostTable } from "@/components/site/CostTable";

export const Route = createFileRoute("/en/running-cost")({
  head: () => ({
    meta: [
      { title: "Real humidifier running cost — HumiSalud" },
      {
        name: "description",
        content:
          "How much does a humidifier cost to run each day: €/month and €/year by technology (ultrasonic, evaporative, warm-mist, hybrid).",
      },
      { property: "og:title", content: "Real humidifier running cost — HumiSalud" },
      { property: "og:url", content: "https://humisalud.com/en/running-cost" },
      { property: "og:locale", content: "en_US" },
    ],
    links: [
      { rel: "canonical", href: "https://humisalud.com/en/running-cost" },
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
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">Running cost</p>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
          How much does running a humidifier really cost?
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          The gap between technologies is real: a mid-range ultrasonic costs under €1/month; an
          intensive warm-mist can be 10× that. Adjust hours and kWh price for your case.
        </p>
      </header>
      <div className="mt-10">
        <CostTable />
      </div>
    </section>
  );
}
