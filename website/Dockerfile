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

ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}

RUN pnpm build


# ─── Stage 3: Runtime ─────────────────────────────────────
FROM node:20-alpine AS runtime

RUN apk add --no-cache libc6-compat curl

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3002
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# ─── FIX: @swc/helpers via pnpm virtual store ─────────────
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/.pnpm/@swc+helpers@*/node_modules/@swc ./node_modules/@swc

USER nextjs

EXPOSE 3002



CMD ["node", "server.js"]