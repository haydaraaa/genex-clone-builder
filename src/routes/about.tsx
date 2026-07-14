import { createFileRoute } from "@tanstack/react-router";
import { Award, Globe2, Heart, Target } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cairo Sky" },
      { name: "description", content: "Cairo Sky is a leading Egyptian exporter of fresh produce, dates, canned goods, and frozen products serving clients worldwide." },
      { property: "og:title", content: "About — Cairo Sky" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Our Mission", body: "To deliver the finest Egyptian agricultural products to global markets with uncompromising quality and reliability." },
  { icon: Globe2, title: "Our Vision", body: "To become the most trusted Egyptian exporter, connecting local farmers with premium retailers across the world." },
  { icon: Heart, title: "Our Values", body: "Integrity, quality, sustainability, and a lasting partnership with every client and farmer we work with." },
  { icon: Award, title: "Certifications", body: "ISO 22000, HACCP, GlobalGAP, Halal and Organic — every certification importers require, in one supplier." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">About Cairo Sky</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/90">
            Egyptian agricultural excellence, shipped worldwide. We connect the country's most productive farms with premium retailers across Europe, the Gulf, and beyond.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://www.genex-corp.com/assets/category-vegetables-psN3OUoF.jpg"
            alt="Egyptian farm"
            className="rounded-2xl shadow-xl w-full h-96 object-cover"
          />
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Rooted in Egypt, connected to the world"
              description="Cairo Sky partners with hand-picked Egyptian growers and cooperatives to bring fresh produce, dates, juices, and frozen products to international buyers. Every order is planned, inspected, and shipped under a fully integrated cold chain."
              align="left"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Our Foundation" title="What drives us" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl bg-card p-6 border border-border shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
