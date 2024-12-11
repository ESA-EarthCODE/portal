FROM nginx:alpine

COPY .vitepress/dist/. /usr/share/nginx/html