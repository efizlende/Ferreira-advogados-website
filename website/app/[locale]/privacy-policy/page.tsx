// src/app/[locale]/privacy-policy/page.tsx
import { Container } from "@/components/ui/Container";
import { Locale } from "@/lib/i18n";

interface PrivacyPolicyPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function PrivacyPolicyPage({ params }: PrivacyPolicyPageProps) {
  const { locale } = await params;
  const isPt = locale === "pt";

  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-medium text-brand sm:text-5xl">
            {isPt ? "Política de Privacidade" : "Privacy Policy"}
          </h1>

          <p className="mt-4 text-sm text-text-muted">
            {isPt ? "Última atualização: " : "Last updated: "}
            {new Date().toLocaleDateString(isPt ? "pt-PT" : "en-US")}
          </p>

          <div className="mt-12 space-y-8 text-text-secondary">
            <div>
              <h2 className="font-heading text-2xl font-medium text-brand">
                {isPt ? "1. Introdução" : "1. Introduction"}
              </h2>
              <p className="mt-4 leading-relaxed">
                {isPt
                  ? "O Mário Ferreira Advogados valoriza a privacidade e a proteção de dados dos seus clientes e visitantes. Esta política descreve como recolhemos, utilizamos, conservamos e protegemos as suas informações pessoais, em conformidade com o Regulamento (UE) 2016/679 (RGPD) e a legislação nacional aplicável."
                  : "Mário Ferreira Advogados values the privacy and data protection of its clients and visitors. This policy describes how we collect, use, retain and protect your personal information, in accordance with Regulation (EU) 2016/679 (GDPR) and applicable national legislation."}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-brand">
                {isPt ? "2. Responsável pelo Tratamento" : "2. Data Controller"}
              </h2>
              <p className="mt-4 leading-relaxed">
                {isPt
                  ? "O responsável pelo tratamento dos seus dados pessoais é:"
                  : "The controller of your personal data is:"}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
                <li><strong>Mário Ferreira Advogados</strong></li>
                <li>{isPt ? "Morada" : "Address"}: Rua José Florindo, 44C, 2750-400 Cascais</li>
                <li>{isPt ? "Email" : "Email"}: mario.ferreira-4651l@advogados.oa.pt</li>
                <li>{isPt ? "Telefone" : "Phone"}: +351 214 848 390</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-brand">
                {isPt ? "3. Dados que recolhemos" : "3. Data we collect"}
              </h2>
              <p className="mt-4 leading-relaxed">
                {isPt
                  ? "Recolhemos os dados que nos fornece diretamente, designadamente:"
                  : "We collect the data you provide directly, namely:"}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
                <li>{isPt ? "Nome" : "Name"}</li>
                <li>{isPt ? "Email" : "Email"}</li>
                <li>{isPt ? "Número de telefone" : "Phone number"}</li>
                <li>{isPt ? "Área de interesse jurídico" : "Legal area of interest"}</li>
                <li>{isPt ? "Mensagens enviadas através do formulário de contacto" : "Messages sent through the contact form"}</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-brand">
                {isPt ? "4. Finalidades e Fundamento de Licitude" : "4. Purposes and Lawful Basis"}
              </h2>
              <p className="mt-4 leading-relaxed">
                {isPt
                  ? "Os seus dados são tratados para as seguintes finalidades e com os seguintes fundamentos de licitude:"
                  : "Your data is processed for the following purposes and on the following lawful bases:"}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
                <li>
                  {isPt
                    ? "Responder aos seus pedidos e questões — com base no seu consentimento (art.º 6.º, n.º 1, al. a) do RGPD)."
                    : "Respond to your requests and questions — based on your consent (Art. 6(1)(a) GDPR)."}
                </li>
                <li>
                  {isPt
                    ? "Prestar os serviços jurídicos solicitados — com base na execução de contrato ou em diligências pré-contratuais (art.º 6.º, n.º 1, al. b) do RGPD)."
                    : "Provide the requested legal services — based on performance of a contract or pre-contractual steps (Art. 6(1)(b) GDPR)."}
                </li>
                <li>
                  {isPt
                    ? "Cumprir obrigações legais a que o escritório está sujeito — com base no cumprimento de obrigação legal (art.º 6.º, n.º 1, al. c) do RGPD)."
                    : "Comply with legal obligations to which the firm is subject — based on compliance with a legal obligation (Art. 6(1)(c) GDPR)."}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-brand">
                {isPt ? "5. Prazos de Conservação" : "5. Retention Periods"}
              </h2>
              <p className="mt-4 leading-relaxed">
                {isPt
                  ? "Os seus dados pessoais são conservados apenas pelo período necessário à prossecução das finalidades para que foram recolhidos, ou pelo prazo legalmente exigido. Em particular:"
                  : "Your personal data is retained only for the period necessary to pursue the purposes for which it was collected, or for the legally required period. In particular:"}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
                <li>
                  {isPt
                    ? "Pedidos de contacto não convertidos em clientes: até 12 meses após o último contacto."
                    : "Contact requests not converted into clients: up to 12 months after the last contact."}
                </li>
                <li>
                  {isPt
                    ? "Dados de clientes e processos: pelo prazo legal aplicável à atividade de advocacia (em regra, 5 anos após o encerramento do processo, sem prejuízo de prazos superiores legalmente previstos)."
                    : "Client and case data: for the legal period applicable to law practice (as a rule, 5 years after case closure, without prejudice to longer legally provided periods)."}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-brand">
                {isPt ? "6. Subcontratantes e Destinatários" : "6. Processors and Recipients"}
              </h2>
              <p className="mt-4 leading-relaxed">
                {isPt
                  ? "Para a prestação dos serviços e funcionamento do website, recorremos a subcontratantes que tratam dados por nossa conta e sob a nossa instrução, designadamente:"
                  : "To provide services and operate the website, we use processors that process data on our behalf and under our instructions, namely:"}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
                <li>{isPt ? "Serviços de alojamento e infraestrutura do website." : "Website hosting and infrastructure services."}</li>
                <li>{isPt ? "Serviço de envio de formulários de contacto (Web3Forms)." : "Contact form submission service (Web3Forms)."}</li>
                <li>{isPt ? "Serviços de mapas incorporados (Google Maps)." : "Embedded maps services (Google Maps)."}</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                {isPt
                  ? "Os seus dados não são vendidos nem cedidos a terceiros para fins de marketing."
                  : "Your data is not sold or transferred to third parties for marketing purposes."}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-brand">
                {isPt ? "7. Direitos do Titular" : "7. Data Subject Rights"}
              </h2>
              <p className="mt-4 leading-relaxed">
                {isPt
                  ? "Enquanto titular dos dados, tem os seguintes direitos:"
                  : "As a data subject, you have the following rights:"}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
                <li>{isPt ? "Direito de acesso aos seus dados pessoais." : "Right of access to your personal data."}</li>
                <li>{isPt ? "Direito de retificação de dados inexatos ou incompletos." : "Right to rectification of inaccurate or incomplete data."}</li>
                <li>{isPt ? "Direito de apagamento (direito ao esquecimento)." : "Right to erasure (right to be forgotten)."}</li>
                <li>{isPt ? "Direito de limitação do tratamento." : "Right to restriction of processing."}</li>
                <li>{isPt ? "Direito de oposição ao tratamento." : "Right to object to processing."}</li>
                <li>{isPt ? "Direito à portabilidade dos dados." : "Right to data portability."}</li>
                <li>{isPt ? "Direito de retirar o consentimento a qualquer momento, sem comprometer a licitude do tratamento efetuado com base no consentimento previamente dado." : "Right to withdraw consent at any time, without affecting the lawfulness of processing based on consent previously given."}</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                {isPt
                  ? "Para exercer qualquer destes direitos, contacte-nos através do email mario.ferreira-4651l@advogados.oa.pt."
                  : "To exercise any of these rights, contact us at mario.ferreira-4651l@advogados.oa.pt."}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-brand">
                {isPt ? "8. Direito de Reclamação à CNPD" : "8. Right to Complain to the CNPD"}
              </h2>
              <p className="mt-4 leading-relaxed">
                {isPt
                  ? "Sem prejuízo de qualquer outro meio de recurso administrativo ou judicial, tem o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD), autoridade de controlo competente em Portugal:"
                  : "Without prejudice to any other administrative or judicial remedy, you have the right to lodge a complaint with the Portuguese Data Protection Authority (CNPD), the competent supervisory authority in Portugal:"}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
                <li><strong>CNPD</strong> — Comissão Nacional de Proteção de Dados</li>
                <li>{isPt ? "Website" : "Website"}: https://www.cnpd.pt</li>
                <li>{isPt ? "Morada" : "Address"}: Av. D. Carlos I, 134, 1.º, 1200-651 Lisboa</li>
                <li>{isPt ? "Telefone" : "Phone"}: +351 213 928 400</li>
                <li>{isPt ? "Email" : "Email"}: geral@cnpd.pt</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-brand">
                {isPt ? "9. Segurança" : "9. Security"}
              </h2>
              <p className="mt-4 leading-relaxed">
                {isPt
                  ? "Adotamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra acesso não autorizado, perda, destruição ou alteração."
                  : "We adopt appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, destruction or alteration."}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-brand">
                {isPt ? "10. Contacto" : "10. Contact"}
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