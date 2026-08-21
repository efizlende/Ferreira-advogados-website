# 📚 Documentação Técnica Completa

## Mário Ferreira Advogados - Website Corporativo

---

**Versão:** 1.0.0  
**Data:** 21 de Agosto de 2026  
**Status:** Produção ✅  
**Cliente:** Mário Ferreira Advogados  
**Desenvolvedor:** Ernesto Uanicela  

---

## 📑 Índice

1. [Visão Geral do Projeto](#1-visão-geral-do-projeto)
2. [Arquitetura do Sistema](#2-arquitetura-do-sistema)
3. [Estrutura de Pastas](#3-estrutura-de-pastas)
4. [Identidade Visual](#4-identidade-visual)
5. [Páginas e Funcionalidades](#5-páginas-e-funcionalidades)
6. [Sistema Multilíngue](#6-sistema-multilíngue)
7. [Componentes Reutilizáveis](#7-componentes-reutilizáveis)
8. [SEO e Performance](#8-seo-e-performance)
9. [Instalação e Desenvolvimento](#9-instalação-e-desenvolvimento)
10. [Deploy e Produção](#10-deploy-e-produção)
11. [Manutenção e Evolução](#11-manutenção-e-evolução)
12. [Anexos](#12-anexos)

---

## 1. Visão Geral do Projeto

### 1.1 Descrição

O website corporativo do **Mário Ferreira Advogados** é uma plataforma digital profissional que representa um escritório de advocacia multidisciplinar com mais de 46 anos de experiência em Cascais e no Distrito de Lisboa.

### 1.2 Objetivos Estratégicos

| Objetivo | Descrição |
|----------|-----------|
| **Institucional** | Apresentar a história, missão, valores e experiência do escritório |
| **Serviços** | Detalhar as 6 áreas de atuação com páginas individuais |
| **Confiança** | Transmitir credibilidade através de design, conteúdo e prova social |
| **Conversão** | Facilitar o contacto via CTAs e formulário de agendamento |
| **Presença Digital** | Website moderno, responsivo e bilíngue (PT/EN) |
| **SEO** | Estrutura otimizada para mecanismos de busca |

### 1.3 Público-Alvo

| Tipo | Descrição |
|------|-----------|
| **Clientes Particulares** | Pessoas que procuram apoio jurídico em diversas áreas |
| **Empresas** | Negócios que necessitam de serviços jurídicos |
| **Clientes Internacionais** | Estrangeiros com questões jurídicas em Portugal |

### 1.4 Proposta de Valor

- **Experiência:** +46 anos de prática jurídica
- **Proximidade:** Atendimento próximo e sénior
- **Excelência:** Compromisso com a qualidade técnica
- **Integridade:** Ética, transparência e rigor
- **Soluções Personalizadas:** Estratégias adaptadas a cada cliente

---

## 2. Arquitetura do Sistema

### 2.1 Stack Tecnológica





### 2.2 Diagrama de Arquitetura

┌─────────────────────────────────────────────────────────────────────┐
│ USER BROWSER │
└─────────────────────────────────────────────────────────────────────┘
│
▼
┌─────────────────────────────────────────────────────────────────────┐
│ NEXT.JS APPLICATION │
├─────────────────────────────────────────────────────────────────────┤
│ ┌───────────────┐ ┌───────────────┐ ┌───────────────────────┐ │
│ │ Middleware │ │ Locale │ │ Static Generation │ │
│ │ (i18n) │──│ Routing │──│ (SSG) │ │
│ └───────────────┘ └───────────────┘ └───────────────────────┘ │
├─────────────────────────────────────────────────────────────────────┤
│ ┌───────────────┐ ┌───────────────┐ ┌───────────────────────┐ │
│ │ Components │ │ Content │ │ API Routes │ │
│ │ (UI/UX) │ │ (i18n) │ │ (Contact) │ │
│ └───────────────┘ └───────────────┘ └───────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
│
▼
┌─────────────────────────────────────────────────────────────────────┐
│ EXTERNAL SERVICES │
├─────────────────────────────────────────────────────────────────────┤
│ ┌───────────────┐ ┌───────────────┐ ┌───────────────────────┐ │
│ │ Web3Forms │ │ Google Maps │ │ Google Drive (PDFs) │ │
│ │ (Emails) │ │ (Embed) │ │ (Insights) │ │
│ └───────────────┘ └───────────────┘ └───────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘





### 2.3 Fluxo de Dados

Utilizador acede ao website
│
▼

Middleware redireciona para o locale correto (pt/en)
│
▼

Servidor gera a página estática (SSG)
│
▼

Conteúdo é carregado do dicionário (content/)
│
▼

Componentes renderizam o layout
│
▼

Interações do utilizador (cliques, formulários)
│
▼

Formulário → API Route → Web3Forms → Email
│
▼

Página de obrigado é exibida



---


---

## 4. Identidade Visual

### 4.1 Sistema de Cores

```css
/* Design Tokens - globals.css */

@theme {
  /* Brand */
  --color-brand: #592C34;
  --color-brand-dark: #432128;
  --color-brand-light: #70424A;

  /* Accent */
  --color-gold: #D9BC66;
  --color-gold-dark: #B99D4F;
  --color-gold-light: #E7D59A;

  /* Neutral */
  --color-background: #FFFFFF;
  --color-surface: #FAF9F7;
  --color-surface-muted: #F4F2EF;

  /* Text */
  --color-text-primary: #2B2425;
  --color-text-secondary: #6F6768;
  --color-text-muted: #948C8D;
  --color-text-inverse: #FFFFFF;

  /* Borders */
  --color-border: #E5E0DD;
  --color-border-light: #EFECE9;
}



// src/lib/i18n.ts
export const locales = ["pt", "en"] as const;
export const defaultLocale = "pt" as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
};

export const localeFlags: Record<Locale, string> = {
  pt: "🇵🇹",
  en: "🇬🇧",
};