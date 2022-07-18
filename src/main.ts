import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HubOpenApiDocumentation } from './hub-open-api-documentation';
import { HubMessageBrokerSubscriber } from './hub-message-broker/subscribers';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //OpenAPI Swagger
  HubOpenApiDocumentation(app);

  //Microservices
  HubMessageBrokerSubscriber(
    app,
    ['amqp://admin:root@localhost:5672'],
    'hub_products',
    true,
    true,
  );
  await app.startAllMicroservices();

  await app.listen(3000);
}
bootstrap();
