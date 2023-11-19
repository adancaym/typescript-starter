import { DomainError } from './domain.error';

export class ModelError extends DomainError {
  constructor(message: string) {
    super(message, 400);
    this.name = 'DomainError ModelError';
  }
}
