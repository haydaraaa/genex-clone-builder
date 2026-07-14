import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Package, Calendar, Award } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { getProductBySlug, products } from "@/data/products";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);
    return { product, related };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Product — Cairo Sky" }] };
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — Cairo Sky` },
        { name: "description", content: product.description },
        { property: "og:title", content: `${product.name} — Cairo Sky` },
        { property: "og:description", content: product.description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/product/${params.slug}` },
        { property: "og:image", content: product.image },
      ],
      links: [{ rel: "canonical", href: `/product/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            image: product.image,
            category: product.categoryLabel,
            brand: { "@type": "Brand", name: "Cairo Sky" },
          }),
        },
      ],
    };
  },
  component: ProductDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-serif text-3xl font-bold">Product not found</h1>
        <Link to="/products" className="mt-6 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
          View All Products
        </Link>
      </div>
    </SiteLayout>
  ),
});

function ProductDetail() {
  const { product, related } = Route.useLoaderData();
  return (
    <SiteLayout>
      <section className="py-12 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Link to="/products" className="hover:text-primary">Products</Link> /{" "}
            <Link to="/products/$category" params={{ category: product.category }} className="hover:text-primary">
              {product.categoryLabel}
            </Link>{" "}
            / {product.name}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-secondary">
            <img src={product.image} alt={product.name} className="w-full h-[500px] object-cover" />
          </div>
          <div>
            <span className="inline-block text-xs uppercase tracking-wider font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {product.categoryLabel}
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold text-foreground">{product.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{product.description}</p>

            <div className="mt-8 space-y-3">
              {product.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-foreground/90">{h}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {product.season && (
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-semibold">
                    <Calendar className="h-4 w-4" /> Season
                  </div>
                  <div className="mt-1 font-medium text-foreground">{product.season}</div>
                </div>
              )}
              {product.packaging && (
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-semibold">
                    <Package className="h-4 w-4" /> Packaging
                  </div>
                  <div className="mt-1 font-medium text-foreground">{product.packaging}</div>
                </div>
              )}
              <div className="rounded-xl border border-border bg-card p-4 col-span-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-semibold">
                  <Award className="h-4 w-4" /> Quality
                </div>
                <div className="mt-1 text-sm text-foreground">
                  Meets ISO 22000, HACCP, and GlobalGAP standards.
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="font-serif text-2xl font-bold text-foreground">Related products</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
