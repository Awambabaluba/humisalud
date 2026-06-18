import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos legales — HumiSalud" },
      { name: "description", content: "Términos legales de uso de HumiSalud." },
      { property: "og:url", content: "/terminos" },
    ],
    links: [{ rel: "canonical", href: "/terminos" }],
  }),
  component: () => (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <Breadcrumbs items={[{ to: "/", label: "Inicio" }, { label: "Términos" }]} />
      <h1 className="mt-6 font-display text-4xl sm:text-5xl font-semibold tracking-tight">Términos legales</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed">
        <p>El contenido de HumiSalud es de carácter informativo y orientativo. No sustituye consejo médico. Verifica siempre el precio y disponibilidad en el comercio antes de comprar.</p>
        <p>HumiSalud no es responsable de los precios, stock, plazos de entrega ni postventa de los comercios enlazados.</p>
        <p><em>{`{{DATO_PENDIENTE: jurisdicción, identidad titular y datos completos de contacto}}`}</em>.</p>
      </div>
    </article>
  ),
});
