"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex h-full min-h-80 flex-col items-center justify-center rounded-3xl border border-mint-400/40 bg-mint-100/40 p-10 text-center">
        <CheckCircle2 className="size-14 text-mint-600" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-navy-900">
          Message envoyé !
        </h3>
        <p className="mt-2 max-w-sm text-sm text-navy-800/70">
          Merci de nous avoir contactés. Notre équipe vous répondra dans les plus
          brefs délais.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-navy-800/15 bg-paper px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-navy-800/40 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/15";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border border-navy-800/10 bg-white p-6 shadow-xl shadow-navy-900/5 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="mb-1.5 block text-sm font-bold text-navy-900">
            Nom <span className="text-brand-600">*</span>
          </label>
          <input id="nom" name="nom" required placeholder="Votre nom" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-navy-900">
            Adresse e-mail <span className="text-brand-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="vous@exemple.com"
            className={inputClass}
          />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-navy-900">
          Message <span className="text-brand-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Comment pouvons-nous vous aider ?"
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-navy-800 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-navy-800/25 transition-all hover:bg-brand-600 hover:shadow-brand-600/30 sm:w-auto"
      >
        Envoyer le formulaire
        <Send className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
}
