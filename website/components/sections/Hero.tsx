// src/components/sections/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Locale } from "@/lib/i18n";

interface HeroProps {
  locale: Locale;
  dict: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    years: string;
    location: string;
    scroll: string;
  };
}

const slides = [
  {
    src: "/images/escritorio1.jpeg",
    alt: "Mário Ferreira Advogados - Escritório em Cascais",
  },
  {
    src: "/images/escritorio2.jpeg",
    alt: "Mário Ferreira Advogados - Equipa",
  },
  {
    src: "/images/escritorio3.jpeg",
    alt: "Mário Ferreira Advogados - Vista de Cascais",
  },
];

export function Hero({ locale, dict }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  // Auto-play com intervalo de 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
            quality={100}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand/75 via-brand/65 to-brand/80" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand/30 to-transparent" />

      <div className="absolute inset-0 z-10 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat" />
      </div>

      {/* Dots indicadores */}
      <div className="absolute bottom-32 left-1/2 z-30 flex -translate-x-1/2 gap-2 md:bottom-28">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "w-8 bg-gold"
                : "w-3 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <Container className="relative z-20 flex min-h-screen items-center pb-20 pt-32">
        <div className="grid w-full gap-16 lg:grid-cols-[1fr_320px] lg:items-end">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                {dict.badge}
              </span>
            </div>

            <h1 className="font-heading text-6xl font-medium leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
              {dict.title}
              <br />
              <span className="text-gold">{dict.titleHighlight}</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              {dict.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-bold text-brand transition-all hover:bg-gold-light hover:scale-105 hover:shadow-lg hover:shadow-gold/30"
              >
                {dict.ctaPrimary}
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <button
                onClick={scrollToAbout}
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-all hover:border-gold hover:bg-white/10 hover:scale-105"
              >
                {dict.ctaSecondary}
              </button>
            </div>
          </div>

          <div className="hidden border-l border-white/20 pl-8 lg:block">
            <span className="font-heading text-7xl font-medium text-gold">
              20+
            </span>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {dict.years}
            </p>

            <div className="mt-8 h-px w-full bg-white/20" />
            <p className="mt-6 text-sm leading-7 text-white/60">
              {dict.location}
            </p>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/50 transition-all hover:text-gold md:flex group"
        aria-label="Scroll para baixo"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] transition-colors group-hover:text-gold">
          {dict.scroll}
        </span>
        <ArrowDown
          size={16}
          className="animate-bounce transition-colors group-hover:text-gold"
        />
      </button>
    </section>
  );
}