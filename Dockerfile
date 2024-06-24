FROM nginx:alpine

COPY pages/.vitepress/dist/. /usr/share/nginx/html