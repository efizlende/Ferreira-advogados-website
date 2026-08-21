
"use client";

import Link from "next/link";
import { Container } from "../ui/Container";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { Locale } from "@/lib/i18n";

interface ContactCTAProps {
  locale: Locale;
  dict: {
    title: string;
    description: string;
    form: {
      title: string;
      subtitle: string;
      fields: {
        name: string;
        namePlaceholder: string;
        email: string;
        emailPlaceholder: string;
        phone: string;
        phonePlaceholder: string;
        subject: string;
        subjectPlaceholder: string;
        subjectOptions: Record<string, string>;
        message: string;
        messagePlaceholder: string;
        submit: string;
        sending: string;
      };
      success: {
        title: string;
        description: string;
      };
      error: {
        title: string;
        description: string;
      };
      privacy: string;
      privacyLink: string;
    };
    info: {
      title: string;
      description: string;
      address: {
        label: string;
        value: string;
      };
      phone: {
        label: string;
        value: string;
      };
      email: {
        label: string;
        value: string;
      };
      hours: {
        label: string;
        value: string;
      };
    };
  };
}

export function ContactCTA({ locale, dict }: ContactCTAProps) {
  return (
    <section className="relative overflow-hidden bg-brand py-24 sm:py-28 lg:py-32">
      <div className="absolute -left-48 -top-48 h-96 w-96 rounded-full border border-gold/10" />
      <div className="absolute -bottom-48 -right-48 h-96 w-96 rounded-full border border-gold/10" />

      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-8 bg-gold" />
              {locale === "pt" ? "Contacto" : "Contact"}
            </span>

            <h2 className="mt-6 font-heading text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
              {locale === "pt" ? "Vamos defender" : "Let's defend"}
              <br />
              <span className="text-gold">
                {locale === "pt" ? "os seus direitos." : "your rights."}
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-white/70 sm:text-lg">
              {dict.description}
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`tel:${dict.info.phone.value.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 text-white transition-colors hover:text-gold"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 group-hover:border-gold">
                  <Phone size={18} className="text-gold" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">
                    {dict.info.phone.label}
                  </p>
                  <p className="text-sm font-semibold">
                    {dict.info.phone.value}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${dict.info.email.value}`}
                className="group flex items-center gap-4 text-white transition-colors hover:text-gold"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 group-hover:border-gold">
                  <Mail size={18} className="text-gold" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">
                    {dict.info.email.label}
                  </p>
                  <p className="text-sm font-semibold">
                    {dict.info.email.value}
                  </p>
                </div>
              </a>

              <div className="group flex items-center gap-4 text-white transition-colors hover:text-gold">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 group-hover:border-gold">
                  <MapPin size={18} className="text-gold" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">
                    {dict.info.address.label}
                  </p>
                  <p className="text-sm font-semibold whitespace-pre-line">
                    {dict.info.address.value}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm sm:p-12">
            <h3 className="font-heading text-2xl font-medium text-white">
              {dict.form.title}
            </h3>

            <p className="mt-2 text-sm text-white/60">
              {dict.form.subtitle}
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label htmlFor="nome" className="text-sm font-medium text-white/80">
                  {dict.form.fields.name}
                </label>
                <input
                  type="text"
                  id="nome"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder={dict.form.fields.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-white/80">
                  {dict.form.fields.email}
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder={dict.form.fields.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="text-sm font-medium text-white/80">
                  {dict.form.fields.message}
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder={dict.form.fields.messagePlaceholder}
                />
              </div>

              <Link
                href={`/${locale}/contact`}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-bold text-brand transition-all hover:bg-gold-light"
              >
                {dict.form.fields.submit}
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <p className="text-center text-xs text-white/40">
                {dict.form.privacy}{" "}
                <a href={`/${locale}/privacy-policy`} className="underline hover:text-white">
                  {dict.form.privacyLink}
                </a>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}