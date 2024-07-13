# RabbitHop

RabbitHop is a Node.js application demonstrating the use of RabbitMQ for message queuing. It implements a simple producer-consumer pattern using a direct exchange.

## Prerequisites

- Docker
- Docker Compose

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rabbithop.git
cd rabbithop-nodejs
```

## Usage

### Running with Docker

1. Build and start the Docker containers:
```bash
docker-compose up --build
```

This will start both the RabbitMQ server and the Node.js application. The RabbitMQ management interface will be accessible at `http://localhost:15672` with the default username and password (`guest` / `guest`).

### Running Locally

If you prefer to run the application locally without Docker, follow these steps:

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory and add the following configuration:
```bash
    RABBITMQ_URL=amqp://localhost
    RABBITMQ_EXCHANGE=hop_exchange
    RABBITMQ_QUEUE=hop_queue
    RABBITMQ_ROUTING_KEY=hop
```

Adjust the `RABBITMQ_URL` if your RabbitMQ server is not running locally.

3. Start the RabbitMQ server locally if it's not already running.

4. Running the entire application:
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
```plaintext
rabbithop-nodejs/
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
├── Dockerfile
├── docker-compose.yml
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