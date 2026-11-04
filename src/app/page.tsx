import Link from "next/link";
import {
  ArrowRight,
  FileCheck2,
  BookOpenCheck,
  Calculator,
  Building2,
  Rocket,
  Scale,
  Check,
  MapPin,
  Mail,
  Phone,
  Quote,
  Sparkles,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Faq } from "@/components/faq";
import { ContactForm } from "@/components/contact-form";
import { CtaBanner } from "@/components/cta-banner";

const marqueeItems = [
  "Déclaration d'impôts",
  "Tenue de livres",
  "Rapports TPS/TVQ",
  "Planification fiscale",
  "Incorporation",
  "États financiers",
  "Conseils fiscaux",
];

const services = [
  {
    icon: FileCheck2,
    title: "Déclaration d'impôts",
    desc: "Préparation et soumission de déclarations optimisées pour particuliers et entreprises, afin de maximiser vos déductions et crédits.",
  },
  {
    icon: BookOpenCheck,
    title: "Tenue de livres",
    desc: "Tenue de livres et gestion comptable rigoureuse : bilan, état des résultats et livres toujours à jour.",
  },
  {
    icon: Calculator,
    title: "Planification fiscale",
    desc: "Planification et optimisation fiscale personnalisées, incluant l'accompagnement en cas de litiges fiscaux.",
  },
  {
    icon: Building2,
    title: "Comptabilité d'entreprise",
    desc: "Rapports financiers complets : rapports TPS/TVQ, bilan, états des résultats et plus encore.",
  },
  {
    icon: Rocket,
    title: "Incorporation",
    desc: "Accompagnement complet pour l'incorporation et le démarrage de votre entreprise, du premier pas au premier bilan.",
  },
];

