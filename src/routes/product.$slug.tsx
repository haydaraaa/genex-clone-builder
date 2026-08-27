import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Package, Calendar, Award } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { getProductBySlug, products, type Product } from "@/data/products";
import { useI18n } from "@/i18n/i18n";

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
  notFoundComponent: ProductNotFound,
});

function ProductNotFound() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-serif text-3xl font-bold">{t.product.notFound}</h1>
        <Link to="/products" className="mt-6 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
          {t.products.viewAll}
        </Link>
      </div>
    </SiteLayout>
  );
}

function ProductDetail() {
  const { product, related } = Route.useLoaderData();
  const { t } = useI18n();
  const p = t.products_data[product.slug as keyof typeof t.products_data];
  const name = p?.name ?? product.name;
  const description = p?.description ?? product.description;
  const highlights = p?.highlights ?? product.highlights;
  const season = p?.season ?? product.season;
  const packaging = p?.packaging ?? product.packaging;
  const catName = t.categories[product.category as keyof typeof t.categories].name;

  return (
    <SiteLayout>
      <section className="py-12 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Link to="/products" className="hover:text-primary">{t.products.breadcrumb}</Link> /{" "}
            <Link to="/products/$category" params={{ category: product.category }} className="hover:text-primary">
              {catName}
            </Link>{" "}
            / {name}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-secondary">
              <img src={active} alt={name} className="w-full h-[500px] object-cover" />
            </div>
            {gallery.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {gallery.map((src: string, i: number) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActive(src)}
                    className={`overflow-hidden rounded-lg border-2 transition ${
                      active === src ? "border-primary" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img src={src} alt={`${name} ${i + 1}`} loading="lazy" className="h-24 w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div>
            <span className="inline-block text-xs uppercase tracking-wider font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {catName}
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold text-foreground">{name}</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>

            <div className="mt-8 space-y-3">
              {highlights.map((h: string) => (
                <div key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-foreground/90">{h}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {season && (
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-semibold">
                    <Calendar className="h-4 w-4" /> {t.product.season}
                  </div>
                  <div className="mt-1 font-medium text-foreground">{season}</div>
                </div>
              )}
              {packaging && (
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-semibold">
                    <Package className="h-4 w-4" /> {t.product.packaging}
                  </div>
                  <div className="mt-1 font-medium text-foreground">{packaging}</div>
                </div>
              )}
              <div className="rounded-xl border border-border bg-card p-4 col-span-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-semibold">
                  <Award className="h-4 w-4" /> {t.product.quality}
                </div>
                <div className="mt-1 text-sm text-foreground">{t.product.qualityBody}</div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                {t.product.quote} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="font-serif text-2xl font-bold text-foreground">{t.product.related}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p: Product) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
