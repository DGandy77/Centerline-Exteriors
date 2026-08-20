import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
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
    <section className="metal-panel roof-texture text-white"><div className="mx-auto max-w-7xl px-4 py-16 md:py-20 lg:px-6"><h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-5xl">{location.hero}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{location.heroCopy}</p><Link href="/request-inspection" className="focus-ring mt-7 inline-flex bg-white px-5 py-3 font-black text-[#061a33]">Request a Free Inspection</Link></div></section>
    <div className="mx-auto max-w-7xl px-4 py-7 lg:px-6"><Breadcrumbs items={crumbs} /></div>
    <section className="mx-auto max-w-5xl px-4 py-12 lg:px-6"><h2 className="text-3xl font-black text-[#061a33] md:text-4xl">{location.introHeading}</h2><div className="mt-5 space-y-4 leading-8 text-slate-700">{location.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
    <section className="bg-slate-50"><div className="mx-auto max-w-7xl px-4 py-16 lg:px-6"><h2 className="text-3xl font-black text-[#061a33] md:text-4xl">Roofing & Exterior Services</h2><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{primaryServices.map((service) => <Link key={service.href} href={service.href} className="group border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#1d66c2] hover:shadow-lg"><h3 className="text-xl font-black text-[#061a33] group-hover:text-[#1d66c2]">{service.title}</h3><p className="mt-3 leading-7 text-slate-600">{service.summary}</p></Link>)}</div></div></section>
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6"><h2 className="max-w-4xl text-3xl font-black text-[#061a33] md:text-4xl">{location.considerationsHeading}</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{location.considerations.map((card) => <article key={card.title} className="border border-slate-200 p-6"><h3 className="text-xl font-black text-[#061a33]">{card.title}</h3><p className="mt-3 leading-7 text-slate-600">{card.text}</p></article>)}</div></section>
    <section className="bg-slate-50"><div className="mx-auto max-w-7xl px-4 py-12 lg:px-6"><h2 className="text-2xl font-black text-[#061a33]">Nearby Communities</h2><div className="mt-5 flex flex-wrap gap-2">{locationPages.filter((page) => page.slug !== location.slug).map((page) => <Link key={page.slug} href={`/service-areas/${page.slug}`} className="border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:border-[#1d66c2] hover:text-[#1d66c2]">{page.city}, IN</Link>)}</div></div></section>
    <CTA title={location.ctaHeading} text={location.ctaText} />
  </>;
}
