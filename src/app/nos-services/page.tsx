import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Building2,
  Check,
  FileCheck2,
  Quote,
  Receipt,
  Rocket,
  Scale,
  Wallet,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Nos Services — Kotama Impôts | Services comptables et fiscaux à Montréal",
  description:
    "Services complets de comptabilité et fiscalité à Montréal : déclarations de revenus, tenue de livres, rapports TPS/TVQ, paie, conseils fiscaux et incorporation.",
};

const expertises = [
  { icon: FileCheck2, label: "Déclaration d'impôts particuliers et entreprises" },
  { icon: BookOpenCheck, label: "Tenue de livres (mensuelle, trimestrielle ou annuelle)" },
  { icon: Building2, label: "Comptabilité d'entreprise et états financiers" },
  { icon: Scale, label: "Services fiscaux et conseils en optimisation (litiges fiscaux)" },
  { icon: Wallet, label: "Paie et déductions à la source" },
  { icon: Rocket, label: "Support à l'incorporation et démarrage d'entreprise" },
];

const tenueDeLivres = [
  "L'enregistrement des transactions",
  "La gestion des comptes",
  "La double écriture",
  "Le rapprochement bancaire",
  "La gestion des créances et dettes",
  "La gestion des inventaires",
  "La production des rapports financiers",
  "La préparation des déclarations d'impôts",
];

function CheckList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
              light ? "bg-mint-500/25 text-mint-400" : "bg-mint-100 text-mint-600"
            }`}
          >
            <Check className="size-3" strokeWidth={3.5} />
          </span>
          <span className={`text-[15px] font-medium ${light ? "text-white/85" : "text-navy-800/80"}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function NosServices() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Nos Services"
          title="Des services comptables"
          highlight="adaptés à vos besoins"
          description="Services comptables et fiscaux à Montréal — pour particuliers, travailleurs autonomes et chefs d'entreprise. Un suivi personnalisé pour une gestion financière claire et sans stress."
        />

        {/* Expertises grid */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                Nos expertises
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy-900">
                Tout votre cycle comptable,{" "}
                <span className="text-brand-600">sous un même toit</span>
              </h2>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {expertises.map((e) => (
                <div
                  key={e.label}
                  className="group flex items-center gap-4 rounded-2xl border border-navy-800/10 bg-white p-5 transition-all hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/10"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <e.icon className="size-6" />
                  </span>
                  <p className="text-sm font-bold leading-snug text-navy-900">{e.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Déclarations de revenus */}
        <section className="border-t border-navy-800/10 bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <span className="flex size-14 items-center justify-center rounded-2xl bg-navy-800 text-white shadow-lg shadow-navy-800/25">
                  <FileCheck2 className="size-7" />
                </span>
                <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-navy-900">
                  Déclarations de revenus
                </h2>
                <p className="mt-5 leading-relaxed text-navy-800/65">
                  Nos experts en fiscalité préparent et soumettent vos déclarations
                  de revenus en veillant à ce que vous bénéficiez de toutes les
                  déductions et crédits auxquels vous avez droit — en tenant compte
                  des spécificités de votre situation financière.
                </p>
                <Link
                  href="/contact"
                  className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-600 transition-colors hover:text-navy-800"
                >
                  Confiez-nous vos déclarations
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="rounded-3xl border border-navy-800/10 bg-paper p-8 sm:p-10">
                <p className="leading-relaxed text-navy-800/70">
                  Nous optimisons vos déductions et crédits, garantissant une
                  soumission précise et conforme aux lois fiscales. Nos services
                  vous permettent de{" "}
                  <strong className="text-navy-900">
                    maximiser vos remboursements
                  </strong>{" "}
                  et de réduire le risque d&apos;erreurs ou de pénalités.
                </p>
                <div className="mt-8">
                  <CheckList
                    items={[
                      "Optimisation des déductions",
                      "Soumission rigoureuse",
                      "Conformité fiscale",
                      "Réduction du risque de pénalités",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tenue de livres — dark */}
        <section className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-28">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="pointer-events-none absolute -right-32 top-1/4 size-[380px] rounded-full bg-brand-600/20 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-mint-400">
                Comptabilité d&apos;entreprise
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Tenue de livres
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/65">
                La tenue de livres est essentielle pour fournir une base solide à
                la gestion financière de l&apos;entreprise — suivre les performances,
                planifier les budgets et prendre des décisions stratégiques.
              </p>
              <p className="mt-4 leading-relaxed text-white/55">
                Chez Kotama Impôts et Fiscalité, nous comprenons que la gestion
                financière est au cœur de la réussite de votre entreprise. Notre
                service complet et adapté à vos besoins inclut :
              </p>
            </div>
            <div className="mt-12">
              <CheckList items={tenueDeLivres} light />
            </div>
            <p className="mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-[15px] leading-relaxed text-white/70">
              Notre prestation de services permet à votre entreprise de se
              concentrer sur ses activités principales en toute tranquillité
              d&apos;esprit.
            </p>
          </div>
        </section>

        {/* TPS/TVQ + Conseils fiscaux */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:px-8">
            <div className="rounded-3xl border border-navy-800/10 bg-white p-8 shadow-lg shadow-navy-900/5 sm:p-10">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-mint-100 text-mint-600">
                <Receipt className="size-7" />
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-navy-900">
                Rapports TPS/TVQ
              </h2>
              <p className="mt-4 leading-relaxed text-navy-800/65">
                Préparer des rapports de TPS (Taxe sur les Produits et Services)
                et TVQ (Taxe de Vente du Québec) peut être complexe, mais est
                crucial pour la conformité fiscale. Kotama Impôts collecte et
                traite vos revenus et dépenses, et prépare vos rapports de TPS/TVQ —
                vous garantissant précision et conformité.
              </p>
              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-navy-800"
              >
                Contactez-nous
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="rounded-3xl border border-navy-800/10 bg-white p-8 shadow-lg shadow-navy-900/5 sm:p-10">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                <Scale className="size-7" />
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-navy-900">
                Conseils fiscaux
              </h2>
              <p className="mt-4 leading-relaxed text-navy-800/65">
                Que vous soyez un particulier ou une entreprise, nos conseillers
                vous aident à planifier et optimiser votre situation fiscale, à
                comprendre les implications de vos décisions financières et à
                minimiser votre charge fiscale en toute conformité.
              </p>
              <div className="mt-6">
                <CheckList
                  items={[
                    "Stratégies de minimisation",
                    "Conseils personnalisés",
                    "Expertise fiscale",
                    "Litiges fiscaux",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="pb-24">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <figure className="relative overflow-hidden rounded-3xl bg-navy-800 p-8 text-center text-white shadow-2xl shadow-navy-900/20 sm:p-12">
              <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
              <Quote className="relative mx-auto size-10 text-mint-400" />
              <blockquote className="relative mt-6 font-display text-2xl leading-relaxed">
                « Grâce à Kotama Impôts, j&apos;ai pu optimiser mes déclarations de
                revenus et obtenir un remboursement significatif. Leur service est
                rapide, fiable et personnalisé. »
              </blockquote>
              <figcaption className="relative mt-7 text-sm font-bold text-white/80">
                Martin P.
                <span className="block text-xs font-normal text-white/50">
                  Client de Kotama Impôts
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
