import { IController, IRequest, IResponse } from '../../../../infrastructure';

export interface IRootController extends IController {
  root(req: IRequest, res: IResponse): void;
}
