import Link from "next/link";
import { Brand } from "./brand";
import { AnalyticsPreferences } from "@/components/site-analytics";
import { core, site } from "@/lib/operations";

const company = [["About Us", "/about"], ["Careers", "/careers"], ["News", "/news"], ["Service Area", "/service-area"]];

export function Footer() {
  return <footer className="ops-footer"><div className="ops-wrap">
    <div className="ops-footer-grid">
      <div className="ops-footer-brand"><Brand /><p>Operations & logistics</p></div>
      <nav aria-label="Footer services"><h2>Services</h2>{core.map(s => <Link key={s.slug} href={"/services/" + s.slug}>{s.label}</Link>)}<Link href="/services">All services</Link></nav>
      <nav aria-label="Footer company"><h2>Company</h2>{company.map(([name, path]) => <Link key={path} href={path}>{name}</Link>)}</nav>
      <div className="ops-footer-contact"><h2>Get in touch</h2><a href={"tel:" + site.tel}>{site.phone}</a><a href={"mailto:" + site.email}>{site.email}</a><address>{site.address}</address><Link href="/contact" className="ops-footer-enquire">Contact Avixzon</Link></div>
    </div>
    <div className="ops-footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><nav aria-label="Social channels">{site.socials.map(([name, href]) => <a key={name} href={href} target="_blank" rel="noreferrer">{name}</a>)}<AnalyticsPreferences /></nav></div>
  </div></footer>;
}
