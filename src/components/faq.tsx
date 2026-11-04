"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Quels services offrez-vous ?",
    a: "Nous offrons des services de déclarations de revenus (entreprises et particuliers), de tenue de livres, de rapports de TPS/TVQ, de la formation et des conseils fiscaux.",
  },
  {
    q: "Comment puis-je prendre rendez-vous ?",
    a: "Vous pouvez prendre rendez-vous en nous contactant par téléphone au (514) 962-1648 ou via notre formulaire de contact en ligne.",
  },
  {
    q: "Quels sont les avantages de choisir Kotama Impôts ?",
    a: "Choisir Kotama Impôts vous assure des services de comptabilité précis, personnalisés et conformes aux réglementations fiscales.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy-800/10 overflow-hidden rounded-3xl border border-navy-800/10 bg-white shadow-xl shadow-navy-900/5">
      {faqs.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-brand-50 sm:px-8"
            >
              <span className="text-base font-bold text-navy-900 sm:text-lg">
                {item.q}
              </span>
              <span
                className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  open
                    ? "rotate-45 bg-brand-500 text-white"
                    : "bg-navy-800/5 text-navy-800"
                }`}
              >
                <Plus className="size-5" />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[15px] leading-relaxed text-navy-800/70 sm:px-8">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
