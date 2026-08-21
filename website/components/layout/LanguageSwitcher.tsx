
"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, defaultLocale, localeNames, localeFlags } from "@/lib/i18n";
import { ChevronDown, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface LanguageSwitcherProps {
  currentLocale: string;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Função para mudar de idioma
  const switchLanguage = (locale: string) => {
    // Remover locale atual do pathname
    let path = pathname;
    const localePattern = new RegExp(`^/${currentLocale}`);
    path = path.replace(localePattern, "");

    // Se for a home, redirecionar para o locale
    if (path === "" || path === "/") {
      const newPath = locale === defaultLocale ? "/" : `/${locale}`;
      router.push(newPath);
    } else {
      const newPath = locale === defaultLocale ? path : `/${locale}${path}`;
      router.push(newPath);
    }

    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
        aria-label="Selecionar idioma"
      >
        <span className="text-base">{localeFlags[currentLocale as keyof typeof localeFlags]}</span>
        <span className="hidden sm:inline">
          {localeNames[currentLocale as keyof typeof localeNames]}
        </span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 min-w-[160px] overflow-hidden rounded-xl bg-brand-dark/95 backdrop-blur-xl shadow-xl shadow-brand/20">
          <div className="p-1">
            {locales.map((locale) => {
              const isActive = locale === currentLocale;

              return (
                <button
                  key={locale}
                  onClick={() => switchLanguage(locale)}
                  className={`flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm transition-all ${
                    isActive
                      ? "bg-gold/10 text-gold"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base">
                      {localeFlags[locale]}
                    </span>
                    <span>{localeNames[locale]}</span>
                  </span>

                  {isActive && <Check size={16} className="text-gold" />}
                </button>
              );
            })}
          </div>

          {/* Linha decorativa */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>
      )}
    </div>
  );
}