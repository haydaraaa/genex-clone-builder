import { Link } from "@tanstack/react-router";
import { Menu, Phone, Mail, MapPin, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/i18n";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const nav = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/products", label: t.nav.products },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <a href={site.phoneHref} className="inline-flex items-center gap-1.5 hover:opacity-80" dir="ltr">
              <Phone className="h-3.5 w-3.5" />
              {site.phone}
            </a>
            <a href={site.emailHref} className="inline-flex items-center gap-1.5 hover:opacity-80" dir="ltr">
              <Mail className="h-3.5 w-3.5" />
              {site.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            {t.site.offices.map((o) => (
              <span key={o.city} className="inline-flex items-center gap-1.5 opacity-90">
                <MapPin className="h-3.5 w-3.5" />
                {o.city}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 rounded-md hover:text-primary hover:bg-secondary transition-colors"
              activeProps={{ className: "text-primary bg-secondary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <LanguageToggle className="ml-2" />
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
          >
            {t.nav.quote}
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className={cn("md:hidden border-t border-border bg-background", open ? "block" : "hidden")}>
        <nav className="px-4 py-3 flex flex-col gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2 text-sm font-medium text-foreground/80 rounded-md hover:bg-secondary"
              activeProps={{ className: "text-primary bg-secondary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            {t.nav.quote}
          </Link>
        </nav>
      </div>
    </header>
  );
}
