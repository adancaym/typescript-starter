import { Router } from 'express';
import { RootController } from './root.controller';
import { IServerRouter, IRouter } from '../../../../../interfaces';

export class RootRouter implements IServerRouter {
  path = '/';

  getRouter(): IRouter {
    const rootController = new RootController();
    const router: IRouter = Router() as IRouter;
    router.get('/', rootController.root);
    return router;
  }
}
