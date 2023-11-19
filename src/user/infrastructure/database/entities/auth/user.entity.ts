import { IUserEntity } from '../../../../../interfaces';

export class UserEntity implements IUserEntity {
  constructor(
    public id: string,
    public email: string,
    public password: string,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
  ) {}
}
