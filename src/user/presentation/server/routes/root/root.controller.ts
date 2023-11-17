import { IController, IRequest, IResponse } from '../../../../../interfaces';

export class RootController implements IController {
  root(req: IRequest, res: IResponse): void {
    res.status(200).json({ message: 'Hello World! 2' });
  }
}
