const { createConnection } = require('../../utils/rabbitmq');
const config = require('../../config/rabbitmq');

async function hopProducer() {
  let connection, channel;
  try {
    ({ connection, channel } = await createConnection());

    const message = 'Hop along, little rabbit!';
    channel.publish(config.exchange, config.routingKey, Buffer.from(message));
    console.log(`Hopped: ${message}`);
  } catch (error) {
    console.error('Error in HopProducer:', error);
  } finally {
    setTimeout(() => {
      if (connection) connection.close();
      process.exit(0);
    }, 1000);
  }
}

if (require.main === module) {
  hopProducer();
}

module.exports = hopProducer;