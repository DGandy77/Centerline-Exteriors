import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function InteriorHero({
  title,
  text,
  button,
}: {
  title: string;
  text: string[];
  button?: string;
}) {
  return (
    <section className="interior-hero text-white">
      <div className="interior-hero-grid" aria-hidden="true" />
      <div className="interior-hero-glow" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
        <div className="interior-rule" aria-hidden="true" />
        <h1 className="interior-title mt-7 max-w-5xl">{title}</h1>
        <div className="mt-7 max-w-3xl space-y-4 text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
          {text.map((item) => <p key={item}>{item}</p>)}
        </div>
        {button ? (
          <Link href="/request-inspection" className="focus-ring interior-button interior-button-light mt-9">
            {button}<ArrowRight size={19} />
          </Link>
        ) : null}
      </div>
    </section>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={`interior-heading ${className}`}>{children}</h2>;
}

export function EditorialCards({ cards }: { cards: { title: string; text: string }[] }) {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <article key={card.title} className="interior-card group">
          <span className="interior-card-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-10 text-[1.35rem] font-black leading-tight tracking-[-0.025em] text-[#061a33]">{card.title}</h3>
          <p className="mt-4 leading-7 text-slate-600">{card.text}</p>
        </article>
      ))}
    </div>
  );
}
