import { createFileRoute, Link } from "@tanstack/react-router";
import { Tag } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ProductCard } from "@/components/site/ProductCard";
import { getOfertas } from "@/data/products";

export const Route = createFileRoute("/ofertas")({
  head: () => ({
    meta: [
      { title: "Ofertas en humidificadores — HumiSalud" },
      { name: "description", content: "Humidificadores con bajada de precio real detectada cada día. Precios comprobados directamente en Amazon." },
      { property: "og:title", content: "Ofertas en humidificadores" },
      { property: "og:url", content: "/ofertas" },
    ],
    links: [{ rel: "canonical", href: "/ofertas" }],
  }),
  component: OfertasPage,
});

function OfertasPage() {
  const ofertas = getOfertas();

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <Breadcrumbs items={[{ to: "/", label: "Inicio" }, { label: "Ofertas" }]} />
      <header className="mt-6 flex items-center gap-2">
        <Tag className="text-primary h-7 w-7" aria-hidden />
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">Ofertas</h1>
      </header>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
        Comprobamos el precio de cada humidificador en Amazon todos los días. Aquí solo aparecen los que tienen una bajada de precio real detectada, nunca descuentos inventados.
      </p>

      {ofertas.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-border bg-card p-10 text-center">
          <p className="font-display text-lg font-semibold">No hay ofertas activas ahora mismo</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Revisamos los precios todos los días — vuelve pronto o mira el ranking general mientras tanto.
          </p>
          <Link
            to="/mejores-humidificadores"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft"
          >
            Ver ranking general
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ofertas.map(({ producto, descuentoPercent }) => (
            <ProductCard key={producto.slug} producto={producto} descuentoPercent={descuentoPercent} />
          ))}
        </div>
      )}
    </div>
  );
}
