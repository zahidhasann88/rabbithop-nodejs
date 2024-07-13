const amqp = require('amqplib');
const config = require('../config/rabbitmq');

async function createConnection() {
  try {
    const connection = await amqp.connect(config.url);
    const channel = await connection.createChannel();
    await channel.assertExchange(config.exchange, 'direct', { durable: false });
    await channel.assertQueue(config.queue, { durable: false });
    await channel.bindQueue(config.queue, config.exchange, config.routingKey);
    return { connection, channel };
  } catch (error) {
    console.error('Error creating RabbitMQ connection:', error);
    throw error;
  }
}

module.exports = { createConnection };