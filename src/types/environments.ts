import { IsEnum, IsNumberString, IsString } from 'class-validator';

export enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  TEST = 'test'
}

export class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNumberString()
  PORT: number;

  @IsString()
  @IsString()
  MONGO_URI: string;
}
