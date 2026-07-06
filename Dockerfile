# ── Stage 1 : Build Astro ────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --prefer-offline

COPY . .
RUN npm run build

# ── Stage 2 : Serve with Nginx ───────────────────────────────────
FROM nginx:1.27-alpine

# Config Nginx custom
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie le build statique
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
