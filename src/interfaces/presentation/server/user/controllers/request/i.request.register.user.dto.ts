import { IRegisterUserDto } from '../../../../../domain';
import { IRequest } from '../../../../../infrastructure';

export interface IRequestRegisterUserDto extends IRequest {
  body: IRegisterUserDto;
}
