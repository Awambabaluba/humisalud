import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { blogPostsOrdenados } from "@/data/blog";
import { CalendarDays } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Noticias y guías sobre humidificadores | HumiSalud" },
      { name: "description", content: "Novedades, estudios y guías prácticas sobre humidificadores, humedad en casa y calidad del aire. Actualizado semanalmente." },
      { property: "og:title", content: "Blog HumiSalud" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
      <Breadcrumbs items={[{ to: "/", label: "Inicio" }, { label: "Blog" }]} />
      <header className="mt-6">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">Blog</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          Noticias y guías sobre humidificadores
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Publicamos al menos una entrada por semana: estudios, novedades de producto y dudas reales que nos llegáis.
        </p>
      </header>

      <div className="mt-10 grid gap-5">
        {blogPostsOrdenados.map((post) => (
          <Link
            key={post.slug}
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="block rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:scale-[1.01]"
          >
            <p className="text-xs uppercase tracking-wider text-primary font-medium">{post.categoria}</p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">{post.titulo}</h2>
            <p className="mt-2 text-base text-muted-foreground leading-relaxed">{post.resumen}</p>
            <p className="mt-4 text-xs text-muted-foreground inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              {new Date(post.fecha).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
