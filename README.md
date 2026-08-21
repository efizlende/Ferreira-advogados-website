
---

## 🎨 Identidade Visual

### Cores

| Nome | Hex | Utilização |
|------|-----|------------|
| **Brand** | `#592C34` | Cor principal (navbar, botões, títulos) |
| **Brand Dark** | `#432128` | Footer, hover states |
| **Brand Light** | `#70424A` | Variações |
| **Gold** | `#D9BC66` | Destaques, ícones, detalhes premium |
| **Gold Dark** | `#B99D4F` | Hover, elementos secundários |
| **Gold Light** | `#E7D59A` | Fundos suaves |
| **Background** | `#FFFFFF` | Fundo principal |
| **Surface** | `#FAF9F7` | Secções alternadas |
| **Text Primary** | `#2B2425` | Texto principal |
| **Text Secondary** | `#6F6768` | Texto secundário |

### Tipografia

| Elemento | Fonte | Peso |
|----------|-------|------|
| **Títulos** | Cormorant Garamond | 400-700 |
| **Corpo** | Manrope | 400-700 |

---

## 📄 Páginas do Website

### 1. Home Page (`/pt` | `/en`)
- Hero com slideshow de imagens
- Apresentação do escritório
- Estatísticas (20+ anos, 6 áreas, 100% compromisso)
- Lista das 6 áreas de atuação
- Valores e diferenciais
- Pré-visualização da equipa
- Depoimentos de clientes
- FAQ (4 perguntas)
- Artigos (3 destaques)
- Call to Action final

### 2. Sobre Nós (`/pt/about` | `/en/about`)
- História do escritório
- Missão e Visão
- Valores institucionais
- Linha do tempo

### 3. Áreas de Atuação (`/pt/practice-areas` | `/en/practice-areas`)
- Lista das 6 áreas com ícones
- Páginas individuais com:
  - Descrição detalhada
  - Áreas de intervenção
  - Abordagem do escritório
  - CTA para agendamento

### 4. Equipa (`/pt/team` | `/en/team`)
- Lista de membros
- Perfis individuais com:
  - Biografia completa
  - Especialidades
  - Formação académica
  - Experiência profissional
  - Prémios e reconhecimentos
  - Contacto direto

### 5. Contacto (`/pt/contact` | `/en/contact`)
- Formulário de agendamento com:
  - Nome, Email, Telefone
  - Área de interesse
  - Data preferencial (mínimo 2 dias úteis)
  - Horário preferencial (Manhã/Tarde/Fim de tarde)
  - Mensagem adicional
- Informações de contacto
- Google Maps integrado (full-screen com overlay)

### 6. Insights (`/pt/insights` | `/en/insights`)
- Artigos jurídicos
- Links para PDFs no Google Drive
- Categorias e tags

### 7. FAQ (`/pt/faq` | `/en/faq`)
- 6 perguntas frequentes
- Accordion interativo

### 8. Páginas Legais
- Política de Privacidade
- Política de Cookies

### 9. Página de Obrigado (`/pt/obrigado` | `/en/obrigado`)
- Confirmação de envio do formulário

---

## ✨ Funcionalidades Premium

| Funcionalidade | Descrição |
|----------------|-----------|
| **Multilíngue** | PT/EN com Language Switcher no Navbar |
| **Slideshow Hero** | Imagens com transição suave, auto-play, controles |
| **Scroll Progress** | Barra de progresso no topo |
| **Quick Navigation** | Navegação lateral para secções |
| **Scroll to Top** | Botão flutuante com animação |
| **Shimmer Effect** | Animação de brilho no CTA |
| **Agendamento** | Formulário com data e horário |
| **Responsividade** | Mobile, Tablet, Desktop |
| **SEO** | Metadados, sitemap, hreflang |

---

## 🚀 Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 20.x ou superior
- PNPM 8.x ou superior

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/mario-ferreira-advogados.git
cd mario-ferreira-advogados

# Instalar dependências
pnpm install

# Iniciar ambiente de desenvolvimento
pnpm run dev

# Build de produção
pnpm run build

# Iniciar servidor de produção
pnpm run start