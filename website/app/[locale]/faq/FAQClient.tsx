// src/app/[locale]/faq/FAQClient.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQClientProps {
  faqs: readonly {  // ← Adicionar readonly
    question: string;
    answer: string;
  }[];
}

export function FAQClient({ faqs }: FAQClientProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqs.map((faq, index) => (
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
  );
}