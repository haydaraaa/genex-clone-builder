import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Headphones, BadgeDollarSign, Award, Sprout, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProductCard } from "@/components/site/ProductCard";
import { CategoryCard } from "@/components/site/CategoryCard";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cairo Sky — Premium Egyptian Agricultural Exports" },
      {
        name: "description",
        content:
          "Cairo Sky exports Egyptian fruits, vegetables, dates, juices, and frozen products to Europe, the Gulf, and beyond.",
      },
      { property: "og:title", content: "Cairo Sky — Premium Egyptian Agricultural Exports" },
      { property: "og:description", content: site.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const featureIcons = [ShieldCheck, Truck, Headphones, BadgeDollarSign, Award, Sprout];

function HomePage() {
  const { t } = useI18n();
  const featured = products.slice(0, 8);
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://www.genex-corp.com/assets/hero-bg-DQnQrLHj.jpg"
            alt="Fresh Egyptian agricultural produce"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/20 rtl:bg-gradient-to-l" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] bg-primary-foreground/15 px-3 py-1.5 rounded-full backdrop-blur">
              {t.home.badge}
            </span>
            <h1 className="mt-5 font-serif text-4xl sm:text-6xl font-bold leading-tight">
              <span dir="ltr">Cairo Sky</span>
              <span className="block text-2xl sm:text-3xl font-medium mt-2 opacity-95">
                {t.home.subtitle}
              </span>
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/90 max-w-xl">{t.home.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary shadow-lg hover:bg-primary-foreground/90 transition"
              >
                {t.home.quote} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-primary-foreground/20 transition"
              >
                {t.home.ourProducts}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <SectionHeading
              eyebrow={t.home.aboutEyebrow}
              title={t.home.aboutTitle}
              description={t.home.aboutDesc}
              align="left"
            />
            <div className="mt-6 grid grid-cols-2 gap-4">
              {t.stats.slice(0, 2).map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-5">
                  <div className="font-serif text-3xl font-bold text-primary">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://www.genex-corp.com/assets/category-fruits-b1JypkDD.jpg"
              alt="Egyptian fruits"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow={t.home.featuredEyebrow} title={t.home.featuredTitle} description={t.home.featuredDesc} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
            >
              {t.home.viewAll} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow={t.home.whyEyebrow} title={t.home.whyTitle} description={t.home.whyDesc} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((f, i) => {
              const Icon = featureIcons[i] ?? ShieldCheck;
              return (
                <div key={f.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow={t.home.categoriesEyebrow} title={t.home.categoriesTitle} description={t.home.categoriesDesc} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {t.stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-4xl sm:text-5xl font-bold">{s.value}</div>
              <div className="mt-2 text-sm text-primary-foreground/80">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-10 sm:p-14 text-primary-foreground shadow-xl">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">{t.home.ctaTitle}</h2>
              <p className="mt-3 text-primary-foreground/90">{t.home.ctaDesc}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-foreground/90"
                >
                  {t.home.quote} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Link>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <MessageCircle className="h-4 w-4" /> {t.home.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
