import { Environment, EnvironmentVariables } from '@/types/environments';
import { plainToInstance } from 'class-transformer';
import { validateSync, ValidationError } from 'class-validator';

export abstract class EnvironmentHelper {
  /**
   * Validate the environment variables from the .env file.
   * @param config The nestjs configuration object as a plain object.
   */
  static validate(config: Record<string, unknown>): EnvironmentVariables {
    const validatedConfig: EnvironmentVariables = plainToInstance(EnvironmentVariables, config);
    const errors: ValidationError[] = validateSync(validatedConfig);

    if (errors.length > 0)
      throw new Error(errors.toString());

    return validatedConfig;
  }

  /**
   * Get the port from the environment variables.
   * @returns The port from the environment variables as a number.
   */
  static getPort(): number {
    return Number(process.env.PORT);
  }

  /**
   * Get the environment from the environment variables.
   * @returns The environment from the environment variables as an Environment.
   */
  static getEnvironment(): Environment {
    return Environment[process.env.NODE_ENV.toUpperCase()] ?? Environment.DEVELOPMENT;
  }
}
