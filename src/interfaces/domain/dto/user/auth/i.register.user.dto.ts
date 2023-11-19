import { IDto } from '../../core';

export interface IRegisterUserDto extends IDto {
  name: string;
  email: string;
  password: string;
}
