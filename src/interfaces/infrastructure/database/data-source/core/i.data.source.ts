import { IQuery } from '../../../server';
import { IDriver } from '../../drivers';
import { IEntity } from '../../entities';

export interface IDataSource {
  table: string;
  driver: IDriver;

  initialize(): Promise<this>;

  connect(): Promise<this>;

  destroy(): Promise<void>;

  close(): Promise<boolean>;

  insert<C extends IEntity, R extends IEntity>(data: C): Promise<R>;

  select<Q extends IQuery, R extends IEntity>(q: Q): Promise<R[]>;

  selectOne<Q extends IQuery, R extends IEntity>(q: Q): Promise<R>;

  update<U extends IEntity, R extends IEntity>(data: U): Promise<R>;

  delete<Q extends IQuery>(q: Q): Promise<void>;
}
