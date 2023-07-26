import type { OpenAPIObject } from '@nestjs/swagger';
import type { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { validationPipeConfig } from '@config/validation-pipe.config';
import { EnvironmentHelper } from '@helpers/environment';
import { Environment } from '@/types/environments';
import { SwaggerModule } from '@nestjs/swagger';
import { customOptions, documentBuilder } from '@config/swagger.config';

(async function (): Promise<void> {
  const app: INestApplication = await NestFactory.create(AppModule);
  const document: OpenAPIObject = SwaggerModule.createDocument(app, documentBuilder);

  switch (EnvironmentHelper.getEnvironment()) {
    case Environment.DEVELOPMENT:
      SwaggerModule.setup('docs', app, document, customOptions);
      break;
    default:
      break;
  }

  app.useGlobalPipes(new ValidationPipe(validationPipeConfig));

  await app.listen(EnvironmentHelper.getPort());
})();
