import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Home } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Les avantages fiscaux du CELIAPP — Blog Kotama Impôts",
  description:
    "Découvrez les avantages fiscaux du CELIAPP : exonération d'impôt sur les gains, retraits libres d'impôt et flexibilité pour l'achat d'une première propriété.",
};

const points = [
  {
    title: "Exonération d'impôt sur les gains",
    desc: "Les gains réalisés dans un CELIAPP, qu'ils proviennent d'intérêts, de dividendes ou de plus-values, sont exempts d'impôt, tant au moment de l'accumulation qu'au moment du retrait.",
  },
  {
    title: "Déductions fiscales",
    desc: "Les cotisations à un CELIAPP ne sont pas déductibles d'impôt sur le revenu, mais cela est compensé par les avantages au niveau des retraits.",
  },
  {
    title: "Retraits libres d'impôt",
    desc: "Les fonds retirés d'un CELIAPP pour l'achat d'une première propriété sont exempts d'impôt — vous ne paierez pas d'impôts sur les retraits effectués pour financer votre achat.",
  },
  {
    title: "Contribution limitée mais flexible",
    desc: "Les cotisations au CELIAPP sont plafonnées, mais les fonds peuvent être retirés à tout moment, ce qui offre une certaine flexibilité en cas de besoin.",
  },
  {
    title: "Possibilité de remboursement",
    desc: "Si vous ne parvenez pas à utiliser les fonds pour acheter une première propriété, vous pouvez transférer l'argent dans un autre produit d'épargne enregistré, comme un REER ou un CELI, et continuer de bénéficier d'avantages fiscaux.",
  },
];

export default function ArticleCeliapp() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Article hero */}
        <section className="relative overflow-hidden bg-navy-950 pb-14 pt-32 text-white sm:pb-16 sm:pt-40 lg:pb-20 lg:pt-48">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="pointer-events-none absolute -right-32 -top-24 size-[400px] rounded-full bg-brand-600/25 blur-3xl" />
          <div className="relative mx-auto max-w-3xl px-5">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/50 transition-colors hover:text-mint-400"
            >
              <ArrowLeft className="size-3.5" />
              Retour au blog
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-mint-500/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-mint-400">
                Fiscalité
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-white/50">
                <CalendarDays className="size-3.5" />
                21 août 2024
              </span>
            </div>
            <h1 className="mt-5 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight sm:text-5xl">
              Les avantages fiscaux du{" "}
              <span className="text-brand-400">CELIAPP</span>
            </h1>
          </div>
        </section>

        {/* Article body */}
        <article className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-5">
            <div className="flex gap-5 rounded-3xl border border-brand-500/25 bg-brand-50 p-6 sm:p-8">
              <Home className="size-8 shrink-0 text-brand-600" />
              <p className="text-[15px] leading-relaxed text-navy-800/75">
                Le <strong className="text-navy-900">CELIAPP</strong> (Compte
                d&apos;épargne libre d&apos;impôt pour l&apos;achat d&apos;une première
                propriété) est un produit d&apos;épargne mis en place au Canada pour
                aider les futurs propriétaires à économiser en vue de l&apos;achat de
                leur première maison. Voici quelques avantages fiscaux associés au
                CELIAPP :
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {points.map((p, i) => (
                <div
                  key={p.title}
                  className="flex gap-4 rounded-3xl border border-navy-800/10 bg-white p-6 shadow-lg shadow-navy-900/5 sm:gap-6 sm:p-8"
                >
                  <span className="font-display text-3xl font-semibold text-brand-500/60 sm:text-4xl">
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-navy-900">
                      {p.title}
                    </h2>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-navy-800/65">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-3xl bg-navy-800 p-7 text-white sm:p-10">
              <h2 className="font-display text-2xl font-semibold">En résumé</h2>
              <p className="mt-3 leading-relaxed text-white/70">
                Le CELIAPP permet de maximiser les économies pour un achat
                immobilier tout en bénéficiant d&apos;avantages fiscaux intéressants,
                notamment en matière d&apos;exonération d&apos;impôt sur les gains et
                les retraits.
              </p>
            </div>

            {/* Prev / Next */}
            <nav className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-navy-800/10 pt-8">
              <Link
                href="/blog/impact-de-l-intelligence-artificielle-sur-les-marches-boursiers"
                className="group flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-navy-800"
              >
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                Article précédent
              </Link>
              <Link
                href="/blog"
                className="group flex items-center gap-2 text-sm font-bold text-navy-800 hover:text-brand-600"
              >
                Tous les articles
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </nav>
          </div>
        </article>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
