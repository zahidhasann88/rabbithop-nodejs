# RabbitHop

RabbitHop is a Node.js application demonstrating the use of RabbitMQ for message queuing. It implements a simple producer-consumer pattern using a direct exchange.

## Prerequisites

- Node.js (version 12 or higher)
- npm (usually comes with Node.js)
- RabbitMQ server (running locally or accessible remotely)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rabbithop.git
cd rabbithop-nodejs
```
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add the following configuration:
```bash
RABBITMQ_URL=amqp://localhost
RABBITMQ_EXCHANGE=hop_exchange
RABBITMQ_QUEUE=hop_queue
RABBITMQ_ROUTING_KEY=hop
```

Adjust the `RABBITMQ_URL` if your RabbitMQ server is not running locally.

## Usage

### Running the entire application

To run both the producer and consumer in a single process:
```bash
npm start
```

This will start the consumer, wait for a second, and then run the producer once.

### Running producer and consumer separately

1. Start the consumer in one terminal:
```bash
npm run consume
```
2. In another terminal, run the producer:
```bash
npm run produce
```

The consumer will continuously listen for messages, while the producer will send a single message and then exit.

## Project Structure
rabbithop/
├── config/
│   └── rabbitmq.js      # RabbitMQ configuration
├── src/
│   ├── producer/
│   │   └── hopProducer.js   # Message producer
│   ├── consumer/
│   │   └── hopConsumer.js   # Message consumer
│   └── utils/
│       └── rabbitmq.js  # RabbitMQ connection utility
├── index.js             # Main application entry point
├── package.json
└── README.md

## Customization

- Modify the message content in `src/producer/hopProducer.js`
- Adjust the RabbitMQ configuration in `.env` and `config/rabbitmq.js`
- Extend the consumer logic in `src/consumer/hopConsumer.js` to process messages as needed

## Troubleshooting

- Ensure the RabbitMQ server is running and accessible
- Check the RabbitMQ URL in the `.env` file
- Verify that the required ports are open if using a remote RabbitMQ server

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License