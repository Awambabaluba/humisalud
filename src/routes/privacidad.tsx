import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

function makeLegal(title: string, slug: string, body: React.ReactNode) {
  return {
    head: () => ({
      meta: [
        { title: `${title} — HumiSalud` },
        { name: "description", content: `${title} de HumiSalud.` },
        { name: "robots", content: "noindex,follow" },
        { property: "og:url", content: `https://humisalud.com/${slug}` },
      ],
      links: [{ rel: "canonical", href: `https://humisalud.com/${slug}` }],
    }),
    component: () => (
      <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <Breadcrumbs items={[{ to: "/", label: "Inicio" }, { label: title }]} />
        <h1 className="mt-6 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          {title}
        </h1>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/90">{body}</div>
      </article>
    ),
  };
}

export const Route = createFileRoute("/privacidad")(
  makeLegal(
    "Política de privacidad",
    "privacidad",
    <>
      <p>
        <strong>Responsable del tratamiento.</strong> Juan David Marqués Quiles (particular, NIF
        52658246E), con domicilio en Valencia, España. Contacto:{" "}
        <a href="mailto:juandavidmarquesq@gmail.com" className="text-primary underline">
          juandavidmarquesq@gmail.com
        </a>
        .
      </p>
      <p>
        Esta política describe cómo HumiSalud trata los datos personales que puedas facilitar al
        usar este sitio.
      </p>
      <p>
        <strong>Datos recogidos y base legal.</strong> No solicitamos datos personales para navegar.
        Si nos escribes por email recogemos únicamente los datos necesarios para responder (nombre y
        dirección de correo), en base al interés legítimo de atender tu consulta. Estos datos no se
        ceden a terceros y se conservan solo mientras dure la gestión de tu consulta, salvo
        obligación legal de conservarlos más tiempo.
      </p>
      <p>
        <strong>Cookies.</strong> Ver{" "}
        <a href="/cookies" className="text-primary underline">
          política de cookies
        </a>
        .
      </p>
      <p>
        <strong>Derechos.</strong> Puedes ejercer tus derechos de acceso, rectificación, supresión,
        oposición y portabilidad escribiendo a{" "}
        <a href="mailto:juandavidmarquesq@gmail.com" className="text-primary underline">
          juandavidmarquesq@gmail.com
        </a>
        . También puedes presentar una reclamación ante la Agencia Española de Protección de Datos
        (AEPD) si consideras que tus derechos no han sido atendidos.
      </p>
    </>,
  ),
);
