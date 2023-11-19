import {
  IRequest,
  IResponse,
  IRootController,
} from '../../../../../interfaces';

export class RootController implements IRootController {
  root(req: IRequest, res: IResponse): void {
    res.status(200).json({ message: 'Hello World! 2' });
  }
}
