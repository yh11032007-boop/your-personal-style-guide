import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProduct, products, formatPrice } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable — Sarkar" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const title = `${product.name} (100ml) — Sarkar Parfum`;
    return {
      meta: [
        { title },
        { name: "description", content: product.description },
        { property: "og:title", content: title },
        { property: "og:description", content: product.description },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="border border-border/60 bg-card">
          <img
            src={product.image}
            alt={`${product.name} 100ml chess-piece parfum bottle`}
            width={1024}
            height={1280}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="lg:py-8">
          <p className="eyebrow">{product.family} · Unisex · Parfum</p>
          <h1 className="mt-3 text-5xl">{product.name}</h1>
          <p className="mt-3 font-display text-2xl italic text-muted-foreground">
            {product.tagline}
          </p>
          <div className="gold-rule mt-8 w-full" />
          <p className="mt-8 text-2xl text-primary">{formatPrice(product.price)}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            100ml · Incl. of all taxes
          </p>
          <p className="mt-8 leading-relaxed text-muted-foreground">{product.description}</p>

          <button className="mt-10 w-full border border-primary bg-primary px-8 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary">
            Add to cart
          </button>

          <dl className="mt-12 divide-y divide-border/60 border-y border-border/60">
            {[
              ["Top notes", product.notes.top],
              ["Heart notes", product.notes.heart],
              ["Base notes", product.notes.base],
              ["Concentration", "Parfum · 25% oil"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-6 py-4">
                <dt className="text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
                  {label}
                </dt>
                <dd className="text-right text-sm">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <section className="mt-28">
        <h2 className="text-center text-3xl">Complete the signature</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {others.map((p) => (
            <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group block">
              <div className="overflow-hidden border border-border/60 bg-card">
                <img
                  src={p.image}
                  alt={`${p.name} 100ml chess-piece parfum bottle`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl">{p.name}</h3>
              <p className="text-sm text-primary">{formatPrice(p.price)}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}