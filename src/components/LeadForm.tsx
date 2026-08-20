"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const services = ["I'm Not Sure", "Roof Inspection", "Roof Repair", "Roof Replacement", "Storm Damage Restoration", "Gutters", "Siding", "Other / General Question"];

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const body = [
          `Name: ${data.get("name")}`,
          `Email: ${data.get("email")}`,
          `Phone: ${data.get("phone")}`,
          `Property Address: ${data.get("address")}`,
          `Service Needed: ${data.get("service")}`,
          `Preferred Contact: ${data.get("contactMethod")}`,
          "",
          String(data.get("message") ?? ""),
        ].join("\n");
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Website inspection request")}&body=${encodeURIComponent(body)}`;
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
          Property Address
          <input required name="address" autoComplete="street-address" className="h-12 border border-slate-300 px-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Service Needed
          <select required name="service" className="h-12 border border-slate-300 px-3 font-normal">
            <option value="">Select a Service</option>
            {services.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Preferred Contact
          <select required name="contactMethod" className="h-12 border border-slate-300 px-3 font-normal">
            <option value="">Select Preference</option>
            <option>Phone Call</option>
            <option>Text Message</option>
            <option>Email</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-slate-800">
        Tell Us What&apos;s Going On
        <textarea required name="message" rows={5} className="border border-slate-300 p-3 font-normal" placeholder="Tell us what you've noticed, what you're concerned about, or what you're hoping to accomplish with your home." />
      </label>
      <label className="flex gap-3 text-sm leading-6 text-slate-700">
        <input required type="checkbox" name="consent" className="mt-1 h-4 w-4" />
        <span>I agree to be contacted by Centerline Roofing & Exteriors about my request. Message and data rates may apply.</span>
      </label>
      <button className="focus-ring h-12 bg-[#1d66c2] px-5 font-black text-white hover:bg-[#1557aa]">
        Send My Request
      </button>
      {submitted ? (
        <p role="status" className="border border-[#1d66c2]/30 bg-blue-50 p-3 text-sm font-semibold text-[#061a33]">
          <strong className="block">Your email app should open with your request filled in.</strong>
          Please send that email to complete your request. Direct online form delivery is still being finalized.
        </p>
      ) : null}
    </form>
  );
}
