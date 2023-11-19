import { IRouter } from './i.router';

export interface IServerRouter {
  path: string;
  getRouter(): IRouter;
}
