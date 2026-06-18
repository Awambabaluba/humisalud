import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre HumiSalud" },
      { name: "description", content: "Quiénes somos y por qué hemos creado una guía editorial sobre humidificadores en lugar de otro catálogo de enlaces." },
      { property: "og:title", content: "Sobre HumiSalud" },
      { property: "og:url", content: "/sobre-nosotros" },
    ],
    links: [{ rel: "canonical", href: "/sobre-nosotros" }],
  }),
  component: () => (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <Breadcrumbs items={[{ to: "/", label: "Inicio" }, { label: "Sobre nosotros" }]} />
      <h1 className="mt-6 font-display text-4xl sm:text-5xl font-semibold tracking-tight">Sobre HumiSalud</h1>
      <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/90">
        <p>HumiSalud nació un poco harto: las listas de "los 10 mejores humidificadores" se parecen todas, casi nunca cuentan con qué criterio están hechas y muchas presumen de pruebas que es imposible comprobar.</p>
        <p>Aquí hacemos otra cosa. Miramos los datos técnicos de cada modelo, los cruzamos con los metros de tu casa, calculamos lo que te va a subir la factura y te lo contamos tal cual. Si nos falta un dato, lo decimos. Si una cifra viene del fabricante, lo decimos. Si algo cambia, lo actualizamos.</p>
        <p>Vivimos de la afiliación: si compras a través de uno de nuestros enlaces, podemos llevarnos una comisión <em>(a ti no te cuesta ni un céntimo más)</em>. Eso no quiere decir que recomendemos lo que más comisión deja; eso lo nota cualquiera en tres clics y se acabó la web.</p>
      </div>
    </article>
  ),
});
