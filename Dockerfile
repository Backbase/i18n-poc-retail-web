FROM repo.backbase.com/backbase-docker-releases/web-base:2.0.7

ARG application_name

COPY ./dist/apps/${application_name} /statics
