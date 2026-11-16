# Avixzon growth workflow

## Website measurement

- The production site uses the existing GA4 Avixzon web stream and respects the visitor's analytics choice.
- The site sends `page_view`, `contact_click`, `quote_email_draft`, `whatsapp_open` and `generate_lead`. Count an opened draft, chat or contact click as intent, not a lead. Count WhatsApp enquiries only when the business actually receives a message.
- Keep the report aggregate: traffic source, landing page, page views and confirmed enquiries. Never send form values, phone numbers, email addresses, addresses or message text to analytics.
- Submit the production sitemap in Search Console once the site is live. Use Search Console impressions and clicks alongside GA4, not interchangeably. Meta Page and Instagram insight counts are separate measures.

### Run a 30-day traffic experiment

- Share the office cleaning guide as an Instagram Story link and a Facebook post. Link to the guide, not the homepage: `https://avixzon.com/news/commercial-cleaning-frequency-toronto?utm_source=instagram&utm_medium=social&utm_campaign=cleaning`. For Facebook, change only the source to `facebook`.
- In week two, repeat for the loading and unloading guide using `utm_campaign=manpower`. Use the freight and local transport guides in the following weeks with `freight` and `transport`.
- Compare landing sessions, WhatsApp opens and confirmed enquiries weekly by source. Check Search Console separately for organic clicks. Don't fund more traffic until you know which pages turn visits into real enquiries.
- Only known campaign tags reach GA4; put no names, emails or customer identifiers in campaign links.

## WhatsApp

- Website visitors can open the business chat or an editable, service-specific quote draft. The link does not include any typed form values and sends nothing automatically.
- Netlify Forms records direct quote submissions privately and can notify the business inbox. The optional WhatsApp checkbox permits a reply about that quote only; it does not trigger a message or subscribe the visitor to marketing.
- In the business phone app, enable **Tools → Greeting message** for a first-contact acknowledgement if Meta Business Agent isn't already handling that inbox. Suggested text: “Thanks for contacting Avixzon. Please share the service you need, the city and your timing. Our team will review your request and follow up. If it’s urgent, call (437) 775-2592.”
- True form-triggered follow-up is separate: use verified form delivery, a WhatsApp-specific opt-in, the registered WhatsApp Business Platform number, and a Meta-approved utility template for a business-initiated message. Record consent and prevent duplicate sends. Keep unsolicited marketing and automated pricing promises out of this flow.

## Muse operating instructions

Use the Avixzon business channel and the latest aggregate GA4 report, if available. Compare the last complete seven days with the preceding seven, and report coverage and dates:

1. Show sessions and confirmed quote enquiries by source, plus strongest landing and News pages. Mark missing metrics as unavailable; don't replace them with zero.
2. Summarize Page visits, reach and interactions separately for Facebook and Instagram using the linked Avixzon accounts. Do not assume reach means visits.
3. Recommend up to three next actions for Cleaning, Manpower, Freight or Transport and one experiment with a success metric. Carry forward outcomes already verified.
4. For customer-initiated enquiries, create an internal review queue: channel, enquiry reference, service, next action, priority and status. Use as little personal data as possible. Draft an answer and ask only for service, location, timing and job requirements. Route quotes, complaints and unusual requests to the owner. Do not promise pricing, availability or delivery dates.
5. Require a person to approve and send each outbound message. Do not scrape contacts, start cold outreach, publish, buy ads or contact anyone automatically. If no inbox is connected, do not imply that a queue was checked.

If Muse has no direct Analytics connector, export the GA4 Traffic acquisition and Landing page reports as aggregate CSVs and attach them to the Avixzon growth chat. A scheduled GA4 report can send the same aggregate data to an existing authorized property user; use a reviewed, scoped connection before enabling automatic ingestion.
