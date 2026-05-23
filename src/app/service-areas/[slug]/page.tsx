import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { locationPages, primaryServices, site } from "@/lib/site";

export function generateStaticParams() {
  return locationPages.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locationPages.find((page) => page.slug === slug);
  if (!location) return {};
  return pageMetadata({
    title: location.title,
    description: `Centerline Roofing & Exteriors provides roof inspections, roof repair, replacement, storm damage, gutters, and siding in ${location.city}, Indiana.`,
    path: `/service-areas/${location.slug}`,
  });
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locationPages.find((page) => page.slug === slug);
  if (!location) notFound();
  const faqs = [
    {
      question: `Does Centerline serve ${location.city}, Indiana?`,
      answer: `Yes. Centerline Roofing & Exteriors serves ${location.city} and nearby Central Indiana communities from its Zionsville-area base.`,
    },
    {
      question: `What roofing services are available in ${location.city}?`,
      answer: "Homeowners can request roof inspections, roof repair, roof replacement, storm damage support, gutters, siding, and insurance-aware documentation.",
    },
    {
      question: "Can I request a storm damage inspection?",
      answer: "Yes. Centerline can inspect visible roof and exterior concerns after hail, wind, or heavy storms and explain practical next steps.",
    },
  ];
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas" },
    { label: `${location.city}, IN`, href: `/service-areas/${location.slug}` },
  ];
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema(crumbs.map((item) => ({ name: item.label, url: `${site.domain}${item.href === "/" ? "" : item.href}` }))),
        serviceSchema(`Roofing contractor in ${location.city}, IN`, `Roofing and exterior services in ${location.city}, Indiana.`, `/service-areas/${location.slug}`),
        faqSchema(faqs),
      ]} />
      <section className="metal-panel roof-texture text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-5xl">
            Roofing Contractor in {location.city}, Indiana
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Centerline Roofing & Exteriors helps {location.city} homeowners and businesses with roof inspections, repairs, replacements, storm damage support, gutters, siding, and exterior restoration.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-6"><Breadcrumbs items={crumbs} /></section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 md:grid-cols-[1fr_.8fr] lg:px-6">
        <div>
          <h2 className="text-3xl font-black text-[#061a33]">Roofing and exterior services in {location.city}</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Whether you are dealing with an older roof, a leak after heavy rain, hail or wind concerns, or a larger exterior improvement, Centerline brings owner-led accountability and clear communication to the process.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {primaryServices.map((service) => (
              <Link key={service.href} href={service.href} className="border border-slate-200 p-5 hover:border-[#1d66c2]">
                <h3 className="font-black text-[#061a33]">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.summary}</p>
              </Link>
            ))}
          </div>
          <h2 className="mt-12 text-3xl font-black text-[#061a33]">{location.city} roofing FAQs</h2>
          <div className="mt-5"><FAQ faqs={faqs} /></div>
        </div>
        <aside className="h-fit border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-black text-[#061a33]">Nearby communities</h2>
          <div className="mt-4 grid gap-2">
            {locationPages.filter((page) => page.slug !== location.slug).map((page) => (
              <Link key={page.slug} href={`/service-areas/${page.slug}`} className="border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:text-[#1d66c2]">
                {page.city}, IN
              </Link>
            ))}
          </div>
          <Link href="/request-estimate" className="mt-6 inline-flex w-full justify-center bg-[#1d66c2] px-4 py-3 text-sm font-black text-white">
            Request Free Inspection
          </Link>
        </aside>
      </section>
      <CTA title={`Need roofing help in ${location.city}?`} />
    </>
  );
}
