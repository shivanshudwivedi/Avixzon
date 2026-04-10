import Link from "next/link";
import { Truck, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-5 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">

          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 font-bold text-base text-foreground hover:text-primary transition-colors"
            >
              <Truck className="h-5 w-5 text-primary" />
              Avixzon
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Fast, reliable moving and transport services across the Greater Toronto Area and beyond.
            </p>
            <div className="flex gap-2.5">
              <Link
                href="https://www.facebook.com/share/16dDPPY9WX"
                className="p-2 rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.instagram.com/avixzoncanada?igsh=Ox03bDIqNTNtbGxs"
                className="p-2 rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
                { label: "Get a Quote", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5 min-w-0">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary/70" />
                <span className="break-words">
                  617-1050 Markham Road, Scarborough, ON M1H 2Y7, Canada
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-primary/70" />
                <a href="mailto:avixzon@gmail.com" className="hover:text-primary transition-colors break-all">
                  avixzon@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-primary/70" />
                <a href="tel:+14377752592" className="hover:text-primary transition-colors">
                  (437) 775 2592
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Avixzon Inc. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            GTA Moving &amp; Logistics · Scarborough, Ontario
          </p>
        </div>
      </div>
    </footer>
  );
}
