
"use client";

import { useState } from "react";
import { Container } from "../ui/Container";
import { ChevronDown } from "lucide-react";
import { Locale } from "@/lib/i18n";

interface FAQPreviewProps {
  locale: Locale;
  dict: {
    title: string;
    description: string;
    notFound?: string;
    contactLink?: string;
    items: readonly { 
      question: string;
      answer: string;
    }[];
  };
}

export function FAQPreview({ locale, dict }: FAQPreviewProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Mostrar apenas os primeiros 4 itens
  const items = dict.items.slice(0, 4);

  return (
    <section className="bg-background py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold-dark">
            <span className="h-px w-8 bg-gold" />
            {locale === "pt" ? "Perguntas Frequentes" : "Frequently Asked Questions"}
          </span>

          <h2 className="mt-6 font-heading text-4xl font-medium leading-tight text-brand sm:text-5xl lg:text-6xl">
            {locale === "pt" ? "Dúvidas comuns," : "Common questions,"}
            <br />
            <span className="text-gold-dark">
              {locale === "pt" ? "respostas claras." : "clear answers."}
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">
            {dict.description}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-4">
          {items.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-gold/30"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/50 sm:p-8"
                aria-expanded={openIndex === index}
              >
                <span className="font-heading text-lg font-medium text-brand sm:text-xl">
                  {faq.question}
                </span>

                <ChevronDown
                  size={20}
                  className={`ml-4 shrink-0 text-gold-dark transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="border-t border-border p-6 pt-4 sm:p-8 sm:pt-6">
                  <p className="text-base leading-relaxed text-text-secondary">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-text-muted">
            {dict.notFound || (locale === "pt" ? "Não encontrou a resposta?" : "Didn't find the answer?")}{" "}
            <a
              href={`/${locale}/contact`}
              className="font-semibold text-brand hover:text-gold-dark"
            >
              {dict.contactLink || (locale === "pt" ? "Fale connosco" : "Contact us")}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}