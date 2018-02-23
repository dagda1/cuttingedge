FROM node:9
FROM nginx:1.13

ADD ./ssl /etc/nginx/ssl

ADD ./nginx_nossl.conf /etc/nginx/
ADD ./nginx_ssl.conf /etc/nginx/
ADD ../dist /static

ADD ./setupconf.sh .
RUN ./setupconf.sh