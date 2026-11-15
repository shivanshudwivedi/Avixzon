import Link from "next/link";
import { MapPin } from "lucide-react";
import { Closing, Eyebrow, InsideHero, Questions, QuoteLink } from "@/components/operations-ui";
import { pageMeta } from "@/lib/discovery";
import { core, site } from "@/lib/operations";

export const metadata = pageMeta("Service Area: Scarborough, Toronto & the GTA | Avixzon", "Avixzon serves Scarborough, Toronto, Mississauga, Brampton, Markham and Vaughan. Find local cleaning, labour and transport coverage and enquire about international freight.", "/service-area", "/operations/toronto.jpg");
export default function AreaPage() {
  return <>
    <InsideHero items={[["Service Area", "/service-area"]]} label="Service area" title="Based in Scarborough. Working across the GTA." text="Avixzon serves businesses and households across the Greater Toronto Area. Air and ocean freight routes are confirmed separately for each shipment." image="/operations/toronto.jpg" alt="Toronto skyline across Lake Ontario"><QuoteLink /></InsideHero>
    <section className="ops-section"><div className="ops-wrap ops-split"><div><Eyebrow>Greater Toronto Area</Eyebrow><h2>Where we take on work.</h2><ul className="ops-checks">{site.cities.map(city => <li key={city}><MapPin size={18} />{city}</li>)}</ul></div><div className="ops-note"><Eyebrow>Services</Eyebrow><h3>Find the support you need.</h3><div className="ops-link-list">{core.map(s => <Link href={"/services/" + s.slug} key={s.slug}>{s.name}</Link>)}</div></div></div></section>
    <Questions items={[["Do you serve addresses outside the GTA?", "Tell us the location and service you need. We’ll confirm whether we can take on the job or cover the route before quoting."], ["Where is the Avixzon office?", "Avixzon is based at 617–1050 Markham Road, Scarborough, Ontario M1H 2Y7. Call (437) 775-2592 to speak with the team."]]} />
    <Closing />
  </>;
}
