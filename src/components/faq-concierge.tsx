"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, Phone, X } from "lucide-react";
import { faqs, serviceBySlug, site } from "@/lib/operations";

type Message = { role: "bot" | "user"; text: string };

const quickQuestions = [
  "What services do you offer?",
  "What areas do you serve?",
  "How can I get a quote?",
  "Where are you located?",
];

function answerQuestion(value: string) {
  const q = value.toLowerCase();

  if (/(career|jobs?|hiring|vacanc)/.test(q)) {
    return "See the Careers page under Company to explore role profiles and register your interest.";
  }
  if (/(quote|price|cost|rate|estimate|how much)/.test(q)) return faqs[3][1] + " Use the Contact page or call " + site.phone + ".";
  if (/(commercial cleaning|office cleaning|janitor|cleaning)/.test(q)) return serviceBySlug("cleaning-services")!.faq[1];
  if (/(manpower|labou?r|crew)/.test(q)) return serviceBySlug("manpower-services")!.faq[1];
  if (/(local transport|small truck|delivery)/.test(q)) return serviceBySlug("transportation")!.faq[1];
  if (/(area|serve|coverage|city|where.*work|toronto|gta)/.test(q)) return "Our local coverage includes " + site.cities.join(", ") + " and nearby GTA communities. Call " + site.phone + " to confirm a particular site or shipment.";
  if (/(service|offer|do you do|help with)/.test(q)) {
    return faqs[0][1];
  }
  if (/(address|located|location|office)/.test(q)) {
    return "Our office is at 617-1050 Markham Road, Scarborough, Ontario M1H 2Y7, Canada.";
  }
  if (/(phone|call|contact|number)/.test(q)) {
    return "Call Avixzon at (437) 775-2592. You can also email avixzon@gmail.com.";
  }
  if (/(email|mail)/.test(q)) {
    return "You can email us at avixzon@gmail.com.";
  }
  if (/(hour|open|time|weekend)/.test(q)) {
    return "To confirm availability, call Avixzon at " + site.phone + ".";
  }
  if (/(freight|air|ocean|ship|shipping|customs)/.test(q)) {
    return "Yes. Avixzon offers air freight, ocean freight and customs brokerage. Call (437) 775-2592 to discuss the shipment and destination.";
  }
  if (/(move|moving|packing|house|condo|office|commercial)/.test(q)) {
    return "We handle residential and commercial moves, plus packing and crating. Share your pickup, destination, move size and date for a quote.";
  }
  if (/(storage|warehouse)/.test(q)) {
    return "Avixzon offers short- and long-term warehousing. Call (437) 775-2592 to confirm space and availability.";
  }
  if (/(car|rental|vehicle)/.test(q)) {
    return "Yes, car rentals are one of Avixzon’s services. Call (437) 775-2592 for the current vehicle options and availability.";
  }
  if (/(clean|manpower|labou?r)/.test(q)) {
    return "Avixzon offers cleaning and manpower services. Call (437) 775-2592 so the team can confirm what your job needs.";
  }
  if (/\b(hello|hi|hey|good morning|good afternoon)\b/.test(q)) {
    return "Hello! I can help with Avixzon’s services, service area, address, contact details and quotes. What would you like to know?";
  }
  if (/(thanks|thank you)/.test(q)) {
    return "You’re welcome. If you need anything else, call the Avixzon team at (437) 775-2592.";
  }

  return "I only answer questions about Avixzon’s services and contact details. For anything I cannot confirm, please call the team at (437) 775-2592.";
}

export function FaqConcierge() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi — I’m the Avixzon guide. Ask me about services, coverage, quotes or contact details." },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function ask(text: string) {
    const clean = text.trim();
    if (!clean) return;
    setMessages((current) => [
      ...current,
      { role: "user", text: clean },
      { role: "bot", text: answerQuestion(clean) },
    ]);
    setInput("");
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    ask(input);
  }

  return (
    <>
      {open && (
        <section className="avx-chat" aria-label="Avixzon FAQ guide">
          <header>
            <div className="avx-chat-avatar"><Bot size={22} /></div>
            <div><strong>Avixzon Guide</strong><span><i /> Ready to help</span></div>
            <button onClick={() => setOpen(false)} aria-label="Close chat"><X size={20} /></button>
          </header>
          <div className="avx-chat-messages" ref={scrollRef}>
            {messages.map((message, index) => (
              <div className={`avx-message avx-message-${message.role}`} key={`${message.role}-${index}`}>
                {message.text}
              </div>
            ))}
            {messages.length === 1 && (
              <div className="avx-quick-questions">
                {quickQuestions.map((question) => (
                  <button key={question} onClick={() => ask(question)}>
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>
          <form onSubmit={submit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about Avixzon..."
              aria-label="Ask a question"
            />
            <button type="submit" aria-label="Send question">Send</button>
          </form>
          <a className="avx-chat-phone" href="tel:+14377752592"><Phone size={14} /> Prefer a person? Call (437) 775-2592</a>
        </section>
      )}
      <button
        className={`avx-chat-launcher ${open ? "is-open" : ""}`}
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close Avixzon guide" : "Open Avixzon guide"}
      >
        {open ? <X /> : <MessageCircle />}
        <span>{open ? "Close" : "Ask Avixzon"}</span>
      </button>
    </>
  );
}
