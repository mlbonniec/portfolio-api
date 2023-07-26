/* eslint-disable max-len */
import { HttpException, HttpStatus } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { EnvironmentHelper } from '@helpers/environment';
import { Environment } from '@/types/environments';

/**
 * Represents an encapsulation of an HTTPException to allow for throwing exceptions.
 * @since 1.0.0
 * @example
 * const exception = new Exception('User already exists', 'The user already exists', HttpStatus.CONFLICT);
 */
class Exception {
  constructor(
    private readonly message: string,
    private readonly description: string,
    private readonly status: HttpStatus
  ) {}

  /**
   * Returns the exception message.
   * @returns {string} The exception message.
   * @since 1.0.0
   * @example
   * const exception = new Exception('User already exists', 'The user already exists', HttpStatus.CONFLICT);
   * exception.getMessage(); // 'User already exists'
   */
  public getMessage(): string {
    return this.message;
  }

  /**
   * Returns the exception status.
   * @returns {HttpStatus} The exception status.
   * @since 1.0.0
   * @example
   * const exception = new Exception('User already exists', 'The user already exists', HttpStatus.CONFLICT);
   * exception.getStatus(); // HttpStatus.CONFLICT
   */
  public getStatus(): HttpStatus {
    return this.status;
  }

  /**
   * Throws the exception.
   * When the environment is not production, the validation errors are shown.
   * @param {ValidationError[] | undefined} errors The validation errors.
   * @returns {never} The exception.
   * @since 1.0.0
   * @example
   * const exception = new Exception('User already exists', 'The user already exists', HttpStatus.CONFLICT);
   * exception.throw();
   * exception.throw([
   *   new ValidationError()
   * ]);
   */
  public throw(errors: ValidationError[] | undefined = undefined): never {
    const showValidationErrors: boolean = errors && EnvironmentHelper.getEnvironment() !== Environment.PRODUCTION;
    const body: object = HttpException.createBody({
      message: this.message,
      description: this.description,
      status: this.status,
      ...(showValidationErrors && {
        validation: errors.flatMap(e => Object.values(e.constraints))
      })
    });

    throw new HttpException(body, this.status);
  }
}

/**
 * Contains all the exceptions.
 * @since 1.0.0
 * @example
 * Exceptions.INTERNAL_SERVER_ERROR.throw();
 */
export abstract class Exceptions {
  // 4xx
  public static readonly BAD_REQUEST: Exception = new Exception('Bad request', 'Invalid or missing request parameters.', HttpStatus.BAD_REQUEST);
  public static readonly UNAUTHORIZED: Exception = new Exception('Unauthorized', 'You\'re not authorized to access this resource.', HttpStatus.UNAUTHORIZED);
  public static readonly NOT_FOUND: Exception = new Exception('Not found', 'The resource you\'re trying to access may not exists.', HttpStatus.NOT_FOUND);

  // 5xx
  public static readonly INTERNAL_SERVER_ERROR: Exception = new Exception('Internal server error', 'An internal server error has occurred.', HttpStatus.INTERNAL_SERVER_ERROR);
}
