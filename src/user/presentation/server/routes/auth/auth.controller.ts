import {
  IResponse,
  IAuthController,
  IRegisterUserDto,
  IRequestRegisterUserDto,
} from '../../../../../interfaces';

import { RegisterUserDto } from '../../../../domain';

export class AuthController implements IAuthController {
  register(req: IRequestRegisterUserDto, res: IResponse): void {
    try {
      const registerDto: IRegisterUserDto = RegisterUserDto.create(req.body);
      res.status(200).json(registerDto);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
