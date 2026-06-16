import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { Process, ServiceCards } from "@/components/Sections";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { hasPublicPhone, serviceAreas, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Roofing Company Zionsville IN",
  description: "Centerline Roofing & Exteriors provides roof inspections, repair, replacement, storm damage, gutters, and siding across Central Indiana.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: site.domain }])} />
      <section className="metal-panel roof-texture overflow-hidden text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1.08fr_.92fr] md:py-24 lg:px-6">
          <div className="flex flex-col justify-center">
            <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              Central Indiana Roofing & Exteriors Built on Trust, Discipline, and Craftsmanship
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Centerline Roofing & Exteriors helps homeowners and businesses protect what matters with roof inspections, repairs, replacements, storm damage support, gutters, siding, and exterior restoration across Zionsville and Central Indiana.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/request-estimate" className="focus-ring inline-flex items-center justify-center gap-2 bg-white px-6 py-4 font-black text-[#061a33]">
                Request Free Inspection <ArrowRight size={18} />
              </Link>
              {hasPublicPhone ? (
                <Link href={site.phoneHref} className="focus-ring inline-flex items-center justify-center border border-white/40 px-6 py-4 font-black text-white">
                  Call Centerline
                </Link>
              ) : null}
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-slate-200">
              {["Zionsville-based", "Family-owned", "Former Indianapolis Colts offensive lineman", "Serving Central Indiana"].map((item) => (
                <span key={item} className="border border-white/18 bg-white/8 px-3 py-2">{item}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 border border-white/20" />
            <div className="relative border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div className="bg-white p-5 text-slate-900">
                <div className="mb-4 flex items-center gap-3">
                  <ShieldCheck className="text-[#1d66c2]" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1d66c2]">Start here</p>
                    <h2 className="text-xl font-black text-[#061a33]">Request a free inspection</h2>
                  </div>
                </div>
                <LeadForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-black tracking-tight text-[#061a33] md:text-4xl">Roofing and exterior services</h2>
          <p className="mt-4 leading-7 text-slate-600">Built for homeowners who want a clear answer, a practical plan, and a contractor who treats the property with respect.</p>
        </div>
        <ServiceCards />
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[.9fr_1.1fr] lg:px-6">
          <div className="metal-panel roof-texture min-h-[360px] p-8 text-white">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b9c2cf]">Owner-led accountability</p>
            <h2 className="mt-4 text-4xl font-black">Led by Dylan Gandy</h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-8 text-slate-700">
              Dylan Gandy brings the same discipline, preparation, and team-first mindset that shaped his football career to Centerline Roofing & Exteriors. As a former Indianapolis Colts player, husband, father of four, and Zionsville resident, Dylan built Centerline around clear communication, dependable work, and doing the job the right way.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 font-black text-[#1d66c2]">
              Read the company story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:px-6">
        <div>
          <h2 className="text-3xl font-black text-[#061a33] md:text-4xl">Storm damage and insurance support without the pressure</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Storm damage can be stressful. Centerline helps homeowners understand roof condition, document visible issues, and navigate next steps. Claim decisions belong to the insurance carrier, so the guidance stays practical and honest.
          </p>
          <Link href="/storm-damage" className="mt-6 inline-flex items-center gap-2 font-black text-[#1d66c2]">Storm damage support <ArrowRight size={18} /></Link>
        </div>
        <div>
          <h2 className="text-3xl font-black text-[#061a33] md:text-4xl">Serving Zionsville and Central Indiana</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Centerline serves {serviceAreas.join(", ")}, and surrounding Central Indiana communities.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <Link key={area} href={`/service-areas/${area.toLowerCase().replaceAll(" ", "-")}-in`} className="border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 hover:border-[#1d66c2] hover:text-[#1d66c2]">
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <h2 className="text-3xl font-black text-[#061a33] md:text-4xl">A straightforward process</h2>
          <div className="mt-8"><Process /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-black text-[#061a33] md:text-4xl">Reviews coming soon</h2>
            <p className="mt-3 text-slate-600">Centerline will add real customer feedback after reviews are available and permissioned for publication.</p>
          </div>
          <Link href="/reviews" className="font-black text-[#1d66c2]">Review page</Link>
        </div>
        <div className="border border-slate-200 bg-slate-50 p-6">
          <p className="max-w-3xl leading-7 text-slate-700">
            Until then, the site avoids fake names, ratings, and customer claims.
          </p>
        </div>
      </section>
      <CTA />
    </>
  );
}
