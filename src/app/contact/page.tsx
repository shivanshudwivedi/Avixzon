import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Suspense } from "react";
import { InsideHero, Eyebrow } from "@/components/operations-ui";
import { EnquiryForm } from "@/components/enquiry-form";
import { pageMeta } from "@/lib/discovery";
import { site } from "@/lib/operations";

export const metadata = pageMeta("Request a Quote or Contact Avixzon | Scarborough, ON", "Contact Avixzon in Scarborough for commercial cleaning, labour, freight or transport in the GTA. Call (437) 775-2592 or share the job for a quote.", "/contact");

export default function ContactPage() {
  return <>
    <InsideHero items={[["Contact", "/contact"]]} label="Contact Avixzon" title="Tell us about the job." text="Share what you need, where it needs to happen and when. We’ll use those details to work out the next step." />
    <section className="ops-section"><div className="ops-wrap ops-contact-grid">
      <aside><Eyebrow>Speak to the team</Eyebrow><h2>Contact Avixzon.</h2>
        <a href={"tel:" + site.tel}><Phone size={20} aria-hidden />{site.phone}</a>
        <a href={site.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={20} aria-hidden />Chat on WhatsApp</a>
        <a href={"mailto:" + site.email}><Mail size={20} aria-hidden />{site.email}</a>
        <address><MapPin size={20} aria-hidden />{site.address}</address>
      </aside>
      <Suspense fallback={<div className="ops-form">Loading enquiry form…</div>}><EnquiryForm netlifyForm={process.env.NETLIFY === "true"} /></Suspense>
    </div></section>
  </>;
}
