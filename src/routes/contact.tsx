import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cairo Sky" },
      { name: "description", content: "Contact Cairo Sky for pricing, quotes, and export inquiries on Egyptian agricultural products." },
      { property: "og:title", content: "Contact — Cairo Sky" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">Contact Cairo Sky</h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/90">
            Reach out for pricing, product specifications, or a full export quote — our team responds within one business day.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-5">
            <SectionHeading eyebrow="Get in touch" title="We're here to help" align="left" />
            {[
              { Icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
              { Icon: Mail, label: "Email", value: site.email, href: site.emailHref },
              { Icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: site.whatsapp },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 hover:shadow-md transition"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="text-foreground font-medium">{value}</div>
                </div>
              </a>
            ))}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Offices</div>
              <ul className="mt-2 space-y-2">
                {site.offices.map((o) => (
                  <li key={o.city} className="flex items-start gap-2 text-foreground">
                    <MapPin className="h-4 w-4 mt-1 text-primary" />
                    <span>
                      <span className="font-medium">{o.city}</span>
                      <span className="text-muted-foreground"> — {o.note}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <Field label="Product / Category" name="product" placeholder="e.g. Oranges, Frozen Strawberries" />
              <div>
                <label className="block text-sm font-medium text-foreground">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about the quantities, destination, and timeline."
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree Cairo Sky may contact you about your inquiry.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </div>
              {sent && (
                <div className="rounded-md bg-primary/10 text-primary px-4 py-3 text-sm font-medium">
                  Thank you — your request has been sent. Our team will be in touch shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
