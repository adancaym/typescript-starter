import { IServerApplication } from './i.server.application';

export interface IServer {
  port: number;
  app: IServerApplication;
  start(): Promise<void>;
  configure(): void;
  setRoutes(): void;
  listEndpoints(): void;
}
