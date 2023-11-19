import { PresentationError } from './presentation.error';

export class ServerError extends PresentationError {
  constructor(message: string, status: number) {
    super(message, status);
    this.name = 'PresentationError ServerError';
  }
}
