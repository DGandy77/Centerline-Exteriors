"use client";

import { useState } from "react";

const services = ["Roof inspection", "Roof replacement", "Roof repair", "Storm damage", "Gutters", "Siding", "Commercial roofing", "Insurance claim support", "Interior restoration"];

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        // TODO: Wire this to a Vercel Server Action, Resend, HubSpot, Formspree, or Dylan's CRM.
        // Required env examples: RESEND_API_KEY, LEAD_TO_EMAIL, HUBSPOT_PORTAL_ID.
        setSubmitted(true);
      }}
    >
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Name
          <input required name="name" autoComplete="name" className="h-12 border border-slate-300 px-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Email
          <input required type="email" name="email" autoComplete="email" className="h-12 border border-slate-300 px-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Phone
          <input required type="tel" name="phone" autoComplete="tel" className="h-12 border border-slate-300 px-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Address or city
          <input required name="address" autoComplete="street-address" className="h-12 border border-slate-300 px-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Service needed
          <select required name="service" className="h-12 border border-slate-300 px-3 font-normal">
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Preferred contact
          <select required name="contactMethod" className="h-12 border border-slate-300 px-3 font-normal">
            <option>Email</option>
            <option>Phone</option>
            <option>Text</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-slate-800">
        Message
        <textarea name="message" rows={5} className="border border-slate-300 p-3 font-normal" placeholder="Tell us what you are seeing or what kind of project you are planning." />
      </label>
      <label className="flex gap-3 text-sm leading-6 text-slate-700">
        <input required type="checkbox" name="consent" className="mt-1 h-4 w-4" />
        <span>I agree to be contacted by Centerline Roofing & Exteriors about my request. Message and data rates may apply.</span>
      </label>
      <button className="focus-ring h-12 bg-[#1d66c2] px-5 font-black text-white hover:bg-[#1557aa]">
        Submit Request
      </button>
      {submitted ? (
        <p role="status" className="border border-[#1d66c2]/30 bg-blue-50 p-3 text-sm font-semibold text-[#061a33]">
          Placeholder success: the form is validated locally. Production email or CRM wiring still needs to be connected.
        </p>
      ) : null}
    </form>
  );
}
