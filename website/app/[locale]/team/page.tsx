
import Image from "next/image";
import { getDictionary } from "@/content/dictionaries";
import { Container } from "@/components/ui/Container";
import { Locale } from "@/lib/i18n";
import { ArrowUpRight, Mail,  } from "lucide-react";
import Link from "next/link";

interface TeamPageProps {
  params: Promise<{ locale: Locale }>;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  email: string;
  linkedin?: string;
  image?: string | null;
  expertise: string[];
}

export default async function TeamPage({ params }: TeamPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const members = dict.team.members as unknown as TeamMember[];

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="relative min-h-[40vh] overflow-hidden bg-brand">
        <div className="absolute inset-0 bg-[url('/images/equipa-hero.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand/90 via-brand/80 to-brand" />

        <Container className="relative z-10 flex min-h-[40vh] items-center">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-8 bg-gold" />
              {locale === "pt" ? "Equipa" : "Team"}
            </span>

            <h1 className="mt-6 font-heading text-5xl font-medium leading-tight text-white sm:text-6xl lg:text-7xl">
              {locale === "pt" ? "Pessoas que fazem" : "People who make"}
              <br />
              <span className="text-gold">
                {locale === "pt" ? "a diferença." : "the difference."}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              {dict.team.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Team Grid */}
      <section className="bg-background py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => {
              const imagePath = member.image || null;
              const memberSlug = member.name
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, "-");

              return (
                <div
                  key={index}
                  className="group overflow-hidden rounded-2xl bg-surface transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand/10 to-gold/10">
                    {imagePath ? (
                      <Image
                        src={imagePath}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand/5 to-gold/5">
                        <span className="font-heading text-7xl text-brand/30">
                          {member.name.split(" ")[0][0]}
                          {member.name.split(" ")[1]?.[0] || ""}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 flex items-center justify-center bg-brand/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="font-heading text-xl font-medium text-white">
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
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary line-clamp-3">
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

                    {/* Social Links */}
                    <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted transition-colors hover:text-gold-dark"
                          aria-label="LinkedIn"
                        >
                     
                        </a>
                      )}
                      <a
                        href={`mailto:${member.email}`}
                        className="text-text-muted transition-colors hover:text-gold-dark"
                        aria-label="Email"
                      >
                        <Mail size={18} />
                      </a>
                      <Link
                        href={`/${locale}/team/${memberSlug}`}
                        className="ml-auto text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark transition-colors hover:text-brand"
                      >
                        {dict.team.viewProfile}
                        <ArrowUpRight size={14} className="inline ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}