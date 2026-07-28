import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Car,
  Check,
  FileCheck,
  Package,
  Plane,
  Route,
  Ship,
  Sparkles,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Moving, Packing, Freight & Logistics Services",
  description:
    "Explore Avixzon moving, transportation, packing, air freight, ocean freight, customs brokerage, warehousing, cleaning, manpower and car rental services across the GTA.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Moving, Packing, Freight & Logistics Services | Avixzon",
    description:
      "Ten professional services from one accountable team serving Toronto, Scarborough and the GTA.",
    url: "/services",
  },
};

const services = [
  {
    id: "moving-services",
    number: "01",
    title: "Moving Services",
    statement: "Your move, handled from door to door.",
    description: "Residential and commercial moving across the GTA and beyond. We plan the load, protect your belongings, transport everything carefully and place it where it belongs.",
    image: "/services/moving.jpg",
    icon: Truck,
    features: ["Homes, condos & apartments", "Office & commercial moves", "Local & long-distance", "Loading, transport & unloading"],
    alt: "Professional movers loading protected furniture into a moving truck",
  },
  {
    id: "transportation",
    number: "02",
    title: "Transportation",
    statement: "The right vehicle. The right route. The right time.",
    description: "Dedicated transport solutions for personal, commercial and logistics needs, supported by well-maintained vehicles and a plan built around your schedule.",
    image: "/services/transport.jpg",
    icon: Route,
    features: ["Dedicated vehicles", "Personal & business transport", "Flexible scheduling", "GTA-wide coverage"],
    alt: "Freight truck travelling on an open highway",
  },
  {
    id: "packing-crating",
    number: "03",
    title: "Packing & Crating",
    statement: "Protection begins before the truck moves.",
    description: "Careful packing for everyday belongings, fragile pieces, oversized items and valuables. We use the right materials and can build custom crating where extra protection matters.",
    image: "/services/packing.jpg",
    icon: Package,
    features: ["Full or partial packing", "Fragile-item protection", "Custom crating", "Unpacking support"],
    alt: "Hands carefully packing protected belongings into a moving box",
  },
  {
    id: "air-freight",
    number: "04",
    title: "Air Freight",
    statement: "When the shipment cannot wait.",
    description: "Fast air cargo options for time-sensitive goods and international shipments, with clear coordination from origin to destination.",
    image: "/services/air-freight.jpg",
    icon: Plane,
    features: ["Express shipments", "International reach", "Consolidated cargo", "Door-to-door options"],
    alt: "Commercial aircraft prepared for international air freight",
  },
  {
    id: "ocean-freight",
    number: "05",
    title: "Ocean Freight",
    statement: "More cargo. More distance. Better value.",
    description: "Practical ocean shipping for large-volume and international freight, including full-container and shared-container options.",
    image: "/services/ocean-freight.jpg",
    icon: Ship,
    features: ["Full container load", "Less than container load", "Port-to-port coordination", "International shipping"],
    alt: "Container ship carrying international ocean freight",
  },
  {
    id: "customs-brokerage",
    number: "06",
    title: "Customs Brokerage",
    statement: "Cross the border with the paperwork in order.",
    description: "Support with customs documentation, clearance steps and compliance so your shipment keeps moving without preventable delays.",
    image: "/services/customs.jpg",
    icon: FileCheck,
    features: ["Shipping documents", "Clearance coordination", "Compliance support", "Cross-border guidance"],
    alt: "Customs and shipping documents prepared for clearance",
  },
  {
    id: "warehousing",
    number: "07",
    title: "Warehousing",
    statement: "A secure place between here and there.",
    description: "Flexible storage for household belongings, commercial inventory and freight, with organised short- and long-term options.",
    image: "/services/warehousing.jpg",
    icon: Warehouse,
    features: ["Short-term storage", "Long-term storage", "Inventory organisation", "Commercial & personal"],
    alt: "Organised modern warehouse with tall storage racks",
  },
  {
    id: "cleaning-services",
    number: "08",
    title: "Cleaning Services",
    statement: "Leave one space clean. Enter the next one ready.",
    description: "Professional move-in, move-out and commercial cleaning that makes the handover easier and the fresh start feel complete.",
    image: "/services/cleaning.jpg",
    icon: Sparkles,
    features: ["Move-in cleaning", "Move-out cleaning", "Deep cleaning", "Commercial spaces"],
    alt: "Professional cleaning team working in a modern home",
  },
  {
    id: "manpower-services",
    number: "09",
    title: "Manpower Services",
    statement: "Capable hands when the job needs more people.",
    description: "Reliable workers for loading, unloading, moving, handling and other labour-intensive tasks—booked around the scale of your job.",
    image: "/services/manpower.jpg",
    icon: Users,
    features: ["Loading & unloading", "Furniture handling", "Warehouse support", "Flexible labour"],
    alt: "Uniformed warehouse workers carrying boxes together",
  },
  {
    id: "car-rentals",
    number: "10",
    title: "Car Rentals",
    statement: "A clean, dependable vehicle for the road ahead.",
    description: "Flexible daily and weekly car rentals for local travel, business needs and longer journeys, with options suited to different trip sizes.",
    image: "/services/car-rentals.jpg",
    icon: Car,
    features: ["Daily rentals", "Weekly rentals", "Multiple vehicle options", "Flexible pickup"],
    alt: "Premium rental car on an open road",
  },
];

