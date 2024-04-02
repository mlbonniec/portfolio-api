import { DocumentBuilder, OpenAPIObject, SwaggerCustomOptions } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';
import { author, description, version } from '../../package.json';

export enum DocumentationTags {
  INFORMATIONS = 'Informations',
  PROJECTS = 'Projects',
}

export const documentBuilder: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
  .setTitle('Mathis LE BONNIEC - Portfolio API')
  .setDescription(description)
  .setVersion(version)
  .addBasicAuth()
  .addTag(DocumentationTags.INFORMATIONS, 'Get the API informations.')
  .addTag(DocumentationTags.PROJECTS, 'Manages all the projects of the application.')
  .setContact(author.name, author.url, author.email)
  .build();

export const customOptions: SwaggerCustomOptions = {
  customSiteTitle: 'Mathis LE BONNIEC - API Documentation',
  customCss: `
  @media (prefers-color-scheme: dark) {
    ${new SwaggerTheme().getBuffer(SwaggerThemeNameEnum.DARK)}
  }
  `
}
