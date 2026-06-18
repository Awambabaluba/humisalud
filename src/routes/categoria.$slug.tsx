import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { productos, mejoresPorCategoria } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { ComparisonTable } from "@/components/site/ComparisonTable";
import { AffiliateDisclosure } from "@/components/site/AffiliateDisclosure";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CATEGORIAS } from "@/data/site";

const COPY: Record<string, { h1: string; lead: string; title: string; desc: string; filtro: (p: typeof productos[number]) => boolean; mejor: keyof typeof mejoresPorCategoria }> = {
  bebe: {
    h1: "Mejores humidificadores para bebé en 2026",
    lead: "Vapor frío, por debajo de 35 dB y fáciles de rellenar sin acrobacias. En la habitación del bebé, vapor caliente nunca.",
    title: "Humidificador para bebé 2026 — HumiSalud",
    desc: "Humidificadores seguros para el cuarto del bebé: vapor frío, silenciosos y fáciles de limpiar.",
    filtro: (p) => p.idealPara.some((u) => /bebé|infantil/i.test(u)) || ["Ultrasónico","Evaporativo"].includes(p.tecnologia),
    mejor: "bebe",
  },
  dormitorio: {
    h1: "Humidificadores silenciosos para dormir",
    lead: "Menos de 35 dB y con depósito suficiente para no quedarte a medias a las cuatro de la mañana.",
    title: "Humidificador silencioso para dormitorio — HumiSalud",
    desc: "Modelos pensados para el dormitorio: silenciosos, con autonomía nocturna y fáciles de limpiar.",
    filtro: (p) => p.idealPara.some((u) => /dormitorio|nocturno/i.test(u)),
    mejor: "dormitorioSilencioso",
  },
  salon: {
    h1: "Humidificadores para salón y estancias grandes",
    lead: "Caudal de sobra, depósito amplio y modo automático para espacios de 25 a 55 m².",
    title: "Humidificador para salón 2026 — HumiSalud",
    desc: "Humidificadores con cobertura suficiente para salones y habitaciones grandes.",
    filtro: (p) => typeof p.coberturaM2 === "number" && p.coberturaM2 >= 30,
    mejor: "salon",
  },
  alergias: {
    h1: "Humidificadores para alergias y asma",
    lead: "Evaporativos: ni rastro de polvo blanco, y modelos con filtración cuidada.",
    title: "Humidificador para alergias — HumiSalud",
    desc: "Humidificadores recomendados para personas con alergias o asma: evaporativos sin polvo blanco.",
    filtro: (p) => p.tecnologia === "Evaporativo" || p.idealPara.some((u) => /alergia|asma/i.test(u)),
    mejor: "alergias",
  },
  inteligente: {
    h1: "Humidificadores con app y conectados",
    lead: "Control desde el móvil, Alexa o Google, y programación automática.",
    title: "Humidificador inteligente — HumiSalud",
    desc: "Humidificadores conectados con app, Alexa, Google y modos automáticos.",
    filtro: (p) => ["UV-C"].includes(p.tecnologia) || /inteligente|smart|app/i.test(p.caracteristicas.join(" ")),
    mejor: "inteligente",
  },
  economico: {
    h1: "Humidificadores baratos (por menos de 35 €)",
    lead: "Para habitaciones pequeñas o si solo lo vas a encender alguna noche suelta.",
    title: "Humidificador económico — HumiSalud",
    desc: "Humidificadores baratos con calidad decente para dormitorios pequeños y uso ocasional.",
    filtro: (p) => p.rango === "Económico",
    mejor: "economico",
  },
};

export const Route = createFileRoute("/categoria/$slug")({
  loader: ({ params }) => {
    const copy = COPY[params.slug];
    if (!copy) throw notFound();
    return { slug: params.slug, title: copy.title, desc: copy.desc };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    return {
      meta: [
        { title: loaderData.title },
        { name: "description", content: loaderData.desc },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.desc },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/categoria/${loaderData.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-20 text-center">
      <h1 className="font-display text-3xl font-semibold">Categoría no encontrada</h1>
      <Link to="/" className="mt-4 inline-block text-primary underline">Inicio</Link>
    </div>
  ),
  component: CategoriaPage,
});

function CategoriaPage() {
  const { slug } = Route.useLoaderData();
  const copy = COPY[slug]!;
  const lista = productos.filter(copy.filtro);

  const cat = CATEGORIAS.find((c) => c.slug === slug);
  return (
    <article className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <Breadcrumbs items={[{ to: "/", label: "Inicio" }, { label: cat?.titulo ?? "Categoría" }]} />
      <header className="mt-6 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">Categoría</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">{copy.h1}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{copy.lead}</p>
      </header>
      <div className="mt-8"><AffiliateDisclosure /></div>
      <section className="mt-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((p, i) => (
            <ProductCard key={p.slug} producto={p} highlight={i === 0} badge={i === 0 ? "Mejor opción" : undefined} />
          ))}
        </div>
      </section>
      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">Comparativa</h2>
        <div className="mt-4"><ComparisonTable productos={lista} /></div>
      </section>
    </article>
  );
}
