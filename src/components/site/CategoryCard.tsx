import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/data/categories";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to="/products/$category"
      params={{ category: category.slug }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl transition-all"
    >
      <div className="aspect-[5/4] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
        <h3 className="font-serif text-2xl font-bold">{category.name}</h3>
        <p className="mt-1 text-sm text-primary-foreground/90 line-clamp-2">
          {category.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
          View All <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
