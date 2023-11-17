import { Router } from 'express';
import { AuthController } from './auth.controller';
import { IServerRouter, IRouter } from '../../../../../interfaces';

export class AuthRouter implements IServerRouter {
  path = '/auth';

  getRouter(): IRouter {
    const rootController = new AuthController();
    const router: IRouter = Router() as IRouter;
    router.post(`/register`, rootController.register);
    return router;
  }
}
