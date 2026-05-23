import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

export function CTA({
  title = "Ready for a clearer answer about your roof?",
  text = "Request a free inspection or estimate and Centerline will help you understand the right next step.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="metal-panel roof-texture text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 md:flex-row md:items-center md:justify-between lg:px-6">
        <div>
          <h2 className="max-w-2xl text-3xl font-black tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-slate-200">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/request-estimate" className="focus-ring inline-flex items-center justify-center gap-2 bg-white px-5 py-3 font-black text-[#061a33]">
            Request Free Inspection <ArrowRight size={18} />
          </Link>
          <Link href={site.phoneHref} className="focus-ring inline-flex items-center justify-center gap-2 border border-white/40 px-5 py-3 font-black text-white">
            <Phone size={18} /> Call Centerline
          </Link>
        </div>
      </div>
    </section>
  );
}
