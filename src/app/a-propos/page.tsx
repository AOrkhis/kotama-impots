import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  HeartHandshake,
  Landmark,
  Lock,
  Target,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "À propos — Kotama Impôts | Cabinet comptable à Montréal",
  description:
    "Kotama Impôts : un cabinet comptable professionnel à Montréal fondé sur la rigueur, la transparence et la proximité. Découvrez notre équipe et notre mission.",
};

const values = [
  {
    icon: Award,
    title: "Expertise reconnue",
    desc: "Une expertise reconnue en fiscalité québécoise et canadienne, au service de votre conformité et de vos économies.",
  },
  {
    icon: HeartHandshake,
    title: "Approche humaine",
    desc: "Une approche humaine et personnalisée — chaque client est unique, chaque dossier mérite attention.",
  },
  {
    icon: Lock,
    title: "Technologies modernes",
    desc: "Des technologies modernes et sécurisées pour protéger vos données et simplifier vos démarches.",
  },
];

const credentials = [
  "MBA — Maîtrise en administration des affaires",
  "Administrateur Agréé (Adm.A.)",
  "Professionnel Accrédité auprès de l'A.R.C. et de Revenu Québec",
  "Commissaire à l'assermentation",
];

export default function APropos() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="À propos"
          title="Cabinet comptable"
          highlight="professionnel à Montréal"
          description="Une équipe comptable expérimentée et dévouée, au service des particuliers, travailleurs autonomes et entreprises du Grand Montréal."
        />

        {/* Mission */}
        <section className="py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                  Notre mission
                </span>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
                  Rigueur, transparence{" "}
                  <span className="text-brand-600">et proximité</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-navy-800/65">
                  Fondé sur la rigueur, la transparence et la proximité,{" "}
                  <strong className="text-navy-900">Kotama Impôts</strong> accompagne
                  depuis plusieurs années particuliers, travailleurs autonomes et
                  entreprises du Grand Montréal.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-navy-800/65">
                  Notre mission est simple :{" "}
                  <em className="text-navy-900">
                    simplifier la comptabilité pour vous permettre de vous
                    concentrer sur ce que vous faites de mieux.
                  </em>
                </p>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-100 via-transparent to-mint-100" />
                <div className="relative grid gap-4">
                  {values.map((v) => (
                    <div
                      key={v.title}
                      className="flex gap-5 rounded-3xl border border-navy-800/10 bg-white p-6 shadow-lg shadow-navy-900/5 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                    >
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-navy-800 text-white">
                        <v.icon className="size-6" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-navy-900">
                          {v.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-navy-800/65">
                          {v.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* President */}
        <section className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-32">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="pointer-events-none absolute -left-32 top-0 size-[400px] rounded-full bg-brand-600/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              {/* portrait card */}
              <div className="relative mx-auto w-full max-w-sm">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-navy-800 to-navy-900 p-8 text-center shadow-2xl sm:p-10">
                  <div className="mx-auto flex size-28 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 font-display text-4xl font-semibold text-white shadow-xl shadow-brand-600/30">
                    AA
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">
                    Abdelkader Amari
                  </h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-mint-400">
                    Président
                  </p>
                  <div className="mx-auto mt-6 h-px w-16 bg-white/20" />
                  <p className="mt-6 text-sm leading-relaxed text-white/60">
                    Une longue et vaste expérience en gestion, gouvernance et
                    fiscalité, au service de la réussite de nos clients.
                  </p>
                </div>
                <div className="absolute -bottom-4 left-1/2 h-8 w-4/5 -translate-x-1/2 rounded-full bg-navy-900/40 blur-xl" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-mint-400">
                  Notre président
                </span>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  Un leader <span className="text-brand-400">accrédité</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/65">
                  Monsieur Amari cumule les titres et accréditations qui font de
                  Kotama Impôts un cabinet digne de confiance :
                </p>
                <ul className="mt-8 space-y-4">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-mint-500/20 text-mint-400">
                        <BadgeCheck className="size-4" />
                      </span>
                      <span className="text-[15px] font-medium text-white/85">{c}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <Landmark className="mt-0.5 size-6 shrink-0 text-brand-400" />
                  <p className="text-sm leading-relaxed text-white/65">
                    Membre de l&apos;Ordre des Administrateurs Agréés du Québec, il a
                    siégé et présidé de nombreux conseils d&apos;administration dans
                    les secteurs privé et communautaire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mini CTA */}
        <section className="py-20 text-center lg:py-32">
          <div className="mx-auto max-w-3xl px-5">
            <Target className="mx-auto size-12 text-brand-600" />
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
              Des questions sur nos services ?
            </h2>
            <p className="mt-5 text-lg text-navy-800/65">
              Contactez-nous dès aujourd&apos;hui — nous serons heureux de vous
              accompagner dans vos démarches comptables et fiscales.
            </p>
            <Link
              href="/contact"
              className="group mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-800 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-navy-800/25 transition-all hover:-translate-y-0.5 hover:bg-brand-600 sm:w-auto"
            >
              Prenez rendez-vous
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
