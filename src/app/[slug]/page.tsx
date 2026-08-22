/* eslint-disable react/no-unescaped-entities */
import { ArrowRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { EditorialCards, InteriorHero, SectionHeading } from "@/components/InteriorPage";
import { CheckList, Process } from "@/components/Sections";
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { ContentSection, servicePages } from "@/lib/service-content";
import { locationPages, site } from "@/lib/site";

const staticPages = {
  about: { title: "About Centerline Roofing & Exteriors | Zionsville, IN", description: "Meet Dylan Gandy and learn why Centerline Roofing & Exteriors was built around clear guidance, professionalism, craftsmanship and accountability." },
  contact: { title: "Contact Centerline Roofing & Exteriors", description: "Contact Centerline Roofing & Exteriors for roofing, storm restoration, gutters, or siding help in Zionsville and Central Indiana." },
  "request-inspection": { title: "Request a Free Inspection | Centerline Roofing & Exteriors", description: "Tell Centerline what's going on with your home and request a free roofing or exterior inspection in Zionsville and Central Indiana." },
  "service-areas": { title: "Central Indiana Roofing & Exterior Service Areas", description: "Explore Centerline Roofing & Exteriors service areas across Zionsville and Greater Central Indiana." },
} as const;

export function generateStaticParams() {
  return [...servicePages.map(({ slug }) => ({ slug })), ...Object.keys(staticPages).map((slug) => ({ slug }))];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicePages.find((page) => page.slug === slug);
  if (service) return pageMetadata({ title: service.title, description: service.description, path: `/${slug}` });
  const page = staticPages[slug as keyof typeof staticPages];
  return page ? pageMetadata({ title: page.title, description: page.description, path: `/${slug}` }) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicePages.find((page) => page.slug === slug);
  if (service) return <ServicePage service={service} />;
  if (slug === "about") return <AboutPage />;
  if (slug === "contact") return <ContactPage />;
  if (slug === "request-inspection") return <RequestInspectionPage />;
  if (slug === "service-areas") return <ServiceAreasPage />;
  notFound();
}

function RenderSection({ section, index }: { section: ContentSection; index: number }) {
  if (section.type === "feature") return (
    <section className="interior-feature text-white">
      <div className="interior-feature-grid" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div><div className="interior-rule" aria-hidden="true" /><SectionHeading className="mt-6 !text-white">{section.heading}</SectionHeading></div>
        <div className="space-y-5 text-lg leading-8 text-slate-200">{section.body.map((p) => <p key={p}>{p}</p>)}{section.link ? <Link href={section.link.href} className="focus-ring mt-2 inline-flex items-center gap-2 font-black text-[#8cc5ff] transition hover:text-white">{section.link.label}<ArrowRight size={18} /></Link> : null}</div>
      </div>
    </section>
  );
  return (
    <section className={index % 2 ? "interior-section interior-section-tint" : "interior-section bg-white"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {section.type === "cards" ? <><SectionHeading className="max-w-5xl">{section.heading}</SectionHeading>{section.intro ? <div className="interior-prose mt-6 max-w-4xl space-y-4">{section.intro.map((p) => <p key={p}>{p}</p>)}</div> : null}<EditorialCards cards={section.cards} /></> : null}
        {section.type === "checklist" ? <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_.95fr]"><div><SectionHeading>{section.heading}</SectionHeading><div className="interior-prose mt-6 space-y-4">{section.body.map((p) => <p key={p}>{p}</p>)}</div></div><aside className="interior-checklist"><div className="interior-checklist-accent" aria-hidden="true" /><h3 className="text-2xl font-black tracking-[-0.025em] text-[#061a33]">{section.checklistHeading}</h3><div className="mt-6"><CheckList items={section.items} /></div></aside></div> : null}
        {section.type === "process" ? <><SectionHeading className="max-w-5xl">{section.heading}</SectionHeading><div className="mt-12"><Process steps={section.steps.map(({ title, text }) => [title, text])} /></div></> : null}
        {section.type === "faq" ? <div className="mx-auto max-w-5xl"><SectionHeading>{section.heading}</SectionHeading><div className="mt-10 grid gap-3">{section.faqs.map((faq) => <details key={faq.question} className="interior-faq group"><summary className="cursor-pointer pr-10 text-lg font-black leading-7 text-[#061a33] sm:text-xl">{faq.question}</summary><p className="mt-5 max-w-4xl leading-7 text-slate-600">{faq.answer}</p>{faq.link ? <Link href={faq.link.href} className="focus-ring mt-5 inline-flex items-center gap-2 font-black text-[#1d66c2]">{faq.link.label}<ArrowRight size={16} /></Link> : null}</details>)}</div></div> : null}
      </div>
    </section>
  );
}

function ServicePage({ service }: { service: (typeof servicePages)[number] }) {
  const faqs = service.sections.find((section) => section.type === "faq");
  const crumbs = [{ label: "Home", href: "/" }, { label: service.navTitle, href: `/${service.slug}` }];
  return <>
    <JsonLd data={[breadcrumbSchema(crumbs.map((item) => ({ name: item.label, url: `${site.domain}${item.href === "/" ? "" : item.href}` }))), serviceSchema(service.navTitle, service.description, `/${service.slug}`), ...(faqs?.type === "faq" ? [faqSchema(faqs.faqs)] : [])]} />
    <InteriorHero title={service.h1} text={service.intro} button={service.heroButton} />
    <div className="border-b border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8"><Breadcrumbs items={crumbs} /></div></div>
    {service.sections.map((section, index) => <RenderSection key={`${section.type}-${section.heading}`} section={section} index={index} />)}
    <section className="border-y border-slate-200 bg-[#edf5ff]"><div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"><div className="flex gap-5"><MapPin className="mt-1 hidden shrink-0 text-[#1d66c2] sm:block" size={30} /><div><h2 className="text-2xl font-black tracking-[-0.025em] text-[#061a33]">{service.serviceAreaHeading}</h2><p className="mt-3 max-w-4xl leading-7 text-slate-600">{service.serviceAreaText}</p></div></div><Link href="/request-inspection" className="focus-ring interior-button interior-button-blue shrink-0">{service.heroButton}<ArrowRight size={18} /></Link></div></section>
    <CTA title={service.finalTitle} text={service.finalText} button={service.finalButton} />
  </>;
}

function AboutPage() {
  const values = [
    { title: "Clarity", text: "You should understand what's happening with your home and why we're recommending a particular solution. We'll take the time to explain what we find and answer your questions." },
    { title: "Trusted Guidance", text: "Our recommendations start with what makes sense for you and your home—not with what creates the biggest project." },
    { title: "Professionalism", text: "A professional experience means more than completing the work. It means communicating promptly, staying organized, respecting your property, and following through on what we say we'll do." },
    { title: "Craftsmanship", text: "Craftsmanship starts before installation ever begins. It means selecting the right system and materials, planning the details carefully, and making sure the installation is completed with the attention to detail and quality we expect for every Centerline project." },
  ];
  return <>
    <InteriorHero title="A Roofing Company Built Around Doing Things the Right Way" text={["Centerline Roofing & Exteriors was founded with a simple belief: homeowners should be able to expect a contractor who takes the time to understand their needs, provides honest guidance, communicates clearly, and takes responsibility for getting the job done right.", "We're locally based in Zionsville and serve homeowners throughout Central Indiana with roofing, storm damage restoration, gutters, and siding."]} button="Request a Free Inspection" />
    <section className="interior-section bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><SectionHeading>Helping Homeowners Make the Right Decision for Their Home</SectionHeading><div className="interior-prose space-y-5"><p>Most homeowners don't spend their time thinking about roofing systems, flashing, ventilation, siding, or gutters—and they shouldn't have to become experts just because something goes wrong with their home.</p><p>When you call a contractor, you should be able to trust that they'll take the time to understand the problem, explain what they're seeing, answer your questions, and recommend a solution based on what your home actually needs.</p><p>That's the kind of company Centerline was created to be. Centerline doesn't exist simply to sell roofs. We exist to help homeowners solve roofing and exterior problems the right way.</p><p>That means sometimes the answer is a repair. Sometimes it's a replacement. Sometimes it's helping you choose between different materials or systems. And when storm damage and insurance are involved, sometimes it's helping you understand the process and what it will take to properly restore your home. Sometimes the best news we can give you is that your home is in good shape and nothing needs to be done.</p><p>Whatever the situation, our goal is for you to understand what's happening, know what your options are, and feel confident about the decision you make.</p></div></div></section>
    <section className="interior-section interior-section-tint"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.72fr_1.28fr] lg:px-8"><div className="owner-story-panel"><div className="interior-rule" aria-hidden="true" /><p className="mt-6 text-xs font-black uppercase tracking-[.2em] text-[#8cc5ff]">Meet the owner</p><h2 className="mt-4 text-[clamp(2.8rem,5vw,5.25rem)] font-black leading-[.95] tracking-[-0.05em]">I'm Dylan Gandy.</h2></div><div className="interior-prose space-y-5 lg:py-5"><p>I'm the owner of Centerline Roofing & Exteriors and a Zionsville resident. Before starting Centerline, my path took me from playing offensive line in the NFL and being part of a Super Bowl championship team to teaching and coaching here in our community.</p><p>Football taught me the importance of preparation, accountability, attention to detail, and doing your job well because other people are counting on you. As an offensive lineman, doing things the right way often meant taking care of details most people would never notice—but those details could be the difference between winning and losing.</p><p>Teaching reinforced something equally important: people make better decisions when they truly understand what's in front of them. Taking something that may seem complicated, helping someone understand it, and giving them the information they need to move forward with confidence is something I valued in the classroom and now bring to Centerline.</p><p>While I've stepped away from teaching, I continue to coach football at Zionsville Community High School. Coaching gives me the opportunity to continue investing in young men while staying connected to and serving the community my family and I call home.</p><p>My role is to make sure you have someone you can trust throughout the entire process—someone who will take the time to understand the problem, help you understand your options, choose the right solution and materials for your home, oversee the project, communicate with you along the way, and stand behind the finished work.</p></div></div></section>
    <section className="interior-section bg-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading>What You Can Expect From Centerline</SectionHeading><EditorialCards cards={values} /></div></section>
    <section className="interior-section interior-section-tint"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8"><SectionHeading>Local Means More Than Having an Address Here</SectionHeading><div className="interior-prose space-y-5"><p>Centerline is based in Zionsville, and this is the community my family and I call home. We live, raise our family, and stay involved here, and Centerline was built with the intention of developing long-term relationships throughout the communities we serve.</p><p>When your name is attached to a company in the same community where you live, reputation matters. I want homeowners to know who they're hiring, know who is responsible for their project, and know that Centerline will still be here after the work is finished.</p><p>We're proud to serve Zionsville, Carmel, Westfield, Whitestown, Brownsburg, Lebanon, Fishers, Noblesville, Indianapolis, and homeowners throughout Greater Central Indiana.</p></div></div></section>
    <section className="interior-feature text-white"><div className="interior-feature-grid" aria-hidden="true" /><div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-24"><SectionHeading className="!text-white">Your Home. The Right Solution. A Company Accountable for the Result.</SectionHeading><p className="text-lg leading-8 text-slate-200">When you hire Centerline, you're hiring us to take responsibility for more than the installation itself. We'll evaluate your home, help you understand the problem or project, recommend the right solution, help you select the appropriate materials, coordinate the work, communicate throughout the process, oversee quality, and make sure the finished project meets the standards we expect for the Centerline name. That's what doing the job right means to us.</p></div></section>
    <CTA title="Start With a Conversation" text="Whether something is wrong with your home, you're considering an exterior project, or you simply want a professional opinion, we'd be glad to take a look. Tell us what's going on, and we'll help you determine the right next step." />
  </>;
}

function ContactPage() {
  return <><InteriorHero title="Contact Centerline" text={["Request a roofing or exterior inspection, ask a project question, or tell us what is happening with your home."]} /><section className="interior-section interior-section-tint"><div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[.7fr_1.3fr] lg:px-8"><aside className="contact-panel"><h2 className="text-3xl font-black tracking-[-0.035em] text-white">Business contact</h2><div className="mt-8 grid gap-5"><p className="flex items-start gap-3 text-slate-200"><Mail className="mt-0.5 shrink-0 text-[#67b0ff]" size={21} /><span>Email: <a className="block font-bold text-white transition hover:text-[#8cc5ff]" href={`mailto:${site.email}`}>{site.email}</a></span></p><p className="flex items-start gap-3 text-slate-200"><MapPin className="mt-0.5 shrink-0 text-[#67b0ff]" size={21} /><span>Service area: <span className="block font-bold text-white">{site.address}</span></span></p></div></aside><div className="form-surface"><SectionHeading className="mb-8">Send a message</SectionHeading><LeadForm /></div></div></section></>;
}

function RequestInspectionPage() {
  const next = [{ title: "We'll Get in Touch", text: "We'll contact you to learn a little more about your concerns or project and schedule a time that works for you." }, { title: "We'll Evaluate Your Home", text: "We'll take the time to understand what you're seeing, evaluate the relevant areas of your home, and gather the information needed to determine the right next step." }, { title: "You'll Understand the Right Solution", text: "We'll explain what we find, answer your questions, and help you understand your options so you can choose the right solution for your home." }];
  return <><InteriorHero title="Request a Free Inspection" text={["Whether you've noticed a problem, your home was recently affected by a storm, or you're considering an exterior project, tell us a little about what's going on and what you'd like to accomplish. We'll get in touch, learn more about your needs, and determine the right next step."]} /><section className="interior-section interior-section-tint"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><div className="form-surface"><LeadForm /></div></div></section><section className="interior-section bg-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading>Not Sure What You Need? That's Okay.</SectionHeading><p className="interior-prose mt-6 max-w-3xl">You don't need to diagnose the problem before contacting us. Tell us what you've noticed or what you'd like to accomplish, and we'll take it from there.</p><EditorialCards cards={next} /></div></section></>;
}

function ServiceAreasPage() {
  return <><InteriorHero title="Roofing & Exterior Services Across Central Indiana" text={["Centerline is based in Zionsville and serves homeowners throughout Greater Central Indiana."]} /><section className="interior-section interior-section-tint"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{locationPages.map((location, index) => <Link key={location.slug} href={`/service-areas/${location.slug}`} className="location-card group"><span className="text-xs font-black tracking-[.18em] text-[#1d66c2]" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span className="mt-10 flex items-center justify-between text-2xl font-black tracking-[-0.03em] text-[#061a33]">{location.city}, IN <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} /></span></Link>)}</div></div></section></>;
}
