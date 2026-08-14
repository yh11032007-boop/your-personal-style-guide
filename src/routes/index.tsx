import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { products, formatPrice } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Know Sarkar — Premium Unisex Parfum House" },
      {
        name: "description",
        content:
          "Sarkar is a premium, unisex fragrance house built on everyday authority. Four expressions, one signature, each a parfum at 25% oil concentration.",
      },
      { property: "og:title", content: "Know Sarkar — Premium Unisex Parfum House" },
      {
        name: "og:description",
        content: "Four expressions, one signature. Built for those who own the air they breathe.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <section className="relative">
        <img
          src={hero}
          alt="Sarkar parfum bottle on dark stone"
          width={1920}
          height={1088}
          className="h-[70vh] w-full object-cover md:h-[85vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 text-center">
          <p className="eyebrow">Know Sarkar</p>
          <h1 className="mt-4 max-w-3xl px-6 text-5xl leading-tight md:text-7xl">
            The One &amp; Only
          </h1>
          <Link
            to="/shop"
            className="mt-8 border border-primary px-10 py-4 text-xs uppercase tracking-[0.3em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Explore the Collection
          </Link>
        </div>
      </section>

      <section id="identity" className="mx-auto max-w-3xl px-6 py-28 text-center">
        <p className="eyebrow">The Identity</p>
        <p className="mt-8 font-display text-3xl leading-snug md:text-4xl">
          Sarkar is a premium, unisex fragrance house built on everyday authority.
          Four expressions, one signature, each a parfum at 25% oil concentration,
          made for ordinary days and the extraordinary people who live them.
        </p>
        <div className="gold-rule mx-auto mt-14 w-40" />
      </section>

      <section className="border-y border-border/60 bg-card px-6 py-28 text-center">
        <p className="font-display text-3xl leading-relaxed md:text-4xl">
          Anyone can raise their voice.
          <br />
          Few can raise the standards.
          <br />
          Sarkar is for the ones who set it.
        </p>
        <p className="mt-10 text-xs uppercase tracking-[0.3em] text-primary">— Bhuvan Bam</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <p className="eyebrow text-center">Shop the Collection</p>
        <h2 className="mt-4 text-center text-4xl">Four expressions, one signature</h2>
        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group block">
              <div className="overflow-hidden border border-border/60 bg-card">
                <img
                  src={p.image}
                  alt={`${p.name} 100ml parfum bottle`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                {p.family} · Unisex · Parfum
              </p>
              <h3 className="mt-2 text-2xl">{p.name} (100ml)</h3>
              <p className="mt-1 text-sm text-primary">{formatPrice(p.price)}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-32 text-center">
        <p className="eyebrow">Built for the aspirational leader</p>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          For those who understand that presence is a choice. Unisex in spirit and
          uncompromising in intent. Sarkar is for those who own the air they breathe.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-block bg-primary px-10 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-opacity hover:opacity-90"
        >
          Explore the Collection
        </Link>
      </section>
    </div>
  );
}
