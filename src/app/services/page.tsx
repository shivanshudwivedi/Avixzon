import Link from "next/link";
import { Closing, Eyebrow, InsideHero, QuoteLink, ServiceTile } from "@/components/operations-ui";
import { pageMeta } from "@/lib/discovery";
import { core, services } from "@/lib/operations";

export const metadata = pageMeta("Cleaning, Labour, Freight & Transport Services | Avixzon", "Explore Avixzon’s commercial cleaning, manpower, freight forwarding and local transport services in Toronto and the GTA, plus moving, warehousing and more.", "/services");
export default function ServicesPage() {
  return <>
    <InsideHero items={[["Services", "/services"]]} label="Avixzon services" title="The right crew. The right route." text="Cleaning, labour, freight and transport." image="/operations/team.jpg" alt="Warehouse team reviewing an inventory checklist"><QuoteLink /></InsideHero>
    <section className="ops-section"><div className="ops-wrap"><div className="ops-section-head"><div><Eyebrow>Core services</Eyebrow><h2>Where we do our best work.</h2></div></div><div className="ops-service-grid">{core.map((s, i) => <div key={s.slug} id={s.slug} data-reveal><ServiceTile service={s} index={i} /></div>)}</div></div></section>
    <section className="ops-section ops-secondary"><div className="ops-wrap"><div className="ops-section-head"><div><Eyebrow>Explore more</Eyebrow><h2>Specialist services.</h2></div></div><div className="ops-service-grid ops-directory">{services.slice(4).map((s, i) => <div key={s.slug} id={s.slug} data-reveal><ServiceTile service={s} index={i + 4} /></div>)}</div><Link className="ops-text-link" href="/service-area">See where we work </Link></div></section>
    <Closing />
  </>;
}
