import { InfrastructureError } from './infrastructure.error';

export class DatabaseError extends InfrastructureError {
  constructor(message: string) {
    super(message, 500);
    this.name = 'InfrastructureError DatabaseError';
  }
}
