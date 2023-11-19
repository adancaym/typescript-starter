import { DatabaseError } from './database.error';

export class EntityError extends DatabaseError {
  constructor(message: string) {
    super(message);
    this.name = 'InfrastructureError EntityError';
  }
}
