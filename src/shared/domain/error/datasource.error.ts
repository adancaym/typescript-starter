import { DatabaseError } from './database.error';

export class DataSourceError extends DatabaseError {
  constructor(message: string) {
    super(message);
    this.name = 'InfrastructureError DataSourceError';
  }
}
