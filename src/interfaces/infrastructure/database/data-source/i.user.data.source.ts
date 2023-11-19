import { IRegisterUserDto } from '../../../domain';
import { IUserEntity } from '../entities';
import { IDataSource } from './core';

export interface IUserDataSource extends IDataSource {
  register(user: IRegisterUserDto): Promise<IUserEntity>;
}
