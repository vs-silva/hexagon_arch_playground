import { INestApplication, INestMicroservice } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export function HubMessageBrokerSubscriber(
  app: INestApplication,
  serviceURLs: string[],
  serviceQueue: string,
  serviceNoAck: boolean,
  serviceQueueIsDurable: boolean,
): INestMicroservice {
  if (!app) {
    return;
  }

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: serviceURLs || [],
      queue: serviceQueue || '',
      noAck: serviceNoAck || true,
      queueOptions: {
        durable: serviceQueueIsDurable || false,
      },
    },
  });
}
