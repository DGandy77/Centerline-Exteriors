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
    <ul className="grid gap-0 divide-y divide-slate-200">
      {items.map((item) => (
        <li key={item} className="flex gap-3 py-3.5 text-slate-700 first:pt-0 last:pb-0">
          <CheckCircle2 className="mt-0.5 shrink-0 text-[#1d66c2]" size={20} />
          <span className="font-semibold leading-6">{item}</span>
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

export function Process({ steps = [
    ["Inspect", "Check the roof, exterior details, and visible concerns."],
    ["Explain", "Walk through what was found in plain language."],
    ["Plan", "Align scope, timing, material options, and next steps."],
    ["Build", "Complete the work with clean communication and cleanup."],
  ] }: { steps?: string[][] }) {
  const desktopColumns = steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";

  return (
    <ol className={`interior-process grid gap-4 md:grid-cols-2 ${desktopColumns}`}>
      {steps.map(([title, text], index) => (
        <li key={`${title}-${index}`} className="interior-process-step">
          <span className="interior-process-number">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-8 text-2xl font-black tracking-[-0.025em] text-[#061a33]">{title}</h3>
          <p className="mt-4 leading-7 text-slate-600">{text}</p>
        </li>
      ))}
    </ol>
  );
}
