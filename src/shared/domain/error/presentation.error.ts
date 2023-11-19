import { IError } from '../../../interfaces';

export class PresentationError extends Error implements IError {
  status: number;
  constructor(message: string, status = 500) {
    super(message);
    this.name = 'PresentationError';
    this.status = status;
  }
}
