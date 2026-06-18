import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets } from "lucide-react";
import { productos, mejoresPorCategoria } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { CATEGORIAS } from "@/data/site";
import { ComparisonTable } from "@/components/site/ComparisonTable";
import { Selector } from "@/components/site/Selector";
import { MethodologyBlock } from "@/components/site/MethodologyBlock";
import { FAQ } from "@/components/site/FAQ";
import { AffiliateDisclosure } from "@/components/site/AffiliateDisclosure";
import { IntroOverlay } from "@/components/site/IntroOverlay";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HumiSalud — Mejores humidificadores 2026, análisis y guía de compra" },
      { name: "description", content: "Compara humidificadores con criterio: cálculo por m², cuánto gastan de luz y reseñas verificadas. Para bebés, dormitorio, salón y alergias." },
      { property: "og:title", content: "HumiSalud — Guía editorial de humidificadores" },
      { property: "og:description", content: "Análisis técnico, comparativas filtrables y selector inteligente." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const rankingSlugs = Array.from(new Set([
    mejoresPorCategoria.general,
    mejoresPorCategoria.calidadPrecio,
    mejoresPorCategoria.alergias,
    mejoresPorCategoria.salon,
    mejoresPorCategoria.estanciasGrandes,
  ]));
  const ranking = rankingSlugs
    .map((slug) => productos.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 4);

  return (
    <>
      <IntroOverlay />
      <PageTitle />

      <CategoriasSection />
      <RankingSection productos={ranking} />
      <SelectorSection />
      <MethodSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

function PageTitle() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-4xl px-5 pt-14 pb-12 sm:pt-20 sm:pb-16 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-primary font-medium">Guía de compra · Actualizado junio 2026</p>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
          <span className="text-foreground">Mejores humidificadores de 2026:</span>{" "}
          <span className="text-primary">comparativa, análisis y guía de compra</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl border-y border-primary/25 py-4 font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground leading-[1.18]">
          Respira mejor esta noche: <span className="text-primary">acaba con la garganta seca, la nariz tapada y las noches a medias.</span>
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Hemos analizado <strong className="text-foreground font-medium">42 humidificadores ultrasónicos y evaporativos</strong> para dormitorio, bebé, salón y alergias. Comparamos rendimiento por m², ruido en dB, autonomía, limpieza y coste real de luz al mes.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-2 text-xs">
          {["Para bebé", "Dormitorio", "Salón grande", "Alergias y asma", "Bajo consumo", "Silenciosos"].map((t) => (
            <span key={t} className="rounded-full border border-border bg-card px-3 py-1.5 text-muted-foreground">{t}</span>
          ))}
        </div>
        <dl className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 rounded-2xl border border-border bg-secondary/40 p-5 sm:p-6">
          <div>
            <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">Analizados</dt>
            <dd className="mt-1 font-display text-2xl sm:text-3xl font-semibold">42</dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">Criterios</dt>
            <dd className="mt-1 font-display text-2xl sm:text-3xl font-semibold">6</dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">Patrocinios</dt>
            <dd className="mt-1 font-display text-2xl sm:text-3xl font-semibold">0</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}



function CategoriasSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <SectionHeader eyebrow="Por uso" title="¿Para qué lo vas a usar?" subtitle="Cada situación pesa cosas distintas. El cuarto del bebé pide silencio; el salón pide caudal." />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIAS.map((c) => (
          <Link key={c.slug} to="/categoria/$slug" params={{ slug: c.slug }}
            className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-card">
            <div className="flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-mist text-primary">
                <Droplets className="h-5 w-5" />
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{c.titulo}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function RankingSection({ productos }: { productos: typeof import("@/data/products").productos }) {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionHeader eyebrow="Ranking 2026" title="Los cuatro que recomendaríamos hoy" subtitle="Si vas con prisa. Si quieres entender por qué están aquí, échale un ojo a cómo trabajamos." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {productos.map((p, i) => (
            <ProductCard key={p.slug} producto={p} badge={i === 0 ? "Mejor opción" : i === 1 ? "Calidad-precio" : undefined} highlight={i === 0} />
          ))}
        </div>
        <div className="mt-8">
          <AffiliateDisclosure compact />
        </div>
        <div className="mt-8 overflow-hidden">
          <ComparisonTable productos={productos} />
        </div>
        <div className="mt-6 text-center">
          <Link to="/mejores-humidificadores" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4">
            Ver el ranking completo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SelectorSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <SectionHeader eyebrow="Selector" title="Dinos cómo es la habitación y te decimos cuál" subtitle="Cinco preguntas. Nada de formularios eternos." />
      <div className="mt-10">
        <Selector />
      </div>
    </section>
  );
}

function MethodSection() {
  return (
    <section className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionHeader eyebrow="Cómo trabajamos" title="Por qué esta web no se parece al resto" subtitle="Primero el análisis, después las comisiones. Nunca al revés." />
        <div className="mt-10">
          <MethodologyBlock />
        </div>
        <div className="mt-8 text-center">
          <Link to="/metodologia" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4">
            Leer la metodología completa <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <FAQ items={[
        { q: "¿Probáis los humidificadores físicamente?", a: "No. Lo decimos sin rodeos: trabajamos con las fichas técnicas oficiales y un montón de reseñas verificadas. Nos parece mejor eso que inventarnos pruebas que no hemos hecho." },
        { q: "¿Cómo elegís los modelos del ranking?", a: "Usamos una rúbrica con pesos por rendimiento por m², calidad-precio, facilidad de limpieza, ruido, autonomía y recambios. Está publicada entera en Metodología." },
        { q: "¿Por qué algunos precios son un rango o aparecen pendientes?", a: "Los precios de electrónica cambian casi a diario. Cuando no podemos garantizar la cifra exacta, lo marcamos como pendiente en vez de poner un número que mañana sea mentira." },
        { q: "¿Cuál es la humedad ideal en casa?", a: "Entre el 40% y el 60% (referencia del RITE y de Philips). Por debajo del 30% se notan piel y mucosas secas; por encima del 65% empieza a salir moho." },
        { q: "¿Puede ser peligroso un humidificador?", a: "Si no lo limpias, sí. Hay casos médicos documentados de neumonitis (la llamada \"fiebre del humidificador\"). Agua destilada, cambio diario y limpieza cada dos o tres días te evitan el problema." },
      ]} />
    </section>
  );
}

function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/90 to-mist-deep p-8 sm:p-14 text-primary-foreground">
        <div className="vapor-bg opacity-30" aria-hidden />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Cinco preguntas y te decimos cuál.
          </h2>
          <p className="mt-3 text-base text-primary-foreground/80">
            En vez de leerte diez listas que se parecen, dinos los metros de la habitación, el presupuesto y para qué lo quieres. Nosotros te decimos qué encaja.
          </p>
          <div className="mt-7">
            <Link to="/selector" className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground shadow-soft hover:translate-y-[-1px] transition-transform">
              Empezar <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
