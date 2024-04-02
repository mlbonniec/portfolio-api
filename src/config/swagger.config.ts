import { DocumentBuilder, OpenAPIObject, SwaggerCustomOptions } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';

export enum DocumentationTags {
  INFORMATIONS = 'Informations',
  PROJECTS = 'Projects',
}

export const documentBuilder: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
  .setTitle('Mathis LE BONNIEC - Portfolio API')
  .setDescription('The API for Mathis LE BONNIEC porfolio.')
  .setVersion('1.0')
  .addTag(DocumentationTags.INFORMATIONS, 'Get the API informations.')
  .addTag(DocumentationTags.PROJECTS, 'Manages all the projects of the application.')
  .setContact('Mathis LE BONNIEC', 'https://github.com/mlbonniec', 'mathislbonniec@gmail.com')
  .build();

export const customOptions: SwaggerCustomOptions = {
  customSiteTitle: 'Mathis LE BONNIEC - API Documentation',
  customCss: `
  @media (prefers-color-scheme: dark) {
    ${new SwaggerTheme().getBuffer(SwaggerThemeNameEnum.DARK)}
  }
  `
}
