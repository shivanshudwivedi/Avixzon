import Link from "next/link";
import { Truck, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border/40">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 font-bold text-xl text-primary">
              <Truck className="h-6 w-6" />
              <span>Avixzon</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Fast, reliable, and quick moving and transport services in the Greater Toronto Area.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-primary">Air Freight</Link></li>
              <li><Link href="/services" className="hover:text-primary">Ocean Freight</Link></li>
              <li><Link href="/services" className="hover:text-primary">Moving Services</Link></li>
              <li><Link href="/services" className="hover:text-primary">View All Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Get a Quote</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>617-1050 Markham Road, Scarborough, ON, Canada, M1H 2Y7</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>avixzon@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(437) 775 2592</span>
              </li>
            </ul>
          </div>
          <div className="mt-10">
              <h3 className="font-semibold mb-4 text-lg">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="https://www.faceook.com/share/16dDPPY9WX" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://www.instagram.com/avixzoncanada?igsh=Ox03bDIqNTNtbGxs" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Avixzon Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

