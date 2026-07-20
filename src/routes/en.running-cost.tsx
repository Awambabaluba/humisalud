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

      <section className="mt-14 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold">What each technology costs to run</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Your bill depends mostly on the technology. An ultrasonic or evaporative humidifier draws
          very little —around 20 to 30 W— so running it for several hours a day barely shows up: a few
          cents per month. The real jump comes from warm-mist units: because they boil the water, they
          pull 200 to 400 W and can multiply the cost tenfold. A hybrid model sits in between depending
          on whether it runs cool or warm.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          At around €0.15/kWh, a 25 W ultrasonic running eight hours a day costs roughly €1/month,
          while a 300 W warm-mist unit on the same schedule climbs above €10/month. To spend less, use
          the auto mode (so it doesn't over-mist) and stick to cool mist unless you actually need to
          warm the room.
        </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold">Frequently asked questions</h2>
        <div className="mt-5 space-y-5">
          <div>
            <h3 className="font-medium text-foreground">How much electricity does a humidifier use per month?</h3>
            <p className="mt-1 text-muted-foreground">
              An ultrasonic or evaporative unit (20-30 W) costs barely €1-2/month with normal use. A
              warm-mist unit (200-400 W) can top €10/month.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground">Which technology is the cheapest to run?</h3>
            <p className="mt-1 text-muted-foreground">
              Ultrasonic and evaporative, because they don't heat the water. Warm-mist is by far the
              most expensive to keep running.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground">Does it use a lot of water?</h3>
            <p className="mt-1 text-muted-foreground">
              Between half a litre and a litre per hour at full output, depending on the model. Auto
              mode cuts consumption by holding just the humidity you need.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
