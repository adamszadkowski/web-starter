FROM node:latest as node

WORKDIR /app

COPY ./ /app/

RUN npm install

RUN npm run build

FROM nginx:1.13

COPY --from=node /app/dist/ /usr/share/nginx/html

COPY deployment/nginx.conf /etc/nginx/conf.d/default.conf
