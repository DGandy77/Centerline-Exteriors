import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { primaryServices } from "@/lib/site";

export function ServiceCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {primaryServices.map((service) => (
        <Link key={service.href} href={service.href} className="group border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-black text-[#061a33]">{service.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{service.summary}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#1d66c2]">
            Learn more <ArrowRight size={16} />
          </span>
        </Link>
      ))}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-slate-700">
          <CheckCircle2 className="mt-0.5 shrink-0 text-[#1d66c2]" size={19} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FAQ({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div className="grid gap-4">
      {faqs.map((faq) => (
        <details key={faq.question} className="group border border-slate-200 bg-white p-5">
          <summary className="cursor-pointer text-lg font-black text-[#061a33]">{faq.question}</summary>
          <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function Process() {
  const steps = [
    ["Inspect", "Check the roof, exterior details, and visible concerns."],
    ["Explain", "Walk through what was found in plain language."],
    ["Plan", "Align scope, timing, material options, and next steps."],
    ["Build", "Complete the work with clean communication and cleanup."],
  ];
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {steps.map(([title, text], index) => (
        <div key={title} className="border border-slate-200 bg-white p-5">
          <span className="text-sm font-black text-[#1d66c2]">0{index + 1}</span>
          <h3 className="mt-3 text-xl font-black text-[#061a33]">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
        </div>
      ))}
    </div>
  );
}

export function PlaceholderReviews() {
  const reviews = [
    "Future customer review placeholder",
    "Future Google review placeholder",
    "Future project testimonial placeholder",
  ];
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {reviews.map((review) => (
        <article key={review} className="border border-dashed border-slate-300 bg-white p-5">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1d66c2]">Placeholder</p>
          <h3 className="mt-3 text-lg font-black text-[#061a33]">{review}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Replace this card with a real, attributed review after Centerline has permission to publish customer feedback.
          </p>
        </article>
      ))}
    </div>
  );
}
