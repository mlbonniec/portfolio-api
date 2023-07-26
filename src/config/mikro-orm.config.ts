import { config } from 'dotenv';
import { defineConfig } from '@mikro-orm/mongodb';
import { EnvironmentHelper } from '@helpers/environment';
import { Environment } from '@/types/environments';
import { Options } from '@mikro-orm/mongodb';
import { ProjectEntity } from '@objects/projects/project.entity';

config();

export const mikroOrmConfig: Options = defineConfig({
  entities: [
    ProjectEntity
  ],
  clientUrl: EnvironmentHelper.getMongoUri(),
  debug: EnvironmentHelper.getEnvironment() === Environment.DEVELOPMENT
});
