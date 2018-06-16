FROM node:8

# 유저 생성(app)
RUN useradd --user-group --create-home --shell /bin/false app

# App config
ENV HOME /home/app

# App Environments
ENV PORT=1226 \
    HOST=docker.for.mac.localhost \
    DB_PORT=3306 \
    DB_USER=root \
    DB_PASSWORD=0000 \
    DB_SCHEMA=test \
    DEV=${DEV}

# External port setting
EXPOSE ${PORT}

# Project Copy
ADD . ${HOME}

# Poject authority
RUN chown -R app:app ${HOME}/*

# Image runner
USER app

# move Working directory
WORKDIR ${HOME}

# Module install
RUN npm install

# Service run
CMD [ "npm", "start" ]