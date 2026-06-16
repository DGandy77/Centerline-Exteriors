"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { hasPublicPhone, site } from "@/lib/site";

const groups = [
  {
    label: "Roofing",
    links: [
      ["Roof Inspections", "/roof-inspections"],
      ["Roof Replacement", "/roof-replacement"],
      ["Roof Repair", "/roof-repair"],
      ["Storm Damage", "/storm-damage"],
    ],
  },
  {
    label: "Exteriors",
    links: [
      ["Gutters", "/gutters"],
      ["Siding", "/siding"],
      ["Interior Restoration", "/interior-restoration"],
    ],
  },
  { label: "Commercial", links: [["Commercial Roofing", "/commercial-roofing"]] },
];

const simpleLinks = [
  ["Insurance Claims", "/insurance-claims"],
  ["Gallery", "/gallery"],
  ["Reviews", "/reviews"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/94 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
          <Logo />
          <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-700 lg:flex">
            {groups.map((group) => (
              <div key={group.label} className="group relative">
                <button className="focus-ring py-3 text-slate-800">{group.label}</button>
                <div className="invisible absolute left-0 top-full w-64 translate-y-2 border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {group.links.map(([label, href]) => (
                    <Link key={href} href={href} className="focus-ring block px-3 py-2 text-slate-700 hover:bg-slate-50 hover:text-[#1d66c2]">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            {simpleLinks.map(([label, href]) => (
              <Link key={href} href={href} className="focus-ring py-3 hover:text-[#1d66c2]">
                {label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            {hasPublicPhone ? (
              <Link href={site.phoneHref} className="focus-ring inline-flex h-11 items-center gap-2 border border-slate-300 px-4 text-sm font-bold text-[#061a33]">
                <Phone size={16} />
                Call
              </Link>
            ) : null}
            <Link href="/request-estimate" className="focus-ring inline-flex h-11 items-center bg-[#1d66c2] px-5 text-sm font-black text-white shadow-sm hover:bg-[#1557aa]">
              Request Free Inspection
            </Link>
          </div>
          <button onClick={() => setOpen(true)} className="focus-ring grid h-11 w-11 place-items-center border border-slate-300 lg:hidden" aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </header>
      {open ? (
        <div className="fixed inset-0 z-50 bg-[#061a33]/40 lg:hidden">
          <div className="ml-auto flex h-full w-[88%] max-w-sm flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <Logo />
              <button onClick={() => setOpen(false)} className="focus-ring grid h-10 w-10 place-items-center border border-slate-300" aria-label="Close menu">
                <X />
              </button>
            </div>
            <nav className="overflow-y-auto px-5 py-5">
              {groups.map((group) => (
                <div key={group.label} className="mb-5">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#1d66c2]">{group.label}</p>
                  <div className="grid gap-1">
                    {group.links.map(([label, href]) => (
                      <Link key={href} href={href} onClick={() => setOpen(false)} className="focus-ring py-3 text-lg font-bold text-slate-900">
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="grid gap-1 border-t border-slate-200 pt-4">
                {simpleLinks.map(([label, href]) => (
                  <Link key={href} href={href} onClick={() => setOpen(false)} className="focus-ring py-3 text-lg font-bold text-slate-900">
                    {label}
                  </Link>
                ))}
              </div>
            </nav>
            <div className="mt-auto grid gap-2 border-t border-slate-200 p-4">
              <Link href="/request-estimate" onClick={() => setOpen(false)} className="focus-ring bg-[#1d66c2] px-5 py-3 text-center font-black text-white">
                Request Free Inspection
              </Link>
              {hasPublicPhone ? (
                <Link href={site.phoneHref} className="focus-ring border border-slate-300 px-5 py-3 text-center font-black text-[#061a33]">
                  Call Centerline
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
      {hasPublicPhone ? (
        <Link href={site.phoneHref} className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 bg-[#061a33] px-4 py-3 text-sm font-black text-white shadow-xl lg:hidden">
          <Phone size={16} />
          Tap to Call
        </Link>
      ) : null}
    </>
  );
}
