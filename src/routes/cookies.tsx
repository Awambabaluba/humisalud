import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de cookies — HumiSalud" },
      { name: "description", content: "Cookies utilizadas en HumiSalud." },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: () => (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <Breadcrumbs items={[{ to: "/", label: "Inicio" }, { label: "Política de cookies" }]} />
      <h1 className="mt-6 font-display text-4xl sm:text-5xl font-semibold tracking-tight">Política de cookies</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed">
        <p>Usamos cookies técnicas necesarias para el funcionamiento del sitio. No usamos cookies de marketing por defecto.</p>
        <p>Los clics en enlaces de afiliación pueden activar cookies de terceros (Amazon, Awin) gestionadas por esos comercios.</p>
        <p><em>{`{{DATO_PENDIENTE: tabla de cookies concretas tras integrar analítica}}`}</em>.</p>
      </div>
    </article>
  ),
});
