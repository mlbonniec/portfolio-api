import { EnvironmentHelper } from '@helpers/environment';
import { ConfigModuleOptions } from '@nestjs/config';

export const environmentConfig: ConfigModuleOptions = {
  validate: EnvironmentHelper.validate
}
