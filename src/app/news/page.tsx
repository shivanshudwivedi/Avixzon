import Image from "next/image";
import Link from "next/link";
import { Eyebrow, InsideHero } from "@/components/operations-ui";
import { SocialPostCard } from "@/components/social-post";
import { PublicInstagram } from "@/components/public-instagram";
import { pageMeta } from "@/lib/discovery";
import { guides, socialKey, socialPosts } from "@/lib/news";
import { getMetaPosts } from "@/lib/meta-feed";
import { site } from "@/lib/operations";

export const metadata = pageMeta("Avixzon Newsroom | Operations & Logistics Updates", "Follow Avixzon Canada and find practical guides on freight, commercial cleaning and local transport in Toronto and the GTA.", "/news");

export const revalidate = 600;

export default async function NewsPage() {
  const metaPosts = await getMetaPosts();
  const liveKeys = new Set(metaPosts.map(socialKey));
  const hasInstagram = metaPosts.some(post => post.platform === "Instagram");
  const entries = [...metaPosts, ...socialPosts.filter(post => !(hasInstagram && post.platform === "Instagram") && !liveKeys.has(socialKey(post)))];
  return <>
    <InsideHero items={[["News", "/news"]]} label="Avixzon newsroom" title="News & field notes." text="Company updates and practical guides from the work we do." image="/operations/warehouse-poster.webp" alt="Forklift and pallet racking inside a warehouse" />
    <section className="ops-section"><div className="ops-wrap"><div className="ops-section-head"><div><Eyebrow>Field guides</Eyebrow><h2>From quote to job site.</h2></div></div>
      <div className="ops-news-grid">{guides.map(guide => <Link className="ops-news-card" href={"/news/" + guide.slug} key={guide.slug} data-reveal><div className="ops-news-photo"><Image src={guide.image} alt={guide.alt} fill sizes="(max-width: 650px) 100vw, 33vw" /></div><div><p className="ops-kicker">{guide.category}</p><h3>{guide.title}</h3><p>{guide.dek}</p></div></Link>)}</div>
    </div></section>
    <section className="ops-section"><div className="ops-wrap"><Eyebrow>Social updates</Eyebrow><h2>From our channels.</h2>{!hasInstagram && <PublicInstagram />}
      {entries.length > 0 && <div className="ops-news-grid">{entries.map(post => <SocialPostCard key={post.id} post={post} embedPost={hasInstagram || post.platform !== "Instagram"} />)}</div>}
    </div></section>
    <section className="ops-section ops-secondary"><div className="ops-wrap ops-split"><div><Eyebrow>Follow Avixzon</Eyebrow><h2>Find us on social.</h2></div><div className="ops-link-list">{site.socials.map(([label, href]) => <a href={href} key={label} target="_blank" rel="noreferrer">{label}</a>)}</div></div></section>
  </>;
}
