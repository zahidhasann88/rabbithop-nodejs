const hopProducer = require('./src/producer/hopProducer');
const hopConsumer = require('./src/consumer/hopConsumer');

async function main() {
  await hopConsumer();
  await new Promise(resolve => setTimeout(resolve, 1000));
  await hopProducer();
}

main().catch(console.error);