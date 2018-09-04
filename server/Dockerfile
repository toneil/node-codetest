FROM node:8

# Create app directory
WORKDIR /usr/src/

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY app app
COPY public public

EXPOSE 8080
CMD [ "yarn", "start" ]
