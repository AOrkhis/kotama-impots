"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/nos-services", label: "Nos Services" },
  { href: "/formation", label: "Formation" },
  { href: "/blog", label: "Blog" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 shadow-[0_8px_30px_-12px_rgba(13,42,77,0.25)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="relative flex items-center">
          <span
            className={`inline-block rounded-xl px-2 py-1 transition-colors ${
              scrolled ? "bg-white" : "bg-white/95 shadow-sm"
            }`}
          >
            <Image
              src="/logo.png"
              alt="Kotama Impôts — L'expertise à bon prix"
              width={170}
              height={56}
              priority
              className="h-9 w-auto sm:h-11"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-navy-800/5 text-brand-600"
                    : "text-navy-800 hover:bg-navy-800/5 hover:text-brand-600"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+15149621648"
            className="flex items-center gap-2 text-sm font-semibold text-navy-800 transition-colors hover:text-brand-600"
          >
            <Phone className="size-4" />
            (514) 962-1648
          </a>
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-navy-800 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-navy-800/25 transition-all hover:bg-brand-600 hover:shadow-brand-600/30"
          >
            Consultation gratuite
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-navy-800 lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-navy-800/10 bg-white/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {links.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 text-base font-semibold ${
                    active ? "bg-brand-50 text-brand-600" : "text-navy-800 hover:bg-brand-50"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-navy-800 px-5 py-3 text-sm font-bold text-white"
            >
              Consultation gratuite
              <ArrowRight className="size-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
