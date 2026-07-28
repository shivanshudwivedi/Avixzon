import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="avx-footer">
      <div className="avx-shell">
        <div className="avx-footer-top">
          <div>
            <Link href="/" className="avx-wordmark avx-wordmark-footer">
              <Image className="avx-brand-logo" src="/avixzon-logo.jpg" alt="" width={48} height={48} />
              <span className="avx-brand-copy"><strong>AVIXZON</strong><small>Moving. Logistics. Freight.</small></span>
            </Link>
            <p>Moving, freight, transport and storage.<br />One trusted team across the GTA.</p>
          </div>
          <div className="avx-footer-links">
            <div>
              <strong>Navigate</strong>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact & quote</Link>
            </div>
            <div>
              <strong>Reach us</strong>
              <a href="tel:+14377752592"><Phone size={15} /> (437) 775-2592</a>
              <a href="mailto:avixzon@gmail.com">avixzon@gmail.com</a>
              <a href="https://www.instagram.com/avixzoncanada" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a>
            </div>
            <div>
              <strong>Visit</strong>
              <p><MapPin size={15} /> 617-1050 Markham Road<br />Scarborough, ON M1H 2Y7</p>
            </div>
          </div>
        </div>
        <div className="avx-footer-bottom">
          <span>© {new Date().getFullYear()} Avixzon Inc.</span>
          <span>Scarborough · Ontario · Canada</span>
          <a href="tel:+14377752592">Start your move <ArrowUpRight size={14} /></a>
        </div>
      </div>
    </footer>
  );
}
