import { IQuery } from '../../../server';
import { IEntity } from '../../entities';
import { IConnection } from './i.connection';

export interface IDriver {
  database: string;
  connection: IConnection;
  connect(): Promise<boolean>;

  // transactional operations

  initTransaction(): Promise<boolean>;

  commitTransaction(): Promise<boolean>;

  rollbackTransaction(): Promise<boolean>;

  // transactional operations

  sanitize(params: IQuery): IQuery;

  query<R>(sql: string, params?: IQuery): Promise<R>;

  close(): Promise<boolean>;

  // basic CRUD operations

  insertQuery<C extends IEntity>(table: string, params: C): Promise<string>;

  selectQuery<Q extends IQuery>(table: string, q: Q): Promise<string>;

  selectOneQuery<Q extends IQuery>(table: string, q: Q): Promise<string>;

  updateQuery<U extends IEntity>(table: string, data: U): Promise<string>;

  deleteQuery<Q extends IQuery>(table: string, q: Q): Promise<string>;

  // basic DDL operations

  createTableQuery(table: string, columns: string[]): Promise<string>;

  dropTableQuery(table: string): Promise<string>;

  createDatabaseQuery(database: string): Promise<string>;

  dropDatabaseQuery(database: string): Promise<string>;

  useDatabaseQuery(database: string): Promise<string>;

  showDatabasesQuery(): Promise<string>;

  showTablesQuery(): Promise<string>;

  showColumnsQuery(table: string): Promise<string>;

  showIndexQuery(table: string): Promise<string>;

  showTriggersQuery(table: string): Promise<string>;

  showFunctionsQuery(): Promise<string>;

  showProceduresQuery(): Promise<string>;

  showProcesslistQuery(): Promise<string>;

  showStatusQuery(): Promise<string>;

  showVariablesQuery(): Promise<string>;

  showEnginesQuery(): Promise<string>;

  showStorageEnginesQuery(): Promise<string>;

  showTableStatusQuery(table: string): Promise<string>;

  showCreateTableQuery(table: string): Promise<string>;

  showGrantsQuery(): Promise<string>;

  showPrivilegesQuery(): Promise<string>;

  showCreateDatabaseQuery(database: string): Promise<string>;

  showCreateFunctionQuery(): Promise<string>;

  showCreateProcedureQuery(): Promise<string>;

  showCreateTriggerQuery(): Promise<string>;

  showCreateViewQuery(): Promise<string>;

  showIndexesQuery(): Promise<string>;

  showKeysQuery(): Promise<string>;

  showWarningsQuery(): Promise<string>;

  showErrorsQuery(): Promise<string>;

  showBinlogEventsQuery(): Promise<string>;

  showCharacterSetQuery(): Promise<string>;

  showCollationQuery(): Promise<string>;

  showCreateEventQuery(): Promise<string>;

  showCreateUserQuery(): Promise<string>;

  showMasterStatusQuery(): Promise<string>;

  showOpenTablesQuery(): Promise<string>;

  showPluginsQuery(): Promise<string>;

  showPrivileges(): Promise<string>;

  showProcedureStatusQuery(): Promise<string>;

  showProfileQuery(): Promise<string>;

  showProfilesQuery(): Promise<string>;

  showSlaveHostsQuery(): Promise<string>;

  showSlaveStatusQuery(): Promise<string>;

  showTableTypesQuery(): Promise<string>;

  showTriggers(): Promise<string>;

  showVariables(): Promise<string>;

  showWarnings(): Promise<string>;

  showErrors(): Promise<string>;

  showStatus(): Promise<string>;

  showProcesslist(): Promise<string>;

  showOpenTables(): Promise<string>;

  showMasterStatus(): Promise<string>;

  showSlaveStatus(): Promise<string>;

  showBinaryLogs(): Promise<string>;

  showCharacterSets(): Promise<string>;
}
