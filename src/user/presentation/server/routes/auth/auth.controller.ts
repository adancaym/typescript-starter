import { IController, IRequest, IResponse } from '../../../../../interfaces';
import { RegisterUserDto } from '../../../../domain';

export class AuthController implements IController {
  register(req: IRequest, res: IResponse): void {
    try {
      const asd = RegisterUserDto.create(req.body);
      res.status(200).json({ message: asd });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      res
        .status(500)
        .json({ message: error.message ?? 'Internal Server Error' });
    }
  }
}
