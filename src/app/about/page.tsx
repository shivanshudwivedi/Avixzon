import Link from "next/link";
import { Closing, Coverage, Eyebrow, InsideHero, QuoteLink } from "@/components/operations-ui";
import { pageMeta } from "@/lib/discovery";
import { core } from "@/lib/operations";

export const metadata = pageMeta("About Avixzon | GTA Operations & Logistics Company", "Meet Avixzon Inc., a Scarborough-based company providing commercial cleaning, labour, freight forwarding and local transport across the Greater Toronto Area.", "/about");
export default function AboutPage() {
  return <>
    <InsideHero items={[["About Us", "/about"]]} label="Company / About Us" title="The people behind the work." text="Avixzon Inc. is a Scarborough-based operations and logistics company serving businesses and households across the Greater Toronto Area." image="/operations/team.jpg" alt="Two warehouse workers checking inventory together"><QuoteLink /><Link href="/careers" className="ops-quiet-button">Explore careers </Link></InsideHero>
    <section className="ops-section"><div className="ops-wrap ops-split"><div data-reveal><Eyebrow>What we do</Eyebrow><h2>Hands-on work. Carefully coordinated.</h2></div><div className="ops-prose" data-reveal><p>Our work takes place at customer sites, on the road and at freight handoffs. Our four core services cover the people, site work and transport that keep a job moving.</p><div className="ops-link-list">{core.map(s => <Link key={s.slug} href={"/services/" + s.slug}>{s.name}</Link>)}</div></div></div></section>
    <Coverage /><Closing />
  </>;
}
