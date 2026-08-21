// src/app/[locale]/privacy-policy/page.tsx
import { Container } from "@/components/ui/Container";
import { Locale } from "@/lib/i18n";

interface PrivacyPolicyPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function PrivacyPolicyPage({ params }: PrivacyPolicyPageProps) {
  const { locale } = await params;

  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-medium text-brand sm:text-5xl">
            {locale === "pt" ? "Política de Privacidade" : "Privacy Policy"}
          </h1>

          <p className="mt-4 text-sm text-text-muted">
            {locale === "pt" ? "Última atualização: " : "Last updated: "}
            {new Date().toLocaleDateString(locale === "pt" ? "pt-PT" : "en-US")}
          </p>

          <div className="mt-12 space-y-8 text-text-secondary">
            <div>
              <h2 className="font-heading text-2xl font-medium text-brand">
                {locale === "pt" ? "1. Introdução" : "1. Introduction"}
              </h2>
              <p className="mt-4 leading-relaxed">
                {locale === "pt"
                  ? "O Mário Ferreira Advogados valoriza a privacidade e a proteção de dados dos seus clientes e visitantes. Esta política descreve como recolhemos, utilizamos e protegemos as suas informações pessoais."
                  : "Mário Ferreira Advogados values the privacy and data protection of its clients and visitors. This policy describes how we collect, use and protect your personal information."}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-brand">
                {locale === "pt" ? "2. Dados que recolhemos" : "2. Data we collect"}
              </h2>
              <p className="mt-4 leading-relaxed">
                {locale === "pt"
                  ? "Recolhemos os dados que nos fornece diretamente, como nome, email, número de telefone e mensagens enviadas através do formulário de contacto."
                  : "We collect data that you provide directly, such as name, email, phone number and messages sent through the contact form."}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-brand">
                {locale === "pt" ? "3. Como utilizamos os seus dados" : "3. How we use your data"}
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
                <li>{locale === "pt" ? "Para responder aos seus pedidos e questões" : "To respond to your requests and questions"}</li>
                <li>{locale === "pt" ? "Para prestar os serviços jurídicos solicitados" : "To provide the requested legal services"}</li>
                <li>{locale === "pt" ? "Para cumprir obrigações legais" : "To comply with legal obligations"}</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-brand">
                {locale === "pt" ? "4. Contacto" : "4. Contact"}
              </h2>
              <p className="mt-4 leading-relaxed">
                {locale === "pt"
                  ? "Para questões sobre esta política, entre em contacto:"
                  : "For questions about this policy, please contact:"}
                <br />
                <a href="mailto:geral@mariaferreira.pt" className="text-brand hover:underline">
                  geral@mariaferreira.pt
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
