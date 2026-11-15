import Link from "next/link";
import { Eyebrow, InsideHero } from "@/components/operations-ui";
import { pageMeta } from "@/lib/discovery";
import { roles } from "@/lib/careers";

export const metadata = pageMeta("Careers at Avixzon | Logistics & Field Services", "Explore six careers with Avixzon in freight, customs, operations, sales, packing and general maintenance. Learn about each role and register your interest.", "/careers");
export default function CareersPage() {
  return <>
    <InsideHero items={[["Careers", "/careers"]]} label="Company / Careers" title="Do work that keeps things moving." text="Explore roles in freight, operations, sales and hands-on field services." image="/operations/team.jpg" alt="Warehouse colleagues reviewing a checklist" />
    <section className="ops-section"><div className="ops-wrap"><div className="ops-section-head"><div><Eyebrow>Work with Avixzon</Eyebrow><h2>Explore roles.</h2></div><p>These profiles describe roles we recruit for. You can register your interest; current vacancies, pay and schedules are confirmed by the team.</p></div>
      <div className="ops-jobs">{roles.map((role, i) => <Link href={"/careers/" + role.slug} key={role.slug}><span>0{i + 1} / {role.team}</span><div><h3>{role.title}</h3><p>{role.summary}</p></div></Link>)}</div>
    </div></section>
  </>;
}
