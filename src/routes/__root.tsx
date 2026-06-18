import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BreezeBackground } from "@/components/site/BreezeBackground";
import { LocaleProvider } from "@/i18n/LocaleContext";
import { installChunkReloadHandler } from "@/lib/chunk-reload";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Error 404</p>
        <h1 className="mt-2 font-display text-4xl font-semibold">Esta página se ha evaporado</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          La URL no coincide con ningún análisis ni guía publicada.
        </p>
        <Link to="/" className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold">Algo no ha cargado bien</h1>
        <p className="mt-2 text-sm text-muted-foreground">Puedes reintentar o volver al inicio.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Reintentar</button>
          <Link to="/" className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium">Inicio</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HumiSalud — Guía editorial de humidificadores" },
      { name: "description", content: "Análisis técnico, comparativas filtrables y cálculo por m². Recomendaciones honestas sobre humidificadores." },
      { name: "author", content: "HumiSalud" },
      { property: "og:site_name", content: "HumiSalud" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0f3b46" },
      { name: "google-site-verification", content: "bwrvMTpyhkgsRLtYeKb56L3ug3x6uHWAisNUJhF-mz0" },
      { property: "og:title", content: "HumiSalud — Guía editorial de humidificadores" },
      { name: "twitter:title", content: "HumiSalud — Guía editorial de humidificadores" },
      { property: "og:description", content: "Análisis técnico, comparativas filtrables y cálculo por m². Recomendaciones honestas sobre humidificadores." },
      { name: "twitter:description", content: "Análisis técnico, comparativas filtrables y cálculo por m². Recomendaciones honestas sobre humidificadores." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/832796ec-ef69-4afb-a42e-5bdc9c58f76a/id-preview-740fd55d--6a5abc99-01da-4eb8-b2ab-527522c0faf1.lovable.app-1781772722178.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/832796ec-ef69-4afb-a42e-5bdc9c58f76a/id-preview-740fd55d--6a5abc99-01da-4eb8-b2ab-527522c0faf1.lovable.app-1781772722178.png" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "HumiSalud",
          description: "Guía editorial independiente sobre humidificadores.",
        }),
      },
      ...buildGaScripts(),
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function buildGaScripts() {
  const id = import.meta.env.VITE_GA_ID as string | undefined;
  if (!id) return [] as Array<Record<string, unknown>>;
  return [
    { src: `https://www.googletagmanager.com/gtag/js?id=${id}`, async: true },
    {
      children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}',{anonymize_ip:true});`,
    },
  ];
}

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useEffect(() => { installChunkReloadHandler(); }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider>
        <BreezeBackground />
        <div className="relative z-10 flex min-h-screen flex-col bg-transparent">
          <Header />
          <main className="flex-1 bg-transparent">
            <Outlet />
          </main>
          <Footer />
        </div>
      </LocaleProvider>
    </QueryClientProvider>
  );
}
