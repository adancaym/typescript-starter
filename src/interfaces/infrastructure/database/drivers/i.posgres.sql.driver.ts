import { IDriver } from './core';

export interface IPosgresSqlDriver extends IDriver {
  database: 'postgres';
}
