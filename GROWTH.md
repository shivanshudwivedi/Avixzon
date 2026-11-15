# Avixzon growth workflow

## Website measurement

- The production site uses the existing GA4 Avixzon web stream and respects the visitor's analytics choice.
- The site sends `page_view`, `contact_click`, `quote_email_draft` and `generate_lead`. Count a lead only when the quote service confirms it sent the enquiry. An opened email draft or contact click is an intent signal, not a lead.
- Keep the report aggregate: traffic source, landing page, page views and confirmed enquiries. Never send form values, phone numbers, email addresses, addresses or message text to analytics.
- Submit the production sitemap in Search Console once the site is live. Use Search Console impressions and clicks alongside GA4, not interchangeably. Meta Page and Instagram insight counts are separate measures.

## Muse operating instructions

Use the Avixzon business channel and the latest aggregate GA4 report, if available. Compare the last complete seven days with the preceding seven, and report coverage and dates:

1. Show sessions and confirmed quote enquiries by source, plus strongest landing and News pages. Mark missing metrics as unavailable; don't replace them with zero.
2. Summarize Page visits, reach and interactions separately for Facebook and Instagram using the linked Avixzon accounts. Do not assume reach means visits.
3. Recommend up to three next actions for Cleaning, Manpower, Freight or Transport and one experiment with a success metric. Carry forward outcomes already verified.
4. For customer-initiated enquiries, create an internal review queue: channel, enquiry reference, service, next action, priority and status. Use as little personal data as possible. Draft an answer and ask only for service, location, timing and job requirements. Route quotes, complaints and unusual requests to the owner. Do not promise pricing, availability or delivery dates.
5. Require a person to approve and send each outbound message. Do not scrape contacts, start cold outreach, publish, buy ads or contact anyone automatically. If no inbox is connected, do not imply that a queue was checked.

If Muse has no direct Analytics connector, export the GA4 Traffic acquisition and Landing page reports as aggregate CSVs and attach them to the Avixzon growth chat. A scheduled GA4 report can send the same aggregate data to an existing authorized property user; use a reviewed, scoped connection before enabling automatic ingestion.
