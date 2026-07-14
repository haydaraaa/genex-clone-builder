import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Headphones, BadgeDollarSign, Award, Sprout, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProductCard } from "@/components/site/ProductCard";
import { CategoryCard } from "@/components/site/CategoryCard";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { site } from "@/data/site";

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

const features = [
  { icon: ShieldCheck, title: "World-Class Quality", body: "Every shipment inspected against European and international standards." },
  { icon: Truck, title: "Fast & Safe Shipping", body: "Integrated cold chain and direct routes deliver in optimal condition." },
  { icon: Headphones, title: "24/7 Support", body: "A dedicated export team available around the clock for your inquiries." },
  { icon: BadgeDollarSign, title: "Competitive Pricing", body: "Best-in-class pricing without compromising on quality or service." },
  { icon: Award, title: "International Certifications", body: "ISO 22000, HACCP, GlobalGAP, Halal and Organic certified." },
  { icon: Sprout, title: "Guaranteed Freshness", body: "Farm-to-table freshness with a digital traceability system." },
];

const stats = [
  { value: "25+", label: "Countries We Export To" },
  { value: "15+", label: "Years of Experience" },
  { value: "50+", label: "Agricultural Products" },
  { value: "200+", label: "Satisfied Clients" },
];

function HomePage() {
  const featured = products.slice(0, 8);
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://www.genex-corp.com/assets/hero-bg-DQnQrLHj.jpg"
            alt="Fresh Egyptian agricultural produce"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/20" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] bg-primary-foreground/15 px-3 py-1.5 rounded-full backdrop-blur">
              Egyptian Harvest — Exported Worldwide
            </span>
            <h1 className="mt-5 font-serif text-4xl sm:text-6xl font-bold leading-tight">
              Cairo Sky
              <span className="block text-2xl sm:text-3xl font-medium mt-2 opacity-95">
                Premium Egyptian Agricultural Exports
              </span>
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/90 max-w-xl">
              Fresh fruits and vegetables to Arab and Gulf markets, and canned goods, legumes,
              and frozen products to Europe — all with the highest international quality standards.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary shadow-lg hover:bg-primary-foreground/90 transition"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-primary-foreground/20 transition"
              >
                Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <SectionHeading
              eyebrow="About Cairo Sky"
              title="A leader in Egyptian agricultural exports"
              description="Cairo Sky is a trusted exporter of Egyptian agricultural products, meeting the highest international quality standards. We ship fresh fruits and vegetables across Arab and Gulf markets, and canned goods, legumes, and frozen products to Europe."
              align="left"
            />
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((s) => (
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

      {/* Featured Products */}
      <section className="py-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Featured Selection"
            title="Featured Products"
            description="Premium Egyptian fresh produce ready for export."
          />
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
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Why Cairo Sky"
            title="Advantages that make us the first choice"
            description="Competitive strengths trusted by importers across three continents."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Our Categories"
            title="Our Products"
            description="A full portfolio of Egyptian agricultural exports."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-4xl sm:text-5xl font-bold">{s.value}</div>
              <div className="mt-2 text-sm text-primary-foreground/80">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-10 sm:p-14 text-primary-foreground shadow-xl">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">Looking for a reliable supplier?</h2>
              <p className="mt-3 text-primary-foreground/90">
                Contact Cairo Sky today for the best pricing on our high-quality Egyptian agricultural products.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-foreground/90"
                >
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
