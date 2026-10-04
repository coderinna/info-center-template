
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY vite.config.js index.html ./
COPY public ./public
COPY src ./src

ENV NODE_ENV=production
ENV GENERATE_SOURCEMAP=false  

ARG DATE_TAG
ARG GITHUB_SHA

ENV VITE_DATE_TAG=$DATE_TAG
ENV VITE_GITHUB_SHA=$GITHUB_SHA

RUN npm run build

FROM nginx:alpine AS prod
WORKDIR /app

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
