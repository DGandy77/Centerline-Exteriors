import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="focus-ring block" aria-label="Centerline Roofing & Exteriors home">
      <Image
        src="/brand/centerline-horizontal.svg"
        alt="Centerline Roofing & Exteriors"
        width={250}
        height={69}
        priority
        className="h-12 w-[218px] object-contain sm:h-14 sm:w-[250px]"
      />
    </Link>
  );
}
