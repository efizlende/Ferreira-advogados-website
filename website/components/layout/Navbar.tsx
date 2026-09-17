"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavbarProps {
  locale: string;
  dict: {
    about: string;
    practiceAreas: string;
    team: string;
    insights: string;
    faq: string;
    contact: string;
    cta: string;
  };
}

export function Navbar({ locale, dict }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  const navigation = [
    { label: dict.about, href: `/${locale}/about` },
    { label: dict.practiceAreas, href: `/${locale}/practice-areas` },
    { label: dict.team, href: `/${locale}/team` },
    { label: dict.insights, href: `/${locale}/insights` },
    { label: dict.faq, href: `/${locale}/faq` },
    { label: dict.contact, href: `/${locale}/contact` },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === `/${locale}`) return pathname === href;
    return pathname.startsWith(href);
  };

  const getNavbarBg = () => {
    if (isHomePage && !scrolled && !open) {
      return "bg-transparent";
    }
    return "bg-brand/95 backdrop-blur-xl shadow-lg shadow-brand/20";
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${getNavbarBg()}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:px-4 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-4 xl:px-10">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="group relative flex-shrink-0 transition-transform duration-300 hover:scale-105"
        >
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-[72px] xl:w-[72px]">
            <Image
              src="/images/logo.png"
              alt="Mário Ferreira Advogados"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-0.5 xl:gap-1">
          {navigation.map((item, index) => {
            const active = isActive(item.href);
            const isHovered = hoveredIndex === index;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative whitespace-nowrap px-1.5 py-2 xl:px-3"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span
                  className={`relative text-[11px] font-medium transition-all duration-300 xl:text-sm ${
                    active
                      ? "text-gold"
                      : isHovered
                      ? "text-gold-light"
                      : "text-white/80"
                  }`}
                >
                  {item.label}
                </span>

                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-500 ${
                    active || isHovered ? "w-full" : "w-0"
                  }`}
                />

                <span
                  className={`absolute inset-0 rounded-lg bg-gold/5 transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                {active && (
                  <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold shadow-lg shadow-gold/50" />
                )}
              </Link>
            );
          })}

          <div className="ml-1 border-l border-white/10 pl-2 xl:ml-2 xl:pl-3">
            <LanguageSwitcher currentLocale={locale} />
          </div>

          <a
            href="https://wa.me/351965228772"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#25D366] px-3 py-1.5 text-[11px] font-bold text-white transition-all hover:bg-[#1ebe5b] hover:shadow-lg hover:shadow-[#25D366]/30 xl:ml-2 xl:gap-2 xl:px-4 xl:py-2 xl:text-sm"
          >
            <MessageCircle size={14} className="shrink-0 xl:size-[15px]" />
            <span>WhatsApp</span>
          </a>

          <Link
            href={`/${locale}/contact`}
            className="group relative ml-1 inline-flex items-center overflow-hidden whitespace-nowrap rounded-full bg-gold px-3 py-1.5 text-[11px] font-bold text-brand transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 xl:ml-2 xl:px-5 xl:py-2 xl:text-sm"
          >
            <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <span className="relative z-10 inline-flex items-center gap-1 xl:gap-2">
              <span className="whitespace-nowrap">{dict.cta}</span>
              <ArrowUpRight
                size={13}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 xl:size-[15px]"
              />
            </span>
            <span className="absolute inset-0 translate-y-full bg-gold-light transition-transform duration-500 group-hover:translate-y-0" />
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="scale-90 sm:scale-100">
            <LanguageSwitcher currentLocale={locale} />
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="relative z-20 p-1 text-white hover:text-gold transition-colors"
            aria-label="Menu"
          >
            <div className="relative h-6 w-6">
              <span
                className={`absolute inset-0 transition-transform duration-300 ${
                  open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              >
                <Menu className="h-6 w-6" />
              </span>
              <span
                className={`absolute inset-0 transition-transform duration-300 ${
                  open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              >
                <X className="h-6 w-6" />
              </span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-x-0 top-[72px] z-40 h-[calc(100vh-72px)] overflow-y-auto bg-brand/98 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col space-y-1 px-4 py-6 sm:px-6">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center justify-between rounded-lg px-4 py-4 transition-all duration-300 ${
                    active
                      ? "bg-gold/10 text-gold"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <span className="text-base font-medium sm:text-lg">
                    {item.label}
                  </span>

                  {active && (
                    <span className="flex h-2 w-2 rounded-full bg-gold shadow-lg shadow-gold/50" />
                  )}

                  <span
                    className={`absolute left-0 top-1/2 h-8 w-0.5 -translate-y-1/2 bg-gold transition-all duration-300 ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}

            <div className="mt-4 border-t border-white/10 pt-4">
              <a
                href="https://wa.me/351965228772"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-[#25D366] px-6 py-4 text-base font-bold text-white transition-all hover:bg-[#1ebe5b]"
                onClick={() => setOpen(false)}
              >
                <MessageCircle size={18} className="shrink-0" />
                <span>WhatsApp — 965 228 772</span>
              </a>
            </div>

            <div className="mt-3">
              <Link
                href={`/${locale}/contact`}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-gold px-6 py-4 text-base font-bold text-brand transition-all hover:bg-gold-light"
                onClick={() => setOpen(false)}
              >
                <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span className="relative z-10">{dict.cta}</span>
                <ArrowUpRight
                  size={18}
                  className="relative z-10 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <div className="space-y-3 text-center text-sm text-white/40">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/20">
                  {locale === "pt" ? "Contacto" : "Contact"}
                </p>
                <a
                  href="tel:+351214848390"
                  className="block text-white/60 transition-colors hover:text-gold"
                >
                  +351 214 848 390
                </a>
                <a
                  href="mailto:mario.ferreira-4651l@advogados.oa.pt"
                  className="block text-white/60 transition-colors hover:text-gold"
                >
                  mario.ferreira-4651l@advogados.oa.pt
                </a>
                <p className="text-xs text-white/30">
                  Rua José Florindo, 44C • 2750-400 Cascais
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Linha decorativa */}
      <div
        className={`h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent transition-opacity duration-500 ${
          scrolled || !isHomePage ? "opacity-100" : "opacity-0"
        }`}
      />
    </header>
  );
}