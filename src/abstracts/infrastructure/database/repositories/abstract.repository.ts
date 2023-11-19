import { IDataSource, IQuery, IRepository } from '../../../../interfaces';

export abstract class AbstractRepository implements IRepository {
  datasource: IDataSource;
  constructor(dataSource: IDataSource) {
    this.datasource = dataSource;
    this.datasource.initialize();
  }

  create: <C, R>(data: C) => Promise<R> = async <C, R>(data: C) => {
    const result = await this.datasource.insert<C, R>(data);
    return result;
  };
  findOne: <R>(id: string) => Promise<R> = async <R>(id: string) => {
    const result = await this.datasource.selectOne<{ id: string }, R>({ id });
    return result;
  };

  findAll: <Q extends IQuery, R>(q: Q) => Promise<R[]> = async <
    Q extends IQuery,
    R,
  >(
    q: Q,
  ) => {
    const result = await this.datasource.select<Q, R>(q);
    return result;
  };

  update: <U, R>(data: U) => Promise<R> = async <U, R>(data: U) => {
    const result = await this.datasource.update<U, R>(data);
    return result;
  };
  delete: <Q extends IQuery>(q: Q) => Promise<void> = async <Q extends IQuery>(
    q: Q,
  ) => {
    await this.datasource.delete(q);
  };
}
