import { IEntity } from '../../../interfaces';

export class UserEntity implements IEntity {
  constructor(
    public id: string,
    public email: string,
    public password: string,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date,
  ) {}
}
