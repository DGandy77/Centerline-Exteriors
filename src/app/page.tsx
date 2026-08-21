/* eslint-disable react/no-unescaped-entities */
import {
  ArrowRight,
  ArrowUpRight,
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
  {
    title: "Clear Answers",
    text: "When you have an issue with your home, you deserve to understand exactly what's going on. We'll thoroughly inspect the problem, explain what we found, answer your questions, and help you understand the best solution—whether that's a repair, a replacement, or simply the peace of mind that your roof is in good shape.",
    icon: Search,
  },
  {
    title: "Trusted Guidance",
    text: "Every recommendation starts with one question: What's the right solution for this homeowner? If a repair makes the most sense, we'll recommend a repair. If replacement is the better long-term investment, we'll explain why, answer every question, and help you make a confident decision.",
    icon: MessageSquareText,
  },
  {
    title: "Professional From Start to Finish",
    text: "You should never have to wonder what's happening with your project. From prompt communication and organized scheduling to respecting your property and completing a thorough final walkthrough, we're committed to providing a professional experience from start to finish.",
    icon: ShieldCheck,
  },
  {
    title: "Exceptional Craftsmanship",
    text: "Exceptional results start with exceptional materials. We use premium products from manufacturers we trust, then help you select the right roofing system for your home, goals, and budget. From materials to installation, every detail is held to the high standards we expect for the Centerline name.",
    icon: Hammer,
  },
];

const services = [
  {
    title: "Roofing",
    text: "From minor repairs to complete roof replacements, we'll evaluate your roof, explain what we find, and recommend the best solution for you and your home.",
    icon: House,
    tone: "navy",
    links: [
      ["Roof Inspections", "/roof-inspections"],
      ["Roof Repair", "/roof-repair"],
      ["Roof Replacement", "/roof-replacement"],
    ],
  },
  {
    title: "Storm Damage Restoration",
    text: "Storm damage can leave you with a lot of questions about what happened, what needs to be repaired, and what to do next. We'll thoroughly inspect and document the damage, explain your options, and guide you through the restoration and insurance process when a claim is involved.",
    icon: CloudLightning,
    tone: "blue",
    links: [["Explore Storm Damage Restoration", "/storm-damage-restoration"]],
  },
  {
    title: "Gutters",
    text: "A well-designed gutter system does more than keep rainwater from pouring off your roof. It directs water away from your home, helping protect your roofline, siding, landscaping, and foundation. We install premium gutter systems designed for your home and built for lasting performance.",
    icon: Droplets,
    tone: "sky",
    links: [["Explore Gutters", "/gutters"]],
  },
  {
    title: "Siding",
    text: "Protect your home and transform its appearance with premium siding selected for lasting performance, durability, and the look you want for your home.",
    icon: PanelsTopLeft,
    tone: "silver",
    links: [["Explore Siding", "/siding"]],
  },
];

