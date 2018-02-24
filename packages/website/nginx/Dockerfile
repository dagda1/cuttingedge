FROM nginx:1.13

ADD ./nginx/ssl /etc/nginx/ssl

ADD ./nginx/nginx_no_ssl.conf /etc/nginx/nginx_no_ssl.conf
ADD ./nginx/nginx_ssl.conf /etc/nginx/nginx_ssl.conf
ADD ./dist /cutting

ADD ./nginx/setupconf.sh .

RUN chmod +x ./setupconf.sh

RUN ./setupconf.sh