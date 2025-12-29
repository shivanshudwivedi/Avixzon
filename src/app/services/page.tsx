"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Truck, Plane, Ship, Package, FileCheck, 
  Map, Warehouse, Sparkles, Users, ArrowRight, CheckCircle2 
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "air-freight",
    title: "Air Freight",
    icon: Plane,
    description: "Fast and reliable air cargo services for urgent shipments worldwide.",
    details: "Our air freight services ensure your goods reach their destination quickly and safely. We offer express shipping, consolidated cargo, and door-to-door delivery options worldwide. Perfect for time-sensitive deliveries.",
    features: ["Global Network", "Express Shipping", "Cargo Tracking", "Door-to-Door"]
  },
  {
    id: "ocean-freight",
    title: "Ocean Freight",
    icon: Ship,
    description: "Cost-effective sea shipping solutions for large volumes and bulk cargo.",
    details: "Ideal for bulk shipments, our ocean freight services provide full container load (FCL) and less than container load (LCL) options. We handle customs clearance and port-to-port logistics efficiently.",
    features: ["FCL & LCL", "Port-to-Port", "Customs Clearance", "Cost Effective"]
  },
  {
    id: "moving-services",
    title: "Moving Services",
    icon: Truck,
    description: "Stress-free residential and commercial moving within the GTA and beyond.",
    details: "Whether you're moving a studio apartment or a large office, our professional movers handle packing, loading, transport, and unloading with care. We ensure your belongings arrive safely and on time.",
    features: ["Local & Long Distance", "Residential & Commercial", "Furniture Assembly", "White Glove Service"]
  },
  {
    id: "packing-crating",
    title: "Packing & Crating",
    icon: Package,
    description: "Professional packing to protect your valuable items during transit.",
    details: "Our team uses high-quality materials to pack your items securely. We offer custom crating for fragile, oversized, or high-value items to prevent damage during transit.",
    features: ["Custom Crates", "Bubble Wrapping", "Fragile Handling", "Unpacking Service"]
  },
  {
    id: "customs-brokerage",
    title: "Customs Brokerage",
    icon: FileCheck,
    description: "Navigating complex customs regulations for seamless cross-border shipping.",
    details: "We simplify cross-border shipping by handling all documentation and customs clearance procedures. Our experts ensure compliance with regulations to avoid delays and penalties.",
    features: ["Documentation", "Duty Calculation", "Compliance Checks", "24/7 Support"]
  },
  {
    id: "transportation-rentals",
    title: "Transportation & Rentals",
    icon: Map,
    description: "Flexible vehicle rentals and dedicated transportation logistics.",
    details: "Need a truck for a day? Or a fleet for a week? We offer a range of well-maintained vehicles for rent, as well as dedicated transportation services for your specific logistics needs.",
    features: ["Diverse Fleet", "Flexible Terms", "Driver Options", "GPS Tracking"]
  },
  {
    id: "warehousing",
    title: "Warehousing",
    icon: Warehouse,
    description: "Secure short-term and long-term storage solutions for your inventory.",
    details: "Our climate-controlled warehouses are monitored 24/7. Whether you need temporary storage during a move or long-term inventory management, we have the secure space you need.",
    features: ["Climate Controlled", "24/7 Security", "Inventory Management", "Short/Long Term"]
  },
  {
    id: "cleaning-services",
    title: "Cleaning Services",
    icon: Sparkles,
    description: "Post-move professional cleaning to leave your space spotless.",
    details: "We offer move-in/move-out cleaning services to ensure your new home is ready or your old one is left in perfect condition. We also provide commercial cleaning solutions for offices.",
    features: ["Move-In/Out", "Deep Cleaning", "Eco-Friendly Products", "Satisfaction Guarantee"]
  },
  {
    id: "manpower-services",
    title: "Manpower Services",
    icon: Users,
    description: "Skilled labor for loading, unloading, and general help.",
    details: "Need extra hands? Our reliable manpower services provide skilled workers for loading, unloading, assembly, and other labor-intensive tasks to make your job easier.",
    features: ["Skilled Labor", "Loading/Unloading", "Furniture Moving", "Hourly Rates"]
  },
];

export default function ServicesPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Section */}
      <div className="relative py-24 md:py-32 bg-primary/5 border-b border-border/50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          >
            Our Premium Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            Comprehensive logistics and moving solutions tailored to your needs. 
            Experience the Avixzon standard of excellence.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              layoutId={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedId(service.id)}
              className="group cursor-pointer rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform scale-150 group-hover:rotate-12 duration-500">
                <service.icon className="h-32 w-32 text-primary" />
              </div>
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {service.description}
                </p>
                
                <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                layoutId={selectedId}
                className="bg-card w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden pointer-events-auto border border-border flex flex-col max-h-[90vh]"
              >
                {services.find(s => s.id === selectedId) && (
                  <>
                     {(() => {
                       const s = services.find(i => i.id === selectedId)!;
                       const Icon = s.icon;
                       return (
                         <div className="flex flex-col h-full">
                           <div className="p-8 md:p-10 flex-1 overflow-y-auto">
                             <div className="flex items-start justify-between mb-8">
                               <div className="flex items-center gap-5">
                                 <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                                   <Icon className="h-10 w-10" />
                                 </div>
                                 <h2 className="text-3xl md:text-4xl font-bold">{s.title}</h2>
                               </div>
                               <button 
                                 onClick={() => setSelectedId(null)} 
                                 className="p-2 rounded-full hover:bg-muted transition-colors"
                               >
                                 <svg className="w-6 h-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                 </svg>
                               </button>
                             </div>
                             
                             <div className="prose dark:prose-invert max-w-none">
                               <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                 {s.details}
                               </p>
                               
                               <h3 className="text-xl font-semibold mb-4 text-foreground">Key Features</h3>
                               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                 {s.features.map((feature, idx) => (
                                   <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50">
                                     <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                     <span className="font-medium">{feature}</span>
                                   </div>
                                 ))}
                               </div>
                             </div>
                           </div>

                           <div className="p-6 bg-muted/30 border-t border-border flex gap-4 mt-auto">
                             <Link 
                               href="/contact" 
                               className="flex-1 inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-[1.02] transition-all"
                             >
                               Get a Custom Quote
                             </Link>
                             <button 
                               onClick={() => setSelectedId(null)}
                               className="flex-1 inline-flex h-12 items-center justify-center rounded-xl border border-input bg-background px-6 text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                             >
                               Close
                             </button>
                           </div>
                         </div>
                       );
                     })()}
                  </>
                )}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
