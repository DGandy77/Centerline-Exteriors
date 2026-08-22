import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { hasPublicPhone, site } from "@/lib/site";

export function CTA({
  title = "Ready for a Clear Answer?",
  text = "Whether you know exactly what your home needs or you're not sure where to start, we're here to help. Schedule a free inspection and we'll help you determine the right next step.",
  button = "Request a Free Inspection",
}: {
  title?: string;
  text?: string;
  button?: string;
}) {
  return (
    <section className="interior-cta text-white">
      <div className="interior-cta-line" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-9 px-4 py-20 sm:px-6 md:flex-row md:items-center md:justify-between md:py-24 lg:px-8">
        <div className="max-w-3xl">
          <div className="interior-rule" aria-hidden="true" />
          <h2 className="mt-6 text-[clamp(2.4rem,5vw,4.75rem)] font-black leading-[.98] tracking-[-0.05em]">{title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{text}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <Link href="/request-inspection" className="focus-ring interior-button interior-button-light">
            {button} <ArrowRight size={18} />
          </Link>
          {hasPublicPhone ? (
            <Link href={site.phoneHref} className="focus-ring interior-button border border-white/35 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-[#061a33]">
              <Phone size={18} /> Call Centerline
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
