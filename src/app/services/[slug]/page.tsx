import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Closing, Eyebrow, InsideHero, JsonLd, Questions, QuoteLink, ServiceTile } from "@/components/operations-ui";
import { orgId, pageMeta } from "@/lib/discovery";
import { serviceBySlug, services, site, type Service } from "@/lib/operations";

type Props = {params: Promise<{slug: string}>};
export const dynamicParams = false;
export function generateStaticParams() { return services.map(s => ({slug: s.slug})); }
export async function generateMetadata({params}: Props) {
  const s = serviceBySlug((await params).slug);
  if (!s) return {};
  return pageMeta(s.name + " in Toronto & the GTA | Avixzon", s.lead.split(". ")[0].replace(/\.$/, "") + ".", "/services/" + s.slug, s.image);
}
export default async function ServicePage({params}: Props) {
  const s = serviceBySlug((await params).slug);
  if (!s) notFound();
  const path = "/services/" + s.slug;
  const related = (s.related ?? []).map(serviceBySlug).filter((item): item is Service => Boolean(item));
  return <>
    <JsonLd data={{"@context":"https://schema.org","@type":"Service","@id":site.url + path + "#service", name:s.name, description:s.lead, url:site.url + path, serviceType:s.name, provider:{"@id":orgId}, areaServed:{"@type":"Place", name: "Greater Toronto Area"}}} />
    <InsideHero items={[["Services", "/services"], [s.name, path]]} label="Avixzon service" title={s.name + "."} text={s.lead} image={s.image} alt={s.alt} position={s.position}><QuoteLink slug={s.slug} /></InsideHero>
    {s.slug === "transportation" && <div className="ops-wrap ops-media-credit">Illustrative photo: <a href="https://commons.wikimedia.org/wiki/File:2024_Isuzu_NPR-HD_Box_Truck_in_Mineral_White,_front_left,_2026-05-09.jpg">Elise240SX</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> · resized and cropped.</div>}
    <section className="ops-section"><div className="ops-wrap ops-split">
      <div data-reveal><Eyebrow>Scope of work</Eyebrow><h2>What we can help with.</h2><ul className="ops-checks">{s.includes.map(item => <li key={item}><Check size={18} aria-hidden="true" />{item}</li>)}</ul></div>
      <div className="ops-note" data-reveal><Eyebrow>Before you request a quote</Eyebrow><h3>Here’s what to share.</h3><p>{s.brief}</p><Link href={"/contact?service=" + s.slug} className="ops-text-link">Start your enquiry </Link></div>
    </div></section>
    <Questions items={[s.faq, ["Does Avixzon cover my location?", "Avixzon serves Scarborough, Toronto, Mississauga, Brampton, Markham, Vaughan and surrounding GTA communities. For a specific site or freight lane, contact the team to confirm coverage."]]} />
    {related.length > 0 && <section className="ops-section"><div className="ops-wrap"><div className="ops-section-head"><div><Eyebrow>Plan the next step</Eyebrow><h2>Related services.</h2></div></div><div className="ops-service-grid ops-related">{related.map((r, i) => <ServiceTile key={r.slug} service={r} index={i} />)}</div></div></section>}
    <Closing slug={s.slug} />
  </>;
}
