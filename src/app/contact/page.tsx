import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact — Kotama Impôts | Consultation gratuite à Montréal",
  description:
    "Contactez Kotama Impôts à Montréal pour vos déclarations de revenus et besoins de comptabilité d'entreprise. Consultation gratuite : (514) 962-1648.",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "5365 rue Jean Talon Est, Bureau 203, Montréal, QC, H1S 3G2, Canada",
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
];

export default function Contact() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Contact"
          title="Contactez-nous"
          highlight="dès aujourd'hui"
          description="Pour toute question ou demande de service, n'hésitez pas à nous contacter. Nous sommes là pour vous aider avec vos déclarations de revenus et vos besoins de comptabilité d'entreprise."
        />

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              {/* Info column */}
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900">
                  Parlons de vos besoins
                </h2>
                <p className="mt-4 leading-relaxed text-navy-800/65">
                  Remplissez le formulaire ou contactez-nous directement — une{" "}
                  <strong className="text-navy-900">consultation gratuite</strong>{" "}
                  vous attend.
                </p>

                <ul className="mt-9 space-y-4">
                  {contactInfo.map((c) => (
                    <li
                      key={c.label}
                      className="flex items-center gap-4 rounded-2xl border border-navy-800/10 bg-white p-4 shadow-sm"
                    >
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <c.icon className="size-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-wider text-navy-800/50">
                          {c.label}
                        </p>
                        {c.href ? (
                          <a
                            href={c.href}
                            className="text-sm font-bold text-navy-900 transition-colors hover:text-brand-600"
                          >
                            {c.value}
                          </a>
                        ) : (
                          <p className="text-sm font-bold leading-snug text-navy-900">
                            {c.value}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Map-style location card */}
                <div className="relative mt-6 overflow-hidden rounded-3xl bg-navy-900 p-8 text-white">
                  <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
                  <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-500/25 blur-3xl" />
                  <div className="relative">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-mint-500/20 text-mint-400">
                      <MapPin className="size-6" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-semibold">
                      Localisation
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      KOTAMA IMPÔTS
                      <br />
                      5365 rue Jean Talon Est, Bureau 203
                      <br />
                      Montréal, H1S 3G2, QC, Canada
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=5365+Rue+Jean+Talon+Est+Bureau+203+Montreal+QC+H1S+3G2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-xs font-bold text-white ring-1 ring-white/20 backdrop-blur transition-all hover:bg-mint-500 hover:text-navy-950"
                    >
                      <MapPin className="size-3.5" />
                      Ouvrir dans Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Form column */}
              <div>
                <ContactForm />
                <p className="mt-5 flex items-center gap-2 text-xs text-navy-800/50">
                  <Clock className="size-3.5" />
                  Nous répondons généralement dans un délai d&apos;un jour ouvrable.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
