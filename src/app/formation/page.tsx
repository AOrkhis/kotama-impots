import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  GraduationCap,
  Landmark,
  LineChart,
  Presentation,
  Users,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Formation — Kotama Impôts | Formations et ateliers à Montréal",
  description:
    "Formations et ateliers Kotama Impôts : gouvernance et conseil d'administration pour OBNL, ateliers sur les marchés boursiers canadiens et américains.",
};

const gouvernanceTopics = [
  "Le rôle et les responsabilités des membres d'un conseil d'administration",
  "La gestion stratégique et la prise de décision éclairée",
  "Les meilleures pratiques en matière de transparence et d'éthique",
  "L'accompagnement pour une gouvernance efficace en contexte de diversité",
];

const bourseLevels = [
  { title: "Débutant", desc: "Les fondamentaux des marchés boursiers canadiens et américains, expliqués simplement." },
  { title: "Intermédiaire", desc: "Analyse technique et fondamentale pour affiner vos décisions d'investissement." },
  { title: "Avancé", desc: "Stratégies sophistiquées et perspectives éclairées pour investir avec confiance." },
];

export default function Formation() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Formation"
          title="Formations et ateliers"
          highlight="pour aller plus loin"
          description="Des sessions de formation spécialisées pour enrichir vos connaissances sur la gouvernance, le conseil d'administration et les assemblées générales pour les OBNL — ainsi que sur les marchés boursiers."
        />

        {/* Gouvernance */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="flex size-14 items-center justify-center rounded-2xl bg-navy-800 text-white shadow-lg shadow-navy-800/25">
                  <Landmark className="size-7" />
                </span>
                <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-navy-900">
                  Gouvernance et Conseil{" "}
                  <span className="text-brand-600">d&apos;Administration</span>
                </h2>
                <p className="mt-5 leading-relaxed text-navy-800/65">
                  <strong className="text-navy-900">Monsieur Amari</strong> a une
                  longue et vaste expérience en gestion et gouvernance. Membre de
                  l&apos;Ordre des Administrateurs Agréés du Québec, il a siégé et
                  présidé de nombreux conseils d&apos;administration — dans le secteur
                  privé comme dans le secteur communautaire.
                </p>
                <p className="mt-4 leading-relaxed text-navy-800/65">
                  M. Amari et son équipe offrent des formations en gouvernance
                  particulièrement adaptées aux{" "}
                  <strong className="text-navy-900">
                    Organismes à But Non Lucratif (OBNL)
                  </strong>{" "}
                  et à toute organisation souhaitant assurer son efficacité et sa
                  pérennité.
                </p>
              </div>

              <div className="rounded-3xl border border-navy-800/10 bg-white p-8 shadow-xl shadow-navy-900/5 sm:p-9">
                <h3 className="flex items-center gap-3 font-display text-xl font-semibold text-navy-900">
                  <Users className="size-5 text-brand-600" />
                  Sujets couverts
                </h3>
                <ul className="mt-6 space-y-4">
                  {gouvernanceTopics.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mint-100 text-mint-600">
                        <Check className="size-3" strokeWidth={3.5} />
                      </span>
                      <span className="text-[15px] font-medium leading-snug text-navy-800/80">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Marchés boursiers — dark */}
        <section className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-28">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="pointer-events-none absolute -left-32 top-1/4 size-[400px] rounded-full bg-mint-600/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 size-[360px] rounded-full bg-brand-600/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-600/30">
                <LineChart className="size-7" />
              </span>
              <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Ateliers sur les{" "}
                <span className="text-brand-400">marchés boursiers</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/65">
                Titulaire d&apos;une maîtrise en finance de marché et investisseur de
                longue date sur les marchés boursiers américains et canadiens,
                M. Amari transmet des connaissances complexes de manière
                accessible — des notions de base à l&apos;analyse technique et
                fondamentale avancée.
              </p>
              <p className="mt-4 leading-relaxed text-white/55">
                Découvrez les intricités des marchés boursiers canadiens et
                américains grâce à nos ateliers interactifs, conçus pour répondre
                aux besoins de tous les niveaux d&apos;expertise.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {bourseLevels.map((l, i) => (
                <div
                  key={l.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all hover:border-mint-400/40 hover:bg-white/[0.08]"
                >
                  <span className="font-display text-4xl font-semibold text-mint-400/70">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold">{l.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                    {l.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mini FAQ */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                Questions fréquentes
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy-900">
                Avant de vous inscrire
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: GraduationCap,
                  q: "Quels sont les avantages de nos formations ?",
                  a: "Des connaissances approfondies, des compétences pratiques et la possibilité d'appliquer des stratégies directement à votre organisation ou vos investissements personnels.",
                },
                {
                  icon: Presentation,
                  q: "Comment puis-je m'inscrire ?",
                  a: "Contactez-nous via notre formulaire de contact en ligne ou par téléphone pour discuter de la meilleure session pour vos besoins.",
                },
              ].map((f) => (
                <div
                  key={f.q}
                  className="rounded-3xl border border-navy-800/10 bg-white p-8 shadow-lg shadow-navy-900/5"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <f.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
                    {f.q}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy-800/65">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <h3 className="font-display text-3xl font-semibold tracking-tight text-navy-900">
                Prêt à faire le premier pas ?
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-navy-800/65">
                Contactez-nous dès aujourd&apos;hui pour en savoir plus sur nos
                formations et commencez à renforcer vos connaissances financières.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-800 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-navy-800/25 transition-all hover:-translate-y-0.5 hover:bg-brand-600 sm:w-auto"
              >
                Contactez-nous
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
