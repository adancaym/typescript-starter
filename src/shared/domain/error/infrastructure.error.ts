import { IError } from '../../../interfaces';

export class InfrastructureError extends Error implements IError {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = 'InfrastructureError';
    this.status = status;
  }
}
