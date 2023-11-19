import { IModel } from '../../core';

export interface IUserModel extends IModel {
  name: string;
  email: string;
  password: string;
}
