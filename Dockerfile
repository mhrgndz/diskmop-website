FROM node:20-bookworm-slim AS deps

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./
RUN npm ci

FROM node:20-bookworm-slim AS builder

WORKDIR /usr/src/app

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM node:20-bookworm-slim

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/.next/standalone ./
COPY --from=builder /usr/src/app/.next/static ./.next/static
COPY --from=builder /usr/src/app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
