import { Router } from 'express';
import { RootController } from './root.controller';
import {
  IRootController,
  IRootRouter,
  IRouter,
} from '../../../../../interfaces';

export class RootRouter implements IRootRouter {
  path = '/';

  getRouter(): IRouter {
    const rootController: IRootController = new RootController();
    const router: IRouter = Router() as IRouter;
    router.get('/', rootController.root);
    return router;
  }
}
