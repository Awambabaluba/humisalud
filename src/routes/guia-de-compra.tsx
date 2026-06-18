import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FAQ } from "@/components/site/FAQ";
import { ProductCard } from "@/components/site/ProductCard";
import { productos, mejoresPorCategoria } from "@/data/products";

export const Route = createFileRoute("/guia-de-compra")({
  head: () => ({
    meta: [
      { title: "Guía de compra de humidificadores 2026 — HumiSalud" },
      { name: "description", content: "Cómo elegir un humidificador en 2026: tecnología, m², ruido, mantenimiento y lo que cuesta tenerlo encendido." },
      { property: "og:title", content: "Guía de compra de humidificadores 2026" },
      { property: "og:url", content: "/guia-de-compra" },
    ],
    links: [{ rel: "canonical", href: "/guia-de-compra" }],
  }),
  component: GuiaCompra,
});

function GuiaCompra() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16 prose-editorial">
      <Breadcrumbs items={[{ to: "/", label: "Inicio" }, { label: "Guía de compra" }]} />
      <header className="mt-6">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">Guía</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          Cómo elegir tu humidificador en 2026
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Lo que de verdad cambia tu compra, lo que es puro marketing y un par de cosas que casi nadie te cuenta.
        </p>
      </header>

      <Section title="1. Elige la tecnología antes que la marca">
        <p>Hay cuatro grandes familias y cada una sirve para una cosa distinta:</p>
        <ul>
          <li><strong>Ultrasónicos</strong> (vapor frío): los más vendidos, silenciosos y baratos. Si usas agua del grifo dejan el famoso "polvo blanco".</li>
          <li><strong>Evaporativos</strong>: nada de polvo blanco y se autorregulan. Eso sí, hay que cambiar el filtro.</li>
          <li><strong>Vapor caliente</strong>: esterilizan el agua, pero consumen mucho y queman. Para bebés, ni te lo plantees.</li>
          <li><strong>Híbridos y UV-C</strong>: combinan ventajas de los anteriores y, como era de esperar, cuestan más.</li>
        </ul>
      </Section>

      <Section title="2. Calcula los m² antes de mirar el precio">
        <p>El error típico es comprar por estética: o te quedas corto de caudal o te pasas y disparas la humedad por encima del 65%. Lo recomendado en casa está entre el <strong>40 y el 60%</strong> (RITE y Philips). Si te da pereza calcularlo, el <Link to="/selector" className="underline">selector</Link> cruza tus metros con el caudal real de cada modelo.</p>
      </Section>

      <Section title="3. Mira lo que cuesta a tres años, no la etiqueta del día">
        <p>Un evaporativo barato puede salirte más caro a tres años por culpa del filtro. Antes de comprar, comprueba: precio del recambio, cada cuánto hay que cambiarlo y consumo eléctrico anual (un ultrasónico ronda 15–25 €/año tirándolo de uso).</p>
      </Section>

      <Section title="4. La limpieza importa más que la marca">
        <p>Hay casos médicos documentados de la llamada <strong>fiebre del humidificador</strong> (una neumonitis por hipersensibilidad). Para evitarla:</p>
        <ul>
          <li>Agua destilada siempre que puedas.</li>
          <li>Cambia el agua todos los días.</li>
          <li>Limpia el depósito cada dos o tres días.</li>
          <li>Cambia los filtros cuando toque (por ejemplo, el Philips FY3446 dura hasta 6 meses).</li>
        </ul>
      </Section>

      <Section title="5. Señales para desconfiar">
        <ul>
          <li>"99,9% antibacteriano" sin citar laboratorio: lo dice el fabricante, no es una comprobación independiente.</li>
          <li>Análisis donde todo es maravilloso: ahí no hay metodología, hay copiar y pegar.</li>
          <li>Cuentas atrás del tipo "últimas 3 unidades": están ahí para meterte prisa, nada más.</li>
        </ul>
      </Section>

      <section className="mt-14 not-prose">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Modelos que cumplen lo de arriba</h2>
        <p className="mt-2 text-sm text-muted-foreground">Cuatro ejemplos para que veas la teoría aplicada. Pincha en "Ver análisis completo" para la ficha entera.</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {Array.from(new Set([
            mejoresPorCategoria.general,
            mejoresPorCategoria.alergias,
            mejoresPorCategoria.economico,
            mejoresPorCategoria.salon,
          ]))
            .map((slug) => productos.find((p) => p.slug === slug))
            .filter((p): p is NonNullable<typeof p> => Boolean(p))
            .slice(0, 4)
            .map((p) => <ProductCard key={p.slug} producto={p} />)}
        </div>
      </section>

      <FAQ items={[
        { q: "¿Hay una tecnología mejor que las demás?", a: "Depende del uso. Para dormitorio o cuarto del bebé, ultrasónico con agua destilada. Si eres alérgico o no soportas el polvo blanco, evaporativo. El vapor caliente, solo en adultos y con un ojo encima." },
        { q: "¿Vale cualquier agua?", a: "No. En zonas de agua dura, el grifo te va a dejar polvo blanco mineral por toda la habitación. Usa destilada o un cartucho antical." },
      ]} />
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 text-base leading-relaxed text-foreground/90 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul>li]:mt-1 [&_a]:text-primary [&_a]:underline-offset-4 [&_a]:hover:underline">
        {children}
      </div>
    </section>
  );
}
