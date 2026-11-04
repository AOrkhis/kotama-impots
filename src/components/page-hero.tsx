import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-14 pt-32 text-white sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-48">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -right-32 -top-24 size-[420px] rounded-full bg-brand-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-[320px] rounded-full bg-mint-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <nav className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/50">
          <Link href="/" className="transition-colors hover:text-mint-400">
            Accueil
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-mint-400">{eyebrow}</span>
        </nav>

        <h1 className="mt-6 max-w-3xl font-display text-[2.1rem] font-semibold leading-[1.15] tracking-tight sm:text-5xl sm:leading-[1.1] lg:text-6xl">
          {title}{" "}
          {highlight && <span className="text-brand-400">{highlight}</span>}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:mt-6 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
