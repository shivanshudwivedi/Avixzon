import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow, InsideHero, JsonLd, QuoteLink } from "@/components/operations-ui";
import { orgId, pageMeta } from "@/lib/discovery";
import { guides } from "@/lib/news";
import { serviceBySlug, site } from "@/lib/operations";

type Props = {params: Promise<{slug: string}>};
export const dynamicParams = false;
export function generateStaticParams() { return guides.map(g => ({slug:g.slug})); }
export async function generateMetadata({params}: Props) {
  const {slug} = await params;
  const g = guides.find(item => item.slug === slug);
  return g ? pageMeta(g.title.replace(/[.?]$/, "") + " | Avixzon Field Guides", g.dek, "/news/" + slug, g.image) : {};
}
export default async function GuidePage({params}: Props) {
  const {slug} = await params;
  const g = guides.find(item => item.slug === slug);
  if (!g) notFound();
  const path = "/news/" + slug;
  const service = serviceBySlug(g.service);
  return <article>
    <JsonLd data={{"@context":"https://schema.org","@type":"Article", headline:g.title, description:g.dek, image:site.url + g.image, mainEntityOfPage:site.url + path, author:{"@id":orgId}, publisher:{"@id":orgId}, inLanguage:"en-CA", ...(g.published ? {datePublished:g.published} : {})}} />
    <InsideHero items={[["News", "/news"], [g.title, path]]} label={g.category} title={g.title} text={g.dek} image={g.image} alt={g.alt} />
    <section className="ops-section"><div className="ops-wrap ops-split"><div className="ops-guide-body">
      {g.published && <p className="ops-article-byline">By Avixzon · <time dateTime={g.published}>November 14, 2026</time></p>}
      {g.answer && <section className="ops-article-answer"><h2>The short answer</h2><p>{g.answer}</p></section>}
      {g.sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}</div><aside className="ops-note"><Eyebrow>Plan your job</Eyebrow><h3>{service?.name}</h3><QuoteLink slug={g.service} /><br /><Link className="ops-text-link" href={"/services/" + g.service}>See the service </Link></aside></div></section>
  </article>;
}
