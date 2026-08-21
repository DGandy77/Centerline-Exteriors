"use client";

import { type FormEvent, useState } from "react";
import { site } from "@/lib/site";

const services = ["I'm Not Sure", "Roof Inspection", "Roof Repair", "Roof Replacement", "Storm Damage Restoration", "Gutters", "Siding", "Other / General Question"];

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          address: data.get("address"),
          service: data.get("service"),
          contactMethod: data.get("contactMethod"),
          message: data.get("message"),
          consent: data.get("consent") === "on",
          company: data.get("company"),
        }),
      });

      if (!response.ok) throw new Error("Contact request failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={handleSubmit}
      aria-busy={status === "submitting"}
    >
      <label className="absolute -left-[9999px]" aria-hidden="true">
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Name
          <input required maxLength={100} name="name" autoComplete="name" className="h-12 border border-slate-300 px-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Email
          <input required maxLength={254} type="email" name="email" autoComplete="email" className="h-12 border border-slate-300 px-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Phone
          <input required maxLength={40} type="tel" name="phone" autoComplete="tel" className="h-12 border border-slate-300 px-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Property Address
          <input required maxLength={200} name="address" autoComplete="street-address" className="h-12 border border-slate-300 px-3 font-normal" />
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
        <textarea required maxLength={4000} name="message" rows={5} className="border border-slate-300 p-3 font-normal" placeholder="Tell us what you've noticed, what you're concerned about, or what you're hoping to accomplish with your home." />
      </label>
      <label className="flex gap-3 text-sm leading-6 text-slate-700">
        <input required type="checkbox" name="consent" className="mt-1 h-4 w-4" />
        <span>I agree to be contacted by Centerline Roofing & Exteriors about my request. Message and data rates may apply.</span>
      </label>
      <button disabled={status === "submitting"} className="focus-ring h-12 bg-[#1d66c2] px-5 font-black text-white hover:bg-[#1557aa] disabled:cursor-wait disabled:opacity-65">
        {status === "submitting" ? "Sending…" : "Send My Request"}
      </button>
      {status === "success" ? (
        <p role="status" aria-live="polite" className="border border-emerald-300 bg-emerald-50 p-3 text-sm font-semibold text-emerald-950">
          <strong className="block">Your request was submitted successfully.</strong>
          Centerline will be in touch about the next step.
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="border border-red-300 bg-red-50 p-3 text-sm font-semibold text-red-950">
          <strong className="block">We couldn&apos;t send your request right now.</strong>
          Please try again or email <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      ) : null}
    </form>
  );
}