const process = [
  ["Inspect", "We start by taking the time to understand your concerns and thoroughly inspect your home. We'll identify the problem, document what we find, and gather the information needed to determine the right next step."],
  ["Explain", "We'll walk you through what we found, answer your questions, and make sure you understand your options. If insurance is involved, we'll also help you understand what to expect from that process."],
  ["Plan", "Once you decide how you'd like to move forward, we'll build a clear plan for your project—from selecting the right materials and system for your home to scheduling the work and preparing for installation."],
  ["Build", "We'll manage your project from start to finish, keep you informed along the way, and make sure the work meets the standards we expect for every Centerline project. Once the work is complete, we'll walk the finished project with you, answer any remaining questions, and make sure you're confident in the work we've done."],
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
          <div className="max-w-5xl">
            <div className="home-eyebrow-line" aria-hidden="true" />
            <h1 className="mt-7 max-w-5xl text-[clamp(3rem,6.7vw,6.8rem)] font-black leading-[0.91] tracking-[-0.055em]">
              Clear Answers.<br />
              <span className="text-[#67b0ff]">Exceptional Craftsmanship.</span><br />
              Roofing Done Right.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-100 sm:text-xl sm:leading-9">When your home needs attention, you deserve a contractor who brings clarity, craftsmanship, and professionalism to every step of the process. Whether it's roofing, gutters, siding, or storm damage, we're here to help you move forward with confidence.</p>
            <Link href="/request-inspection" className="focus-ring home-button home-button-primary mt-9">Request a Free Inspection <ArrowRight size={20} /></Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="home-orbit home-orbit-right" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="home-heading max-w-5xl">The Centerline <span className="text-[#1d66c2]">Experience</span></h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 xl:grid-cols-4">
            {experience.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="group relative min-h-[30rem] bg-white p-7 transition duration-300 hover:bg-[#061a33] md:p-8">
                  <div className="flex justify-end"><Icon className="text-[#1d66c2] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#67b0ff]" size={32} /></div>
                  <h3 className="mt-16 text-2xl font-black tracking-tight text-[#061a33] group-hover:text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600 group-hover:text-slate-200">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 overflow-hidden bg-[#f2f6fb] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <h2 className="home-heading">Roofing &amp; <span className="text-[#1d66c2]">Exterior Services</span></h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">From your roof to your siding and gutters, we provide complete exterior solutions designed to protect your home, enhance its appearance, and stand the test of time.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const spans = index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5";
              return (
                <article key={service.title} className={`service-tile service-tile-${service.tone} group ${spans}`}>
                  <div className="flex justify-end"><Icon size={36} strokeWidth={1.75} /></div>
                  <div className="mt-14 max-w-xl">
                    <h3 className="text-3xl font-black tracking-tight sm:text-4xl">{service.title}</h3>
                    <p className="mt-4 max-w-xl text-base leading-7 opacity-80 sm:text-lg">{service.text}</p>
                    <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                      {service.links.map(([label, href]) => (
                        <Link key={href} href={href} className="focus-ring inline-flex items-center gap-2 font-black">
                          {label} <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={18} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#061a33] text-white">
        <div className="mx-auto grid max-w-[90rem] lg:grid-cols-[.9fr_1.1fr]">
          <div className="owner-panel relative min-h-[520px] overflow-hidden px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <div className="home-grid-lines opacity-50" aria-hidden="true" />
            <div className="relative">
              <p className="home-kicker text-[#67b0ff]">Meet the Owner</p>
              <h2 className="mt-8 text-[clamp(2.9rem,5vw,5.5rem)] font-black leading-[.95] tracking-[-0.05em]">Built on Trust, Discipline <span className="text-[#67b0ff]">&amp; Craftsmanship</span></h2>
            </div>
          </div>
          <div className="bg-white px-6 py-16 text-slate-700 sm:px-10 lg:px-16 lg:py-24">
            <div className="space-y-5 text-lg leading-8">
              <p>Centerline Roofing &amp; Exteriors was founded with a simple belief: homeowners should be able to expect a contractor who takes the time to understand their needs, provides honest guidance, communicates clearly, and takes responsibility for getting the job done right.</p>
              <p>I'm Dylan Gandy, owner of Centerline and a Zionsville resident. Before starting Centerline, my path took me from playing offensive line in the NFL to teaching and coaching here in our community. Football taught me the importance of preparation, accountability, attention to detail, and doing your job well because other people are counting on you. Teaching reinforced something equally important: people make better decisions when they truly understand what's in front of them.</p>
              <p>Those experiences shape the way I lead Centerline today. My role is to make sure you have someone you can trust throughout the entire process—someone who will help you understand the problem, walk you through your options, choose the right solution and materials for your home, oversee the project, and stand behind the finished work.</p>
            </div>
            <Link href="/about" className="focus-ring mt-9 inline-flex items-center gap-2 text-lg font-black text-[#1d66c2]">About Centerline <ArrowRight size={20} /></Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="home-orbit home-orbit-left" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 className="home-heading">The Centerline <span className="text-[#1d66c2]">Process</span></h2>
            <p className="max-w-xl text-lg leading-8 text-slate-600 lg:justify-self-end">A straightforward process, clear communication, and no surprises. You'll know what we're doing, why we're doing it, and what comes next.</p>
          </div>
          <ol className="process-rail mt-14 grid gap-7 md:grid-cols-4">
            {process.map(([title, text], index) => (
              <li key={title} className="relative pt-10">
                <span className="process-dot">{index + 1}</span>
                <h3 className="text-2xl font-black text-[#061a33]">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </li>
            ))}
          </ol>
          <Link href="/request-inspection" className="focus-ring home-button home-button-dark mt-12">Request a Free Inspection <ArrowRight size={20} /></Link>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f2f6fb] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <MapPin size={30} className="text-[#1d66c2]" aria-hidden="true" />
              <h2 className="mt-5 text-4xl font-black tracking-tight text-[#061a33] sm:text-5xl">Serving Zionsville &amp; Greater Central Indiana</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Centerline Roofing &amp; Exteriors is locally based in Zionsville and proudly serves homeowners throughout Central Indiana. We provide roofing, storm damage restoration, gutters, and siding throughout Zionsville, Carmel, Westfield, Whitestown, Brownsburg, Lebanon, Fishers, Noblesville, Indianapolis, and surrounding communities.</p>
              <p className="mt-4 text-lg leading-8 text-slate-600">Not sure if you're in our service area? Get in touch—we'd be happy to help.</p>
              <Link href="/contact" className="focus-ring mt-6 inline-flex items-center gap-2 text-lg font-black text-[#1d66c2]">Contact Centerline <ArrowRight size={20} /></Link>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {locationPages.map((area) => (
                <Link key={area.slug} href={`/service-areas/${area.slug}`} className="focus-ring location-pill">{area.city}<ArrowUpRight size={16} /></Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA title="Ready for a Clear Answer?" text="Whether you know exactly what your home needs or you're not sure where to start, we're here to help. Schedule a free inspection and we'll take the time to understand your concerns, evaluate your home, and help you determine the right next step." />
    </>
  );
}
