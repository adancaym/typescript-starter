import { DatabaseError } from './database.error';

export class RepositoryError extends DatabaseError {
  constructor(message: string) {
    super(message);
    this.name = 'InfrastructureError RepositoryError';
  }
}
