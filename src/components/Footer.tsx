import Link from "next/link";
import { primaryServices, serviceAreas, site } from "@/lib/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-[#061a33] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div className="sm:col-span-2">
          <div className="inline-block bg-white p-3">
            <Logo />
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
            Zionsville-based roofing and exterior support for homeowners and businesses across Central Indiana. Placeholder NAP details should be confirmed before launch.
          </p>
          <div className="mt-5 text-sm leading-7 text-slate-300">
            <p>{site.address}</p>
            <p>{site.email}</p>
            <p>{site.phone}</p>
            <p>{site.hours}</p>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#b9c2cf]">Services</h2>
          <div className="mt-4 grid gap-2">
            {primaryServices.slice(0, 8).map((service) => (
              <Link key={service.href} href={service.href} className="text-sm text-slate-200 hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#b9c2cf]">Service Areas</h2>
          <div className="mt-4 grid gap-2">
            {serviceAreas.map((area) => (
              <Link key={area} href={`/service-areas/${area.toLowerCase().replaceAll(" ", "-")}-in`} className="text-sm text-slate-200 hover:text-white">
                {area}, IN
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Centerline Roofing & Exteriors. Built for Vercel handoff. Real license, warranty, and certification details must be verified before publishing.
      </div>
    </footer>
  );
}
