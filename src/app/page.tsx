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
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-48 xl:py-56 bg-black text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2940&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        
        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-start space-y-6 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Reliable Moving & Transport across the GTA, Canada
            </h1>
            <p className="max-w-[700px] text-gray-300 text-lg md:text-2xl leading-relaxed">
              Fast, secure, and professional services for all your moving, shipping, and logistics needs. Avixzon delivers excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link 
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-10 text-lg font-semibold shadow-lg transition-all hover:bg-white/20 hover:text-white hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-white"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Why Choose Avixzon?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We prioritize speed, reliability, and customer satisfaction above all else.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-3">
            <div className="group relative flex flex-col items-center p-8 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Clock className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Fast & Timely</h3>
              <p className="text-muted-foreground text-center text-lg">
                We understand the value of time. Our team ensures punctual pickups and deliveries, every time.
              </p>
            </div>
            
            <div className="group relative flex flex-col items-center p-8 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ShieldCheck className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Safe & Secure</h3>
              <p className="text-muted-foreground text-center text-lg">
                Your belongings are precious. We treat every item with white-glove care and top-tier security.
              </p>
            </div>

            <div className="group relative flex flex-col items-center p-8 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Globe className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Wide Network</h3>
              <p className="text-muted-foreground text-center text-lg">
                Covering the entire Greater Toronto Area and beyond with our comprehensive logistics network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Redesigned */}
      <section className="w-full py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Our Premium Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive moving and logistics solutions tailored to your needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {servicesList.map((service, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card p-8 shadow-sm transition-all hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <service.icon className="h-24 w-24 text-primary" />
                  </div>
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-foreground">{service.name}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <Link href="/services" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  
                  <Link href="/services" className="absolute inset-0 z-10">
                    <span className="sr-only">View {service.name}</span>
                  </Link>
                </div>
             ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-10 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-foreground"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">What Our Clients Say</h2>
            <p className="text-muted-foreground md:text-xl">
              Trusted by homeowners and businesses across Ontario.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Quote Section */}
      <section className="w-full py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
