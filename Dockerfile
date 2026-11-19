FROM nginx:1.31.9-alpine

COPY .vitepress/dist/. /usr/share/nginx/html