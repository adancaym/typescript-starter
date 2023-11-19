import { IConnection, IDriver, IEntity, IQuery } from '../../../../interfaces';

export class Driver implements IDriver {
  database: string;
  connection: IConnection;
  constructor(database: string, connection: IConnection) {
    this.database = database;
    this.connection = connection;
  }
  async initTransaction(): Promise<boolean> {
    try {
      const query = 'START TRANSACTION';
      await this.connection.execute(query);
      return true;
    } catch (error) {
      return false;
    }
  }
  async commitTransaction(): Promise<boolean> {
    try {
      const query = 'COMMIT';
      await this.connection.execute(query);
      return true;
    } catch (error) {
      return false;
    }
  }
  async rollbackTransaction(): Promise<boolean> {
    try {
      const query = 'ROLLBACK';
      await this.connection.execute(query);
      return true;
    } catch (error) {
      return false;
    }
  }

  async connect(): Promise<boolean> {
    try {
      await this.connection.connect();
      return true;
    } catch (error) {
      return false;
    }
  }
  async query<R>(sql: string, params?: IQuery): Promise<R> {
    if (!params) {
      return this.connection.execute<IQuery, R>(sql);
    }
    return this.connection.execute<IQuery, R>(sql, this.sanitize(params));
  }

  sanitize(params: IQuery): IQuery {
    const sanitizedParams: IQuery = {};
    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined) {
        sanitizedParams[key] = params[key];
      }
      if (params[key] !== null) {
        sanitizedParams[key] = params[key];
      }
    });
    return sanitizedParams;
  }

  async close(): Promise<boolean> {
    try {
      await this.connection.close();
      return true;
    } catch (error) {
      return false;
    }
  }

  async insertQuery<C extends IEntity>(
    table: string,
    params: C,
  ): Promise<string> {
    if (!params) {
      throw new Error('params is undefined');
    }
    return `INSERT INTO ${table} (${Object.keys(params).join(
      ', ',
    )}) VALUES (${Object.keys(params)
      .map((key) => `:${key}`)
      .join(', ')})`;
  }

  async selectQuery<Q extends IQuery>(table: string, q: Q): Promise<string> {
    return `SELECT * FROM ${table} WHERE ${Object.keys(q).map(
      (key) => `${key} = :${key}`,
    )}}`;
  }
  async selectOneQuery<Q extends IQuery>(table: string, q: Q): Promise<string> {
    return `SELECT * FROM ${table} WHERE ${Object.keys(q).map(
      (key) => `${key} = :${key}`,
    )}}`;
  }
  async updateQuery<U extends IEntity, R>(
    table: string,
    data: U,
  ): Promise<string> {
    return `UPDATE ${table} SET ${Object.keys(data).map(
      (key) => `${key} = :${key}`,
    )}}`;
  }
  async deleteQuery<Q extends IQuery>(table: string, q: Q): Promise<string> {
    return `DELETE FROM ${table} WHERE ${Object.keys(q).map(
      (key) => `${key} = :${key}`,
    )}}`;
  }
  async createTableQuery(table: string, columns: string[]): Promise<string> {
    return `CREATE TABLE ${table} (${columns.join(', ')})`;
  }

  async dropTableQuery(table: string): Promise<string> {
    return `DROP TABLE ${table}`;
  }
  async createDatabaseQuery(database: string): Promise<string> {
    return `CREATE DATABASE ${database}`;
  }
  async dropDatabaseQuery(database: string): Promise<string> {
    return `DROP DATABASE ${database}`;
  }
  async useDatabaseQuery(database: string): Promise<string> {
    return `USE ${database}`;
  }
  async showDatabasesQuery(): Promise<string> {
    return `SHOW DATABASES`;
  }
  async showTablesQuery(): Promise<string> {
    return 'SHOW TABLES';
  }
  async showColumnsQuery(table: string): Promise<string> {
    return `SHOW COLUMNS FROM ${table}`;
  }
  async showIndexQuery(table: string): Promise<string> {
    return `SHOW INDEX FROM ${table}`;
  }
  async showTriggersQuery(table: string): Promise<string> {
    return `SHOW TRIGGERS FROM ${table}`;
  }
  async showFunctionsQuery(): Promise<string> {
    return `SHOW FUNCTION STATUS`;
  }
  async showProceduresQuery(): Promise<string> {
    return `SHOW PROCEDURE STATUS`;
  }
  async showProcesslistQuery(): Promise<string> {
    return `SHOW PROCESSLIST`;
  }
  async showStatusQuery(): Promise<string> {
    return `SHOW STATUS`;
  }
  async showVariablesQuery(): Promise<string> {
    return `SHOW VARIABLES`;
  }
  async showEnginesQuery(): Promise<string> {
    return `SHOW ENGINES`;
  }
  async showStorageEnginesQuery(): Promise<string> {
    return `SHOW STORAGE ENGINES`;
  }

  async showTableStatusQuery(table: string): Promise<string> {
    return `SHOW TABLE STATUS FROM ${table}`;
  }
  async showCreateTableQuery(table: string): Promise<string> {
    return `SHOW CREATE TABLE ${table}`;
  }
  async showGrantsQuery(): Promise<string> {
    return `SHOW GRANTS`;
  }
  async showPrivilegesQuery(): Promise<string> {
    return `SHOW PRIVILEGES`;
  }
  async showCreateDatabaseQuery(database: string): Promise<string> {
    return `SHOW CREATE DATABASE ${database}`;
  }
  async showCreateFunctionQuery(): Promise<string> {
    return `SHOW CREATE FUNCTION`;
  }
  async showCreateProcedureQuery(): Promise<string> {
    return `SHOW CREATE PROCEDURE`;
  }
  async showCreateTriggerQuery(): Promise<string> {
    return `SHOW CREATE TRIGGER`;
  }
  async showCreateViewQuery(): Promise<string> {
    return `SHOW CREATE VIEW`;
  }
  async showIndexesQuery(): Promise<string> {
    return `SHOW INDEXES`;
  }
  async showKeysQuery(): Promise<string> {
    return `SHOW KEYS`;
  }
  async showWarningsQuery(): Promise<string> {
    return `SHOW WARNINGS`;
  }
  async showErrorsQuery(): Promise<string> {
    return `SHOW ERRORS`;
  }
  async showBinlogEventsQuery(): Promise<string> {
    return `SHOW BINLOG EVENTS`;
  }
  async showCharacterSetQuery(): Promise<string> {
    return `SHOW CHARACTER SET`;
  }
  async showCollationQuery(): Promise<string> {
    return `SHOW COLLATION`;
  }
  async showCreateEventQuery(): Promise<string> {
    return `SHOW CREATE EVENT`;
  }
  async showCreateUserQuery(): Promise<string> {
    return `SHOW CREATE USER`;
  }
  async showMasterStatusQuery(): Promise<string> {
    return `SHOW MASTER STATUS`;
  }
  async showOpenTablesQuery(): Promise<string> {
    return `SHOW OPEN TABLES`;
  }
  async showPluginsQuery(): Promise<string> {
    return `SHOW PLUGINS`;
  }
  async showPrivileges(): Promise<string> {
    return `SHOW PRIVILEGES`;
  }
  async showProcedureStatusQuery(): Promise<string> {
    return `SHOW PROCEDURE STATUS`;
  }
  async showProfileQuery(): Promise<string> {
    return `SHOW PROFILE`;
  }
  async showProfilesQuery(): Promise<string> {
    return `SHOW PROFILES`;
  }
  async showSlaveHostsQuery(): Promise<string> {
    return `SHOW SLAVE HOSTS`;
  }
  async showSlaveStatusQuery(): Promise<string> {
    return `SHOW SLAVE STATUS`;
  }
  async showTableTypesQuery(): Promise<string> {
    return `SHOW TABLE TYPES`;
  }
  async showTriggers(): Promise<string> {
    return `SHOW TRIGGERS`;
  }
  async showVariables(): Promise<string> {
    return `SHOW VARIABLES`;
  }
  async showWarnings(): Promise<string> {
    return `SHOW WARNINGS`;
  }
  async showErrors(): Promise<string> {
    return `SHOW ERRORS`;
  }
  async showStatus(): Promise<string> {
    return `SHOW STATUS`;
  }
  async showProcesslist(): Promise<string> {
    return `SHOW PROCESSLIST`;
  }
  async showOpenTables(): Promise<string> {
    return `SHOW OPEN TABLES`;
  }
  async showMasterStatus(): Promise<string> {
    return `SHOW MASTER STATUS`;
  }
  async showSlaveStatus(): Promise<string> {
    return `SHOW SLAVE STATUS`;
  }
  async showBinaryLogs(): Promise<string> {
    return `SHOW BINARY LOGS`;
  }
  async showCharacterSets(): Promise<string> {
    return `SHOW CHARACTER SETS`;
  }

  async createUserQuery(user: string, password: string): Promise<string> {
    return `CREATE USER ${user} IDENTIFIED BY ${password}`;
  }
  async grantQuery(
    user: string,
    password: string,
    database: string,
    table: string,
  ): Promise<string> {
    return `GRANT ALL PRIVILEGES ON ${database}.${table} TO ${user}@localhost IDENTIFIED BY ${password}`;
  }

  async revokeQuery(
    user: string,
    password: string,
    database: string,
    table: string,
  ): Promise<string> {
    return `REVOKE ALL PRIVILEGES ON ${database}.${table} FROM ${user}@localhost IDENTIFIED BY ${password}`;
  }
  async flushQuery(): Promise<string> {
    return `FLUSH PRIVILEGES`;
  }

  async ifExistsTableQuery(table: string): Promise<string> {
    return `IF EXISTS ${table}`;
  }

  async ifExistsDatabaseQuery(database: string): Promise<string> {
    return `IF EXISTS ${database}`;
  }

  async createDatabaseIfNotExistsQuery(database: string): Promise<string> {
    return `CREATE DATABASE IF NOT EXISTS ${database}`;
  }

  async createTableIfNotExistsQuery(
    table: string,
    columns: string[],
  ): Promise<string> {
    return `CREATE TABLE IF NOT EXISTS ${table} (${columns.join(', ')})`;
  }

  async dropTableIfExistsQuery(table: string): Promise<string> {
    return `DROP TABLE IF EXISTS ${table}`;
  }

  async dropDatabaseIfExistsQuery(database: string): Promise<string> {
    return `DROP DATABASE IF EXISTS ${database}`;
  }

  async dropUserQuery(user: string): Promise<string> {
    return `DROP USER ${user}`;
  }
}
