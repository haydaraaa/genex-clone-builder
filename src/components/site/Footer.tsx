import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { categories } from "@/data/categories";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
            {site.description}
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
          <h4 className="font-serif text-lg font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-primary-foreground">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary-foreground">About Us</Link></li>
            <li><Link to="/products" className="hover:text-primary-foreground">Products</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold">Categories</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/products/$category"
                  params={{ category: c.slug }}
                  className="hover:text-primary-foreground"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5" />
              <a href={site.phoneHref} className="hover:text-primary-foreground">{site.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5" />
              <a href={site.emailHref} className="hover:text-primary-foreground">{site.email}</a>
            </li>
            {site.offices.map((o) => (
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
          <span>© {new Date().getFullYear()} Cairo Sky. All rights reserved.</span>
          <span>Egyptian agricultural exports worldwide.</span>
        </div>
      </div>
    </footer>
  );
}