export default function ServicesPage() {
  return (
    <div className="avx-services-page">
      <section className="avx-services-hero">
        <Image src="/services/warehousing.jpg" alt="" fill priority sizes="100vw" />
        <div className="avx-services-hero-shade" />
        <div className="avx-shell avx-services-hero-inner">
          <div className="avx-kicker avx-kicker-light">Every service is core</div>
          <h1>Built to move<br /><em>everything.</em></h1>
          <p>Ten serious services. One accountable team. No side offerings and no handoffs.</p>
          <a href="#service-index" className="avx-services-scroll">Explore all services <ArrowDown /></a>
        </div>
      </section>

      <section className="avx-service-index" id="service-index">
        <div className="avx-shell">
          <p>Choose a service</p>
          <div>
            {services.map((service) => (
              <a href={`#${service.id}`} key={service.id}>
                <span>{service.number}</span>{service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="avx-service-statement">
        <div className="avx-shell">
          <div className="avx-kicker">One operating standard</div>
          <h2>Every job gets the same<br />care, clarity and follow-through.</h2>
        </div>
      </section>

      <main className="avx-service-list">
        {services.map(({ id, number, title, statement, description, image, icon: Icon, features, alt }, index) => (
          <article className={`avx-service-feature ${index % 2 ? "is-reverse" : ""}`} id={id} key={id}>
            <div className="avx-service-feature-image">
              <Image src={image} alt={alt} fill sizes="(max-width: 900px) 100vw, 55vw" />
              <span>{number}</span>
            </div>
            <div className="avx-service-feature-copy">
              <div className="avx-service-icon"><Icon /></div>
              <p className="avx-service-eyebrow">Avixzon service {number}</p>
              <h2>{title}</h2>
              <h3>{statement}</h3>
              <p className="avx-service-description">{description}</p>
              <ul>
                {features.map((feature) => <li key={feature}><Check />{feature}</li>)}
              </ul>
              <Link href="/contact" className="avx-text-link">Plan this service <ArrowUpRight /></Link>
            </div>
          </article>
        ))}
      </main>

      <section className="avx-service-cta">
        <div className="avx-shell">
          <div className="avx-kicker avx-kicker-light">Not sure what the job needs?</div>
          <h2>Tell us what has to move.<br />We’ll build the right plan.</h2>
          <div>
            <Link href="/contact" className="avx-button avx-button-coral">Get a free quote <ArrowUpRight /></Link>
            <a href="tel:+14377752592" className="avx-text-link avx-text-link-light">Call (437) 775-2592 <ArrowUpRight /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
