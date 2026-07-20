import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProducto, productos } from "@/data/products";
import { getPostsRelacionadosConProducto } from "@/data/blog";
import { AffiliateButton } from "@/components/site/AffiliateButton";
import { PriceTag } from "@/components/site/PriceTag";
import { AffiliateDisclosure } from "@/components/site/AffiliateDisclosure";
import { ProsCons } from "@/components/site/ProsCons";
import { ProductCard } from "@/components/site/ProductCard";
import { RatingBar } from "@/components/site/RatingBar";
import { FAQ } from "@/components/site/FAQ";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PRODUCT_IMAGES, PRODUCT_IMAGE_CREDITS } from "@/assets/product-images";
import { HealthInsights } from "@/components/site/HealthInsights";
import { AtributosClave } from "@/components/site/AtributosClave";
import { CalendarDays, Droplet, Gauge, Ruler, Volume2 } from "lucide-react";

export const Route = createFileRoute("/producto/$slug")({
  loader: ({ params }) => {
    const p = getProducto(params.slug);
    if (!p) throw notFound();
    return { producto: p };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.producto;
    const title = p ? `${p.nombre} — análisis HumiSalud` : "Análisis de producto — HumiSalud";
    const desc = p
      ? `Análisis editorial del ${p.nombre} (${p.marca}): tecnología ${p.tecnologia}, ventajas, inconvenientes y para quién es.`
      : "";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        {
          property: "og:url",
          content: p ? `https://humisalud.com/producto/${p.slug}` : "https://humisalud.com/",
        },
      ],
      links: p ? [{ rel: "canonical", href: `https://humisalud.com/producto/${p.slug}` }] : [],
      scripts: p
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                name: p.nombre,
                brand: { "@type": "Brand", name: p.marca },
                description: p.resumen,
                ...(typeof p.precioMin === "number" && p.precioComprobadoEn
                  ? {
                      offers: {
                        "@type": "Offer",
                        price: p.precioMin.toFixed(2),
                        priceCurrency: "EUR",
                        availability: "https://schema.org/InStock",
                        url: `https://humisalud.com/producto/${p.slug}`,
                        priceValidUntil: p.precioComprobadoEn,
                      },
                    }
                  : {}),
                review: {
                  "@type": "Review",
                  author: { "@type": "Organization", name: "HumiSalud" },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: p.valoracionEditorial,
                    bestRating: 100,
                  },
                },
              }),
            },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-20 text-center">
      <h1 className="font-display text-3xl font-semibold">Producto no encontrado</h1>
      <Link to="/mejores-humidificadores" className="mt-4 inline-block text-primary underline">
        Ver el ranking
      </Link>
    </div>
  ),
  component: ProductoPage,
});

