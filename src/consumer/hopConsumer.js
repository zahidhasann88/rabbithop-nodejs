const { createConnection } = require('../../utils/rabbitmq');
const config = require('../../config/rabbitmq');

async function hopConsumer() {
  let connection, channel;
  try {
    ({ connection, channel } = await createConnection());

    console.log('Rabbit ears perked, waiting for hops...');

    channel.consume(config.queue, (msg) => {
      if (msg !== null) {
        console.log(`Caught a hop: ${msg.content.toString()}`);
        channel.ack(msg);
      }
    });
  } catch (error) {
    console.error('Error in HopConsumer:', error);
  }
}

if (require.main === module) {
  hopConsumer();
}

module.exports = hopConsumer;