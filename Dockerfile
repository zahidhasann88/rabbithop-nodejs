FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV RABBITMQ_URL=amqp://localhost
ENV RABBITMQ_EXCHANGE=hop_exchange
ENV RABBITMQ_QUEUE=hop_queue
ENV RABBITMQ_ROUTING_KEY=hop

CMD ["npm", "start"]
