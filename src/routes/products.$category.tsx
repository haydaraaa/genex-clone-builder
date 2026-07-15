import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, getCategory } from "@/data/categories";
import { getProductsByCategory, type ProductCategory, type Product } from "@/data/products";
import { useI18n } from "@/i18n/i18n";

const validSlugs: ProductCategory[] = ["fruits", "vegetables", "canned", "dates", "juices", "frozen", "seafood"];

export const Route = createFileRoute("/products/$category")({
  loader: ({ params }) => {
    if (!validSlugs.includes(params.category as ProductCategory)) throw notFound();
    const category = getCategory(params.category as ProductCategory);
    const items = getProductsByCategory(category.slug);
    return { category, items };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Category — Cairo Sky" }] };
    const { category } = loaderData;
    return {
      meta: [
        { title: `${category.name} — Cairo Sky` },
        { name: "description", content: category.description },
        { property: "og:title", content: `${category.name} — Cairo Sky` },
        { property: "og:description", content: category.description },
        { property: "og:url", content: `/products/${category.slug}` },
        { property: "og:image", content: category.image },
      ],
      links: [{ rel: "canonical", href: `/products/${category.slug}` }],
    };
  },
  component: CategoryPage,
  notFoundComponent: CategoryNotFound,
});

function CategoryNotFound() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-serif text-3xl font-bold">{t.products.notFoundTitle}</h1>
        <p className="mt-3 text-muted-foreground">{t.products.notFoundDesc}</p>
        <Link to="/products" className="mt-6 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
          {t.products.viewAll}
        </Link>
      </div>
    </SiteLayout>
  );
}

function CategoryPage() {
  const { category, items } = Route.useLoaderData();
  const { t } = useI18n();
  const c = t.categories[category.slug];
  return (
    <SiteLayout>
      <section className="relative py-20 text-primary-foreground">
        <div className="absolute inset-0 -z-10">
          <img src={category.image} alt={c.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-xs uppercase tracking-[0.2em] opacity-80">
            <Link to="/products" className="hover:underline">{t.products.breadcrumb}</Link> / {c.name}
          </div>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-bold">{c.name}</h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/90">{c.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          {items.length > 0 ? (
            <>
              <SectionHeading eyebrow={c.name} title={c.name} />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((p: Product) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <SectionHeading
                eyebrow={c.name}
                title={t.products.moreSoonTitle}
                description={t.products.moreSoonDesc}
              />
              <Link
                to="/contact"
                className="mt-8 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                {t.products.requestDetails}
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow={t.products.otherEyebrow} title={t.products.otherTitle} />
          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories
              .filter((oc) => oc.slug !== category.slug)
              .map((oc) => (
                <Link
                  key={oc.slug}
                  to="/products/$category"
                  params={{ category: oc.slug }}
                  className="rounded-xl border border-border bg-card p-4 text-center hover:shadow-md transition"
                >
                  <div className="font-semibold text-sm text-foreground">{t.categories[oc.slug].name}</div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
