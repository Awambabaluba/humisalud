import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

function makeLegal(title: string, slug: string, body: React.ReactNode) {
  return {
    head: () => ({
      meta: [
        { title: `${title} — HumiSalud` },
        { name: "description", content: `${title} de HumiSalud.` },
        { name: "robots", content: "index,follow" },
        { property: "og:url", content: `/${slug}` },
      ],
      links: [{ rel: "canonical", href: `/${slug}` }],
    }),
    component: () => (
      <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <Breadcrumbs items={[{ to: "/", label: "Inicio" }, { label: title }]} />
        <h1 className="mt-6 font-display text-4xl sm:text-5xl font-semibold tracking-tight">{title}</h1>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/90">{body}</div>
      </article>
    ),
  };
}

export const Route = createFileRoute("/privacidad")(makeLegal("Política de privacidad", "privacidad", (
  <>
    <p>Esta política describe cómo HumiSalud trata los datos personales que puedas facilitar al usar este sitio.</p>
    <p><strong>Datos recogidos.</strong> No solicitamos datos personales para navegar. Si nos escribes por email recogemos únicamente los datos necesarios para responder.</p>
    <p><strong>Cookies.</strong> Ver <a href="/cookies" className="text-primary underline">política de cookies</a>.</p>
    <p><strong>Derechos.</strong> Puedes ejercer tus derechos de acceso, rectificación y supresión escribiendo a hola@humisalud.example.</p>
    <p><em>{`{{DATO_PENDIENTE: identidad del responsable, base legal completa y plazos de conservación}}`}</em>.</p>
  </>
)));
