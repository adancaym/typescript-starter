import { RootController } from './root.controller';
import { RootRouter } from './root.router';

describe('RootRouter', () => {
  let rootRouter: RootRouter;
  let rootController: RootController;

  beforeEach(() => {
    rootController = new RootController();
    rootRouter = new RootRouter();
  });

  it('should create an instance of RootRouter', () => {
    expect(rootRouter).toBeInstanceOf(RootRouter);
  });

  it('should have the correct path', () => {
    expect(rootRouter.path).toBe('/');
  });

  it('should return a router with the root route', () => {
    const router = rootRouter.getRouter();

    expect(router.stack).toHaveLength(1);
    expect(router.stack[0].route.path).toBe(rootRouter.path);
    expect(router.stack[0].route.methods.get).toBe(true);
  });

  it('should use the root controller for the root route', () => {
    const router = rootRouter.getRouter();
    const rootRoute = router.stack[0].route;

    expect(rootRoute.stack).toHaveLength(1);
    expect(rootRoute.stack[0].handle).toBe(rootController.root);
  });
});
