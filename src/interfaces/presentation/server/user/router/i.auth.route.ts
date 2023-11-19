import { IRouter, IServerRouter } from '../../../../infrastructure';

export interface IAuthRouter extends IServerRouter {
  path: string;
  getRouter(): IRouter;
}
