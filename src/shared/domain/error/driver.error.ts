import { DatabaseError } from './database.error';

export class DriverError extends DatabaseError {
  constructor(message: string) {
    super(message);
    this.name = 'InfrastructureError DriverError';
  }
}
