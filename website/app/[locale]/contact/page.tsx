// src/app/[locale]/contact/page.tsx
import { getDictionary } from "@/content/dictionaries";
import { Container } from "@/components/ui/Container";
import { Locale } from "@/lib/i18n";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="relative min-h-[40vh] overflow-hidden bg-brand">
        <div className="absolute inset-0 bg-[url('/images/contactos-hero.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand/90 via-brand/80 to-brand" />

        <Container className="relative z-10 flex min-h-[40vh] items-center">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-8 bg-gold" />
              {locale === "pt" ? "Contacto" : "Contact"}
            </span>

            <h1 className="mt-6 font-heading text-5xl font-medium leading-tight text-white sm:text-6xl lg:text-7xl">
              {locale === "pt" ? "Vamos defender" : "We will defend"}
              <br />
              <span className="text-gold">
                {locale === "pt" ? "os seus direitos." : "your rights."}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              {dict.contact.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="bg-background py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left - Contact Info */}
            <div>
              <h2 className="font-heading text-3xl font-medium text-brand sm:text-4xl">
                {dict.contact.info.title}
              </h2>

              <p className="mt-6 text-base leading-relaxed text-text-secondary">
                {dict.contact.info.description}
              </p>

              <div className="mt-12 space-y-6">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/5 text-brand">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand">
                      {dict.contact.info.address.label}
                    </h4>
                    <p className="mt-1 text-sm text-text-secondary whitespace-pre-line">
                      {dict.contact.info.address.value}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/5 text-brand">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand">
                      {dict.contact.info.phone.label}
                    </h4>
                    <a
                      href={`tel:${dict.contact.info.phone.value.replace(/\s/g, "")}`}
                      className="mt-1 text-sm text-text-secondary transition-colors hover:text-gold-dark"
                    >
                      {dict.contact.info.phone.value}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/5 text-brand">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand">
                      {dict.contact.info.email.label}
                    </h4>
                    <a
                      href={`mailto:${dict.contact.info.email.value}`}
                      className="mt-1 text-sm text-text-secondary transition-colors hover:text-gold-dark"
                    >
                      {dict.contact.info.email.value}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/5 text-brand">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand">
                      {dict.contact.info.hours.label}
                    </h4>
                    <p className="mt-1 text-sm text-text-secondary">
                      {dict.contact.info.hours.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="rounded-2xl bg-surface p-8 sm:p-10">
              <h3 className="font-heading text-2xl font-medium text-brand">
                {dict.contact.form.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {dict.contact.form.subtitle}
              </p>
              <ContactForm dict={dict.contact.form} locale={locale} />
            </div>
          </div>
        </Container>
      </section>

      {/* Google Maps - Full Width */}
      <section className="relative bg-surface py-0">
        <div className="relative h-[450px] w-full overflow-hidden sm:h-[500px] lg:h-[550px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.229144777708!2d-9.4216596!3d38.6970054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18ec3e3d8f0b3f%3A0x8f4c8a3f4f4f4f4f!2sR.%20Jos%C3%A9%20Florindo%2044C%2C%202750-400%20Cascais!5e0!3m2!1spt!2spt!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full"
            title="Localização do escritório Mário Ferreira Advogados"
          />

          {/* Overlay com a morada - posicionada no canto inferior esquerdo */}
          <div className="absolute bottom-6 left-6 rounded-lg bg-white/95 px-6 py-4 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand">
                  Mário Ferreira Advogados
                </p>
                <p className="text-xs text-text-secondary">
                  Rua José Florindo, 44C • 2750-400 Cascais
                </p>
              </div>
            </div>
          </div>

          {/* Badge "Como Chegar" no canto inferior direito */}
          <a
            href="https://maps.google.com/?q=Rua+José+Florindo+44C+Cascais"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 right-6 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-brand-dark hover:scale-105"
          >
            {locale === "pt" ? "Como Chegar →" : "Get Directions →"}
          </a>
        </div>
      </section>
    </div>
  );
}