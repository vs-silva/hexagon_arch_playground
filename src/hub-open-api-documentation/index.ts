import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function HubOpenApiDocumentation(app: INestApplication) {
  if (!app) {
    return;
  }

  const options = new DocumentBuilder()
    .setTitle('Hub-title')
    .setDescription('hub-description')
    .setVersion('1')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
