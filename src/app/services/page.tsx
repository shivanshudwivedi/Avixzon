"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck, Plane, Ship, Package, FileCheck,
  Route, Warehouse, Sparkles, Users, ArrowRight, CheckCircle2, Car,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "car-rentals",
    title: "Car Rentals",
    badge: "Primary Service",
    icon: Car,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
    description: "Premium car rental — from economy to luxury, daily or weekly, with a flexible and well-maintained fleet.",
    details: "Whether you need a reliable sedan for a day trip or a spacious SUV for a week-long journey, our clean and fully-inspected rental fleet has you covered. We offer competitive daily and weekly rates with flexible pickup times to suit your schedule.",
    features: ["Diverse Fleet", "Daily & Weekly Rates", "Clean & Inspected", "Flexible Pickup"],
  },
  {
    id: "transportation",
    title: "Transportation",
    icon: Route,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=80",
    description: "Dedicated transportation logistics and fleet solutions for business or personal needs.",
    details: "Need a truck for a day or a fleet for a week? We provide well-maintained vehicles for dedicated transportation services tailored to your specific logistics needs. GPS-tracked and driver-optioned for complete peace of mind.",
    features: ["Dedicated Fleet", "Driver Options", "GPS Tracking", "Flexible Terms"],
  },
  {
    id: "moving-services",
    title: "Moving Services",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80",
    description: "Stress-free residential and commercial moving within the GTA and beyond.",
    details: "Whether you're moving a studio apartment or a large office, our professional movers handle packing, loading, transport, and unloading with care. We ensure your belongings arrive safely and on time.",
    features: ["Local & Long Distance", "Residential & Commercial", "Furniture Assembly", "White Glove Service"],
  },
  {
    id: "packing-crating",
    title: "Packing & Crating",
    icon: Package,
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1400&q=80",
    description: "Professional packing to protect your valuable items during transit.",
    details: "Our team uses high-quality materials to pack your items securely. We offer custom crating for fragile, oversized, or high-value items to prevent damage during transit.",
    features: ["Custom Crates", "Bubble Wrapping", "Fragile Handling", "Unpacking Service"],
  },
  {
    id: "air-freight",
    title: "Air Freight",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
    description: "Fast and reliable air cargo services for urgent shipments worldwide.",
    details: "Our air freight services ensure your goods reach their destination quickly and safely. We offer express shipping, consolidated cargo, and door-to-door delivery options worldwide. Perfect for time-sensitive deliveries.",
    features: ["Global Network", "Express Shipping", "Cargo Tracking", "Door-to-Door"],
  },
  {
    id: "ocean-freight",
    title: "Ocean Freight",
    icon: Ship,
    image: "https://images.unsplash.com/photo-1519121785383-3229633bb50e?auto=format&fit=crop&w=1400&q=80",
    description: "Cost-effective sea shipping solutions for large volumes and bulk cargo.",
    details: "Ideal for bulk shipments, our ocean freight services provide full container load (FCL) and less than container load (LCL) options. We handle customs clearance and port-to-port logistics efficiently.",
    features: ["FCL & LCL", "Port-to-Port", "Customs Clearance", "Cost Effective"],
  },
  {
    id: "customs-brokerage",
    title: "Customs Brokerage",
    icon: FileCheck,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
    description: "Navigating complex customs regulations for seamless cross-border shipping.",
    details: "We simplify cross-border shipping by handling all documentation and customs clearance procedures. Our experts ensure compliance with regulations to avoid delays and penalties.",
    features: ["Documentation", "Duty Calculation", "Compliance Checks", "24/7 Support"],
  },
  {
    id: "warehousing",
    title: "Warehousing",
    icon: Warehouse,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80",
    description: "Secure short-term and long-term storage solutions for your inventory.",
    details: "Our climate-controlled warehouses are monitored 24/7. Whether you need temporary storage during a move or long-term inventory management, we have the secure space you need.",
    features: ["Climate Controlled", "24/7 Security", "Inventory Management", "Short/Long Term"],
  },
  {
    id: "cleaning-services",
    title: "Cleaning Services",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80",
    description: "Post-move professional cleaning to leave your space spotless.",
    details: "We offer move-in/move-out cleaning services to ensure your new home is ready or your old one is left in perfect condition. We also provide commercial cleaning solutions for offices.",
    features: ["Move-In/Out", "Deep Cleaning", "Eco-Friendly Products", "Satisfaction Guarantee"],
  },
  {
    id: "manpower-services",
    title: "Manpower Services",
    icon: Users,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
    description: "Skilled labor for loading, unloading, and general help.",
    details: "Need extra hands? Our reliable manpower services provide skilled workers for loading, unloading, assembly, and other labor-intensive tasks to make your job easier.",
    features: ["Skilled Labor", "Loading/Unloading", "Furniture Moving", "Hourly Rates"],
  },
];

export default function ServicesPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = services.find((s) => s.id === selectedId) ?? null;

  return (
    <div className="min-h-screen bg-muted pb-20">
      {/* Header */}
      <div className="relative py-20 md:py-28 lg:py-36 bg-muted border-b border-border overflow-hidden">
        <div className="container mx-auto px-5 md:px-8 relative z-10 text-center space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What We Do</p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground"
          >
            Our Services.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive logistics and moving solutions tailored to your needs.
            The Avixzon standard of excellence.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-5 md:px-8 py-14 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              layoutId={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedId(service.id)}
              className={cn(
                "group cursor-pointer rounded-2xl border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden flex flex-col",
                service.badge
                  ? "border-primary/30 ring-1 ring-primary/20"
                  : "border-border hover:border-primary/40"
              )}
            >
              {/* Service image thumbnail */}
              <div className="relative h-44 overflow-hidden rounded-t-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {service.badge && (
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest bg-primary text-primary-foreground px-2.5 py-1 rounded-full shadow">
                    {service.badge}
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1 relative z-10">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 w-fit">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 line-clamp-2 flex-1">
                  {service.description}
                </p>
                <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-1.5 transition-transform duration-300">
                  View Details <ArrowRight className="ml-1.5 h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/65 z-50 backdrop-blur-sm"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                layoutId={selected.id}
                className="bg-card w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden pointer-events-auto border border-border flex flex-col max-h-[90vh]"
              >
                {/* Modal hero image */}
                <div className="relative h-52 sm:h-60 shrink-0 overflow-hidden">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 672px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Close button overlaid on image */}
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Title overlaid on image */}
                  <div className="absolute bottom-0 left-0 right-0 px-7 pb-6 pt-12">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/15 backdrop-blur-sm text-white shrink-0">
                        <selected.icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                        {selected.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-9 flex-1 overflow-y-auto space-y-6">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {selected.details}
                  </p>

                  <div>
                    <h3 className="text-base font-semibold mb-3 text-foreground">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selected.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 p-3 rounded-xl bg-muted border border-border/60"
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                          <span className="text-sm font-medium text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 bg-muted/40 border-t border-border flex gap-3">
                  <Link
                    href="/contact"
                    className="flex-1 inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 hover:scale-[1.02] transition-all"
                  >
                    Get a Custom Quote
                  </Link>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="flex-1 inline-flex h-11 items-center justify-center rounded-xl border border-border bg-background text-sm font-medium hover:bg-muted transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
