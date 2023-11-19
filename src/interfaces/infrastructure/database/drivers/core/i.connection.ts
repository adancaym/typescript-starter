import { IQuery } from '../../../server';

export interface IConnection {
  connect(): Promise<this>;
  execute<C extends IQuery, R>(query: string, params?: C): Promise<R>;
  destroy(): Promise<void>;
  buildQuery<C>(query: string, params?: C): string;
  close(): Promise<void>;
}
