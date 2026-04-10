"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const pathname = usePathname();

  // Transparent-over-dark-hero only applies on the home page
  const isHome = pathname === "/";
  const transparent = isHome && atTop && !isOpen;

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 60);
    // Reset on route change
    setAtTop(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500",
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border/50 bg-background/90 backdrop-blur-2xl shadow-sm"
      )}
    >
      <div className="container mx-auto flex h-24 items-center justify-between gap-4 px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo2.png"
            alt="Avixzon"
            width={112}
            height={52}
            className="h-20 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors",
                transparent
                  ? "text-white/80 hover:text-white"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle isOverDark={transparent} />
          <Link
            href="/contact"
            className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle isOverDark={transparent} />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "inline-flex items-center justify-center rounded-lg p-2 transition-colors focus:outline-none",
              transparent
                ? "text-white/80 hover:bg-white/10 hover:text-white"
                : "text-foreground/70 hover:bg-muted hover:text-foreground"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-b border-border/50 bg-background/95 backdrop-blur-2xl"
          >
            <div className="container mx-auto px-4 py-5 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-muted transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 pb-1">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-full bg-primary py-3 text-center text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
