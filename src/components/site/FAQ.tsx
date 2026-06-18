import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export interface FAQItem { q: string; a: React.ReactNode }

export function FAQ({ items, title = "Preguntas frecuentes" }: { items: FAQItem[]; title?: string }) {
  return (
    <section aria-labelledby="faq-title">
      <h2 id="faq-title" className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
        {items.map((it, i) => <Row key={i} item={it} index={i} />)}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((i) => ({
              "@type": "Question",
              name: i.q,
              acceptedAnswer: { "@type": "Answer", text: typeof i.a === "string" ? i.a : "" },
            })),
          }),
        }}
      />
    </section>
  );
}

function Row({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-medium">{item.q}</span>
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border bg-background text-muted-foreground">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</div>}
    </div>
  );
}
