import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CategoryCard } from "@/components/site/CategoryCard";
import { ProductCard } from "@/components/site/ProductCard";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Cairo Sky" },
      { name: "description", content: "Browse Cairo Sky's full range of Egyptian fruits, vegetables, dates, juices, canned goods, and frozen products." },
      { property: "og:title", content: "Products — Cairo Sky" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">Our Products</h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/90">
            A full portfolio of Egyptian agricultural exports — from farm to shelf.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Categories" title="Explore by category" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="All Products" title="Every item we export" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
