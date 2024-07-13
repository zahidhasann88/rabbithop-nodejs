require('dotenv').config();

module.exports = {
  url: process.env.RABBITMQ_URL,
  exchange: process.env.RABBITMQ_EXCHANGE,
  queue: process.env.RABBITMQ_QUEUE,
  routingKey: process.env.RABBITMQ_ROUTING_KEY
};