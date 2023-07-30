import { registerDecorator, ValidationOptions, buildMessage } from 'class-validator';

/**
 * Slug validation decorator.
 * A string is considered a slug if it contains only lowercase letters, numbers, and hyphens.
 * @remarks Here is the regex used: `/^[a-z0-9]+(?:(?:-|_)+[a-z0-9]+)*$/`
 * @param {ValidationOptions} validationOptions Validation options.
 */
export function IsSlug(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string): void {
    registerDecorator({
      name: 'isSlug',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any): boolean {
          if (typeof value !== 'string')
            return false;
          return /^[a-z0-9]+(?:(?:-|_)+[a-z0-9]+)*$/.test(value);
        },
        defaultMessage: buildMessage(
          eachPrefix => eachPrefix + '$property must be a slug.'
        )
      }
    });
  };
}
