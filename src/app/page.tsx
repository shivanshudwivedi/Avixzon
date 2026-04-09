import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, Globe, Truck, Plane, Ship, Package, FileCheck, Map, Warehouse, Sparkles, Users } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { Testimonials } from "@/components/testimonials";

const servicesList = [
  { name: "Air Freight", icon: Plane, description: "Fast global shipping solutions." },
  { name: "Ocean Freight", icon: Ship, description: "Cost-effective sea cargo." },
  { name: "Moving Services", icon: Truck, description: "Stress-free residential & commercial moves." },
  { name: "Packing & Crating", icon: Package, description: "Professional protection for valuables." },
  { name: "Customs Brokerage", icon: FileCheck, description: "Seamless cross-border clearance." },
  { name: "Transport & Rentals", icon: Map, description: "Flexible vehicle & logistics options." },
  { name: "Warehousing", icon: Warehouse, description: "Secure storage facilities." },
  { name: "Cleaning Services", icon: Sparkles, description: "Post-move professional cleaning." },
  { name: "Manpower Services", icon: Users, description: "Skilled labor for heavy lifting." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section — theme-aware */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 xl:py-40 bg-background text-foreground overflow-hidden border-b border-border/40">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.22] dark:opacity-[0.35]"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2940&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background/92 to-muted/40 dark:via-background/95 dark:to-background/80" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/[0.06] via-transparent to-transparent dark:from-primary/10" />

        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-start space-y-6 max-w-4xl">
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-primary">
              Reliable Moving & Transport across the GTA, Canada
            </h1>
            <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
              Fast, secure, and professional services for all your moving, shipping, and logistics needs. Avixzon delivers excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex h-14 items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur-sm px-10 text-lg font-semibold text-foreground shadow-sm transition-all hover:bg-muted hover:border-primary/30 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Promise</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Why Choose Avixzon?</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              We prioritize speed, reliability, and customer satisfaction above all else.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-3">
            {[
              { icon: Clock, title: "Fast & Timely", body: "We understand the value of time. Our team ensures punctual pickups and deliveries, every time." },
              { icon: ShieldCheck, title: "Safe & Secure", body: "Your belongings are precious. We treat every item with white-glove care and top-tier security." },
              { icon: Globe, title: "Wide Network", body: "Covering the entire Greater Toronto Area and beyond with our comprehensive logistics network." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="group flex flex-col items-center p-8 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">What We Offer</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Our Premium Services</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              Comprehensive moving and logistics solutions tailored to your needs.
            </p>
          </div>
          <div className="mx-auto grid max-w-7xl items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/40 hover:-translate-y-1.5">
                <div className="absolute top-0 right-0 p-4 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500">
                  <service.icon className="h-28 w-28 text-primary" />
                </div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{service.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
                <span className="inline-flex items-center text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
                <Link href="/services" className="absolute inset-0 z-10">
                  <span className="sr-only">View {service.name}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10 md:mt-14">
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-10 text-base font-semibold text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Client Reviews</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Trusted by homeowners and businesses across Ontario.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Quote Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
