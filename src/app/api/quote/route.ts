import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { quoteApiBodySchema } from "@/lib/quote-schema";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = quoteApiBodySchema.safeParse(json);
  if (!parsed.success) {
    const flat = parsed.error.flatten();
    return NextResponse.json(
      { error: "Validation failed", fieldErrors: flat.fieldErrors, formErrors: flat.formErrors },
      { status: 400 }
    );
  }

  const data = parsed.data;
  const hasResend = Boolean(process.env.RESEND_API_KEY && process.env.QUOTE_NOTIFY_EMAIL);
  const hasSupabase = Boolean(
    process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
  );
  const isDev = process.env.NODE_ENV === "development";

  if (!hasResend && !hasSupabase) {
    if (isDev) {
      console.info("[quote] Dev mode — no RESEND / Supabase configured. Payload:", data);
      return NextResponse.json({ ok: true, dev: true });
    }
    return NextResponse.json(
      { error: "Quote service is not configured. Set RESEND_API_KEY and QUOTE_NOTIFY_EMAIL, or Supabase credentials." },
      { status: 503 }
    );
  }

  let supabaseOk = false;
  if (hasSupabase) {
    try {
      const supabase = createClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { persistSession: false, autoRefreshToken: false } }
      );
      const { error } = await supabase.from("quotes").insert({
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        pickup_address: data.pickupAddress,
        destination_address: data.destinationAddress,
        move_date: data.moveDate.toISOString(),
        move_size: data.moveSize,
      });
      if (error) {
        console.error("[quote] Supabase insert failed:", error.message);
      } else {
        supabaseOk = true;
      }
    } catch (e) {
      console.error("[quote] Supabase error:", e);
    }
  }

  if (hasResend) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const from =
        process.env.RESEND_FROM_EMAIL ?? "Avixzon Quotes <onboarding@resend.dev>";
      const moveDateStr = data.moveDate.toLocaleString("en-CA", {
        dateStyle: "long",
        timeStyle: "short",
      });
      const { error } = await resend.emails.send({
        from,
        to: process.env.QUOTE_NOTIFY_EMAIL!,
        subject: `New quote request — ${data.fullName}`,
        text: [
          `Name: ${data.fullName}`,
          `Email: ${data.email}`,
          `Phone: ${data.phone}`,
          `Pickup: ${data.pickupAddress}`,
          `Destination: ${data.destinationAddress}`,
          `Move date: ${moveDateStr}`,
          `Move size: ${data.moveSize}`,
        ].join("\n"),
      });
      if (error) {
        console.error("[quote] Resend error:", error.message);
        if (!supabaseOk && hasSupabase) {
          return NextResponse.json(
            { error: "Could not save your request. Please try again or call us directly." },
            { status: 502 }
          );
        }
        if (!hasSupabase) {
          return NextResponse.json(
            { error: "Could not send your request. Please try again later." },
            { status: 502 }
          );
        }
      }
    } catch (e) {
      console.error("[quote] Resend exception:", e);
      if (!supabaseOk) {
        return NextResponse.json(
          { error: "Could not process your request. Please try again later." },
          { status: 502 }
        );
      }
    }
  }

  if (hasSupabase && !supabaseOk && !hasResend) {
    return NextResponse.json(
      { error: "Could not save your request. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
