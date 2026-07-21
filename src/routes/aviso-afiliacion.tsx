import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/aviso-afiliacion")({
  head: () => ({
    meta: [
      { title: "Aviso de afiliación — HumiSalud" },
      {
        name: "description",
        content:
          "Cómo funciona el programa de afiliación de HumiSalud y qué relación tenemos con Amazon y otros comercios.",
      },
      { name: "robots", content: "noindex,follow" },
      { property: "og:title", content: "Aviso de afiliación — HumiSalud" },
      { property: "og:url", content: "https://humisalud.com/aviso-afiliacion" },
    ],
    links: [{ rel: "canonical", href: "https://humisalud.com/aviso-afiliacion" }],
  }),
  component: () => (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <Breadcrumbs items={[{ to: "/", label: "Inicio" }, { label: "Aviso de afiliación" }]} />
      <h1 className="mt-6 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
        Aviso de afiliación
      </h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed">
        <p>
          HumiSalud participa en el programa Amazon Afiliados España y en redes de afiliación de
          terceros (Awin / PcComponentes, entre otras). Esto significa que parte de los enlaces de
          esta web son <strong>enlaces de afiliación</strong>.
        </p>
        <p>
          Si haces clic en uno de esos enlaces y compras un producto, HumiSalud puede recibir una
          pequeña comisión <strong>sin coste adicional para ti</strong>.
        </p>
        <p>
          Identificamos visualmente los CTA de afiliación y marcamos los enlaces con los atributos{" "}
          <code>rel="nofollow sponsored"</code> conforme a las directrices vigentes.
        </p>
        <p>
          Las comisiones no condicionan nuestras recomendaciones: aplicamos la misma metodología
          editorial a todos los productos.
        </p>
        <p>
          HumiSalud es un participante en el Programa de Afiliados de Amazon EU, un programa de
          publicidad diseñado para proporcionar a los sitios web un medio para obtener ingresos por
          publicidad mediante enlaces a Amazon.es.
        </p>
      </div>
    </article>
  ),
});
