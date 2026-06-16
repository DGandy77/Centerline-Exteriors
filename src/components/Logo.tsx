import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="focus-ring block" aria-label="Centerline Roofing & Exteriors home">
      <Image
        src="/brand/centerline-icon.svg"
        alt="Centerline Roofing & Exteriors"
        width={250}
        height={256}
        priority
        className="h-14 w-14 object-contain sm:h-16 sm:w-16"
      />
    </Link>
  );
}
