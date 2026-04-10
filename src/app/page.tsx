import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Clock, ShieldCheck, Globe,
  Truck, Plane, Ship, Package, FileCheck,
  Map, Warehouse, Sparkles, Users,
} from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { Testimonials } from "@/components/testimonials";
import { PhotoGallery } from "@/components/photo-gallery";

const servicesList = [
  { name: "Air Freight",          icon: Plane,     description: "Fast global shipping for time-sensitive cargo." },
  { name: "Ocean Freight",        icon: Ship,      description: "Cost-effective sea shipping for large volumes." },
  { name: "Moving Services",      icon: Truck,     description: "Stress-free residential & commercial moves." },
  { name: "Packing & Crating",    icon: Package,   description: "Professional protection for your valuables." },
  { name: "Customs Brokerage",    icon: FileCheck, description: "Seamless cross-border documentation." },
  { name: "Transport & Rentals",  icon: Map,       description: "Flexible vehicles and dedicated logistics." },
  { name: "Warehousing",          icon: Warehouse, description: "Secure short and long-term storage." },
  { name: "Cleaning Services",    icon: Sparkles,  description: "Post-move professional cleaning." },
  { name: "Manpower Services",    icon: Users,     description: "Skilled labour for every heavy lift." },
];

const stats = [
  { value: "500+", label: "Happy clients" },
  { value: "5.0★", label: "Google rating" },
  { value: "GTA",  label: "Wide coverage" },
  { value: "24/7", label: "Support" },
];

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center bg-black text-white overflow-hidden -mt-16 sm:-mt-18 pt-16 sm:pt-18">
        <Image
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2940&q=80"
          alt="Avixzon moving truck on the highway"
          fill
          className="object-cover opacity-45"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="max-w-3xl space-y-7">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
              Greater Toronto Area, Canada
            </p>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight">
              Moving made{" "}
              <span className="text-[#2997ff]">perfect.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/65 max-w-xl leading-relaxed">
              Professional moving, shipping, and logistics across the GTA and beyond.
              Trusted by hundreds of families and businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-[#0071e3] px-8 sm:px-10 text-base sm:text-lg font-semibold text-white shadow-xl shadow-blue-700/30 transition-all hover:bg-[#0077ed] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full border border-white/25 bg-white/8 backdrop-blur-sm px-8 sm:px-10 text-base sm:text-lg font-semibold text-white transition-all hover:bg-white/15 hover:border-white/40 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade — fades into the page background colour */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f5f5f7] dark:from-black to-transparent" />
      </section>

      {/* ── Stats strip ──────────────────────────────────────────── */}
      <section className="w-full bg-muted border-y border-border">
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map(({ value, label }) => (
              <div key={label} className="py-8 px-4 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">{value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo gallery ─────────────────────────────────────────── */}
      <PhotoGallery />

      {/* ── Why Choose Us ────────────────────────────────────────── */}
      <section className="w-full py-20 md:py-28 lg:py-36 bg-background">
        <div className="container mx-auto px-5 md:px-8">
          <div className="text-center mb-14 md:mb-20 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Promise</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Why choose Avixzon?
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground text-lg leading-relaxed">
              Speed, safety, and reliability — built into every move.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Fast & On-Time",
                body: "We respect your schedule. Punctual pickups and deliveries, guaranteed — every single time.",
              },
              {
                icon: ShieldCheck,
                title: "Safe & Secure",
                body: "White-glove care for every item. Top-tier packing materials and professional handling.",
              },
              {
                icon: Globe,
                title: "GTA-Wide Network",
                body: "Covering Toronto, Mississauga, Brampton, Markham, Vaughan, and the full GTA.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group flex flex-col p-7 sm:p-8 bg-muted rounded-2xl border border-border hover:border-primary/30 hover:bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services grid ─────────────────────────────────────────── */}
      <section className="w-full py-20 md:py-28 lg:py-36 bg-muted">
        <div className="container mx-auto px-5 md:px-8">
          <div className="text-center mb-14 md:mb-20 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Comprehensive services.
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground text-lg leading-relaxed">
              End-to-end logistics — from your front door to anywhere in the world.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {servicesList.map((s) => (
              <div
                key={s.name}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Ghost icon */}
                <div className="absolute -top-2 -right-2 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-500">
                  <s.icon className="h-28 w-28 text-foreground" />
                </div>

                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <s.icon className="h-5 w-5" />
                </div>

                <h3 className="text-base font-semibold mb-1.5 text-foreground group-hover:text-primary transition-colors">
                  {s.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.description}</p>

                <span className="inline-flex items-center text-xs font-semibold text-primary gap-1">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>

                <Link href="/services" className="absolute inset-0 z-10">
                  <span className="sr-only">View {s.name}</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-10 text-sm font-semibold text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────── */}
      <section className="w-full py-20 md:py-28 lg:py-36 bg-muted">
        <div className="container mx-auto px-5 md:px-8">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Reviews</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Trusted across Ontario.
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* ── CTA band ──────────────────────────────────────────────── */}
      <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-5 md:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Ready to move?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-md mx-auto">
            Get a free, no-obligation quote in minutes. We'll handle the rest.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-white px-10 text-base sm:text-lg font-semibold text-primary shadow-xl transition-all hover:bg-white/90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* ── Quote form ────────────────────────────────────────────── */}
      <section className="w-full py-20 md:py-28 lg:py-36 bg-muted">
        <div className="container mx-auto px-5 md:px-8">
          <QuoteForm />
        </div>
      </section>

    </div>
  );
}
