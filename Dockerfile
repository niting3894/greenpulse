# Runtime-only image (assumes .next is already built)
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy only what's needed to run
COPY .next ./.next
COPY public ./public
COPY package.json ./
COPY node_modules ./node_modules

EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --spider -q http://localhost:3000 || exit 1

CMD ["npm", "start"]
