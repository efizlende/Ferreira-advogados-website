
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Locale } from "@/lib/i18n";

interface TeamPreviewProps {
  locale: Locale;
  dict: {
    title: string;
    description: string;
    viewAll: string;
    viewProfile: string;
    members: readonly {
      name: string;
      role: string;
      bio: string;
      expertise: readonly string[];
      image?: string; 
    }[];
  };
}

export function TeamPreview({ locale, dict }: TeamPreviewProps) {
  // Mostrar apenas os primeiros 3 membros
  const members = dict.members.slice(0, 3);

  return (
    <section className="bg-surface py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold-dark">
              <span className="h-px w-8 bg-gold" />
              {locale === "pt" ? "Equipa" : "Team"}
            </span>

            <h2 className="mt-6 font-heading text-4xl font-medium leading-tight text-brand sm:text-5xl lg:text-6xl">
              {locale === "pt" ? "Pessoas que fazem" : "People who make"}
              <br />
              <span className="text-gold-dark">
                {locale === "pt" ? "a diferença." : "the difference."}
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-base leading-8 text-text-secondary sm:text-lg">
              {dict.description}
            </p>

            <Link
              href={`/${locale}/team`}
              className="group mt-6 inline-flex items-center gap-3 text-sm font-semibold text-brand transition-colors hover:text-gold-dark"
            >
              {dict.viewAll}
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => {
            const imagePath = member.image || null;

            return (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand/10 to-gold/10">
                  {imagePath ? (
                    // Mostrar imagem se existir
                    <Image
                      src={imagePath}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    // Fallback: Iniciais se não houver imagem
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand/5 to-gold/5">
                      <span className="font-heading text-6xl text-brand/20">
                        {member.name.split(" ")[0][0]}
                        {member.name.split(" ")[1]?.[0] || ""}
                      </span>
                    </div>
                  )}

                  {/* Overlay com nome no hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-brand/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-heading text-lg font-medium text-white">
                      {member.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-medium text-brand">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
                    {member.role}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.expertise.slice(0, 3).map((exp, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-brand/5 px-3 py-1 text-xs font-medium text-brand"
                      >
                        {exp}
                      </span>
                    ))}
                    {member.expertise.length > 3 && (
                      <span className="rounded-full bg-brand/5 px-3 py-1 text-xs font-medium text-brand">
                        +{member.expertise.length - 3}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/${locale}/team/${member.name
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/\s+/g, "-")}`}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark transition-colors hover:text-brand"
                  >
                    {dict.viewProfile}
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}