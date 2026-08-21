
"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "../ui/Container";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Locale } from "@/lib/i18n";

interface TestimonialsProps {
  locale: Locale;
}

const testimonialsData = {
  pt: [
    {
      name: "Cliente Empresarial",
      company: "Sector Hoteleiro",
      text: "O Mário Ferreira Advogados tem sido um parceiro essencial para o nosso negócio. A sua abordagem rigorosa e personalizada fez toda a diferença.",
      rating: 5,
      image: "/images/m1.jpeg",
    },
    {
      name: "Cliente Particular",
      company: "Direito da Família",
      text: "Senti-me acompanhada e compreendida em todos os momentos. Uma equipa que alia competência técnica a uma verdadeira proximidade humana.",
      rating: 5,
      image: "/images/m2.jpeg",
    },
    {
      name: "Cliente Empresarial",
      company: "Tecnologia",
      text: "Profissionalismo e eficiência na resolução de questões complexas. Recomendo vivamente os serviços do Mário Ferreira Advogados.",
      rating: 5,
      image: "/images/m3.jpeg",
    },
  ],
  en: [
    {
      name: "Corporate Client",
      company: "Hospitality Sector",
      text: "Mário Ferreira Advogados has been an essential partner for our business. Their rigorous and personalized approach made all the difference.",
      rating: 5,
    //  image: "/images/m1.jpeg",
    },
    {
      name: "Private Client",
      company: "Family Law",
      text: "I felt supported and understood at all times. A team that combines technical competence with true human proximity.",
      rating: 5,
     // image: "/images/m2.jpeg",
    },
    {
      name: "Corporate Client",
      company: "Technology",
      text: "Professionalism and efficiency in resolving complex issues. I highly recommend Mário Ferreira Advogados services.",
      rating: 5,
    //  image: "/images/m3.jpeg",
    },
  ],
};

export function Testimonials({ locale }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);
  const testimonials = testimonialsData[locale] || testimonialsData.pt;

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const currentTestimonial = testimonials[current];

  return (
    <section className="bg-brand py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="text-center">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-8 bg-gold" />
            {locale === "pt" ? "Depoimentos" : "Testimonials"}
          </span>

          <h2 className="mt-6 font-heading text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
            {locale === "pt" ? "O que dizem os" : "What our"}
            <br />
            <span className="text-gold">
              {locale === "pt" ? "nossos clientes" : "clients say"}
            </span>
          </h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm sm:p-12">
            {/* Foto do cliente */}
            <div className="mx-auto mb-6 flex justify-center">
              
            </div>

            {/* Estrelas */}
            <div className="mb-6 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-gold text-gold"
                />
              ))}
            </div>

            {/* Depoimento */}
            <blockquote className="text-center font-heading text-xl font-medium leading-relaxed text-white/90 sm:text-2xl">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Nome e empresa */}
            <div className="mt-8 text-center">
              <p className="font-semibold text-white">
                {currentTestimonial.name}
              </p>
              <p className="mt-1 text-sm text-white/60">
                {currentTestimonial.company}
              </p>
            </div>
          </div>

          {/* Navegação */}
          {testimonials.length > 1 && (
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={prev}
                className="rounded-full border border-white/20 p-3 text-white/60 transition-all hover:border-gold hover:bg-gold hover:text-brand"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={next}
                className="rounded-full border border-white/20 p-3 text-white/60 transition-all hover:border-gold hover:bg-gold hover:text-brand"
                aria-label="Próximo"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === current
                    ? "w-8 bg-gold"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-white/50">
            {locale === "pt"
              ? "Depoimentos reais de clientes satisfeitos."
              : "Real testimonials from satisfied clients."}
          </p>
        </div>
      </Container>
    </section>
  );
}