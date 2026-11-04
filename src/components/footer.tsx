"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/nos-services", label: "Nos Services" },
  { href: "/formation", label: "Formation" },
  { href: "/blog", label: "Blog" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <span className="inline-block rounded-xl bg-white p-2">
              <Image
                src="/logo.png"
                alt="Kotama Impôts"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-100/80">
              Votre partenaire de confiance en comptabilité et fiscalité dans la
              grande région de Montréal. L&apos;expertise à bon prix.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-300">
              Navigation
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm font-medium text-white/80 transition-colors hover:text-mint-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-300">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-mint-400" />
                <span>
                  203-5365 Rue Jean Talon Est,
                  <br />
                  Montréal, QC, H1S 3G2
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-mint-400" />
                <a
                  href="mailto:info@kotamaimpots.com"
                  className="transition-colors hover:text-mint-400"
                >
                  info@kotamaimpots.com
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-mint-400" />
                <a
                  href="tel:+15149621648"
                  className="transition-colors hover:text-mint-400"
                >
                  (514) 962-1648
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {year ?? "2025"} Kotama Impôts. Tous droits réservés.</p>
          <p>L&apos;expertise à bon prix.</p>
        </div>
      </div>
    </footer>
  );
}
