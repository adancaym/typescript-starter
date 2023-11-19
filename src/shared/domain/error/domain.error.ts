import { IError } from '../../../interfaces';

export class DomainError extends Error implements IError {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = 'DomainError';
    this.status = status;
  }
}
