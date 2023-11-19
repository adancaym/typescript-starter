import { IError } from '../../../interfaces';

export class ApplicationError extends Error implements IError {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApplicationError';
    this.status = status;
  }
}
