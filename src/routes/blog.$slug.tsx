import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { AffiliateButton } from "@/components/site/AffiliateButton";
import { AffiliateDisclosure } from "@/components/site/AffiliateDisclosure";
import { getBlogPost, blogPostsOrdenados } from "@/data/blog";
import { CalendarDays } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    const title = post ? `${post.titulo} — HumiSalud` : "Artículo — HumiSalud";
    return {
      meta: [
        { title },
        { name: "description", content: post?.resumen ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: post?.resumen ?? "" },
        { property: "og:type", content: "article" },
        {
          property: "og:url",
          content: post ? `https://humisalud.com/blog/${post.slug}` : "https://humisalud.com/blog",
        },
      ],
      links: post ? [{ rel: "canonical", href: `https://humisalud.com/blog/${post.slug}` }] : [],
      scripts: post
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: post.titulo,
                description: post.resumen,
                datePublished: post.fecha,
                author: { "@type": "Organization", name: "HumiSalud" },
              }),
            },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-20 text-center">
      <h1 className="font-display text-3xl font-semibold">Artículo no encontrado</h1>
      <Link to="/blog" className="mt-4 inline-block text-primary underline">
        Ver el blog
      </Link>
    </div>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const otros = blogPostsOrdenados.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16 prose-editorial">
      <Breadcrumbs
        items={[
          { to: "/", label: "Inicio" },
          { to: "/blog", label: "Blog" },
          { label: post.titulo },
        ]}
      />
      <header className="mt-6 not-prose">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
          {post.categoria}
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          {post.titulo}
        </h1>
        <p className="mt-4 text-xs text-muted-foreground inline-flex items-center gap-1.5">
          <CalendarDays className="h-3.5 w-3.5" />
          {new Date(post.fecha).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </header>

      {post.imagenPortada && (
        <figure className="mt-8 not-prose">
          <img
            src={post.imagenPortada.src}
            alt={post.imagenPortada.alt}
            loading="eager"
            className="w-full aspect-[16/9] object-cover rounded-2xl"
          />
          {post.imagenPortada.credito && (
            <figcaption className="mt-2 text-xs text-muted-foreground">
              {post.imagenPortada.credito}
            </figcaption>
          )}
        </figure>
      )}

      <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/90">
        {post.contenido.map((parrafo, i) => {
          const imagen = post.imagenes?.[i];
          return (
            <div key={i}>
              <p>{parrafo}</p>
              {imagen && (
                <figure className="mt-5 not-prose">
                  <img
                    src={imagen.src}
                    alt={imagen.alt}
                    loading="lazy"
                    className="w-full rounded-2xl"
                  />
                  {imagen.credito && (
                    <figcaption className="mt-2 text-xs text-muted-foreground">
                      {imagen.credito}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          );
        })}
      </div>

      {post.afiliados && post.afiliados.length > 0 && (
        <section className="mt-10 not-prose rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-lg font-semibold">¿Te interesa este modelo?</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {post.afiliados.map((a) => (
              <AffiliateButton
                key={a.comercio}
                href={a.href}
                comercio={a.comercio}
                posicion="blog-articulo"
              />
            ))}
          </div>
          <div className="mt-4">
            <AffiliateDisclosure />
          </div>
        </section>
      )}

      {otros.length > 0 && (
        <section className="mt-14 not-prose">
          <h2 className="font-display text-xl font-semibold tracking-tight">Sigue leyendo</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {otros.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="block rounded-2xl border border-border bg-card p-5 transition-transform hover:scale-[1.01]"
              >
                <p className="text-xs uppercase tracking-wider text-primary font-medium">
                  {p.categoria}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold">{p.titulo}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
