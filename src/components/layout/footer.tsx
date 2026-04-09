import Link from "next/link";
import { Truck, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/40 border-t border-border/40">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:items-start">
          {/* Brand */}
          <div className="space-y-4 min-w-0 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 font-bold text-lg text-foreground hover:text-primary transition-colors">
              <Truck className="h-5 w-5 text-primary" />
              <span>Avixzon</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fast, reliable moving and transport services across the Greater Toronto Area.
            </p>
            <div className="flex gap-3 pt-1">
              <Link href="https://www.facebook.com/share/16dDPPY9WX" className="p-2 rounded-full bg-card border border-border/60 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="https://www.instagram.com/avixzoncanada?igsh=Ox03bDIqNTNtbGxs" className="p-2 rounded-full bg-card border border-border/60 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0 md:col-span-1 lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2 min-w-0">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary/60" />
                <span className="break-words">617-1050 Markham Road, Scarborough, ON M1H 2Y7, Canada</span>
              </li>
              <li className="flex items-center gap-2 min-w-0">
                <Mail className="h-4 w-4 shrink-0 text-primary/60" />
                <a href="mailto:avixzon@gmail.com" className="break-all hover:text-primary transition-colors">avixzon@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary/60" />
                <a href="tel:+14377752592" className="hover:text-primary transition-colors">(437) 775 2592</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/40 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Avixzon Inc. All rights reserved.</p>
          <p className="text-xs">GTA Moving & Logistics</p>
        </div>
      </div>
    </footer>
  );
}

