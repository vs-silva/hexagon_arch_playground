import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HubOpenApiDocumentation } from './hub-open-api-documentation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //OpenAPI Swagger
  HubOpenApiDocumentation(app);

  await app.listen(3000);
}
bootstrap();
