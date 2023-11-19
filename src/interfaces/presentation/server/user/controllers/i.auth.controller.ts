import { IController, IResponse } from '../../../../infrastructure';
import { IRequestRegisterUserDto } from './request';

export interface IAuthController extends IController {
  register(req: IRequestRegisterUserDto, res: IResponse): void;
}
