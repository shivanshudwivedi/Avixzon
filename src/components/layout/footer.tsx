import Link from "next/link";
import { Truck, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.96a8.16 8.16 0 004.77 1.52V7.03a4.85 4.85 0 01-1-.34z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/16dDPPY9WX",
    icon: <Facebook className="h-4 w-4" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/avixzoncanada?igsh=Ox03bDIqNTNtbGxs",
    icon: <Instagram className="h-4 w-4" />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/14377752592",
    icon: <WhatsAppIcon className="h-4 w-4" />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@avixzoncanada",
    icon: <TikTokIcon className="h-4 w-4" />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@avixzoncanada",
    icon: <YouTubeIcon className="h-4 w-4" />,
  },
];

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
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  aria-label={label}
                >
                  {icon}
                </Link>
              ))}
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
