import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { breadcrumbs } from "@/lib/discovery";
import type { Service } from "@/lib/operations";

export function JsonLd({data}: {data: object}) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data).replace(/</g, "\\u003c")}} />;
}
export function Crumbs({items}: {items: [string, string][]}) {
  return <><JsonLd data={breadcrumbs(items)} /><nav className="ops-crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link>{items.map(([name, href], i) => <span key={href}><span aria-hidden="true">/</span>{i === items.length - 1 ? <span aria-current="page">{name}</span> : <Link href={href}>{name}</Link>}</span>)}</nav></>;
}
export function Eyebrow({children}: {children: React.ReactNode}) {
  return <div className="ops-eyebrow"><span aria-hidden="true" />{children}</div>;
}
export function QuoteLink({slug, children = "Request a quote"}: {slug?: string; children?: React.ReactNode}) {
  return <Link className="ops-button" href={slug ? "/contact?service=" + slug : "/contact"}>{children}</Link>;
}
export function ServiceTile({service, index}: {service: Service; index: number}) {
  return <Link className="ops-service-tile" href={"/services/" + service.slug}>
    <div className="ops-tile-photo"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 30vw" style={{objectPosition: service.position}} /><span>{String(index + 1).padStart(2, "0")}</span></div>
    <div className="ops-tile-label"><h3>{service.name}</h3></div>
  </Link>;
}
export function Questions({items, title = "Good to know."}: {items: [string, string][]; title?: string}) {
  return <section className="ops-section ops-faq"><div className="ops-wrap ops-split"><div><Eyebrow>Questions & answers</Eyebrow><h2>{title}</h2></div>
    <div>{items.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={19} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
  </div></section>;
}
export function Closing({title = "Tell us what needs doing.", slug}: {title?: string; slug?: string}) {
  return <section className="ops-closing"><div className="ops-wrap"><div><h2>{title}</h2><p>Share your scope, location and timeline with the Avixzon team.</p></div><QuoteLink slug={slug} /></div></section>;
}
export function InsideHero({items, label, title, text, image, alt, position, children}: {items: [string, string][]; label: string; title: string; text: string; image?: string; alt?: string; position?: string; children?: React.ReactNode}) {
  return <section className={"ops-inside" + (image ? " ops-inside-media" : "")}><div className="ops-wrap">
    <Crumbs items={items} />
    <div className="ops-inside-grid"><div className="ops-inside-copy"><Eyebrow>{label}</Eyebrow><h1>{title}</h1><p>{text}</p>{children && <div className="ops-actions">{children}</div>}</div>
      {image && <div className="ops-inside-photo"><Image src={image} alt={alt ?? ""} fill sizes="(max-width: 800px) 100vw, 50vw" preload style={{objectPosition: position}} /></div>}
    </div>
  </div></section>;
}
export function Coverage() {
  return <section className="ops-region"><div className="ops-region-photo"><Image fill src="/operations/toronto.jpg" alt="Toronto skyline over Lake Ontario, Canada" sizes="(max-width: 800px) 100vw, 54vw" /></div><div className="ops-region-content"><Eyebrow>Where we work</Eyebrow><h2>Based in Canada.<br />Connected globally.</h2><p>We coordinate on-site services and local deliveries, alongside air and ocean freight for international shipments.</p><Link href="/service-area" className="ops-text-link">Explore our service area </Link></div></section>;
}
