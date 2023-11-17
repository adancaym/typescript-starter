import express, { Express } from 'express';

import listEndpoints from 'express-list-endpoints';

import { AuthRouter, RootRouter } from './routes';
import { IServer, IServerApplication } from '../../../interfaces';

export class Server implements IServer {
  port: number;
  app: IServerApplication = express();

  constructor(port: number) {
    this.port = port;
    this.configure();
  }

  listEndpoints(): void {
    console.log('\n\n\t\t  Endpoints: service-user');
    console.table(listEndpoints(this.app as Express));
  }

  configure(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.setRoutes();
  }
  setRoutes(): void {
    const rootRouter = new RootRouter();
    const authRouter = new AuthRouter();
    this.app.use(rootRouter.path, rootRouter.getRouter());
    this.app.use(authRouter.path, authRouter.getRouter());
  }

  start(): Promise<void> {
    return new Promise((resolve) => {
      this.app.listen(this.port, () => {
        console.log(`Server up on: http://localhost:${this.port}`);
        process.env.NODE_ENV !== 'production' && this.listEndpoints();
        resolve();
      });
    });
  }
}
