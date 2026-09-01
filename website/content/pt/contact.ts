// src/content/pt/contact.ts
export const contact = {
  title: "Vamos defender os seus direitos.",
  description:
    "Entre em contacto connosco para agendar uma consulta ou obter mais informações sobre os nossos serviços.",
  form: {
    title: "Agende a sua Consulta",
    subtitle: "Preencha os dados abaixo e entraremos em contacto para confirmar o seu agendamento.",
    fields: {
      name: "Nome *",
      namePlaceholder: "O seu nome",
      email: "Email *",
      emailPlaceholder: "seu@email.com",
      phone: "Telefone *",
      phonePlaceholder: "+351 XXX XXX XXX",
      subject: "Área de Interesse *",
      subjectPlaceholder: "Selecione uma área",
      subjectOptions: {
        civil: "Direito Civil",
        commercial: "Direito Comercial e Societário",
        labor: "Direito do Trabalho",
        family: "Direito da Família e Sucessões",
        criminal: "Direito Penal",
        realEstate: "Direito Imobiliário",
        other: "Outro assunto",
      },
      date: "Data Preferencial *",
      time: "Horário Preferencial",
      timeOptions: {
        morning: "Manhã (9h - 13h)",
        afternoon: "Tarde (14h - 18h)",
        evening: "Fim de tarde (18h - 19h)",
      },
      message: "Mensagem / Detalhes",
      messagePlaceholder: "Descreva resumidamente a sua situação ou dúvida...",
      submit: "Agendar Consulta",
      sending: "A agendar...",
    },
    success: {
      title: "Pedido de Agendamento Enviado!",
      description: "Entraremos em contacto dentro de 24h para confirmar a sua consulta.",
    },
    error: {
      title: "Erro ao enviar pedido",
      description: "Por favor, tente novamente mais tarde.",
    },
    privacy: "Ao enviar, concorda com a nossa",
    privacyLink: "Política de Privacidade",
  },
  info: {
    title: "Como podemos ajudá-lo?",
    description:
      "Estamos disponíveis para agendar uma consulta presencial ou remota. Respondemos a todos os pedidos  até 24h úteis.",
    address: {
      label: "Morada",
      value: "Rua José Florindo, 44C\n2750-400 Cascais",
    },
    phone: {
      label: "Telefone",
      value: "+351 214 848 390",
    },
    email: {
      label: "Email",
      value: "mario.ferreira-4651l@advogados.oa.pt",
    },
    hours: {
      label: "Horário",
      value: "Segunda a Sexta: 9:00 - 19:00",
    },
  },
} as const;