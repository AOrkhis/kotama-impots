import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Témoignages — Kotama Impôts | Ce que disent nos clients",
  description:
    "Découvrez les témoignages des clients satisfaits de Kotama Impôts à Montréal : comptabilité, déclarations de revenus et conseils fiscaux de haute qualité.",
};

const testimonials = [
  {
    quote:
      "Le service de Kotama Impôts est exceptionnel. Ils m'ont aidé à optimiser mes déclarations de revenus et m'ont fourni des conseils fiscaux précieux. Je recommande fortement!",
    name: "Michel S.",
    initials: "MS",
  },
  {
    quote:
      "En tant que propriétaire d'une petite entreprise, j'avais besoin d'une tenue de livres fiable. Kotama Impôts a surpassé mes attentes avec leur expertise et leur professionnalisme. Merci pour tout!",
    name: "Salim K.",
    initials: "SK",
  },
  {
    quote:
      "Les conseils fiscaux que j'ai reçus de Kotama Impôts ont été inestimables. Grâce à eux, j'ai pu économiser beaucoup d'argent sur mes impôts. Une équipe vraiment compétente.",
    name: "Malek S.",
    initials: "MS",
  },
  {
    quote:
      "Je suis très satisfait des services de Kotama Impôts. Leur équipe est toujours disponible et prête à répondre à mes questions. Ils ont grandement simplifié la gestion de la comptabilité de mon entreprise.",
    name: "M. Titous",
    initials: "MT",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-mint-400 text-mint-400" />
      ))}
    </div>
  );
}

export default function Temoignages() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Témoignages"
          title="Ce que nos clients"
          highlight="disent de nous"
          description="Nous nous efforçons de fournir un service de haute qualité en comptabilité, déclarations de revenus et conseils fiscaux. Voici quelques témoignages de nos clients satisfaits à Montréal."
        />

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <figure
                  key={t.name + i}
                  className={`relative flex flex-col overflow-hidden rounded-3xl p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl sm:p-10 ${
                    i % 2 === 0
                      ? "border border-navy-800/10 bg-white shadow-navy-900/5"
                      : "bg-navy-800 text-white shadow-navy-900/20"
                  }`}
                >
                  {i % 2 !== 0 && (
                    <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
                  )}
                  <div className="relative flex-1">
                    <div className="flex items-center justify-between">
                      <Stars />
                      <Quote
                        className={`size-8 ${
                          i % 2 === 0 ? "text-brand-300" : "text-mint-400/60"
                        }`}
                      />
                    </div>
                    <blockquote
                      className={`mt-6 font-display text-xl leading-relaxed ${
                        i % 2 === 0 ? "text-navy-900" : "text-white"
                      }`}
                    >
                      « {t.quote} »
                    </blockquote>
                  </div>
                  <figcaption className="relative mt-8 flex items-center gap-3.5">
                    <span
                      className={`flex size-12 items-center justify-center rounded-full font-bold ${
                        i % 2 === 0
                          ? "bg-navy-800 text-white"
                          : "bg-mint-500 text-navy-950"
                      }`}
                    >
                      {t.initials}
                    </span>
                    <div>
                      <p
                        className={`text-sm font-bold ${
                          i % 2 === 0 ? "text-navy-900" : "text-white"
                        }`}
                      >
                        {t.name}
                      </p>
                      <p
                        className={`text-xs ${
                          i % 2 === 0 ? "text-navy-800/50" : "text-white/50"
                        }`}
                      >
                        Client de Kotama Impôts
                      </p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* CTA under testimonials */}
            <div className="mt-20 text-center">
              <h2 className="font-display text-4xl font-semibold tracking-tight text-navy-900">
                Contactez-nous dès aujourd&apos;hui !
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-navy-800/65">
                Besoin d&apos;aide avec vos déclarations de revenus ou votre tenue
                de livres ? Laissez Kotama Impôts vous simplifier la vie.
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
