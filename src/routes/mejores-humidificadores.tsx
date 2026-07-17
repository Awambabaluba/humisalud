import { createFileRoute, Link } from "@tanstack/react-router";
import { productos, mejoresPorCategoria, getProducto } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { ComparisonTable } from "@/components/site/ComparisonTable";
import { AffiliateDisclosure } from "@/components/site/AffiliateDisclosure";
import { FAQ } from "@/components/site/FAQ";
import { MethodologyBlock } from "@/components/site/MethodologyBlock";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { getBlogPost } from "@/data/blog";
import { ArrowRight } from "lucide-react";

const TITLE = "Mejores humidificadores 2026: ranking editorial HumiSalud";
const DESC =
  "Ranking 2026 con cálculo por m², cuánto gastan de luz y nivel de ruido. Mejor opción general, calidad-precio, barato, bebé y dormitorio.";

export const Route = createFileRoute("/mejores-humidificadores")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://humisalud.com/mejores-humidificadores" },
    ],
    links: [{ rel: "canonical", href: "https://humisalud.com/mejores-humidificadores" }],
  }),
  component: Ranking,
});

function Ranking() {
  const slots: { key: keyof typeof mejoresPorCategoria; titulo: string; bajada: string }[] = [
    {
      key: "general",
      titulo: "Mejor en general",
      bajada:
        "El que recomendaríamos a casi cualquiera que entra por la puerta sin tener claro lo que quiere.",
    },
    {
      key: "calidadPrecio",
      titulo: "Mejor calidad-precio",
      bajada: "El que mejor equilibra prestaciones, autonomía y lo que te van a cobrar.",
    },
    {
      key: "economico",
      titulo: "Mejor barato",
      bajada:
        "Menos de 35 € para habitaciones pequeñas o si solo lo vas a encender de vez en cuando.",
    },
    {
      key: "bebe",
      titulo: "Mejor para bebé",
      bajada: "Silencioso, vapor frío y fácil de rellenar sin sustos.",
    },
    {
      key: "dormitorioSilencioso",
      titulo: "Mejor para dormir",
      bajada: "Por debajo de 35 dB y con depósito para aguantar toda la noche.",
    },
    {
      key: "alergias",
      titulo: "Mejor para alergias",
      bajada: "Evaporativos: nada de polvo blanco por toda la habitación.",
    },
    {
      key: "salon",
      titulo: "Mejor para el salón",
      bajada: "Caudal alto y modo automático para espacios de estar.",
    },
    {
      key: "inteligente",
      titulo: "Mejor conectado",
      bajada: "Con app, asistente de voz y automatizaciones.",
    },
    {
      key: "estanciasGrandes",
      titulo: "Mejor para espacios grandes",
      bajada: "Depósito XL para más de 40 m².",
    },
  ];

  return (
    <article className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
      <Breadcrumbs
        items={[{ to: "/", label: "Inicio" }, { label: "Mejores humidificadores 2026" }]}
      />
      <header className="mt-6">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
          Ranking · Edición 2026
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          Los mejores humidificadores de 2026
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Selección basada en fichas técnicas oficiales, reseñas verificadas y nuestra rúbrica
          (cuántos m² cubren, cuánto cuestan de tener encendidos, ruido y facilidad de limpieza).
          Última revisión: 17 de junio de 2026.
        </p>
      </header>

      <div className="mt-8">
        <AffiliateDisclosure />
      </div>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold">Comparativa rápida</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Todos los modelos del ranking, uno al lado del otro.
        </p>
        <div className="mt-5">
          <ComparisonTable productos={productos} />
        </div>
      </section>

      {slots.map(({ key, titulo, bajada }) => {
        const p = getProducto(mejoresPorCategoria[key]);
        if (!p) return null;
        return (
          <section key={key} className="mt-14">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{titulo}</p>
            <h2 className="mt-1 font-display text-2xl sm:text-3xl font-semibold">{p.nombre}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{bajada}</p>
            <div className="mt-5 grid gap-6 md:grid-cols-[1.2fr_1fr] items-start">
              <div className="space-y-4">
                <p className="text-base leading-relaxed">{p.resumen}</p>
                <div>
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Por qué está aquí
                  </h3>
                  <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                    {p.ventajas.slice(0, 3).map((v) => (
                      <li key={v}>{v}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    A quién le encaja
                  </h3>
                  <p className="mt-2 text-sm">{p.idealPara.join(" · ")}</p>
                </div>
                {p.datosPendientes && p.datosPendientes.length > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Aún por confirmar: {p.datosPendientes.join(", ")}.
                  </p>
                )}
              </div>
              <ProductCard producto={p} highlight />
            </div>
          </section>
        );
      })}

      <section className="mt-16">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold">Cómo elegir el tuyo</h2>
        <p className="mt-3 text-base text-muted-foreground">
          Tres preguntas que lo resuelven casi todo: cuántos m² tiene la habitación, cuánto ruido
          aguantas y si te hace falta vapor caliente. Si te quedas a medias, el{" "}
          <Link to="/selector" className="underline underline-offset-4 text-primary">
            selector
          </Link>{" "}
          te lleva de la mano.
        </p>
        <div className="mt-6">
          <MethodologyBlock compact />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold">Para profundizar antes de decidir</h2>
        <p className="mt-3 text-base text-muted-foreground">
          Si el ranking te sabe a poco, estos artículos del blog explican el porqué de casi todo lo
          de arriba.
        </p>
        <ul className="mt-5 space-y-3">
          {[
            "evaporativo-vs-ultrasonico-cual-elegir",
            "humedad-ideal-en-casa-2026",
            "fiebre-del-humidificador-prevencion",
          ]
            .map((slug) => getBlogPost(slug))
            .filter((p): p is NonNullable<typeof p> => Boolean(p))
            .map((p) => (
              <li key={p.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group flex items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40"
                >
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                  <span>
                    <span className="font-display text-base font-semibold">{p.titulo}</span>
                    <span className="mt-1 block text-sm text-muted-foreground line-clamp-2">
                      {p.resumen}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <section className="mt-16">
        <FAQ
          items={[
            {
              q: "¿Cada cuánto actualizáis este ranking?",
              a: "Revisamos precios y stock cada 30 días. Si algo cambia de verdad (sube mucho de precio, lo descatalogan o sale otro mejor al mismo precio), reordenamos.",
            },
            {
              q: "¿Hay enlaces de afiliación?",
              a: "Sí. Algunos llevan a Amazon, PcComponentes y alguna tienda más. Si compras desde ahí, nos llevamos una comisión pequeñita y a ti no te cuesta nada extra.",
            },
            {
              q: "¿Por qué no sale la marca X?",
              a: "Si no encontramos ficha técnica oficial accesible y reseñas verificadas suficientes, no lo metemos. Recomendar a ciegas no nos vale.",
            },
          ]}
        />
      </section>

      <section className="mt-16 rounded-3xl bg-gradient-to-br from-primary/90 to-mist-deep p-8 sm:p-10 text-primary-foreground">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold">
          ¿Quieres algo más a medida?
        </h2>
        <p className="mt-2 text-primary-foreground/80">
          Pásate por el selector y cuéntanos tu caso.
        </p>
        <Link
          to="/selector"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground"
        >
          Abrir el selector <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </article>
  );
}
