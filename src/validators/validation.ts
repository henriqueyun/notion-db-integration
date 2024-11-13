import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
export * from 'class-validator';

export const validationPipe = async (schema: new () => {}, requestObject: object): Promise<true | { errors: ValidationError[] }> => {

  const transformedClass: any = plainToInstance(schema, requestObject);
  const errors = await validate(transformedClass, { whitelist: true, forbidNonWhitelisted: true });

  if (errors.length > 0) {
    return { errors };
  }
  return true;
};

export const hasErrors = (validation: boolean | { errors: ValidationError[] }) => {
  return typeof validation !== 'boolean' && validation.errors
}