function ProductoPage() {
  const { producto: p } = Route.useLoaderData();
  const alternativas = productos.filter((x) => x.slug !== p.slug).slice(0, 3);
  const postsRelacionados = getPostsRelacionadosConProducto(p.nombre).slice(0, 3);

  return (
    <article className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
      <Breadcrumbs
        items={[
          { to: "/", label: "Inicio" },
          { to: "/mejores-humidificadores", label: "Mejores humidificadores" },
          { label: p.nombre },
        ]}
      />

      <header className="mt-6 grid gap-8 md:grid-cols-[1.4fr_1fr] items-start">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{p.marca}</p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            {p.nombre}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{p.resumen}</p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Valoración editorial
              </p>
              <p className="font-display text-3xl font-semibold">
                {p.valoracionEditorial}
                <span className="text-base text-muted-foreground">/100</span>
              </p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-border" />
            <div className="min-w-[180px]">
              <RatingBar value={p.valoracionEditorial} />
              <p className="mt-2 text-xs text-muted-foreground">Sobre nuestra rúbrica</p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-5 flex-wrap">
            <PriceTag producto={p} size="lg" />
            <AffiliateButton
              href={p.enlaceAfiliado}
              comercio={p.comercio}
              size="lg"
              producto={p.slug}
              nombre={p.nombre}
              marca={p.marca}
              posicion="ficha-hero"
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" /> Actualizado el{" "}
            {new Date(p.fechaActualizacion).toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <aside className="rounded-3xl border border-border bg-card p-6 shadow-soft">
          {PRODUCT_IMAGES[p.slug] && (
            <div className="-mx-6 -mt-6 mb-5 aspect-square rounded-t-3xl bg-gradient-to-br from-mist via-card to-background border-b border-border overflow-hidden">
              <img
                src={PRODUCT_IMAGES[p.slug]}
                alt={`${p.nombre} — imagen oficial ${PRODUCT_IMAGE_CREDITS[p.slug] ?? p.marca}`}
                className="h-full w-full object-contain p-6"
              />
            </div>
          )}
          <h2 className="font-display text-base font-semibold">Ficha rápida</h2>
          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <Spec icon={<Droplet />} label="Capacidad" value={fmt(p.capacidadL, "L")} />
            <Spec icon={<Ruler />} label="Cobertura" value={fmt(p.coberturaM2, "m²")} />
            <Spec icon={<Volume2 />} label="Ruido" value={fmt(p.ruidoDb, "dB")} />
            <Spec icon={<Gauge />} label="Autonomía" value={fmt(p.autonomiaH, "h")} />
          </dl>
          <p className="mt-4 text-xs text-muted-foreground">
            Tecnología: <strong className="text-foreground font-medium">{p.tecnologia}</strong>
          </p>
          {PRODUCT_IMAGE_CREDITS[p.slug] && (
            <p className="mt-3 text-[11px] text-muted-foreground">
              Imagen: cortesía de {PRODUCT_IMAGE_CREDITS[p.slug]}.
            </p>
          )}
        </aside>
      </header>

      <div className="mt-10">
        <AffiliateDisclosure />
      </div>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">Ventajas e inconvenientes</h2>
        <div className="mt-5">
          <ProsCons ventajas={p.ventajas} inconvenientes={p.inconvenientes} />
        </div>
      </section>

      <AtributosClave atributos={p.atributos} />

      <HealthInsights tecnologia={p.tecnologia} idealPara={p.idealPara} />

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        <Block title="A quién le encaja" items={p.idealPara} tone="positive" />
        <Block title="A quién no" items={p.noRecomendadoPara} tone="negative" />
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">Características técnicas</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm">
          {p.caracteristicas.map((c: string) => (
            <li key={c} className="rounded-xl border border-border bg-card px-4 py-3">
              {c}
            </li>
          ))}
        </ul>
      </section>

      {p.datosPendientes && p.datosPendientes.length > 0 && (
        <aside className="mt-10 rounded-2xl border border-dashed border-border bg-secondary/40 p-5 text-sm">
          <strong className="font-medium">Aún sin confirmar:</strong> {p.datosPendientes.join(", ")}
          . Lo dejamos pendiente antes que ponerte un número que no podamos respaldar.
        </aside>
      )}

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold">Alternativas</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {alternativas.map((a) => (
            <ProductCard key={a.slug} producto={a} />
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-border bg-secondary/40 p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold">Nuestra opinión</h2>
        <p className="mt-3 text-base leading-relaxed">{p.resumen}</p>
        <p className="mt-3 text-sm text-muted-foreground">
          Este humidificador no lo hemos tenido en casa. La valoración sale de la ficha oficial, del
          precio que hemos visto y de cruzar reseñas verificadas. Si quieres saber cómo lo puntuamos
          exactamente, mira nuestra{" "}
          <Link to="/metodologia" className="underline underline-offset-4">
            página de metodología
          </Link>
          .
        </p>
        <div className="mt-5">
          <AffiliateButton
            href={p.enlaceAfiliado}
            comercio={p.comercio}
            size="lg"
            producto={p.slug}
            nombre={p.nombre}
            marca={p.marca}
            posicion="ficha-cta"
          />
        </div>
      </section>

      {postsRelacionados.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold">
            Artículos que hablan de este modelo
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {postsRelacionados.map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="block rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40"
              >
                <p className="text-xs uppercase tracking-wider text-primary font-medium">
                  {post.categoria}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                  {post.titulo}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.resumen}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-14">
        <FAQ
          items={[
            {
              q: "¿Lo habéis probado en casa?",
              a: "No. Lo analizamos con la ficha técnica oficial y las reseñas verificadas de quien sí lo ha comprado.",
            },
            {
              q: "¿El precio que ponéis es el definitivo?",
              a: "Es lo que vimos en la tienda el día de la última actualización. En electrónica los precios bailan, así que compruébalo antes de pasar por caja.",
            },
            {
              q: "¿Por qué este y no otro?",
              a: "Porque al pasarlo por nuestra rúbrica (rendimiento, calidad-precio, limpieza, ruido) sale por delante de las alternativas comparables de su gama.",
            },
          ]}
        />
      </section>
    </article>
  );
}

function Spec({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl bg-secondary/60 px-3 py-2.5">
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
        <span className="text-primary [&_svg]:h-3.5 [&_svg]:w-3.5">{icon}</span>
        {label}
      </div>
      <div className="mt-1 font-display font-semibold tabular-nums">{value}</div>
    </div>
  );
}

function Block({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "positive" | "negative";
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <h3
        className={`font-display text-base font-semibold ${tone === "positive" ? "text-foreground" : "text-foreground"}`}
      >
        {title}
      </h3>
      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground list-disc pl-5">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function fmt(v: number | "DATO_PENDIENTE" | undefined, unit: string) {
  if (v === undefined || v === "DATO_PENDIENTE") return "—";
  return `${v} ${unit}`;
}
