import { DomainError } from './domain.error';

export class DtoError extends DomainError {
  constructor(message: string) {
    super(message, 400);
    this.name = 'DomainError DtoError';
  }
}
