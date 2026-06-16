import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="focus-ring flex items-center gap-3" aria-label="Centerline Roofing & Exteriors home">
      <Image
        src="/brand/centerline-icon.svg"
        alt=""
        width={250}
        height={256}
        priority
        className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
      />
      <span className="grid leading-none text-[#061a33]">
        <span className="text-base font-black uppercase tracking-normal sm:text-xl">Centerline</span>
        <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#1d66c2] sm:text-xs">Roofing &amp; Exteriors</span>
      </span>
    </Link>
  );
}
