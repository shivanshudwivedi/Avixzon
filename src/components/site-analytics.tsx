"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

const measurementId = "G-FPFCSR6ECX";
const key = "avixzon-analytics-choice";
const update = "avixzon-analytics-update";
const open = "avixzon-analytics-preferences";
type Choice = "allow" | "decline";
type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
let configured = false;
let preference: Choice | undefined;
let measuredLocation = "";
const campaignTags = {
  utm_source: ["instagram", "facebook", "linkedin", "google", "whatsapp"],
  utm_medium: ["social", "paid_social", "organic", "referral", "cpc"],
  utm_campaign: ["cleaning", "manpower", "freight", "transport", "business_profile"],
};

function activeHost() {
  return ["avixzon.com", "www.avixzon.com"].includes(window.location.hostname);
}

function subscribe(callback: () => void) {
  window.addEventListener(update, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(update, callback);
    window.removeEventListener("storage", callback);
  };
}
function readChoice(): Choice | null {
  try {
    const value = window.localStorage.getItem(key);
    return value === "allow" || value === "decline" ? value : null;
  } catch {
    return null;
  }
}
const noSubscription = () => () => {};

function tag(...args: unknown[]) {
  const target = window as AnalyticsWindow;
  target.dataLayer ??= [];
  if (!target.gtag) target.gtag = function () { target.dataLayer!.push(arguments); };
  target.gtag(...args);
}

function cleanLocation(path: string) {
  const url = new URL(path, location.origin);
  const incoming = new URLSearchParams(location.search);
  for (const [key, allowed] of Object.entries(campaignTags)) {
    const value = incoming.get(key)?.toLowerCase();
    if (value && allowed.includes(value)) url.searchParams.set(key, value);
  }
  return url.href;
}

export function measureEnquiry(event: "generate_lead" | "quote_email_draft", service: string) {
  if (!activeHost() || preference !== "allow" || !configured) return;
  tag("event", event, { send_to: measurementId, page_location: measuredLocation, service: /^[a-z-]{1,40}$/.test(service) ? service : "general" });
}

export function AnalyticsPreferences() {
  return <button type="button" className="ops-analytics-link" onClick={() => window.dispatchEvent(new Event(open))}>Analytics preferences</button>;
}

export function SiteAnalytics() {
  const path = usePathname();
  const storedChoice = useSyncExternalStore(subscribe, readChoice, () => null);
  const [temporaryChoice, setTemporaryChoice] = useState<Choice | null>(null);
  const choice = temporaryChoice ?? storedChoice;
  const isLive = useSyncExternalStore(noSubscription, activeHost, () => false);
  const [show, setShow] = useState(false);
  const lastPage = useRef("");

  useEffect(() => {
    const showPreferences = () => setShow(true);
    window.addEventListener(open, showPreferences);
    return () => {
      window.removeEventListener(open, showPreferences);
    };
  }, []);

  useEffect(() => {
    if (!activeHost()) return;
    preference = choice ?? undefined;
    const target = window as unknown as Record<string, unknown>;
    target["ga-disable-" + measurementId] = choice !== "allow";
    if (choice !== "allow") { lastPage.current = ""; return; }
    if (!configured) {
      tag("config", measurementId, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false });
      configured = true;
    }
    const next = location.origin + path;
    if (lastPage.current === next) return;
    let referrer = lastPage.current;
    if (!referrer && document.referrer) {
      try { referrer = new URL(document.referrer).origin; } catch { /* skip invalid referrers */ }
    }
    measuredLocation = cleanLocation(path);
    tag("event", "page_view", { send_to: measurementId, page_location: measuredLocation, page_referrer: referrer });
    lastPage.current = next;
  }, [choice, path]);

  useEffect(() => {
    function click(event: MouseEvent) {
      if (preference !== "allow" || !configured || !(event.target instanceof Element)) return;
      const link = event.target.closest("a");
      const href = link?.getAttribute("href");
      const params = {send_to: measurementId, page_location: measuredLocation};
      if (href?.startsWith("tel:")) tag("event", "contact_click", {...params, method: "phone"});
      else if (href?.startsWith("mailto:")) tag("event", "contact_click", {...params, method: "email"});
      else if (href?.startsWith("https://wa.me/14377752592")) {
        const service = link?.dataset.enquiryService;
        tag("event", "whatsapp_open", {...params, ...(service && /^[a-z-]{1,40}$/.test(service) ? {service} : {})});
      }
    }
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);

  function save(next: Choice) {
    try { window.localStorage.setItem(key, next); } catch { setTemporaryChoice(next); }
    setShow(false);
    window.dispatchEvent(new Event(update));
  }

  return (show || (isLive && !choice)) && <section aria-label="Website analytics preferences" className="ops-analytics-choice">
    <p><strong>Website analytics</strong> Google Analytics helps us see which pages and contact options people use. You can change this choice any time.</p>
    <div><button type="button" className="ops-quiet-button" onClick={() => save("decline")}>Decline analytics</button><button type="button" className="ops-button" onClick={() => save("allow")}>Allow analytics</button></div>
  </section>;
}
