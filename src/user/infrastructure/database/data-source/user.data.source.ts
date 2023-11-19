import { AbstractDataSource } from '../../../../abstracts';
import {
  IRegisterUserDto,
  IUserDataSource,
  IUserEntity,
} from '../../../../interfaces';

export class UserDataSource
  extends AbstractDataSource
  implements IUserDataSource
{
  register(registerDto: IRegisterUserDto): Promise<IUserEntity> {
    return Promise.resolve({
      id: '1',
      email: registerDto.email,
      password: registerDto.password,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    } as IUserEntity);
  }
}
