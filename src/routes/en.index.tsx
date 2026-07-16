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

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "HumiSalud — Best humidifiers 2026, reviews and buying guide" },
      {
        name: "description",
        content:
          "Compare humidifiers with editorial criteria: m² calculator, real running cost and verified reviews. For babies, bedrooms, living rooms and allergies.",
      },
      { property: "og:title", content: "HumiSalud — Editorial humidifier guide" },
      { property: "og:url", content: "https://humisalud.com/en" },
      { property: "og:locale", content: "en_US" },
    ],
    links: [
      { rel: "canonical", href: "https://humisalud.com/en" },
      { rel: "alternate", hrefLang: "es", href: "/" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
  }),
  component: Home,
});

function Home() {
  const rankingSlugs = Array.from(
    new Set([
      mejoresPorCategoria.general,
      mejoresPorCategoria.calidadPrecio,
      mejoresPorCategoria.alergias,
      mejoresPorCategoria.salon,
      mejoresPorCategoria.estanciasGrandes,
    ]),
  );
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
        <p className="text-xs uppercase tracking-[0.22em] text-primary font-medium">
          Buying guide · Updated June 2026
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
          <span className="text-foreground">Best humidifiers of 2026:</span>{" "}
          <span className="text-primary">comparison, analysis and buying guide</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl border-y border-primary/25 py-4 font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground leading-[1.18]">
          Breathe better tonight:{" "}
          <span className="text-primary">end the dry throat, blocked nose and broken sleep.</span>
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          We analysed{" "}
          <strong className="text-foreground font-medium">
            42 ultrasonic and evaporative humidifiers
          </strong>{" "}
          for the bedroom, baby, living room and allergies. We compare m² performance, dB noise,
          runtime, cleaning and real monthly running cost.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-2 text-xs">
          {[
            "For babies",
            "Bedroom",
            "Large living room",
            "Allergies & asthma",
            "Low consumption",
            "Silent",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <dl className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 rounded-2xl border border-border bg-secondary/40 p-5 sm:p-6">
          <div>
            <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">Analysed</dt>
            <dd className="mt-1 font-display text-2xl sm:text-3xl font-semibold">42</dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">Criteria</dt>
            <dd className="mt-1 font-display text-2xl sm:text-3xl font-semibold">6</dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
              Sponsorships
            </dt>
            <dd className="mt-1 font-display text-2xl sm:text-3xl font-semibold">0</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function CategoriasSection() {
  const EN_CAT: Record<string, { titulo: string; desc: string }> = {
    bebe: { titulo: "For the baby", desc: "Silent, cool mist and safe refilling." },
    dormitorio: { titulo: "For sleeping", desc: "Under 35 dB — won't wake you." },
    salon: { titulo: "Living room & large spaces", desc: "Plenty of output and tank." },
    alergias: { titulo: "Allergies", desc: "Evaporative, no white dust." },
    inteligente: { titulo: "With app", desc: "Control from your phone or voice." },
    economico: { titulo: "Budget", desc: "Under €35." },
  };
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <SectionHeader
        eyebrow="By use"
        title="What will you use it for?"
        subtitle="Each situation weighs things differently. The baby's room asks for silence; the living room asks for output."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIAS.map((c) => {
          const tr = EN_CAT[c.slug] ?? { titulo: c.titulo, desc: c.desc };
          return (
            <Link
              key={c.slug}
              to="/categoria/$slug"
              params={{ slug: c.slug }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-mist text-primary">
                  <Droplets className="h-5 w-5" />
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{tr.titulo}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{tr.desc}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function RankingSection({ productos }: { productos: typeof import("@/data/products").productos }) {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionHeader
          eyebrow="2026 ranking"
          title="The four we would recommend today"
          subtitle="If you're in a hurry. If you want to understand why they're here, take a look at how we work."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {productos.map((p, i) => (
            <ProductCard
              key={p.slug}
              producto={p}
              badge={i === 0 ? "Best pick" : i === 1 ? "Best value" : undefined}
              highlight={i === 0}
            />
          ))}
        </div>
        <div className="mt-8">
          <AffiliateDisclosure compact />
        </div>
        <div className="mt-8 overflow-hidden">
          <ComparisonTable productos={productos} />
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/mejores-humidificadores"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            See the full ranking <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SelectorSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <SectionHeader
        eyebrow="Selector"
        title="Tell us about the room and we'll tell you which one"
        subtitle="Five questions. No endless forms."
      />
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
        <SectionHeader
          eyebrow="How we work"
          title="Why this site doesn't look like the rest"
          subtitle="Analysis first, commissions after. Never the other way around."
        />
        <div className="mt-10">
          <MethodologyBlock />
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/metodologia"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            Read the full methodology <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <FAQ
        items={[
          {
            q: "Do you test the humidifiers in person?",
            a: "No. We say it without dressing it up: we work with official spec sheets and a lot of verified reviews. We think that's better than inventing tests we haven't done.",
          },
          {
            q: "How do you choose the models in the ranking?",
            a: "We use a rubric with weights for m² performance, value, ease of cleaning, noise, runtime and spare parts. It's published in full in Methodology.",
          },
          {
            q: "Why are some prices a range or shown as pending?",
            a: "Electronics prices change almost daily. When we can't guarantee the exact figure, we mark it as pending instead of putting up a number that will be a lie tomorrow.",
          },
          {
            q: "What is the ideal indoor humidity?",
            a: "Between 40% and 60% (per Spanish RITE building code and Philips). Below 30% you'll feel dry skin and mucosa; above 65% mould starts to appear.",
          },
          {
            q: "Can a humidifier be dangerous?",
            a: "If you don't clean it, yes. There are documented medical cases of humidifier lung. Distilled water, daily change and cleaning every two or three days avoids the problem.",
          },
        ]}
      />
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
            Five questions and we'll tell you which one.
          </h2>
          <p className="mt-3 text-base text-primary-foreground/80">
            Instead of reading ten lists that look alike, tell us the room's square metres, your
            budget and what you want it for. We'll tell you what fits.
          </p>
          <div className="mt-7">
            <Link
              to="/selector"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground shadow-soft hover:translate-y-[-1px] transition-transform"
            >
              Start <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
