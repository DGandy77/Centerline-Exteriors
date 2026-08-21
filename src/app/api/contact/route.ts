import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

const allowedServices = new Set([
  "I'm Not Sure",
  "Roof Inspection",
  "Roof Repair",
  "Roof Replacement",
  "Storm Damage Restoration",
  "Gutters",
  "Siding",
  "Other / General Question",
]);

const allowedContactMethods = new Set(["Phone Call", "Text Message", "Email"]);

function value(payload: Record<string, unknown>, key: string, maxLength: number) {
  const entry = payload[key];
  return typeof entry === "string" ? entry.trim().slice(0, maxLength) : "";
}

function escapeHtml(input: string) {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  };

  return input.replace(/[&<>'"]/g, (character) => entities[character] ?? character);
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }
    payload = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // A filled honeypot is treated as a successful submission so bots receive no useful signal.
  if (value(payload, "company", 200)) {
    return NextResponse.json({ success: true });
  }

  const name = value(payload, "name", 100);
  const email = value(payload, "email", 254).toLowerCase();
  const phone = value(payload, "phone", 40);
  const address = value(payload, "address", 200);
  const service = value(payload, "service", 100);
  const contactMethod = value(payload, "contactMethod", 50);
  const message = value(payload, "message", 4000);
  const consent = payload.consent === true;

  if (!name || !email || !phone || !address || !service || !contactMethod || !message || !consent) {
    return NextResponse.json({ error: "Please complete every required field." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!allowedServices.has(service) || !allowedContactMethods.has(contactMethod)) {
    return NextResponse.json({ error: "Please select a valid service and contact preference." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.LEAD_TO_EMAIL || site.email;

  if (!apiKey || !from || !to) {
    console.error("Contact form email configuration is incomplete.");
    return NextResponse.json({ error: "Online delivery is temporarily unavailable." }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const subject = `New website request — ${service} — ${name}`;
  const text = [
    "New Centerline website request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Property Address: ${address}`,
    `Service Needed: ${service}`,
    `Preferred Contact: ${contactMethod}`,
    "Consent: Yes",
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject,
      text,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#1e2936">
          <div style="background:#061a33;color:#fff;padding:24px 28px">
            <p style="margin:0;color:#67b0ff;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase">Centerline Roofing &amp; Exteriors</p>
            <h1 style="margin:8px 0 0;font-size:24px">New Website Request</h1>
          </div>
          <div style="border:1px solid #dbe3ed;border-top:0;padding:28px">
            <table style="width:100%;border-collapse:collapse" role="presentation">
              <tr><td style="padding:7px 12px 7px 0;font-weight:700;vertical-align:top">Name</td><td style="padding:7px 0">${escapeHtml(name)}</td></tr>
              <tr><td style="padding:7px 12px 7px 0;font-weight:700;vertical-align:top">Email</td><td style="padding:7px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding:7px 12px 7px 0;font-weight:700;vertical-align:top">Phone</td><td style="padding:7px 0">${escapeHtml(phone)}</td></tr>
              <tr><td style="padding:7px 12px 7px 0;font-weight:700;vertical-align:top">Property</td><td style="padding:7px 0">${escapeHtml(address)}</td></tr>
              <tr><td style="padding:7px 12px 7px 0;font-weight:700;vertical-align:top">Service</td><td style="padding:7px 0">${escapeHtml(service)}</td></tr>
              <tr><td style="padding:7px 12px 7px 0;font-weight:700;vertical-align:top">Contact by</td><td style="padding:7px 0">${escapeHtml(contactMethod)}</td></tr>
            </table>
            <h2 style="margin:24px 0 8px;font-size:18px;color:#061a33">Message</h2>
            <p style="margin:0;white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</p>
            <p style="margin:24px 0 0;color:#64748b;font-size:12px">The homeowner agreed to be contacted by Centerline Roofing &amp; Exteriors about this request.</p>
          </div>
        </div>`,
    });

    if (error) {
      console.error("Resend rejected a contact form email:", error);
      return NextResponse.json({ error: "We couldn't send your request right now." }, { status: 502 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Contact form email request failed:", error);
    return NextResponse.json({ error: "We couldn't send your request right now." }, { status: 502 });
  }
}
