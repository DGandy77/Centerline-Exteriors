/* eslint-disable react/no-unescaped-entities */
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CloudLightning,
  Droplets,
  Hammer,
  House,
  MapPin,
  MessageSquareText,
  PanelsTopLeft,
  Search,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { locationPages, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Roofing & Exterior Contractor in Zionsville, IN | Centerline",
  description: "Centerline Roofing & Exteriors provides roofing, storm damage restoration, gutters and siding in Zionsville and throughout Central Indiana.",
  path: "/",
});

const experience = [
  { number: "01", title: "Clear Answers", text: "We inspect carefully, explain what we found in plain language, and make sure you understand what your home actually needs.", icon: Search },
  { number: "02", title: "Trusted Guidance", text: "If a repair makes sense, we'll recommend a repair. Every recommendation starts with the right solution for your home.", icon: MessageSquareText },
  { number: "03", title: "Professional Execution", text: "Organized scheduling, consistent communication, respect for your property, and a thorough final walkthrough come standard.", icon: ShieldCheck },
  { number: "04", title: "Exceptional Craftsmanship", text: "Premium materials and careful installation turn the right plan into an exterior built to perform beautifully.", icon: Hammer },
];

const services = [
  { number: "01", title: "Roof Inspections", text: "Understand the condition of your roof and whether anything needs attention now.", href: "/roof-inspections", icon: Search, tone: "light" },
  { number: "02", title: "Roof Repair", text: "Find the source of a problem and make the right repair when repair makes sense.", href: "/roof-repair", icon: Hammer, tone: "blue" },
  { number: "03", title: "Roof Replacement", text: "Build a complete roofing system around your home, goals, and long-term performance.", href: "/roof-replacement", icon: House, tone: "navy" },
  { number: "04", title: "Storm Restoration", text: "Document storm damage and navigate restoration with calm, clear guidance.", href: "/storm-damage-restoration", icon: CloudLightning, tone: "sky" },
  { number: "05", title: "Gutter Systems", text: "Manage runoff with a gutter system designed for your home and lasting performance.", href: "/gutters", icon: Droplets, tone: "light" },
  { number: "06", title: "Siding", text: "Protect and transform your home with siding selected for performance and appearance.", href: "/siding", icon: PanelsTopLeft, tone: "silver" },
];

const process = [
  ["Inspect", "We understand your concerns, evaluate the home, and document what we find."],
  ["Explain", "We walk through the condition, answer questions, and make every option clear."],
  ["Plan", "Together, we align the right system, materials, schedule, and project details."],
  ["Build", "We manage the work, keep you informed, and finish with a complete walkthrough."],
];

