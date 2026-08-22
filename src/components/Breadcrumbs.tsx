import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm font-semibold text-slate-500">
      <ol className="flex flex-wrap items-center gap-2.5">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span className="text-slate-300" aria-hidden="true">/</span> : null}
            {index === items.length - 1 ? (
              <span aria-current="page" className="text-[#061a33]">{item.label}</span>
            ) : (
              <Link href={item.href} className="focus-ring transition hover:text-[#1d66c2]">{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
