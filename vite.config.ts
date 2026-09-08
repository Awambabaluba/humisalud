// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    build: {
      // Vite incrusta en base64 todo asset por debajo de 4 KB. La foto del
      // Xiaomi Smart Humidifier 2 pesa 3.376 B, asi que se colaba en el
      // JSON-LD como `data:image/webp;base64,...`; el codigo le anteponia el
      // dominio (no empieza por "http") y publicaba
      // `https://humisalud.comdata:image/webp;base64,...`.
      // Search Console lo marco el 08/09/2026 como problema CRITICO ("el tipo
      // de objeto del campo image no es valido"), que impide que esa ficha
      // aparezca como resultado enriquecido. Era la unica imagen del catalogo
      // por debajo del limite, y por eso solo fallaba una.
      // Las fotos de producto acaban en datos estructurados: siempre fichero.
      assetsInlineLimit: (ruta: string) =>
        ruta.includes("assets/products/") ? false : undefined,
    },
  },
  tanstackStart: {
    server: { entry: "server" },
    router: {
      autoCodeSplitting: false,
    },
  },
  nitro: {
    preset: "cloudflare_pages",
  },
});
