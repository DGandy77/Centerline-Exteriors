import Link from "next/link";
import { hasPublicHours, hasPublicPhone, primaryServices, serviceAreas, site } from "@/lib/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-[#061a33] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 lg:px-6">
        <div>
          <div className="inline-block bg-white p-3">
            <Logo />
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
            Zionsville-based roofing and exterior contractor serving homeowners throughout Central Indiana.
          </p>
          <div className="mt-5 text-sm leading-7 text-slate-300">
            <p>{site.address}</p>
            <p>{site.email}</p>
            {hasPublicPhone ? <p>{site.phone}</p> : null}
            {hasPublicHours ? <p>{site.hours}</p> : null}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#b9c2cf]">Services</h2>
          <div className="mt-4 grid gap-2">
            {primaryServices.map((service) => (
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
          <p className="mt-5 text-sm font-semibold text-slate-300">Serving Greater Central Indiana</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
        © 2026 Centerline Roofing & Exteriors.
      </div>
    </footer>
  );
}
