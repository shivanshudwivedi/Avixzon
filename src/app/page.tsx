import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Box,
  Building2,
  Car,
  Check,
  ChevronRight,
  Clock3,
  Container,
  Earth,
  PackageCheck,
  Plane,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";
import { HeroVideoSequence } from "@/components/hero-video-sequence";

export const metadata: Metadata = {
  title: { absolute: "Avixzon | Movers, Freight & Logistics in Toronto & the GTA" },
  description:
    "Move homes, offices and freight with one professional team serving Scarborough, Toronto and the GTA. Packing, transport, warehousing and global shipping available.",
  alternates: { canonical: "/" },
};

const services = [
  {
    title: "Moving",
    text: "Homes, condos and offices moved with a clear plan and careful hands.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=90",
    icon: Truck,
    number: "01",
  },
  {
    title: "Freight",
    text: "Air and ocean shipping for cargo that needs to cross borders.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=90",
    icon: Container,
    number: "02",
  },
  {
    title: "Transport",
    text: "Reliable vehicles and dedicated logistics for personal and business needs.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=90",
    icon: Car,
    number: "03",
  },
  {
    title: "Storage",
    text: "Secure short- and long-term warehousing for belongings and inventory.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=90",
    icon: Warehouse,
    number: "04",
  },
];

const capabilities = [
  { icon: Box, label: "Packing & crating", href: "/services#packing-crating" },
  { icon: Plane, label: "Air freight", href: "/services#air-freight" },
  { icon: Container, label: "Ocean freight", href: "/services#ocean-freight" },
  { icon: PackageCheck, label: "Customs brokerage", href: "/services#customs-brokerage" },
  { icon: Sparkles, label: "Cleaning services", href: "/services#cleaning-services" },
  { icon: Users, label: "Manpower services", href: "/services#manpower-services" },
  { icon: Car, label: "Car rentals", href: "/services#car-rentals" },
  { icon: Building2, label: "Commercial moves", href: "/services#moving-services" },
];

const process = [
  { step: "01", title: "Tell us the job", text: "Call or send the details. We will ask the right questions and understand the scope." },
  { step: "02", title: "Get a clear plan", text: "We confirm the service, timing and next steps before your move begins." },
  { step: "03", title: "We move it", text: "Our team handles the work carefully and keeps you informed from pickup to finish." },
];

