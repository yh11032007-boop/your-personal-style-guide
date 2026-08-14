import { createFileRoute, Link } from "@tanstack/react-router";
import { products, formatPrice } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop the Collection — Sarkar Parfum" },
      { name: "description", content: "Four Sarkar parfums: Orion, Noble, Throne and Regal. 100ml, 25% oil concentration, unisex." },
      { property: "og:title", content: "Shop the Collection — Sarkar Parfum" },
      { property: "og:description", content: "Four expressions, one signature. Explore the Sarkar collection." },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <p className="eyebrow text-center">The Collection</p>
      <h1 className="mt-4 text-center text-5xl">Four expressions, one signature</h1>
      <div className="gold-rule mx-auto mt-8 w-40" />
      <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <Link
            key={p.slug}
            to="/products/$slug"
            params={{ slug: p.slug }}
            className="group block"
          >
            <div className="overflow-hidden border border-border/60 bg-card">
              <img
                src={p.image}
                alt={`${p.name} 100ml parfum bottle`}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="mt-5 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
              {p.family} · Unisex · Parfum
            </p>
            <h2 className="mt-2 text-2xl">{p.name} (100ml)</h2>
            <p className="mt-1 text-sm text-primary">{formatPrice(p.price)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}