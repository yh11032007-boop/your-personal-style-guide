import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="bg-primary py-2 text-center text-[0.65rem] uppercase tracking-[0.28em] text-primary-foreground">
        Claim two 7ml freebies with every order
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="hidden gap-8 text-xs uppercase tracking-[0.22em] text-muted-foreground md:flex">
          <Link to="/shop" className="transition-colors hover:text-primary">Shop</Link>
          <Link to="/" hash="identity" className="transition-colors hover:text-primary">Know Sarkar</Link>
        </div>
        <Link to="/" className="font-display text-2xl tracking-[0.5em] text-foreground">
          SARKAR
        </Link>
        <div className="flex gap-8 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <Link to="/shop" className="transition-colors hover:text-primary">Cart (0)</Link>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <p className="font-display text-3xl tracking-[0.5em]">SARKAR</p>
        <p className="mt-4 text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Parfum · 25% oil concentration · Unisex
        </p>
        <div className="mt-8 flex justify-center gap-8 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <Link to="/shop" className="hover:text-primary">Collection</Link>
          <Link to="/" hash="identity" className="hover:text-primary">The Identity</Link>
        </div>
        <p className="mt-10 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground/60">
          © {new Date().getFullYear()} Sarkar Fragrance House
        </p>
      </div>
    </footer>
  );
}