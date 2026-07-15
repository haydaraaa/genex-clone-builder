import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { useI18n } from "@/i18n/i18n";

export function ProductCard({ product }: { product: Product }) {
  const { t } = useI18n();
  const p = t.products_data[product.slug as keyof typeof t.products_data];
  const name = p?.name ?? product.name;
  const short = p?.shortDescription ?? product.shortDescription;
  const catLabel = t.categories[product.category].name;
  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span className="inline-block text-[11px] uppercase tracking-wider text-primary font-semibold">
          {catLabel}
        </span>
        <h3 className="mt-1 font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {short}
        </p>
      </div>
    </Link>
  );
}
