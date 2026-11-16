"use client";
import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { serviceBySlug, services, site } from "@/lib/operations";
import { measureEnquiry } from "@/components/site-analytics";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export function EnquiryForm({netlifyForm = false}: {netlifyForm?: boolean}) {
  const params = useSearchParams();
  const initial = serviceBySlug(params.get("service") ?? "")?.slug ?? "";
  const [service, setService] = useState(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "draft" | "error">("idle");
  const [draft, setDraft] = useState("");
  const [whatsAppFollowup, setWhatsAppFollowup] = useState(false);
  const selected = serviceBySlug(service);
  const whatsAppText = selected ? `Hi Avixzon, I’d like a quote for ${selected.name}. This is about an enquiry from your website.` : "Hi Avixzon, I’d like a quote. I found you on your website.";
  const whatsApp = site.whatsapp + "?text=" + encodeURIComponent(whatsAppText);
  const isRoute = ["freight","transportation","moving-services","air-freight","ocean-freight","customs-brokerage"].includes(service);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    if (get("website")) return;
    if (netlifyForm && whatsAppFollowup && get("phone").replace(/\D/g, "").length < 10) {
      const phone = form.elements.namedItem("phone");
      if (phone instanceof HTMLInputElement) {
        phone.setCustomValidity("Enter the full phone number you use for WhatsApp.");
        phone.reportValidity();
      }
      return;
    }
    const title = selected?.name ?? "General enquiry";
    const summary = ["Service: " + title, "Name: " + get("name"), "Email: " + get("email"), "Phone: " + (get("phone") || "Not provided"), "Location / origin: " + get("location"), "Destination: " + (get("destination") || "Not provided"), "Timing: " + (get("timing") || "Flexible"), "", get("details")].join("\n");
    const link = "mailto:" + site.email + "?subject=" + encodeURIComponent("Avixzon quote: " + title) + "&body=" + encodeURIComponent(summary);
    setDraft(link);
    if (!netlifyForm && (!serviceId || !templateId || !publicKey)) { setStatus("draft"); measureEnquiry("quote_email_draft", selected?.slug ?? "general"); window.location.href = link; return; }
    setStatus("sending");
    try {
      if (netlifyForm) {
        const payload = new URLSearchParams({
          "form-name": "avixzon-quote", website: "", service: title, name: get("name"),
          email: get("email"), phone: get("phone"), location: get("location"),
          destination: get("destination"), timing: get("timing"), details: get("details"),
          whatsapp_followup: whatsAppFollowup ? "yes — reply to this quote only" : "no",
        });
        const response = await fetch("/__forms.html", {
          method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, body: payload,
        });
        if (!response.ok) throw new Error("Quote intake unavailable");
      } else {
        if (!serviceId || !templateId || !publicKey) throw new Error("Email service unavailable");
        const {default: emailjs} = await import("@emailjs/browser");
        await emailjs.send(serviceId, templateId, {
          from_name: get("name"), from_email: get("email"), reply_to: get("email"), phone: get("phone"),
          service: title, details: get("details"), message: summary, pickup_address: get("location"),
          destination_address: get("destination") || "Not applicable", move_date: get("timing") || "Flexible",
          move_size: title + "\n" + get("details"), parking_available: "Not specified",
        }, {publicKey});
      }
      setStatus("sent");
      measureEnquiry("generate_lead", selected?.slug ?? "general");
    } catch { setStatus("error"); }
  }
  return <form method="post" onSubmit={submit} className="ops-form">
    <h2>Request a quote</h2>
    <div className="ops-fields">
      <label className="wide">What can we help with?<select name="service" value={service} onChange={e => {setService(e.target.value); setStatus("idle");}}><option value="">General enquiry</option>{services.map(s => <option value={s.slug} key={s.slug}>{s.name}</option>)}</select></label>
      <label>Your name<input name="name" autoComplete="name" required maxLength={100} /></label>
      <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={180} /></label>
      <label>Phone <span>{whatsAppFollowup ? "(required for WhatsApp)" : "(optional)"}</span><input name="phone" type="tel" autoComplete="tel" maxLength={40} required={whatsAppFollowup} onChange={event => event.currentTarget.setCustomValidity("")} /></label>
      <label>Preferred timing <span>(optional)</span><input name="timing" placeholder="Date, time window or deadline" maxLength={100} /></label>
      <label className={isRoute ? "" : "wide"}>{isRoute ? "Pickup location / origin" : "Site location or city"}<input name="location" placeholder="Address or city" required maxLength={170} /></label>
      {isRoute && <label>Destination <span>(if known)</span><input name="destination" placeholder="Address, city or port" maxLength={170} /></label>}
      <label className="wide">Job details<textarea name="details" required rows={5} maxLength={1600} aria-describedby="job-hint" /><span id="job-hint">{selected?.brief ?? "Describe the work, your timeline and anything we should know before contacting you."}</span></label>
      <div hidden><label>Leave this empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    </div>
    {netlifyForm && <label className="ops-quote-optin">
      <input type="checkbox" checked={whatsAppFollowup} onChange={event => {
        setWhatsAppFollowup(event.target.checked);
        const phone = event.currentTarget.form?.elements.namedItem("phone");
        if (phone instanceof HTMLInputElement) phone.setCustomValidity("");
      }} />
      <span>Avixzon may reply to this enquiry on WhatsApp. No marketing.</span>
    </label>}
    <div className="ops-form-actions">
      <button className="ops-button" disabled={status === "sending" || status === "sent"}>{status === "sending" ? "Sending…" : status === "sent" ? "Enquiry sent" : netlifyForm || (serviceId && templateId && publicKey) ? "Send enquiry" : "Open email draft"}</button>
      <a className="ops-quiet-button" href={whatsApp} target="_blank" rel="noreferrer" aria-describedby="whatsapp-hint" data-enquiry-service={selected?.slug ?? "general"}>Continue on WhatsApp</a>
    </div>
    <p className="ops-form-hint" id="whatsapp-hint">The WhatsApp button starts a separate chat. It doesn’t send your form.</p>
    <div role="status" className="ops-form-status">
      {status === "sent" && "Your enquiry was sent to Avixzon."}
      {status === "draft" && <>Send the draft from your email app to complete your request. <a href={draft}>Open the draft again</a>.</>}
      {status === "error" && <>The request couldn’t be sent. <a href={draft}>Open an email draft</a> or call <a href={"tel:" + site.tel}>{site.phone}</a>.</>}
    </div>
  </form>;
}
