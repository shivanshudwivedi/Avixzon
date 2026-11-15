import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Eyebrow, InsideHero } from "@/components/operations-ui";
import { roles } from "@/lib/careers";
import { pageMeta } from "@/lib/discovery";
import { site } from "@/lib/operations";

type Props = {params: Promise<{slug: string}>};
export const dynamicParams = false;
export function generateStaticParams() { return roles.map(r => ({slug:r.slug})); }
export async function generateMetadata({params}: Props) {
  const {slug} = await params;
  const match = roles.find(r => r.slug === slug);
  if (!match) return {};
  return {...pageMeta(match.title + " | Careers at Avixzon", match.summary, "/careers/" + match.slug), robots: {index: false, follow: true}};
}
export default async function RolePage({params}: Props) {
  const {slug} = await params;
  const role = roles.find(r => r.slug === slug);
  if (!role) notFound();
  const email = "mailto:" + site.email + "?subject=" + encodeURIComponent("Career interest: " + role.title);
  return <>
    <InsideHero items={[["Careers", "/careers"], [role.title, "/careers/" + slug]]} label={role.team + " / Role profile"} title={role.title + "."} text={role.summary}><a href={email} className="ops-button">Register interest </a></InsideHero>
    <section className="ops-section"><div className="ops-wrap ops-split">
      <div><Eyebrow>The role</Eyebrow><h2>What the work involves.</h2><ul className="ops-checks">{role.responsibilities.map(task => <li key={task}><Check size={18} />{task}</li>)}</ul></div>
      <div className="ops-note"><Eyebrow>Introduce yourself</Eyebrow><h3>Tell us about your experience.</h3><p>{role.experience}</p><p>This is an expression of interest. Avixzon will confirm whether a vacancy is available and share its terms before proceeding.</p><Link href="/careers" className="ops-text-link">Back to careers</Link></div>
    </div></section>
  </>;
}
