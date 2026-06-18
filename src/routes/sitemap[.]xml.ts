import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { productos } from "@/data/products";
import { blogPosts } from "@/data/blog";

const BASE_URL = "https://humisalud.com";

interface SitemapEntry { path: string; changefreq?: "weekly" | "monthly"; priority?: string }

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/mejores-humidificadores", changefreq: "weekly", priority: "0.9" },
          { path: "/selector", changefreq: "monthly", priority: "0.8" },
          { path: "/calculadora", changefreq: "monthly", priority: "0.8" },
          { path: "/coste-de-uso", changefreq: "monthly", priority: "0.7" },
          { path: "/guia-de-compra", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          { path: "/metodologia", changefreq: "monthly", priority: "0.6" },
          { path: "/sobre-nosotros", changefreq: "monthly", priority: "0.4" },
          { path: "/en", changefreq: "weekly", priority: "0.9" },
          { path: "/en/calculator", changefreq: "monthly", priority: "0.7" },
          { path: "/en/running-cost", changefreq: "monthly", priority: "0.6" },
          { path: "/aviso-afiliacion", changefreq: "monthly", priority: "0.4" },
          { path: "/privacidad", changefreq: "monthly", priority: "0.3" },
          { path: "/cookies", changefreq: "monthly", priority: "0.3" },
          { path: "/terminos", changefreq: "monthly", priority: "0.3" },
          ...["bebe","dormitorio","salon","alergias","inteligente","economico"].map((s) => ({
            path: `/categoria/${s}`, changefreq: "monthly" as const, priority: "0.7",
          })),
          ...productos.map((p) => ({ path: `/producto/${p.slug}`, changefreq: "monthly" as const, priority: "0.7" })),
          ...blogPosts.map((p) => ({ path: `/blog/${p.slug}`, changefreq: "monthly" as const, priority: "0.6" })),
        ];

        const urls = entries.map((e) => [
          `  <url>`,
          `    <loc>${BASE_URL}${e.path}</loc>`,
          e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
          e.priority ? `    <priority>${e.priority}</priority>` : null,
          `  </url>`,
        ].filter(Boolean).join("\n"));

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
