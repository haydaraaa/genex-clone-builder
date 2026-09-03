import { createFileRoute } from "@tanstack/react-router";
import { Award, Globe2, Heart, Target } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useI18n } from "@/i18n/i18n";

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

const icons = [Target, Globe2, Heart, Award];

function AboutPage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <section className="relative bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">{t.about.title}</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/90">{t.about.lead}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/__l5e/assets-v1/feb4f295-c42a-45a9-973e-2a81b98ef946/IMG-20260825-WA0006.jpg"
            alt="Cairo Sky team inspecting a carton of export lemons"
            className="rounded-2xl shadow-xl w-full h-96 object-cover"
          />
          <div>
            <SectionHeading
              eyebrow={t.about.whoEyebrow}
              title={t.about.whoTitle}
              description={t.about.whoDesc}
              align="left"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow={t.about.foundationEyebrow} title={t.about.foundationTitle} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.values.map((v, i) => {
              const Icon = icons[i] ?? Award;
              return (
                <div key={v.title} className="rounded-2xl bg-card p-6 border border-border shadow-sm">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
