"use client";

import { Locale } from "@/lib/i18n";

interface QuickNavProps {
  locale: Locale;
}

export function QuickNav({ locale }: QuickNavProps) {
  const sections = [
    { id: "hero", label: locale === "pt" ? "Início" : "Home" },
    { id: "about", label: locale === "pt" ? "Sobre" : "About" },
    { id: "experience", label: locale === "pt" ? "Experiência" : "Experience" },
    { id: "practice", label: locale === "pt" ? "Áreas" : "Areas" },
    { id: "why", label: locale === "pt" ? "Valores" : "Values" },
    { id: "team", label: locale === "pt" ? "Equipa" : "Team" },
    { id: "testimonials", label: locale === "pt" ? "Depoimentos" : "Testimonials" },
    { id: "faq", label: "FAQ" },
    { id: "insights", label: locale === "pt" ? "Insights" : "Insights" },
    { id: "contact", label: locale === "pt" ? "Contacto" : "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 md:flex">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex h-3 w-3 items-center justify-center transition-all duration-300 hover:scale-125"
          aria-label={`Ir para ${section.label}`}
        >
          <span className="absolute h-2 w-2 rounded-full border border-white/30 bg-transparent transition-all duration-300 group-hover:border-gold group-hover:bg-gold" />
          <span className="absolute right-6 whitespace-nowrap rounded bg-brand/90 px-2 py-1 text-[10px] font-medium text-gold opacity-0 transition-all duration-300 group-hover:opacity-100">
            {section.label}
          </span>
        </button>
      ))}
    </div>
  );
}