import { INext } from './i.next';
import { IRequest } from './i.request';
import { IResponse } from './i.response';
import { IUseRouter } from './i.use.router';

export interface IRouter {
  use: IUseRouter;
  stack: any[];
  get(
    path: string,
    callback: (req: IRequest, res: IResponse, next?: INext) => void,
  ): void;
  post(
    path: string,
    callback: (req: IRequest, res: IResponse, next?: INext) => void,
  ): void;
  put(
    path: string,
    callback: (req: IRequest, res: IResponse, next?: INext) => void,
  ): void;
  delete(
    path: string,
    callback: (req: IRequest, res: IResponse, next?: INext) => void,
  ): void;
}
