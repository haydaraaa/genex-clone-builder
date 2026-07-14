import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span className="inline-block text-[11px] uppercase tracking-wider text-primary font-semibold">
          {product.categoryLabel}
        </span>
        <h3 className="mt-1 font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {product.shortDescription}
        </p>
      </div>
    </Link>
  );
}
