import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos legales — HumiSalud" },
      { name: "description", content: "Términos legales de uso de HumiSalud." },
      { name: "robots", content: "noindex,follow" },
      { property: "og:url", content: "https://humisalud.com/terminos" },
    ],
    links: [{ rel: "canonical", href: "https://humisalud.com/terminos" }],
  }),
  component: () => (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <Breadcrumbs items={[{ to: "/", label: "Inicio" }, { label: "Términos" }]} />
      <h1 className="mt-6 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
        Términos legales
      </h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed">
        <p>
          <strong>Titular del sitio.</strong> HumiSalud es un proyecto editorial gestionado por Juan
          David Marqués Quiles (particular, NIF 52658246E), con domicilio en Valencia, España. Para
          cualquier consulta legal o ejercicio de derechos, puedes escribir a{" "}
          <a href="mailto:juandavidmarquesq@gmail.com" className="text-primary underline">
            juandavidmarquesq@gmail.com
          </a>
          .
        </p>
        <p>
          El contenido de HumiSalud es de carácter informativo y orientativo. No sustituye consejo
          médico. Verifica siempre el precio y disponibilidad en el comercio antes de comprar.
        </p>
        <p>
          HumiSalud no es responsable de los precios, stock, plazos de entrega ni postventa de los
          comercios enlazados.
        </p>
        <p>
          Estos términos se rigen por la legislación española. Para cualquier disputa relacionada
          con el uso del sitio, las partes se someten a los juzgados y tribunales de Valencia
          (España), salvo que la normativa de consumidores aplicable indique otro fuero.
        </p>
      </div>
    </article>
  ),
});
