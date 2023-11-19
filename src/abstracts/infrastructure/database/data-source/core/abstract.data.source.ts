import {
  IDataSource,
  IDriver,
  IEntity,
  IQuery,
} from '../../../../../interfaces';
import { DatabaseError } from '../../../../../shared';

export abstract class AbstractDataSource implements IDataSource {
  table: string;
  driver: IDriver;

  constructor(table: string, driver: IDriver) {
    this.table = table;
    this.driver = driver;
  }

  async operation<R>(operation: () => Promise<R>): Promise<R> {
    return this.driver.connect().then(async () => {
      try {
        const start = await this.driver.initTransaction();
        if (!start) {
          throw new DatabaseError('Transaction not started');
        }
        const result: R = await operation();
        const commit = await this.driver.commitTransaction();
        if (!commit) {
          throw new DatabaseError('Transaction not commited');
        }
        return result;
      } catch (error) {
        const rollback = await this.driver.rollbackTransaction();
        if (!rollback) {
          throw new DatabaseError('Transaction not rolled back');
        }
        throw error;
      } finally {
        this.driver.close();
      }
    });
  }

  async insert<C extends IEntity, R extends IEntity>(params: C): Promise<R> {
    const query: string = await this.driver.insertQuery<C>(this.table, params);
    return this.operation<R>(() => this.driver.query<R>(query));
  }

  async select<Q extends IQuery, R>(q: Q): Promise<R[]> {
    const query: string = await this.driver.selectQuery<Q>(this.table, q);
    return this.operation<R[]>(() => this.driver.query<R[]>(query));
  }

  async selectOne<Q extends IQuery, R>(q: Q): Promise<R> {
    const query: string = await this.driver.selectOneQuery<Q>(this.table, q);
    return this.operation<R>(() => this.driver.query<R>(query));
  }

  async update<U, R>(data: U): Promise<R> {
    const query: string = await this.driver.updateQuery<U>(this.table, data);
    return this.operation<R>(() => this.driver.query<R>(query));
  }
  async delete<Q extends IQuery>(q: Q): Promise<void> {
    const query: string = await this.driver.deleteQuery<Q>(this.table, q);
    return this.operation<void>(() => this.driver.query<void>(query));
  }

  initialize(): Promise<this> {
    return this.connect();
  }
  connect(): Promise<this> {
    return this.driver.connect().then(() => this);
  }

  close(): Promise<boolean> {
    return this.driver
      .close()
      .then(() => true)
      .catch(() => false);
  }
  destroy(): Promise<void> {
    return this.driver.close().then(() => undefined);
  }
}
