/* eslint-disable react/no-unescaped-entities */
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
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

function PageHero({ title, text, button }: { title: string; text: string[]; button?: string }) {
  return (
    <section className="metal-panel roof-texture text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 lg:px-6">
        <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-5xl">{title}</h1>
        <div className="mt-5 max-w-3xl space-y-4 text-lg leading-8 text-slate-200">{text.map((item) => <p key={item}>{item}</p>)}</div>
        {button ? <Link href="/request-inspection" className="focus-ring mt-7 inline-flex items-center gap-2 bg-white px-5 py-3 font-black text-[#061a33]">{button}<ArrowRight size={18} /></Link> : null}
      </div>
    </section>
  );
}

function CardGrid({ cards }: { cards: { title: string; text: string }[] }) {
  return <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{cards.map((card) => <article key={card.title} className="border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-xl font-black text-[#061a33]">{card.title}</h3><p className="mt-3 leading-7 text-slate-600">{card.text}</p></article>)}</div>;
}

function RenderSection({ section, index }: { section: ContentSection; index: number }) {
  if (section.type === "feature") return (
    <section className="metal-panel roof-texture text-white"><div className="mx-auto max-w-5xl px-4 py-16 lg:px-6"><h2 className="text-3xl font-black md:text-4xl">{section.heading}</h2><div className="mt-5 space-y-4 text-lg leading-8 text-slate-200">{section.body.map((p) => <p key={p}>{p}</p>)}</div>{section.link ? <Link href={section.link.href} className="focus-ring mt-6 inline-flex items-center gap-2 font-black text-white underline decoration-[#2f86ff] decoration-2 underline-offset-4">{section.link.label}<ArrowRight size={18} /></Link> : null}</div></section>
  );
  return (
    <section className={index % 2 ? "bg-slate-50" : "bg-white"}><div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
      {section.type === "cards" ? <><h2 className="max-w-4xl text-3xl font-black text-[#061a33] md:text-4xl">{section.heading}</h2>{section.intro ? <div className="mt-5 max-w-4xl space-y-4 leading-7 text-slate-600">{section.intro.map((p) => <p key={p}>{p}</p>)}</div> : null}<CardGrid cards={section.cards} /></> : null}
      {section.type === "checklist" ? <div className="grid gap-10 md:grid-cols-2"><div><h2 className="text-3xl font-black text-[#061a33] md:text-4xl">{section.heading}</h2><div className="mt-5 space-y-4 leading-7 text-slate-600">{section.body.map((p) => <p key={p}>{p}</p>)}</div></div><div className="border border-slate-200 bg-white p-6"><h3 className="text-xl font-black text-[#061a33]">{section.checklistHeading}</h3><div className="mt-5"><CheckList items={section.items} /></div></div></div> : null}
      {section.type === "process" ? <><h2 className="text-3xl font-black text-[#061a33] md:text-4xl">{section.heading}</h2><div className="mt-8"><Process steps={section.steps.map(({ title, text }) => [title, text])} /></div></> : null}
      {section.type === "faq" ? <><h2 className="text-3xl font-black text-[#061a33] md:text-4xl">{section.heading}</h2><div className="mt-8 grid gap-4">{section.faqs.map((faq) => <details key={faq.question} className="group border border-slate-200 bg-white p-5"><summary className="cursor-pointer text-lg font-black text-[#061a33]">{faq.question}</summary><p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>{faq.link ? <Link href={faq.link.href} className="mt-4 inline-flex items-center gap-2 font-black text-[#1d66c2]">{faq.link.label}<ArrowRight size={16} /></Link> : null}</details>)}</div></> : null}
    </div></section>
  );
}