const features = [
  {
    icon: FileCheck2,
    title: "Déclarations de revenus",
    desc: "Préparation et soumission des déclarations de revenus optimisées pour maximiser vos déductions et crédits.",
  },
  {
    icon: BookOpenCheck,
    title: "Tenue de livres",
    desc: "Tenue de livres pour entreprises, incluant le bilan et l'état des résultats, et déclaration de revenus.",
  },
  {
    icon: Scale,
    title: "Conseils fiscaux",
    desc: "Conseils fiscaux personnalisés pour optimiser votre situation fiscale et minimiser la charge de l'impôt à payer.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-paper to-paper">
          <div className="dot-grid-dark pointer-events-none absolute inset-0" />
          {/* soft brand blobs */}
          <div className="pointer-events-none absolute -top-32 right-[-10%] size-[480px] rounded-full bg-brand-300/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 left-[-8%] size-[420px] rounded-full bg-mint-300/30 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-32 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:pb-28 lg:pt-44">
            <div className="reveal text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 shadow-sm backdrop-blur">
                <Sparkles className="size-3.5" />
                Comptable à Montréal
              </span>

              <h1 className="mt-6 font-display text-[2.2rem] font-semibold leading-[1.12] tracking-tight text-navy-900 sm:text-6xl sm:leading-[1.08] lg:text-[4.2rem]">
                L&apos;expertise fiscale,{" "}
                <span className="relative whitespace-nowrap text-brand-600">
                  à bon prix
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-mint-500"
                    viewBox="0 0 300 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9C60 3 180 2 298 7"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-navy-800/70 sm:mt-7 sm:text-lg lg:mx-0">
                Bienvenue chez <strong className="text-navy-900">Kotama Impôts</strong>,
                votre partenaire de confiance en comptabilité et fiscalité dans la
                grande région de Montréal. Tenue de livres, déclaration d&apos;impôts
                et comptabilité d&apos;entreprise — <em>personnalisés pour vous</em>.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:mt-9 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
                <Link
                  href="/contact"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-navy-800 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-navy-800/30 transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-brand-600/40 sm:w-auto"
                >
                  Consultation gratuite
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/nos-services"
                  className="w-full rounded-full border-2 border-navy-800/15 bg-white/70 px-7 py-3.5 text-center text-sm font-bold text-navy-800 backdrop-blur transition-all hover:border-brand-500 hover:text-brand-600 sm:w-auto"
                >
                  Découvrir nos services
                </Link>
              </div>

              <ul className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-semibold text-navy-800/80 lg:justify-start">
                {["Particuliers", "Travailleurs autonomes", "Propriétaires de PME"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="flex size-5 items-center justify-center rounded-full bg-mint-400/30 text-mint-600">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {t}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Hero visual — stylized report card */}
            <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: "0.15s" }}>
              <div className="relative">
                {/* main card */}
                <div className="relative z-10 overflow-hidden rounded-[2rem] border border-navy-800/10 bg-white shadow-2xl shadow-navy-900/15">
                  <div className="flex h-2.5">
                    <div className="w-1/3 bg-mint-400" />
                    <div className="w-1/3 bg-brand-400" />
                    <div className="w-1/3 bg-navy-800" />
                  </div>
                  <div className="p-7 sm:p-9">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-navy-800/50">
                          Rapport fiscal 2025
                        </p>
                        <p className="mt-1 font-display text-3xl font-semibold text-navy-900">
                          Maximisé
                        </p>
                      </div>
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-mint-100 text-mint-600">
                        <TrendingUp className="size-6" />
                      </span>
                    </div>

                    {/* fake bars chart */}
                    <div className="mt-8 flex h-32 items-end gap-3">
                      {[40, 55, 45, 70, 62, 85, 100].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-lg bg-gradient-to-t from-brand-100 to-brand-400/80" style={{ height: `${h}%`, opacity: 0.45 + i * 0.09 }} />
                      ))}
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-brand-50 p-4">
                        <p className="text-xs font-semibold text-navy-800/60">TPS/TVQ</p>
                        <p className="mt-1 flex items-center gap-1.5 text-sm font-bold text-mint-600">
                          <Check className="size-4" strokeWidth={3} /> À jour
                        </p>
                      </div>
                      <div className="rounded-xl bg-mint-100/60 p-4">
                        <p className="text-xs font-semibold text-navy-800/60">Déclarations</p>
                        <p className="mt-1 flex items-center gap-1.5 text-sm font-bold text-mint-600">
                          <Check className="size-4" strokeWidth={3} /> Soumises
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* floating chips */}
                <div className="animate-float absolute left-2 top-8 z-20 flex items-center gap-2.5 rounded-2xl border border-navy-800/10 bg-white/95 px-3 py-2.5 shadow-xl shadow-navy-900/10 backdrop-blur sm:-left-8 sm:top-10 sm:px-4 sm:py-3">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-brand-500/15 text-brand-600">
                    <ShieldCheck className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-navy-900">Conformité assurée</p>
                    <p className="text-[11px] text-navy-800/60">Réglementations fiscales</p>
                  </div>
                </div>

                <div className="animate-float-slow absolute bottom-10 right-2 z-20 flex items-center gap-2.5 rounded-2xl border border-navy-800/10 bg-navy-800 px-3 py-2.5 shadow-xl shadow-navy-900/25 sm:-right-6 sm:bottom-12 sm:px-4 sm:py-3">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-mint-400/20 text-mint-400">
                    <Calculator className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white">Remboursement</p>
                    <p className="text-[11px] text-white/60">optimisé au maximum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ MARQUEE ============ */}
        <div className="overflow-hidden border-y border-navy-800/10 bg-white py-4">
          <div className="animate-marquee flex w-max items-center gap-8">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap text-sm font-bold uppercase tracking-widest text-navy-800/50">
                {item}
                <span className="size-1.5 rounded-full bg-mint-500" />
              </span>
            ))}
          </div>
        </div>

        {/* ============ SERVICES ============ */}
        <section id="services" className="relative py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                Nos services
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
                Une comptabilité complète,{" "}
                <span className="text-brand-600">sans souci</span>
              </h2>
              <p className="mt-5 text-lg text-navy-800/65">
                Particulier, travailleur autonome ou propriétaire de PME — nous
                simplifions vos finances, maximisons vos remboursements et assurons
                la conformité de vos déclarations.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group relative overflow-hidden rounded-3xl border border-navy-800/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/40 hover:shadow-2xl hover:shadow-brand-500/10"
                >
                  <div className="absolute -right-10 -top-10 size-32 rounded-full bg-brand-50 transition-transform duration-500 group-hover:scale-[1.8]" />
                  <div className="relative">
                    <span className="flex size-13 items-center justify-center rounded-2xl bg-navy-800 text-white shadow-lg shadow-navy-800/25 transition-colors duration-300 group-hover:bg-brand-600">
                      <s.icon className="size-6" />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-semibold text-navy-900">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-navy-800/65">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* CTA card */}
              <Link
                href="/contact"
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-navy-800 p-8 text-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-800/40"
              >
                <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />
                <div className="relative">
                  <h3 className="font-display text-2xl font-semibold leading-snug">
                    Prêt à optimiser votre situation fiscale ?
                  </h3>
                  <p className="mt-3 text-[15px] text-white/70">
                    Obtenez une consultation gratuite dès aujourd&apos;hui.
                  </p>
                </div>
                <span className="relative mt-8 flex w-fit items-center gap-2 rounded-full bg-mint-500 px-6 py-3 text-sm font-bold text-navy-950 transition-all group-hover:gap-3">
                  Nous contacter
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ============ DARK FEATURE SECTION ============ */}
        <section className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-32">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="pointer-events-none absolute -left-32 top-1/3 size-[400px] rounded-full bg-brand-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-0 size-[400px] rounded-full bg-mint-600/15 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-mint-400">
                  Pourquoi nous choisir
                </span>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  Votre comptable de{" "}
                  <span className="text-brand-400">confiance</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/65">
                  Pour particuliers, travailleurs autonomes et petites entreprises —
                  notre équipe vous accompagne à chaque étape pour simplifier vos
                  finances et vous faire économiser temps et argent.
                </p>
                <Link
                  href="/a-propos"
                  className="group mt-9 inline-flex items-center gap-2 text-sm font-bold text-mint-400 transition-colors hover:text-mint-300"
                >
                  En savoir plus sur nous
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid gap-5">
                {features.map((f, i) => (
                  <div
                    key={f.title}
                    className="group flex gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:border-mint-400/40 hover:bg-white/[0.08] sm:p-7"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-600/30">
                      <f.icon className="size-6" />
                    </span>
                    <div>
                      <h3 className="flex items-center gap-3 font-display text-xl font-semibold">
                        <span className="text-sm font-bold text-mint-400/80">
                          0{i + 1}
                        </span>
                        {f.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-white/60">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIAL + FAQ ============ */}
        <section className="py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-start">
              <div className="lg:sticky lg:top-32">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                  Témoignages
                </span>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
                  Ce que nos clients{" "}
                  <span className="text-brand-600">en disent</span>
                </h2>

                <figure className="relative mt-10 overflow-hidden rounded-3xl bg-navy-800 p-8 text-white shadow-2xl shadow-navy-900/20 sm:p-10">
                  <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
                  <Quote className="relative size-10 text-mint-400" />
                  <blockquote className="relative mt-5 font-display text-xl leading-relaxed sm:text-2xl">
                    « Les services de Kotama Impôts ont transformé la façon dont je
                    gère mes finances. Leur équipe est compétente et toujours
                    disponible pour répondre à mes questions. »
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-full bg-mint-500 font-bold text-navy-950">
                      PT
                    </span>
                    <div>
                      <p className="text-sm font-bold">Patrick T.</p>
                      <p className="text-xs text-white/60">Client de Kotama Impôts</p>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                  Foire aux questions
                </span>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy-900">
                  Questions fréquentes
                </h2>
                <div className="mt-10">
                  <Faq />
                </div>
                <p className="mt-6 text-sm text-navy-800/60">
                  Une autre question ?{" "}
                  <Link href="/contact" className="font-bold text-brand-600 underline-offset-4 hover:underline">
                    Contactez-nous
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="relative overflow-hidden py-20 lg:py-32">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-800/20 to-transparent" />
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                  Contactez-nous
                </span>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
                  Économisez <span className="text-mint-600">temps</span> et{" "}
                  <span className="text-brand-600">argent</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-navy-800/65">
                  Contactez-nous dès aujourd&apos;hui pour une{" "}
                  <strong className="text-navy-900">consultation gratuite</strong> et
                  découvrez comment nous pouvons vous aider.
                </p>

                <ul className="mt-10 space-y-5">
                  {[
                    {
                      icon: MapPin,
                      label: "Adresse",
                      value: "203-5365 Rue Jean Talon Est, Montréal, QC, H1S 3G2",
                    },
                    {
                      icon: Mail,
                      label: "Courriel",
                      value: "info@kotamaimpots.com",
                      href: "mailto:info@kotamaimpots.com",
                    },
                    {
                      icon: Phone,
                      label: "Téléphone",
                      value: "(514) 962-1648",
                      href: "tel:+15149621648",
                    },
                  ].map((c) => (
                    <li key={c.label} className="flex items-center gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-md shadow-navy-900/5 ring-1 ring-navy-800/10">
                        <c.icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-navy-800/50">
                          {c.label}
                        </p>
                        {c.href ? (
                          <a href={c.href} className="text-sm font-bold text-navy-900 hover:text-brand-600">
                            {c.value}
                          </a>
                        ) : (
                          <p className="text-sm font-bold text-navy-900">{c.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA BANNER ============ */}
        <CtaBanner />
      </main>

      <Footer />
    </>
  );
}
