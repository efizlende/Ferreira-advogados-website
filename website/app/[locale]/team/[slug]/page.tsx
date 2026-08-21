// src/app/[locale]/team/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { getDictionary } from "@/content/dictionaries";
import { Container } from "@/components/ui/Container";
import { Locale } from "@/lib/i18n";
import Link from "next/link";
import { ArrowUpRight, Mail, Briefcase, BookOpen, Award, GraduationCap } from "lucide-react";

interface TeamMemberPageProps {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const locales: Locale[] = ["pt", "en"];
  const allParams = [];

  for (const locale of locales) {
    const dict = await getDictionary(locale);
    const members = dict.team.members;

    for (const member of members) {
      const slug = member.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-");

      allParams.push({ locale, slug });
    }
  }

  return allParams;
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale);

  const member = dict.team.members.find((m) => {
    const memberSlug = m.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");
    return memberSlug === slug;
  });

  if (!member) {
    notFound();
  }

  const imagePath = member.image || null;
  const isPt = locale === "pt";

  // Campos adicionais (se existirem no dicionário)
  const fullBio = (member as any).fullBio || member.bio;
  const education: string[] = (member as any).education || [];
  const experience: string[] = (member as any).experience || [];
  const awards: string[] = (member as any).awards || [];

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="relative min-h-[50vh] overflow-hidden bg-brand">
        <div className="absolute inset-0 bg-[url('/images/team-hero.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand/90 via-brand/80 to-brand" />

        <Container className="relative z-10 flex min-h-[50vh] items-center">
          <div className="grid w-full gap-8 md:grid-cols-[auto,1fr] md:gap-12">
            {/* Foto */}
            <div className="flex justify-center md:justify-start">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-gold/30 shadow-2xl sm:h-56 sm:w-56 md:h-64 md:w-64">
                {imagePath ? (
                  <Image
                    src={imagePath}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand/5 to-gold/5">
                    <span className="font-heading text-6xl text-white/50">
                      {(member as any).name.split(" ")[0][0]}
                      {(member as any).name.split(" ")[1]?.[0] || ""}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Informações */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <span className="inline-flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold md:justify-start">
                <span className="h-px w-8 bg-gold" />
                {isPt ? "Perfil" : "Profile"}
              </span>

              <h1 className="mt-4 font-heading text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
                {member.name}
              </h1>

              <p className="mt-2 text-lg font-medium text-gold">{member.role}</p>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 line-clamp-3">
                {member.bio}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-brand transition-all hover:bg-gold-light"
                >
                  <Mail size={16} />
                  {isPt ? "Enviar Email" : "Send Email"}
                </a>
                {(member as any).linkedin && (
                  <a
                    href={(member as any).linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-2.5 text-sm font-medium text-white transition-all hover:border-gold hover:bg-white/10"
                  >
                  
                    LinkedIn
                  </a>
                )}
                <Link
                  href={`/${locale}/team`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-2.5 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
                >
                  {isPt ? "← Ver toda a equipa" : "← View all team"}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Conteúdo do Perfil */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Biografia Completa */}
            <div>
              <h2 className="font-heading text-2xl font-medium text-brand sm:text-3xl">
                {isPt ? "Biografia" : "Biography"}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg whitespace-pre-line">
                {fullBio}
              </div>
            </div>

            {/* Especialidades */}
            <div className="mt-12">
              <h2 className="font-heading text-2xl font-medium text-brand sm:text-3xl">
                {isPt ? "Especialidades" : "Expertise"}
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {member.expertise.map((exp: string, i: number) => (
                  <span
                    key={i}
                    className="rounded-full bg-brand/5 px-4 py-2 text-sm font-medium text-brand"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            {/* Formação Académica */}
            {education.length > 0 && (
              <div className="mt-12">
                <h2 className="font-heading text-2xl font-medium text-brand sm:text-3xl">
                  <GraduationCap size={24} className="inline mr-2 text-gold-dark" />
                  {isPt ? "Formação Académica" : "Education"}
                </h2>
                <div className="mt-4 space-y-3">
                  {education.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 rounded-lg bg-surface p-4">
                      <BookOpen size={18} className="mt-0.5 shrink-0 text-gold-dark" />
                      <span className="text-sm text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Experiência Profissional */}
            {experience.length > 0 && (
              <div className="mt-12">
                <h2 className="font-heading text-2xl font-medium text-brand sm:text-3xl">
                  <Briefcase size={24} className="inline mr-2 text-gold-dark" />
                  {isPt ? "Experiência Profissional" : "Professional Experience"}
                </h2>
                <div className="mt-4 space-y-3">
                  {experience.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 rounded-lg bg-surface p-4">
                      <Briefcase size={18} className="mt-0.5 shrink-0 text-gold-dark" />
                      <span className="text-sm text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Prémios e Reconhecimentos */}
            {awards.length > 0 && (
              <div className="mt-12">
                <h2 className="font-heading text-2xl font-medium text-brand sm:text-3xl">
                  <Award size={24} className="inline mr-2 text-gold-dark" />
                  {isPt ? "Prémios e Reconhecimentos" : "Awards & Recognition"}
                </h2>
                <div className="mt-4 space-y-3">
                  {awards.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 rounded-lg bg-surface p-4">
                      <Award size={18} className="mt-0.5 shrink-0 text-gold-dark" />
                      <span className="text-sm text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-gradient-to-r from-brand/5 to-gold/5 p-8 text-center">
              <h3 className="font-heading text-xl font-medium text-brand">
                {isPt ? "Precisa de Apoio Jurídico?" : "Need Legal Support?"}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {isPt
                  ? "Entre em contacto para uma primeira abordagem, sem compromisso."
                  : "Contact us for an initial approach, without commitment."}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-white transition-all hover:bg-brand-dark"
                >
                  <Mail size={16} />
                  {isPt ? "Enviar Email" : "Send Email"}
                </a>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 rounded-full border border-brand/30 px-6 py-3 text-sm font-semibold text-brand transition-all hover:bg-brand hover:text-white"
                >
                  {isPt ? "Formulário de Contacto" : "Contact Form"}
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}