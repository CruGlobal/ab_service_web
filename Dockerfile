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
## Multi-platform / supply chain: use buildx with --provenance=true --sbom=true when pushing to a registry.
## Or use: $ DOCKER_ARGS="-t digiserve/ab-web:master --push" ./build.sh
##

FROM nginx

# OCI labels for Docker Hub / Scout
LABEL org.opencontainers.image.title="AppBuilder Web" \
   org.opencontainers.image.description="Web server and UI resources for AppBuilder platform" \
   org.opencontainers.image.licenses="BSD-2-Clause"

COPY . /app

RUN rm /etc/nginx/conf.d/default.conf && cp /app/default.conf /etc/nginx/conf.d/default.conf && \
   rm -f /etc/nginx/conf.d/custom_log.conf && cp /app/custom_log.conf /etc/nginx/conf.d/custom_log.conf
