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

      <section className="mt-14 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold">Qué gasta cada tecnología</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          La factura depende sobre todo de la tecnología. Un humidificador ultrasónico o evaporativo
          consume muy poco —del orden de 20 a 30 W—, así que tenerlo encendido varias horas al día
          apenas se nota: unos céntimos al mes. El salto de verdad lo dan los de vapor caliente: como
          hierven el agua, tiran de 200 a 400 W y pueden multiplicar por diez el gasto. Un modelo
          híbrido queda en medio según use frío o calor.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Con la luz a unos 0,15 €/kWh, un ultrasónico de 25 W ocho horas al día ronda 1 €/mes,
          mientras que un vapor caliente de 300 W en el mismo uso se va por encima de 10 €/mes. Para
          gastar menos, usa el modo automático (así no nebuliza de más) y tira de vapor frío salvo que
          necesites calentar el ambiente.
        </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold">Preguntas frecuentes</h2>
        <div className="mt-5 space-y-5">
          <div>
            <h3 className="font-medium text-foreground">¿Cuánto gasta de luz un humidificador al mes?</h3>
            <p className="mt-1 text-muted-foreground">
              Un ultrasónico o evaporativo (20-30 W) apenas 1-2 €/mes con uso normal. Un vapor caliente
              (200-400 W) puede superar los 10 €/mes.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground">¿Qué tecnología es la más barata de tener?</h3>
            <p className="mt-1 text-muted-foreground">
              El ultrasónico y el evaporativo, porque no calientan el agua. El vapor caliente es, con
              diferencia, el que más consume.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground">¿Consume mucha agua?</h3>
            <p className="mt-1 text-muted-foreground">
              De medio a un litro por hora al máximo caudal, según el modelo. El modo automático reduce
              el consumo al mantener solo la humedad justa.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
