FROM nginx:1.26

ADD ./nginx/ssl /etc/nginx/ssl

ADD ./nginx/nginx_no_ssl.conf /etc/nginx/nginx_no_ssl.conf
ADD ./nginx/nginx_ssl.conf /etc/nginx/nginx_ssl.conf

RUN mkdir /tmp/logs
RUN touch /tmp/logs/nginx.error.log

ADD ./dist /cutting

ADD ./nginx/setupconf.sh .

RUN chmod +x ./setupconf.sh

RUN mkdir /etc/nginx/logs/
RUN touch /etc/nginx/logs/error.log

RUN chown -R root:root /etc/nginx/ssl
RUN chmod -R 600 /etc/nginx/ssl
RUN chown -R root:root /var/cache/nginx
RUN chown -R nobody:nogroup /var/cache/nginx
RUN chmod -R 600 /var/cache/nginx

RUN ./setupconf.sh