import { AbstractRepository } from '../../../../abstracts';
import {
  IDataSource,
  IRegisterUserDto,
  IUserEntity,
  IUserRepository,
} from '../../../../interfaces';

export class UserRepository
  extends AbstractRepository
  implements IUserRepository
{
  constructor(dataSource: IDataSource) {
    super(dataSource);
  }
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
