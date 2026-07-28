"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`avx-nav ${scrolled || pathname !== "/" || open ? "avx-nav-solid" : ""}`}>
      <div className="avx-shell avx-nav-inner">
        <Link href="/" className="avx-wordmark" aria-label="Avixzon home">
          <Image
            className="avx-brand-logo"
            src="/avixzon-logo.jpg"
            alt=""
            width={48}
            height={48}
            priority
          />
          <span className="avx-brand-copy">
            <strong>AVIXZON</strong>
            <small>Moving. Logistics. Freight.</small>
          </span>
        </Link>
        <nav className="avx-nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <Link className={pathname === link.href ? "is-active" : ""} href={link.href} key={link.href}>{link.name}</Link>
          ))}
        </nav>
        <div className="avx-nav-actions">
          <a className="avx-nav-phone" href="tel:+14377752592"><Phone size={16} /> (437) 775-2592</a>
          <Link className="avx-nav-quote" href="/contact">Get a quote <ArrowUpRight size={16} /></Link>
        </div>
        <button className="avx-menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="avx-mobile-menu">
          {links.map((link) => <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.name}</Link>)}
          <a href="tel:+14377752592"><Phone size={18} /> (437) 775-2592</a>
          <Link className="avx-button avx-button-coral" href="/contact" onClick={() => setOpen(false)}>Get a free quote <ArrowUpRight size={18} /></Link>
        </div>
      )}
    </header>
  );
}
