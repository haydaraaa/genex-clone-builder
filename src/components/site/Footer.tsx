import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { categories } from "@/data/categories";
import { useI18n } from "@/i18n/i18n";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
            {t.site.description}
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition"
                aria-label="Social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold">{t.footer.company}</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-primary-foreground">{t.nav.home}</Link></li>
            <li><Link to="/about" className="hover:text-primary-foreground">{t.nav.about}</Link></li>
            <li><Link to="/products" className="hover:text-primary-foreground">{t.nav.products}</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold">{t.footer.categories}</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/products/$category"
                  params={{ category: c.slug }}
                  className="hover:text-primary-foreground"
                >
                  {t.categories[c.slug].name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold">{t.footer.contact}</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5" />
              <a href={site.phoneHref} className="hover:text-primary-foreground" dir="ltr">{site.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5" />
              <a href={site.emailHref} className="hover:text-primary-foreground" dir="ltr">{site.email}</a>
            </li>
            {t.site.offices.map((o) => (
              <li key={o.city} className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>{o.city} <span className="opacity-70">— {o.note}</span></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-primary-foreground/70 flex flex-wrap gap-3 justify-between">
          <span>© {new Date().getFullYear()} Cairo Sky. {t.footer.rights}</span>
          <span>{t.footer.slogan}</span>
        </div>
      </div>
    </footer>
  );
}
