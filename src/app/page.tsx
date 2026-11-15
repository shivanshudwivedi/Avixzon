import Image from "next/image";
import Link from "next/link";
import { OperationsReel } from "@/components/operations-motion";
import { Closing, Coverage, Eyebrow, Questions, QuoteLink, ServiceTile } from "@/components/operations-ui";
import { pageMeta } from "@/lib/discovery";
import { core, faqs } from "@/lib/operations";

export const metadata = pageMeta("Avixzon | Cleaning, Labour, Freight & Transport in the GTA", "Avixzon provides commercial cleaning, manpower, freight forwarding and local transport in Scarborough, Toronto and the Greater Toronto Area.", "/");

export default function HomePage() {
  return <>
    <OperationsReel><div className="ops-hero-copy">

      <h1>We keep your <br />operations moving.</h1>

      <div className="ops-actions"><QuoteLink /><a href="#core-services" className="ops-quiet-button">Explore services </a></div>
    </div></OperationsReel>
    <div className="ops-quick"><div className="ops-wrap">{core.map((service, index) => <Link href={"/services/" + service.slug} key={service.slug}><span>0{index + 1}</span>{service.label}</Link>)}</div></div>
    <section id="core-services" className="ops-section"><div className="ops-wrap">
      <div className="ops-section-head" data-reveal><div><Eyebrow>Our core services</Eyebrow><h2>At your site.<br />On the road.</h2></div><Link href="/services" className="ops-text-link">View all services </Link></div>
      <div className="ops-service-grid">{core.map((service, index) => <div key={service.slug} data-reveal><ServiceTile service={service} index={index} /></div>)}</div>
    </div></section>
    <section className="ops-feature"><div className="ops-feature-photo"><Image fill src="/operations/team.jpg" alt="Warehouse colleagues reviewing a clipboard together beside stock shelves" sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="ops-feature-copy" data-reveal>
      <Eyebrow>How we work</Eyebrow><h2>Clear scope.<br />Clear handoffs.</h2>
      <ol><li><span>01</span><strong>Share the job</strong></li><li><span>02</span><strong>Confirm the plan</strong></li><li><span>03</span><strong>Work with one point of contact</strong></li></ol>
      <Link className="ops-text-link" href="/about">Meet Avixzon </Link>
    </div></section>
    <Coverage />
    <Questions items={faqs} title="A few practical answers." />
    <Closing />
  </>;
}
