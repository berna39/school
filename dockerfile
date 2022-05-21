FROM node:16-alpine

WORKDIR /var/terminator/backend

COPY . .

RUN npn install

CMD ["npm", "start"]

EXPOSE 4000







