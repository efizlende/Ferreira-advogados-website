// src/app/[locale]/not-found.tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFoundPage() {
  // Usar o locale da URL ou fallback para pt
  const locale = typeof window !== 'undefined' 
    ? window.location.pathname.split('/')[1] || 'pt'
    : 'pt';

  return (
    <div className="flex min-h-[70vh] items-center bg-background pt-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-8xl font-medium text-gold-dark sm:text-9xl">
            404
          </span>

          <h1 className="mt-6 font-heading text-4xl font-medium text-brand sm:text-5xl">
            {locale === "pt" ? "Página não encontrada" : "Page not found"}
          </h1>

          <p className="mt-4 text-base text-text-secondary sm:text-lg">
            {locale === "pt"
              ? "A página que procura não existe ou foi movida."
              : "The page you are looking for does not exist or has been moved."}
            <br />
            {locale === "pt"
              ? "Volte ao início ou explore as nossas áreas de atuação."
              : "Return to the homepage or explore our practice areas."}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={`/${locale}`}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand px-8 py-4 text-sm font-bold text-white transition-all hover:bg-brand-dark"
            >
              {locale === "pt" ? "Página Inicial" : "Homepage"}
            </Link>

            <Link
              href={`/${locale}/practice-areas`}
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-brand/30 px-8 py-4 text-sm font-bold text-brand transition-all hover:bg-brand hover:text-white"
            >
              {locale === "pt" ? "Áreas de Atuação" : "Practice Areas"}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}