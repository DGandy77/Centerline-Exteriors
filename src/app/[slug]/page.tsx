import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { LeadForm } from "@/components/LeadForm";
import { FAQ, CheckList } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { locationPages, primaryServices, servicePages, site } from "@/lib/site";
import Link from "next/link";

const staticPages = {
  about: {
    title: "About Dylan Gandy and Centerline",
    description: "Meet Dylan Gandy and learn why Centerline Roofing & Exteriors was built around clear communication, local accountability, and reliable exterior work.",
  },
  gallery: {
    title: "Roofing Project Gallery",
    description: "Placeholder project gallery for Centerline Roofing & Exteriors roofing, storm damage, gutter, siding, and commercial work.",
  },
  reviews: {
    title: "Centerline Roofing Reviews",
    description: "Review page scaffold for future Centerline Roofing & Exteriors customer reviews and Google Business Profile links.",
  },
  contact: {
    title: "Contact Centerline Roofing",
    description: "Contact Centerline Roofing & Exteriors for roof inspections, repairs, replacement, storm damage, gutters, siding, and commercial roofing.",
  },
  "request-estimate": {
    title: "Request a Free Roof Inspection",
    description: "Request a free roof inspection or estimate from Centerline Roofing & Exteriors in Zionsville and Central Indiana.",
  },
  "service-areas": {
    title: "Central Indiana Roofing Service Areas",
    description: "Centerline Roofing & Exteriors serves Zionsville, Carmel, Westfield, Indianapolis, Fishers, and nearby Central Indiana communities.",
  },
} as const;

export function generateStaticParams() {
  return [
    ...servicePages.map((page) => ({ slug: page.slug })),
    ...Object.keys(staticPages).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicePages.find((page) => page.slug === slug);
  if (service) {
    return pageMetadata({ title: service.title, description: service.description, path: `/${service.slug}` });
  }
  const page = staticPages[slug as keyof typeof staticPages];
  if (page) return pageMetadata({ title: page.title, description: page.description, path: `/${slug}` });
  return {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicePages.find((page) => page.slug === slug);
  if (service) return <ServicePage service={service} />;
  if (slug === "about") return <AboutPage />;
  if (slug === "gallery") return <GalleryPage />;
  if (slug === "reviews") return <ReviewsPage />;
  if (slug === "contact") return <ContactPage />;
  if (slug === "request-estimate") return <RequestEstimatePage />;
  if (slug === "service-areas") return <ServiceAreasPage />;
  notFound();
}

function PageHero({ title, text }: { title: string; text: string }) {
  return (
    <section className="metal-panel roof-texture text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{text}</p>
      </div>
    </section>
  );
}

function ServicePage({ service }: { service: (typeof servicePages)[number] }) {
  const path = `/${service.slug}`;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: service.navTitle, href: path },
  ];
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema(crumbs.map((item) => ({ name: item.label, url: `${site.domain}${item.href === "/" ? "" : item.href}` }))),
        serviceSchema(service.navTitle, service.description, path),
        faqSchema(service.faqs),
      ]} />
      <PageHero title={service.h1} text={service.intro} />
      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
        <Breadcrumbs items={crumbs} />
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 md:grid-cols-[1fr_.8fr] lg:px-6">
        <div className="grid gap-10">
          <div>
            <h2 className="text-3xl font-black text-[#061a33]">Who this service is for</h2>
            <p className="mt-4 leading-7 text-slate-600">{service.who}</p>
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#061a33]">Common signs to watch</h2>
            <div className="mt-5"><CheckList items={service.signs} /></div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#061a33]">Centerline&apos;s process</h2>
            <div className="mt-5"><CheckList items={service.process} /></div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#061a33]">Benefits</h2>
            <div className="mt-5"><CheckList items={service.benefits} /></div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#061a33]">Service FAQs</h2>
            <div className="mt-5"><FAQ faqs={service.faqs} /></div>
          </div>
        </div>
        <aside className="h-fit border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-black text-[#061a33]">Local service area</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Serving Zionsville, Carmel, Westfield, Indianapolis, Fishers, Noblesville, Brownsburg, Whitestown, and surrounding Central Indiana communities.
          </p>
          <Link href="/request-estimate" className="mt-5 inline-flex w-full justify-center bg-[#1d66c2] px-4 py-3 text-sm font-black text-white">
            Request Free Inspection
          </Link>
          <h2 className="mt-8 text-xl font-black text-[#061a33]">Related services</h2>
          <div className="mt-3 grid gap-2">
            {service.related.map((href) => {
              const related = primaryServices.find((item) => item.href === href) ?? servicePages.find((item) => `/${item.slug}` === href);
              return (
                <Link key={href} href={href} className="border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:text-[#1d66c2]">
                  {related?.title ?? href}
                </Link>
              );
            })}
          </div>
        </aside>
      </section>
      <CTA title={`Need ${service.navTitle.toLowerCase()} in Central Indiana?`} />
    </>
  );
}

function AboutPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "About", href: "/about" }];
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: site.domain }, { name: "About", url: `${site.domain}/about` }])} />
      <PageHero title="About Centerline Roofing & Exteriors" text="Owner-led roofing and exterior work built around straight answers, clean communication, and local accountability." />
      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-6"><Breadcrumbs items={crumbs} /></section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 md:grid-cols-[.8fr_1.2fr] lg:px-6">
        <div className="metal-panel roof-texture min-h-[420px] p-8 text-white">
          <h2 className="text-4xl font-black">Dylan Gandy</h2>
          <p className="mt-4 leading-7 text-slate-200">Former Indianapolis Colts player. Zionsville resident. Husband and father of four.</p>
        </div>
        <div>
          <h2 className="text-3xl font-black text-[#061a33]">Built for the way homeowners want contractors to operate</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Dylan Gandy founded Centerline Roofing & Exteriors to serve Central Indiana homeowners and businesses with straightforward communication and reliable exterior work. His football background matters because it shaped habits that transfer directly to contracting: preparation, accountability, detail, and a team-first mindset.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            Centerline is not built around celebrity. It is built around local trust. Dylan lives in Zionsville with his wife and four kids, and the company is shaped by the responsibility that comes with working on homes in the communities where his family lives, learns, and grows.
          </p>
          <h2 className="mt-10 text-3xl font-black text-[#061a33]">Why Centerline</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {["Straight answers", "Clean work", "Clear communication", "Local accountability", "Built to protect the home"].map((value) => (
              <div key={value} className="border border-slate-200 p-5 font-black text-[#061a33]">{value}</div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

function GalleryPage() {
  const categories = ["Roofing", "Storm Damage", "Gutters", "Siding", "Commercial"];
  return (
    <>
      <PageHero title="Project Gallery" text="Placeholder gallery layout for future Centerline project photography." />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => <span key={category} className="border border-slate-200 px-3 py-2 text-sm font-bold">{category}</span>)}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <article key={index} className="overflow-hidden border border-dashed border-slate-300 bg-white">
              <div className="metal-panel roof-texture aspect-[4/3]" aria-label="Placeholder project image" />
              <div className="p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1d66c2]">Placeholder image</p>
                <h2 className="mt-2 text-xl font-black text-[#061a33]">Future project card {index + 1}</h2>
                <p className="mt-2 text-sm text-slate-600">Replace with real project location, service, materials, and photography.</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ReviewsPage() {
  return (
    <>
      <PageHero title="Reviews" text="A professional review page scaffold ready for real customer feedback and future Google Business Profile links." />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {["Placeholder review", "Future Google review", "Future customer story"].map((item) => (
            <article key={item} className="border border-dashed border-slate-300 p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1d66c2]">Not a real review</p>
              <h2 className="mt-3 text-xl font-black text-[#061a33]">{item}</h2>
              <p className="mt-3 leading-7 text-slate-600">This card intentionally avoids fake names, ratings, or claims. Replace it after real reviews are available.</p>
            </article>
          ))}
        </div>
        <div className="mt-10 border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-black text-[#061a33]">Future Google review CTA</h2>
          <p className="mt-3 text-slate-600">TODO: Add Google Business Profile review link after the profile is live.</p>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero title="Contact Centerline" text="Request a roofing or exterior inspection, ask a project question, or get connected with Dylan's team." />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[.75fr_1.25fr] lg:px-6">
        <div className="border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-black text-[#061a33]">Business contact</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p>Email: {site.email}</p>
            <p>Phone: {site.phone}</p>
            <p>Address: {site.address}</p>
            <p>Hours: {site.hours}</p>
          </div>
        </div>
        <div>
          <h2 className="mb-5 text-3xl font-black text-[#061a33]">Send a message</h2>
          <LeadForm />
        </div>
      </section>
    </>
  );
}

function RequestEstimatePage() {
  return (
    <>
      <PageHero title="Request a Free Inspection" text="Tell Centerline what you are seeing and where the property is located. The form is ready for production email or CRM wiring." />
      <section className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
        <LeadForm />
      </section>
    </>
  );
}

function ServiceAreasPage() {
  return (
    <>
      <PageHero title="Roofing Service Areas Across Central Indiana" text="Centerline Roofing & Exteriors serves Zionsville, Carmel, Westfield, Indianapolis, Fishers, and nearby communities." />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {locationPages.map((location) => (
            <Link key={location.slug} href={`/service-areas/${location.slug}`} className="border border-slate-200 p-5 font-black text-[#061a33] hover:border-[#1d66c2]">
              {location.city}, IN
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
