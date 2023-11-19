import { Router } from 'express';
import { AuthController } from './auth.controller';
import {
  IAuthController,
  IAuthRouter,
  IRouter,
} from '../../../../../interfaces';

export class AuthRouter implements IAuthRouter {
  path = '/auth';

  getRouter(): IRouter {
    const rootController: IAuthController = new AuthController();
    const router: IRouter = Router() as IRouter;
    router.post(`/register`, rootController.register);
    return router;
  }
}
