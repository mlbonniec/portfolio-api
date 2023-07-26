import type { ValidationPipeOptions } from '@nestjs/common';
import { Exceptions } from '@helpers/exceptions';
import { ValidationError } from 'class-validator';

export const validationPipeConfig: ValidationPipeOptions = {
  forbidNonWhitelisted: true,
  whitelist: true,
  exceptionFactory: (errors: ValidationError[]): never => {
    Exceptions.BAD_REQUEST.throw(errors);
  }
}
