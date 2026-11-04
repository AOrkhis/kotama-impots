import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Newspaper } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Kotama Impôts | Actualités fiscales et comptables",
  description:
    "Articles et conseils de Kotama Impôts : fiscalité, CELIAPP, marchés boursiers et actualités comptables à Montréal.",
};

export default function Blog() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Blog"
          title="Actualités et"
          highlight="conseils fiscaux"
          description="Analyses, conseils et nouveautés fiscales — pour rester informé et prendre de meilleures décisions financières."
        />

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-navy-800/10 bg-white shadow-lg shadow-navy-900/5 transition-all hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-500/10"
                >
                  {/* card header visual */}
                  <div className="relative h-44 overflow-hidden bg-navy-900">
                    <div className="dot-grid absolute inset-0 opacity-50" />
                    <div
                      className={`absolute -right-10 -top-10 size-48 rounded-full blur-3xl ${
                        i % 2 === 0 ? "bg-brand-500/30" : "bg-mint-500/25"
                      }`}
                    />
                    <span className="absolute left-6 top-6 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-mint-400 backdrop-blur">
                      {post.category}
                    </span>
                    <Newspaper className="absolute bottom-5 right-6 size-10 text-white/15" />
                  </div>

                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <p className="flex items-center gap-2 text-xs font-semibold text-navy-800/50">
                      <CalendarDays className="size-3.5" />
                      {post.date}
                    </p>
                    <h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-navy-900 transition-colors group-hover:text-brand-600">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-800/65">
                      {post.excerpt}
                    </p>
                    <span className="mt-6 flex items-center gap-2 text-sm font-bold text-brand-600">
                      Lire plus
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
