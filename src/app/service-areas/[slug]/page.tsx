import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { EditorialCards, InteriorHero, SectionHeading } from "@/components/InteriorPage";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { locationPages, primaryServices, site } from "@/lib/site";

export function generateStaticParams() { return locationPages.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locationPages.find((page) => page.slug === slug);
  return location ? pageMetadata({ title: location.title, description: location.description, path: `/service-areas/${slug}` }) : {};
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locationPages.find((page) => page.slug === slug);
  if (!location) notFound();
  const path = `/service-areas/${location.slug}`;
  const crumbs = [{ label: "Home", href: "/" }, { label: "Service Areas", href: "/service-areas" }, { label: `${location.city}, IN`, href: path }];
  return <>
    <JsonLd data={[breadcrumbSchema(crumbs.map((item) => ({ name: item.label, url: `${site.domain}${item.href === "/" ? "" : item.href}` }))), serviceSchema(`Roofing and exterior services in ${location.city}, Indiana`, location.description, path)]} />
    <InteriorHero title={location.hero} text={[location.heroCopy]} button="Request a Free Inspection" />
    <div className="border-b border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8"><Breadcrumbs items={crumbs} /></div></div>
    <section className="interior-section bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.82fr_1.18fr] lg:px-8"><SectionHeading>{location.introHeading}</SectionHeading><div className="interior-prose space-y-5">{location.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section>
    <section className="interior-section interior-section-tint"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading>Roofing &amp; Exterior Services</SectionHeading><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{primaryServices.map((service, index) => <Link key={service.href} href={service.href} className="service-link-card group"><span className="flex items-center justify-between text-xs font-black tracking-[.18em] text-[#1d66c2]" aria-hidden="true">{String(index + 1).padStart(2, "0")}<ArrowRight className="transition-transform group-hover:translate-x-1" size={18} /></span><h3 className="mt-10 text-2xl font-black tracking-[-0.03em] text-[#061a33] transition group-hover:text-[#1d66c2]">{service.title}</h3><p className="mt-4 leading-7 text-slate-600">{service.summary}</p></Link>)}</div></div></section>
    <section className="interior-section bg-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading className="max-w-5xl">{location.considerationsHeading}</SectionHeading><EditorialCards cards={location.considerations} /></div></section>
    <section className="border-y border-slate-200 bg-[#edf5ff]"><div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"><div className="flex items-center gap-3"><MapPin className="text-[#1d66c2]" size={25} /><h2 className="text-2xl font-black tracking-[-0.025em] text-[#061a33]">Nearby Communities</h2></div><div className="mt-6 flex flex-wrap gap-2.5">{locationPages.filter((page) => page.slug !== location.slug).map((page) => <Link key={page.slug} href={`/service-areas/${page.slug}`} className="location-chip">{page.city}, IN</Link>)}</div></div></section>
    <CTA title={location.ctaHeading} text={location.ctaText} />
  </>;
}
