
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

interface FooterProps {
  locale: string;
  dict: {
    slogan: string;
    navigation: {
      title: string;
      items: readonly {
        label: string;
        href: string;
      }[];
    };
    contact: {
      title: string;
      address: string;
      phone: string;
      email: string;
    };
    legal: {
      title: string;
      items: readonly {
        label: string;
        href: string;
      }[];
    };
    copyright: string;
    developedBy: string;
    backToTop: string;
  };
}

export function Footer({ locale, dict }: FooterProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const getLocalizedHref = (href: string) => {
    if (href.startsWith(`/${locale}`)) return href;
    if (href === "/") return `/${locale}`;
    return `/${locale}${href}`;
  };

  return (
    <footer className="relative overflow-hidden bg-brand-dark text-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full border border-gold/5" />
      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full border border-gold/5" />

      <Container>
        <div className="relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand com Logótipo */}
          <div className="col-span-1">
            <Link
              href={`/${locale}`}
              className="group flex items-center gap-4 transition-all hover:translate-x-1"
            >
              {/* Logótipo */}
              <div className="relative h-15 w-20 flex-shrink-0 overflow-hidden rounded-full border border-gold/30 transition-all duration-300 group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/20">
                <Image
                  src="/images/logo.png"
                  alt="Mário Ferreira Advogados"
                  fill
                  className="object-contain p-1"
                />
              </div>

              {/* Nome */}
              <div className="flex flex-col">
                <span className="font-heading text-xl font-semibold leading-none text-white transition-colors group-hover:text-gold">
                  Mário Ferreira
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold transition-colors group-hover:text-gold-light">
                  Advogados
                </span>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {dict.slogan}
            </p>

            {/* Redes Sociais */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-gold hover:bg-gold/10 hover:text-gold"
                aria-label="LinkedIn"
                onMouseEnter={() => setHoveredLink("linkedin")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>

                <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-brand-dark px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  LinkedIn
                </span>
              </a>

              <a
                href="#"
                className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-gold hover:bg-gold/10 hover:text-gold"
                aria-label="Twitter"
                onMouseEnter={() => setHoveredLink("twitter")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>

                <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-brand-dark px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  Twitter / X
                </span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              {dict.navigation.title}
            </h4>

            <ul className="mt-4 space-y-3">
              {dict.navigation.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={getLocalizedHref(item.href)}
                    className="group relative inline-flex items-center gap-2 text-sm text-white/60 transition-all hover:text-gold"
                    onMouseEnter={() => setHoveredLink(item.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="absolute -left-4 h-px w-0 bg-gold transition-all duration-300 group-hover:w-3" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              {dict.contact.title}
            </h4>

            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Rua+José+Florindo+44C+Cascais"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-white/60 transition-all hover:text-gold"
                >
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-gold transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="whitespace-pre-line transition-transform duration-300 group-hover:translate-x-0.5">
                    {dict.contact.address}
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={`tel:${dict.contact.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 text-sm text-white/60 transition-all hover:text-gold"
                >
                  <Phone
                    size={16}
                    className="text-gold transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    {dict.contact.phone}
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${dict.contact.email}`}
                  className="group flex items-center gap-3 text-sm text-white/60 transition-all hover:text-gold"
                >
                  <Mail
                    size={16}
                    className="text-gold transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    {dict.contact.email}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              {dict.legal.title}
            </h4>

            <ul className="mt-4 space-y-3">
              {dict.legal.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={getLocalizedHref(item.href)}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 transition-all hover:text-gold"
                    onMouseEnter={() => setHoveredLink(item.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="absolute -left-4 h-px w-0 bg-gold transition-all duration-300 group-hover:w-3" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-lg border border-white/5 bg-white/5 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10">
                  <span className="text-xs font-bold text-gold">⚖️</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/80">
                    {locale === "pt" ? "Advocacia com Excelência" : "Law with Excellence"}
                  </p>
                  <p className="text-[10px] text-white/40">
                    {locale === "pt" 
                      ? "Mais de 40 anos de experiência" 
                      : "Over 40 years of experience"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
            <p className="text-sm text-white/40">
              &copy; {currentYear} Mário Ferreira Advogados.
              <span className="hidden sm:inline"> {dict.copyright}</span>
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 text-sm text-white/40 transition-all hover:text-gold"
            >
              <span>{dict.backToTop}</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>

            <p className="text-xs text-white/30">
              {dict.developedBy}{" "}
              <span className="text-gold/60 transition-colors hover:text-gold">
                Ernesto Uanicela
              </span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}