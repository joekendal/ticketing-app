import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    // Only as we're extending built-in
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}
