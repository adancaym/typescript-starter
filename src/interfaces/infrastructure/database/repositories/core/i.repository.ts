import { IQuery } from '../../../server';
import { IDataSource } from '../../data-source';

export interface IRepository {
  datasource: IDataSource;
  create: <C, R>(data: C) => Promise<R>;
  findOne: <R>(id: string) => Promise<R>;
  findAll: <Q extends IQuery, R>(q: Q) => Promise<R[]>;
  update: <U, R>(data: U) => Promise<R>;
  delete: <Q extends IQuery>(q: Q) => Promise<void>;
}