function ServicePage({ service }: { service: (typeof servicePages)[number] }) {
  const faqs = service.sections.find((section) => section.type === "faq");
  const crumbs = [{ label: "Home", href: "/" }, { label: service.navTitle, href: `/${service.slug}` }];
  return <>
    <JsonLd data={[breadcrumbSchema(crumbs.map((item) => ({ name: item.label, url: `${site.domain}${item.href === "/" ? "" : item.href}` }))), serviceSchema(service.navTitle, service.description, `/${service.slug}`), ...(faqs?.type === "faq" ? [faqSchema(faqs.faqs)] : [])]} />
    <PageHero title={service.h1} text={service.intro} button={service.heroButton} />
    <div className="mx-auto max-w-7xl px-4 py-7 lg:px-6"><Breadcrumbs items={crumbs} /></div>
    {service.sections.map((section, index) => <RenderSection key={`${section.type}-${section.heading}`} section={section} index={index} />)}
    <section className="border-y border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-12 md:flex-row md:items-center md:justify-between lg:px-6"><div><h2 className="text-2xl font-black text-[#061a33]">{service.serviceAreaHeading}</h2><p className="mt-3 max-w-4xl leading-7 text-slate-600">{service.serviceAreaText}</p></div><Link href="/request-inspection" className="focus-ring shrink-0 bg-[#1d66c2] px-5 py-3 text-center font-black text-white">{service.heroButton}</Link></div></section>
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
    <PageHero title="A Roofing Company Built Around Doing Things the Right Way" text={["Centerline Roofing & Exteriors was founded with a simple belief: homeowners should be able to expect a contractor who takes the time to understand their needs, provides honest guidance, communicates clearly, and takes responsibility for getting the job done right.", "We're locally based in Zionsville and serve homeowners throughout Central Indiana with roofing, storm damage restoration, gutters, and siding."]} button="Request a Free Inspection" />
    <section className="mx-auto max-w-5xl px-4 py-16 lg:px-6"><h2 className="text-3xl font-black text-[#061a33] md:text-4xl">Helping Homeowners Make the Right Decision for Their Home</h2><div className="mt-6 space-y-4 leading-8 text-slate-700"><p>Most homeowners don't spend their time thinking about roofing systems, flashing, ventilation, siding, or gutters—and they shouldn't have to become experts just because something goes wrong with their home.</p><p>When you call a contractor, you should be able to trust that they'll take the time to understand the problem, explain what they're seeing, answer your questions, and recommend a solution based on what your home actually needs.</p><p>That's the kind of company Centerline was created to be. Centerline doesn't exist simply to sell roofs. We exist to help homeowners solve roofing and exterior problems the right way.</p><p>That means sometimes the answer is a repair. Sometimes it's a replacement. Sometimes it's helping you choose between different materials or systems. And when storm damage and insurance are involved, sometimes it's helping you understand the process and what it will take to properly restore your home. Sometimes the best news we can give you is that your home is in good shape and nothing needs to be done.</p><p>Whatever the situation, our goal is for you to understand what's happening, know what your options are, and feel confident about the decision you make.</p></div></section>
    <section className="bg-slate-50"><div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[.7fr_1.3fr] lg:px-6"><div className="metal-panel roof-texture min-h-80 p-8 text-white"><p className="text-sm font-black uppercase tracking-[.18em] text-slate-300">Meet the owner</p><h2 className="mt-4 text-4xl font-black">I'm Dylan Gandy.</h2></div><div className="space-y-4 leading-8 text-slate-700"><p>I'm the owner of Centerline Roofing & Exteriors and a Zionsville resident. Before starting Centerline, my path took me from playing offensive line in the NFL and being part of a Super Bowl championship team to teaching and coaching here in our community.</p><p>Football taught me the importance of preparation, accountability, attention to detail, and doing your job well because other people are counting on you. As an offensive lineman, doing things the right way often meant taking care of details most people would never notice—but those details could be the difference between winning and losing.</p><p>Teaching reinforced something equally important: people make better decisions when they truly understand what's in front of them. Taking something that may seem complicated, helping someone understand it, and giving them the information they need to move forward with confidence is something I valued in the classroom and now bring to Centerline.</p><p>While I've stepped away from teaching, I continue to coach football at Zionsville Community High School. Coaching gives me the opportunity to continue investing in young men while staying connected to and serving the community my family and I call home.</p><p>My role is to make sure you have someone you can trust throughout the entire process—someone who will take the time to understand the problem, help you understand your options, choose the right solution and materials for your home, oversee the project, communicate with you along the way, and stand behind the finished work.</p></div></div></section>
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6"><h2 className="text-3xl font-black text-[#061a33] md:text-4xl">What You Can Expect From Centerline</h2><CardGrid cards={values} /></section>
    <section className="bg-slate-50"><div className="mx-auto max-w-5xl px-4 py-16 lg:px-6"><h2 className="text-3xl font-black text-[#061a33] md:text-4xl">Local Means More Than Having an Address Here</h2><div className="mt-5 space-y-4 leading-8 text-slate-700"><p>Centerline is based in Zionsville, and this is the community my family and I call home. We live, raise our family, and stay involved here, and Centerline was built with the intention of developing long-term relationships throughout the communities we serve.</p><p>When your name is attached to a company in the same community where you live, reputation matters. I want homeowners to know who they're hiring, know who is responsible for their project, and know that Centerline will still be here after the work is finished.</p><p>We're proud to serve Zionsville, Carmel, Westfield, Whitestown, Brownsburg, Lebanon, Fishers, Noblesville, Indianapolis, and homeowners throughout Greater Central Indiana.</p></div></div></section>
    <section className="metal-panel roof-texture text-white"><div className="mx-auto max-w-5xl px-4 py-16 lg:px-6"><h2 className="text-3xl font-black md:text-4xl">Your Home. The Right Solution. A Company Accountable for the Result.</h2><p className="mt-5 text-lg leading-8 text-slate-200">When you hire Centerline, you're hiring us to take responsibility for more than the installation itself. We'll evaluate your home, help you understand the problem or project, recommend the right solution, help you select the appropriate materials, coordinate the work, communicate throughout the process, oversee quality, and make sure the finished project meets the standards we expect for the Centerline name. That's what doing the job right means to us.</p></div></section>
    <CTA title="Start With a Conversation" text="Whether something is wrong with your home, you're considering an exterior project, or you simply want a professional opinion, we'd be glad to take a look. Tell us what's going on, and we'll help you determine the right next step." />
  </>;
}

function ContactPage() {
  return <><PageHero title="Contact Centerline" text={["Request a roofing or exterior inspection, ask a project question, or tell us what is happening with your home."]} /><section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[.75fr_1.25fr] lg:px-6"><div className="border border-slate-200 bg-slate-50 p-6"><h2 className="text-2xl font-black text-[#061a33]">Business contact</h2><p className="mt-4 text-slate-700">Email: <a className="font-bold text-[#1d66c2]" href={`mailto:${site.email}`}>{site.email}</a></p><p className="mt-2 text-slate-700">Service area: {site.address}</p></div><div><h2 className="mb-5 text-3xl font-black text-[#061a33]">Send a message</h2><LeadForm /></div></section></>;
}

function RequestInspectionPage() {
  const next = [{ title: "We'll Get in Touch", text: "We'll contact you to learn a little more about your concerns or project and schedule a time that works for you." }, { title: "We'll Evaluate Your Home", text: "We'll take the time to understand what you're seeing, evaluate the relevant areas of your home, and gather the information needed to determine the right next step." }, { title: "You'll Understand the Right Solution", text: "We'll explain what we find, answer your questions, and help you understand your options so you can choose the right solution for your home." }];
  return <><PageHero title="Request a Free Inspection" text={["Whether you've noticed a problem, your home was recently affected by a storm, or you're considering an exterior project, tell us a little about what's going on and what you'd like to accomplish. We'll get in touch, learn more about your needs, and determine the right next step."]} /><section className="mx-auto max-w-3xl px-4 py-16 lg:px-6"><LeadForm /></section><section className="bg-slate-50"><div className="mx-auto max-w-7xl px-4 py-16 lg:px-6"><h2 className="text-3xl font-black text-[#061a33] md:text-4xl">Not Sure What You Need? That's Okay.</h2><p className="mt-4 max-w-3xl leading-7 text-slate-600">You don't need to diagnose the problem before contacting us. Tell us what you've noticed or what you'd like to accomplish, and we'll take it from there.</p><CardGrid cards={next} /></div></section></>;
}

function ServiceAreasPage() {
  return <><PageHero title="Roofing & Exterior Services Across Central Indiana" text={["Centerline is based in Zionsville and serves homeowners throughout Greater Central Indiana."]} /><section className="mx-auto max-w-7xl px-4 py-16 lg:px-6"><div className="grid gap-4 md:grid-cols-3">{locationPages.map((location) => <Link key={location.slug} href={`/service-areas/${location.slug}`} className="border border-slate-200 p-5 font-black text-[#061a33] transition hover:border-[#1d66c2] hover:shadow-md">{location.city}, IN</Link>)}</div></section></>;
}
