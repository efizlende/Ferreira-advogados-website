# ─────────────────────────────────────────────────────────
# RiseON Website — Next.js
# Multi-stage build com output standalone
# ─────────────────────────────────────────────────────────

# ─── Stage 1: Dependencies ────────────────────────────────
FROM node:20-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile


# ─── Stage 2: Builder ─────────────────────────────────────
FROM node:20-alpine AS builder

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN corepack enable && corepack prepare pnpm@latest --activate

ENV NEXT_TELEMETRY_DISABLED=1

# Build args (se precisares de NEXT_PUBLIC_*)
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}

RUN pnpm build

# ✨ A MÁGICA: Cria uma pasta limpa com as dependências de produção
RUN pnpm --filter=. --prod deploy /prod-deps


# ─── Stage 3: Runtime ─────────────────────────────────────
FROM node:20-alpine AS runtime

RUN apk add --no-cache libc6-compat

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3002
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copia o standalone e os estáticos
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# ✨ A SOLUÇÃO: Usa o node_modules limpo e portátil do pnpm deploy
COPY --from=builder --chown=nextjs:nodejs /prod-deps/node_modules ./node_modules

USER nextjs

EXPOSE 3002

CMD ["node", "server.js"]