export default function Home() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: site.domain }])} />

      <section className="home-hero isolate overflow-hidden bg-[#061a33] text-white">
        <Image
          src="/images/home/centerline-home-hero.png"
          alt="Central Indiana home with a charcoal architectural-shingle roof after a passing storm"
          fill
          priority
          sizes="100vw"
          className="home-hero-image object-cover"
        />
        <div className="home-hero-wash" aria-hidden="true" />
        <div className="home-grid-lines" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[700px] max-w-[90rem] items-end px-4 pb-16 pt-20 sm:px-6 md:min-h-[760px] md:items-center md:py-24 lg:px-10">
          <div className="max-w-4xl">
            <p className="home-eyebrow"><span className="home-eyebrow-line" />Based in Zionsville · Serving Central Indiana</p>
            <h1 className="mt-6 max-w-4xl text-[clamp(3.25rem,7.3vw,7.25rem)] font-black leading-[0.9] tracking-[-0.055em]">
              Clear answers.<br /><span className="text-[#67b0ff]">Exceptional</span><br />craftsmanship.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl sm:leading-9">Roofing, gutters, siding, and storm restoration led with clarity—from the first inspection to the final walkthrough.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/request-inspection" className="focus-ring home-button home-button-primary">Request a Free Inspection <ArrowRight size={20} /></Link>
              <Link href="#services" className="focus-ring home-button home-button-ghost">Explore Our Services <ArrowRight size={20} /></Link>
            </div>
          </div>
        </div>
        <div className="relative grid border-y border-white/15 bg-[#061a33]/90 backdrop-blur-xl sm:grid-cols-3">
          {[["Local", "Owner-led in Zionsville"], ["Honest", "Repair-first guidance"], ["Complete", "Roofing to full exteriors"]].map(([label, text]) => (
            <div key={label} className="flex items-center gap-4 border-white/15 px-6 py-5 sm:border-r sm:last:border-r-0 lg:px-10">
              <CheckCircle2 className="shrink-0 text-[#67b0ff]" size={24} />
              <p><strong className="block text-xs uppercase tracking-[0.2em] text-[#67b0ff]">{label}</strong><span className="mt-1 block font-bold text-white">{text}</span></p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="home-orbit home-orbit-right" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-[1.05fr_.95fr]">
            <div><p className="home-kicker">The Centerline Experience</p><h2 className="home-heading mt-4 max-w-4xl">A better exterior project starts with a <span className="text-[#1d66c2]">clearer experience.</span></h2></div>
            <p className="max-w-xl text-lg leading-8 text-slate-600 lg:justify-self-end">When your home needs attention, you deserve to understand what is happening, why it matters, and what comes next. That belief shapes every Centerline project.</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 xl:grid-cols-4">
            {experience.map((item) => {
              const Icon = item.icon;
              return <article key={item.title} className="group relative min-h-80 bg-white p-7 transition duration-300 hover:bg-[#061a33] md:p-8">
                <div className="flex items-start justify-between"><span className="text-sm font-black tracking-[0.2em] text-[#1d66c2] group-hover:text-[#67b0ff]">{item.number}</span><Icon className="text-[#1d66c2] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#67b0ff]" size={30} /></div>
                <h3 className="mt-14 text-2xl font-black tracking-tight text-[#061a33] group-hover:text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600 group-hover:text-slate-200">{item.text}</p>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 overflow-hidden bg-[#f2f6fb] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div><p className="home-kicker">Built around your home</p><h2 className="home-heading mt-4">One trusted partner for the <span className="text-[#1d66c2]">whole exterior.</span></h2></div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">From one concerning roof stain to a complete exterior transformation, we begin with the home in front of us—not a predetermined sales pitch.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const spans = index === 0 || index === 3 || index === 4 ? "lg:col-span-5" : "lg:col-span-7";
              return <Link key={service.href} href={service.href} className={`service-tile service-tile-${service.tone} focus-ring group ${spans}`}>
                <div className="flex items-start justify-between gap-6"><span className="service-number">{service.number}</span><Icon size={34} strokeWidth={1.75} /></div>
                <div className="mt-16 max-w-xl"><h3 className="text-3xl font-black tracking-tight sm:text-4xl">{service.title}</h3><p className="mt-4 max-w-lg text-base leading-7 opacity-80 sm:text-lg">{service.text}</p><span className="mt-7 inline-flex items-center gap-2 font-black">Explore service <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={19} /></span></div>
              </Link>;
            })}
          </div>
        </div>
      </section>

      <section className="storm-band relative isolate overflow-hidden bg-[#1d66c2] py-16 text-white md:py-20">
        <div className="storm-bolt" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:px-8">
          <CloudLightning size={56} strokeWidth={1.5} className="text-[#a9d5ff]" />
          <div><p className="text-sm font-black uppercase tracking-[0.22em] text-[#d9ecff]">After the storm</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">Start with facts, not pressure.</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-blue-50">We'll inspect and document visible damage, explain what we find, and help you understand the right next step—including what to expect when insurance is involved.</p></div>
          <Link href="/storm-damage-restoration" className="focus-ring home-button bg-white text-[#061a33] hover:bg-[#e8f3ff]">Storm damage help <ArrowRight size={20} /></Link>
        </div>
      </section>

      <section className="overflow-hidden bg-[#061a33] text-white">
        <div className="mx-auto grid max-w-[90rem] lg:grid-cols-[.9fr_1.1fr]">
          <div className="owner-panel relative min-h-[520px] overflow-hidden px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <div className="home-grid-lines opacity-50" aria-hidden="true" />
            <div className="relative"><p className="home-kicker text-[#67b0ff]">Meet the owner</p><p className="mt-8 text-[clamp(2.6rem,5vw,5.5rem)] font-black leading-[.95] tracking-[-0.05em]">Trust.<br />Discipline.<br /><span className="text-[#67b0ff]">Craft.</span></p><div className="mt-12 h-px w-28 bg-[#67b0ff]" /><p className="mt-6 max-w-md text-lg font-bold leading-8 text-slate-200">The standards Dylan carried from the NFL, classroom, and sidelines now guide every Centerline project.</p></div>
          </div>
          <div className="bg-white px-6 py-16 text-slate-700 sm:px-10 lg:px-16 lg:py-24">
            <p className="home-kicker">Owner-led. Community-minded.</p>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-[#061a33] sm:text-5xl">Someone accountable from the first answer to the final walkthrough.</h2>
            <div className="mt-8 space-y-5 text-lg leading-8"><p>Centerline was founded on a simple belief: homeowners should expect honest guidance, clear communication, and responsibility for getting the job done right.</p><p>I'm Dylan Gandy, owner of Centerline and a Zionsville resident. Playing offensive line in the NFL taught me preparation, accountability, and the importance of doing your job well because other people are counting on you. Teaching and coaching reinforced something just as important: people make better decisions when they truly understand what's in front of them.</p><p>Those experiences shape how I lead Centerline today—and the standard we bring to your home.</p></div>
            <Link href="/about" className="focus-ring mt-9 inline-flex items-center gap-2 text-lg font-black text-[#1d66c2]">Meet Dylan &amp; Centerline <ArrowRight size={20} /></Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="home-orbit home-orbit-left" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="home-kicker">The Centerline Process</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1.15fr_.85fr] lg:items-end"><h2 className="home-heading">No mystery. No guesswork. <span className="text-[#1d66c2]">Just a clear path forward.</span></h2><p className="max-w-xl text-lg leading-8 text-slate-600 lg:justify-self-end">You'll know what we're doing, why we're doing it, and what comes next.</p></div>
          <ol className="process-rail mt-14 grid gap-7 md:grid-cols-4">
            {process.map(([title, text], index) => <li key={title} className="relative pt-10"><span className="process-dot">{index + 1}</span><h3 className="text-2xl font-black text-[#061a33]">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></li>)}
          </ol>
          <Link href="/request-inspection" className="focus-ring home-button home-button-dark mt-12">Start with a free inspection <ArrowRight size={20} /></Link>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f2f6fb] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div><div className="flex items-center gap-3 text-[#1d66c2]"><MapPin size={28} /><span className="home-kicker">Proudly local</span></div><h2 className="mt-5 text-4xl font-black tracking-tight text-[#061a33] sm:text-5xl">Serving Zionsville and greater Central Indiana.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Not sure if you're in our service area? Reach out—we'd be happy to help.</p></div>
            <div className="flex flex-wrap gap-3 lg:justify-end">{locationPages.map((area) => <Link key={area.slug} href={`/service-areas/${area.slug}`} className="focus-ring location-pill">{area.city}<ArrowUpRight size={16} /></Link>)}</div>
          </div>
        </div>
      </section>

      <CTA title="Ready for a Clear Answer?" text="Whether you know exactly what your home needs or you're not sure where to start, schedule a free inspection. We'll evaluate your home and help you determine the right next step." />
    </>
  );
}