export default function Home() {
  return (
    <div className="avx-page">
      <section className="avx-hero">
        <HeroVideoSequence />
        <div className="avx-hero-shade" />
        <div className="avx-hero-grid" />

        <div className="avx-shell avx-hero-inner">
          <div className="avx-kicker avx-kicker-light">
            <span className="avx-live-dot" />
            Moving Toronto and beyond
          </div>
          <h1>
            Move without
            <span>limits.</span>
          </h1>
          <p>
            One trusted team for moving, transport, freight and storage across the GTA.
          </p>
          <div className="avx-hero-actions">
            <Link href="/contact" className="avx-button avx-button-coral">
              Get a free quote <ArrowUpRight size={19} />
            </Link>
            <a href="tel:+14377752592" className="avx-text-link avx-text-link-light">
              Call (437) 775-2592 <ChevronRight size={17} />
            </a>
          </div>
        </div>

        <div className="avx-hero-bottom">
          <div className="avx-shell avx-trust-row">
            <div><ShieldCheck /><span><strong>Handled with care</strong>Professional moving teams</span></div>
            <div><Clock3 /><span><strong>Built around your time</strong>Clear pickup and delivery plans</span></div>
            <div><Earth /><span><strong>Local to global</strong>GTA service and worldwide freight</span></div>
          </div>
        </div>
      </section>

      <section className="avx-intro avx-section">
        <div className="avx-shell avx-intro-grid">
          <div>
            <div className="avx-kicker">Everything in motion</div>
            <h2>Big move.<br />Small move.<br /><em>Handled.</em></h2>
          </div>
          <div className="avx-intro-copy">
            <p>
              Moving should feel organised, not overwhelming. Avixzon brings the people,
              vehicles and logistics together so you have one team from start to finish.
            </p>
            <div className="avx-proof">
              <span><Check /> Residential</span>
              <span><Check /> Commercial</span>
              <span><Check /> Local & long distance</span>
              <span><Check /> Cross-border freight</span>
            </div>
            <Link href="/services" className="avx-text-link">
              See every service <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="avx-services avx-section">
        <div className="avx-shell">
          <div className="avx-section-heading">
            <div>
              <div className="avx-kicker">What we move</div>
              <h2>One company.<br />Every direction.</h2>
            </div>
            <p>From a condo across Scarborough to cargo across the ocean, we make the complicated feel simple.</p>
          </div>
          <div className="avx-service-grid">
            {services.map(({ title, text, image, icon: Icon, number }) => (
              <Link href="/services" className="avx-service-card" key={title}>
                <Image src={image} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" />
                <div className="avx-service-overlay" />
                <span className="avx-service-number">{number}</span>
                <div className="avx-service-content">
                  <Icon />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="avx-card-link">Explore service <ArrowUpRight size={17} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="avx-capabilities">
        <div className="avx-shell">
          <div className="avx-kicker avx-kicker-light">More ways we can help</div>
          <div className="avx-capability-grid">
            {capabilities.map(({ icon: Icon, label, href }) => (
              <Link className="avx-capability" href={href} key={label}>
                <Icon />
                <span>{label}</span>
                <ArrowUpRight className="avx-capability-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="avx-story avx-section">
        <div className="avx-shell avx-story-grid">
          <div className="avx-story-image">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=90"
              alt="Modern logistics warehouse with organised shelving"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className="avx-image-stamp">
              <span>GTA</span>
              <strong>Based in Scarborough</strong>
            </div>
          </div>
          <div className="avx-story-copy">
            <div className="avx-kicker">Why Avixzon</div>
            <h2>Less stress is the whole point.</h2>
            <p>
              You should never have to chase your moving company. We keep the plan clear,
              protect what matters and stay easy to reach.
            </p>
            <div className="avx-values">
              <div><span>01</span><strong>Clear communication</strong><p>Real answers before, during and after the job.</p></div>
              <div><span>02</span><strong>Careful handling</strong><p>Professional packing and thoughtful protection.</p></div>
              <div><span>03</span><strong>One capable team</strong><p>Moving, storage and freight under one roof.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="avx-process avx-section">
        <div className="avx-shell">
          <div className="avx-section-heading avx-process-heading">
            <div>
              <div className="avx-kicker">How it works</div>
              <h2>From call to complete.</h2>
            </div>
            <a href="tel:+14377752592" className="avx-button avx-button-ink">Start with a call <ArrowUpRight size={18} /></a>
          </div>
          <div className="avx-process-grid">
            {process.map((item) => (
              <div className="avx-process-step" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="avx-coverage">
        <div className="avx-shell avx-coverage-grid">
          <div>
            <div className="avx-kicker avx-kicker-light">Our home base</div>
            <h2>Serving the entire GTA.</h2>
            <p>Toronto · Scarborough · Mississauga · Brampton · Markham · Vaughan · Surrounding regions</p>
          </div>
          <div className="avx-coverage-pin">
            <span>43.7764° N</span>
            <div><strong>Scarborough</strong><small>Ontario, Canada</small></div>
          </div>
        </div>
      </section>

      <section className="avx-final-cta">
        <div className="avx-shell">
          <div className="avx-kicker">Your next move starts here</div>
          <h2>Let’s get you<br /><em>moving.</em></h2>
          <div className="avx-final-actions">
            <Link href="/contact" className="avx-button avx-button-coral">Get a free quote <ArrowUpRight size={19} /></Link>
            <a href="mailto:avixzon@gmail.com" className="avx-text-link">avixzon@gmail.com <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
