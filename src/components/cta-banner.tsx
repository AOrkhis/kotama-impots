import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CtaBanner({
  title = "Simplifiez vos finances dès aujourd'hui",
  text = "Rejoignez les particuliers et entreprises qui font confiance à Kotama Impôts dans la grande région de Montréal.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-5 pb-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 px-8 py-16 text-center text-white shadow-2xl shadow-navy-900/30 sm:px-16">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-mint-500/20 blur-3xl" />
        <div className="relative">
          <Image
            src="/logo.png"
            alt="Kotama Impôts"
            width={130}
            height={44}
            className="mx-auto h-9 w-auto rounded-lg bg-white p-1"
          />
          <h2 className="mx-auto mt-8 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/65">{text}</p>
          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-mint-500 px-8 py-4 text-sm font-bold text-navy-950 shadow-xl shadow-mint-500/25 transition-all hover:-translate-y-0.5 hover:bg-mint-400"
          >
            Obtenez une consultation gratuite
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
