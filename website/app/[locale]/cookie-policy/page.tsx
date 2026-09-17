// src/app/[locale]/cookie-policy/page.tsx
import { Container } from "@/components/ui/Container";
import { Locale } from "@/lib/i18n";

interface CookiePolicyPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function CookiePolicyPage({ params }: CookiePolicyPageProps) {
  const { locale } = await params;
  const isPt = locale === "pt";

  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-medium text-brand sm:text-5xl">
            {isPt ? "Política de Cookies" : "Cookie Policy"}
          </h1>

          <p className="mt-4 text-sm text-text-muted">
            {isPt ? "Última atualização: " : "Last updated: "}
            {new Date().toLocaleDateString(isPt ? "pt-PT" : "en-US")}
          </p>

          <div className="mt-12 space-y-8 text-text-secondary">
            <div>
              <h2 className="font-heading text-2xl font-medium text-brand">
                {isPt ? "1. O que são cookies" : "1. What are cookies"}
              </h2>
              <p className="mt-4 leading-relaxed">
                {isPt
                  ? "Cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo quando visita um website. Eles são amplamente utilizados para fazer o website funcionar ou para melhorar a experiência do utilizador."
                  : "Cookies are small text files that are stored on your device when you visit a website. They are widely used to make the website work or to improve the user experience."}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-brand">
                {isPt ? "2. Como utilizamos cookies" : "2. How we use cookies"}
              </h2>
              <p className="mt-4 leading-relaxed">
                {isPt
                  ? "Utilizamos cookies essenciais para o funcionamento do website. Não utilizamos cookies para recolher dados pessoais sem o seu consentimento."
                  : "We use essential cookies for the functioning of the website. We do not use cookies to collect personal data without your consent."}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-brand">
                {isPt ? "3. Gestão de cookies" : "3. Cookie management"}
              </h2>
              <p className="mt-4 leading-relaxed">
                {isPt
                  ? "Pode gerir ou desativar cookies através das configurações do seu navegador. No entanto, algumas funcionalidades do website podem não funcionar corretamente se desativar determinados cookies."
                  : "You can manage or disable cookies through your browser settings. However, some website features may not work properly if you disable certain cookies."}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-brand">
                {isPt ? "4. Contacto" : "4. Contact"}
              </h2>
              <p className="mt-4 leading-relaxed">
                {isPt
                  ? "Para questões sobre esta política, entre em contacto:"
                  : "For questions about this policy, please contact:"}
                <br />
                <a href="mailto:mario.ferreira-4651l@advogados.oa.pt" className="text-brand hover:underline">
                  mario.ferreira-4651l@advogados.oa.pt
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}