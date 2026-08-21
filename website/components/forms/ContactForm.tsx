// src/components/forms/ContactForm.tsx
"use client";

import { useState } from "react";
import { ArrowUpRight, Check, AlertCircle, Loader2, Calendar, Clock } from "lucide-react";

interface ContactFormProps {
  dict: {
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
      date: string;
      time: string;
      timeOptions: Record<string, string>;
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
  locale: string;
}

export function ContactForm({ dict, locale }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    date: "",
    time: "",
    message: "",
  });

  // Data mínima para agendamento (hoje + 2 dias úteis)
  const getMinDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 2);
    return date.toISOString().split("T")[0];
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const subjectMap: Record<string, string> = {
      civil: "Direito Civil",
      commercial: "Direito Comercial e Societário",
      labor: "Direito do Trabalho",
      family: "Direito da Família e Sucessões",
      criminal: "Direito Penal",
      realEstate: "Direito Imobiliário",
      other: "Outro assunto",
    };

    const timeMap: Record<string, string> = {
      morning: "Manhã (9h - 13h)",
      afternoon: "Tarde (14h - 18h)",
      evening: "Fim de tarde (18h - 19h)",
    };

    const subjectLabel = subjectMap[formData.subject] || formData.subject;
    const timeLabel = timeMap[formData.time] || formData.time;

    try {
      const formPayload = new FormData();
      formPayload.append("access_key", "c3612a7b-3ab1-4aba-ae8c-8185df487a68");
      formPayload.append("subject", `[Mário Ferreira Advogados] Agendamento de Consulta - ${subjectLabel}`);
      formPayload.append("from_name", "Site Mário Ferreira Advogados");
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone || "Não informado");
      formPayload.append("service", subjectLabel);
      formPayload.append("date", formData.date);
      formPayload.append("time", timeLabel);
      formPayload.append("message", formData.message || "Sem observações adicionais");
      formPayload.append("locale", locale);
      formPayload.append("redirect", "https://mariaferreira.pt/obrigado");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          date: "",
          time: "",
          message: "",
        });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="rounded-xl bg-green-50 p-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Check size={24} />
        </div>
        <p className="mt-4 text-base font-medium text-green-800">
          {dict.success.title}
        </p>
        <p className="mt-2 text-sm text-green-700">
          {dict.success.description}
        </p>
      </div>
    );
  }

  if (submitStatus === "error") {
    return (
      <div className="rounded-xl bg-red-50 p-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
          <AlertCircle size={24} />
        </div>
        <p className="mt-4 text-base font-medium text-red-800">
          {dict.error.title}
        </p>
        <p className="mt-2 text-sm text-red-700">
          {dict.error.description}
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="mt-4 text-sm font-medium text-red-600 hover:text-red-800"
        >
          {locale === "pt" ? "Tentar novamente" : "Try again"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      {/* Nome */}
      <div>
        <label htmlFor="name" className="text-sm font-medium text-brand">
          {dict.fields.name}
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-3 text-text-primary transition-colors placeholder:text-text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          placeholder={dict.fields.namePlaceholder}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="text-sm font-medium text-brand">
          {dict.fields.email}
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-3 text-text-primary transition-colors placeholder:text-text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          placeholder={dict.fields.emailPlaceholder}
        />
      </div>

      {/* Telefone */}
      <div>
        <label htmlFor="phone" className="text-sm font-medium text-brand">
          {dict.fields.phone}
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-3 text-text-primary transition-colors placeholder:text-text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          placeholder={dict.fields.phonePlaceholder}
        />
      </div>

      {/* Área de Interesse */}
      <div>
        <label htmlFor="subject" className="text-sm font-medium text-brand">
          {dict.fields.subject}
        </label>
        <select
          id="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-3 text-text-primary transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        >
          <option value="">{dict.fields.subjectPlaceholder}</option>
          {Object.entries(dict.fields.subjectOptions).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>

      {/* Data Preferencial */}
      <div>
        <label htmlFor="date" className="text-sm font-medium text-brand">
          {dict.fields.date}
        </label>
        <div className="relative mt-1.5">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-dark">
            <Calendar size={18} />
          </div>
          <input
            type="date"
            id="date"
            required
            min={getMinDate()}
            value={formData.date}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-white pl-10 pr-4 py-3 text-text-primary transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:hover:opacity-70"
          />
        </div>
        <p className="mt-1 text-xs text-text-muted">
          {locale === "pt" 
            ? "📅 Selecione uma data (mínimo 2 dias úteis de antecedência)" 
            : "📅 Select a date (minimum 2 business days in advance)"}
        </p>
      </div>

      {/* Horário Preferencial */}
      <div>
        <label htmlFor="time" className="text-sm font-medium text-brand">
          {dict.fields.time}
        </label>
        <div className="relative mt-1.5">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-dark">
            <Clock size={18} />
          </div>
          <select
            id="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-white pl-10 pr-4 py-3 text-text-primary transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          >
            <option value="">{locale === "pt" ? "Selecione um horário" : "Select a time"}</option>
            {Object.entries(dict.fields.timeOptions).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="message" className="text-sm font-medium text-brand">
          {dict.fields.message}
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-3 text-text-primary transition-colors placeholder:text-text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          placeholder={dict.fields.messagePlaceholder}
        />
      </div>

      {/* Botão Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-bold text-white transition-all hover:bg-brand-dark disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            {dict.fields.sending}
          </>
        ) : (
          <>
            {dict.fields.submit}
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </>
        )}
      </button>

      <p className="text-center text-xs text-text-muted">
        {dict.privacy}{" "}
        <a href={`/${locale}/privacy-policy`} className="text-brand hover:underline">
          {dict.privacyLink}
        </a>
      </p>
    </form>
  );
}