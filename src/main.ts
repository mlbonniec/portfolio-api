import type { OpenAPIObject } from '@nestjs/swagger';
import type { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { validationPipeConfig } from '@config/validation-pipe.config';
import { EnvironmentHelper } from '@helpers/environment';
import { SwaggerModule } from '@nestjs/swagger';
import { customOptions, documentBuilder } from '@config/swagger.config';

class Application {
  private app: INestApplication;
  private readonly port: number;

  constructor() {
    this.port = EnvironmentHelper.getPort();
  }

  public async run(): Promise<number> {
    await this.init();
    await this.listen();

    return this.port;
  }

  private async init(): Promise<void> {
    this.app = await NestFactory.create(AppModule);

    this.setupApplication();
    this.setupSwagger();
  }

  private async listen(): Promise<void> {
    return this.app.listen(this.port);
  }

  private setupApplication(): void {
    this.app.useGlobalPipes(new ValidationPipe(validationPipeConfig));
    this.app.enableVersioning();
    this.app.enableCors();
  }

  /**
   * @description This method is used to remove the public security from the swagger documentation.
   * @see https://github.com/nestjs/swagger/issues/892
   * @private
   */
  private setupSwagger(): void {
    const document: OpenAPIObject = SwaggerModule.createDocument(this.app, documentBuilder);

    Object.values((document as OpenAPIObject).paths).forEach((path: any): void => {
      Object.values(path).forEach((method: any): void => {
        if (Array.isArray(method.security) && method.security.includes(null))
          method.security = [];
      });
    });

    SwaggerModule.setup('docs', this.app, document, customOptions);
  }
}

new Application().run()
  .then(port => Logger.log(`Application is running on port ${port}`))
  .catch(error => Logger.error('Application failed to start.', error));
