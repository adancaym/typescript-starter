import { IRouter, IServerRouter } from '../../../../infrastructure';

export interface IRootRouter extends IServerRouter {
  path: string;
  getRouter(): IRouter;
}
