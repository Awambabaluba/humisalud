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
        <p>Esta política explica qué cookies y tecnologías similares usa HumiSalud, gestionado por Juan David Marqués Quiles (particular, NIF 52658246E), con domicilio en Valencia, España. Para cualquier duda, escribe a <a href="mailto:juandavidmarquesq@gmail.com" className="text-primary underline">juandavidmarquesq@gmail.com</a>.</p>

        <p><strong>Estado actual: HumiSalud no instala cookies propias de analítica ni de marketing.</strong> A día de hoy no usamos Google Analytics ni ningún otro sistema de medición, así que no hace falta un banner de consentimiento de cookies para esos fines: simplemente no las activamos todavía.</p>

        <h2 className="font-display text-xl font-semibold mt-4">Cookies técnicas necesarias</h2>
        <p>El sitio no requiere ninguna cookie propia para funcionar: la navegación, el idioma y el contenido se gestionan sin guardar identificadores en tu navegador.</p>

        <h2 className="font-display text-xl font-semibold mt-4">Recursos de terceros que sí cargamos</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Google Fonts</strong> (fonts.googleapis.com / fonts.gstatic.com): cargamos las tipografías del sitio desde los servidores de Google. Es un recurso estático; Google puede registrar tu dirección IP al solicitarlo, igual que con cualquier petición a un servidor externo, pero no se asocia a una cookie de seguimiento por nuestra parte.</li>
          <li><strong>Enlaces de afiliados (Amazon y similares)</strong>: cuando haces clic en un botón "Ver precio en Amazon" y llegas a su web, Amazon puede instalar sus propias cookies para gestionar tu sesión de compra y la comisión de afiliación. Esas cookies las gestiona Amazon, no nosotros; te recomendamos revisar su política de cookies si quieres más detalle.</li>
        </ul>

        <h2 className="font-display text-xl font-semibold mt-4">Si en el futuro activamos analítica</h2>
        <p>Si en algún momento incorporamos Google Analytics (GA4) u otra herramienta de medición, lo haremos con consentimiento denegado por defecto y añadiremos un banner de cookies para que decidas si lo aceptas antes de que se active ninguna cookie no esencial. Actualizaremos esta página en cuanto eso ocurra.</p>
      </div>
    </article>
  ),
});
