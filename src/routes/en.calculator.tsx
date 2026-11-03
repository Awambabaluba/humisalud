import { createFileRoute } from "@tanstack/react-router";
import { CalculatorWidget } from "@/components/site/CalculatorWidget";
import { calcular } from "@/lib/humidifier-math";

export const Route = createFileRoute("/en/calculator")({
  head: () => ({
    meta: [
      { title: "Humidifier size calculator: mist output (ml/h) for your room" },
      {
        name: "description",
        content:
          "What mist output does your room need? A medium room (20–30 m²) needs roughly 90–260 ml/h. Calculate output and tank size from room volume and target humidity.",
      },
      {
        property: "og:title",
        content: "Humidifier size calculator: mist output (ml/h) for your room",
      },
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
      <div className="mt-14 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold">
          What mist output does a medium-sized room need?
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          For a medium room of 20–30 m² with a 2.5 m ceiling, going from 30 % to 50 % relative
          humidity takes roughly <strong>90–260 ml/h</strong> of mist. The lower figure is for a
          well-sealed room (0.5 air changes per hour); the higher one for a draughty room or one
          with a door often open (1 air change per hour). One gram of water is one millilitre, so
          g/h and ml/h are the same number.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2 pr-4 font-medium">Room</th>
                <th className="py-2 pr-4 font-medium">Sealed (0.5 ACH)</th>
                <th className="py-2 font-medium">Draughty (1 ACH)</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {[10, 20, 30, 40].map((m2) => (
                <tr key={m2} className="border-b border-border/60">
                  <td className="py-2 pr-4">{m2} m²</td>
                  {[0.5, 1].map((ach) => (
                    <td key={ach} className="py-2 pr-4">
                      {Math.round(
                        calcular({
                          m2,
                          alturaM: 2.5,
                          humedadActual: 30,
                          humedadObjetivo: 50,
                          horasUso: 8,
                          ach,
                        }).caudalGph,
                      )}{" "}
                      ml/h
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          From 30 % to 50 % humidity, 2.5 m ceiling. Pick a humidifier whose maximum output is at or
          above your figure: it will run on a lower setting most of the time, which is quieter.
        </p>
      </div>
    </section>
  );
}
