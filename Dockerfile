##
## digiserve/ab-web
##
## This is our web server for our incoming connections. We bundle
## nginx with our UI resources necessary for running our platform.
##
## Docker Commands:
## ---------------
## $ docker build -t digiserve/ab-web:master .
## $ docker push digiserve/ab-web:master
##

FROM nginx

LABEL com.datadoghq.ad.check_names='["nginx"]'
LABEL com.datadoghq.ad.init_configs='[{}]'
LABEL com.datadoghq.ad.instances='[{"nginx_status_url": "http://%%host%%:81/nginx_status/"}]'
LABEL com.datadoghq.ad.logs='[{"source": "nginx"}]'

HEALTHCHECK --interval=10s --timeout=5s CMD curl -f http://127.0.0.1:81/health-check || exit 1

ENV NGINX_ENTRYPOINT_QUIET_LOGS=1

# Default ENV values
ENV UPSTREAM_APP_PORT=1337
ENV UPSTREAM_APP_HOST=api_sails
# or app?
# Upgrade alpine packages (useful for security fixes)
RUN apk upgrade --no-cache

# Core configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Configuration files, loaded by nginx.conf into `http` section
COPY conf.d/*.conf /etc/nginx/conf.d/

# Configuration templates, copied to conf.d at runtime after applying envsubst
COPY conf.d/*.template /etc/nginx/templates/

COPY ./assets /app/assets

# Ensure folder exists where app specific conf files are mounted
RUN mkdir -p /etc/nginx/server-conf.d/
