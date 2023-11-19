import { IRegisterUserDto } from '../../../../interfaces';
import { Validator } from '../../../../utils';

export class RegisterUserDto implements IRegisterUserDto {
  private constructor(
    public name: string,
    public email: string,
    public password: string,
  ) {}
  static create(obj: IRegisterUserDto): IRegisterUserDto {
    const { name, email, password } = obj;

    if (typeof name !== 'string') throw new Error('Name is invalid');
    if (!name) throw new Error('Name is required');
    if (!Validator.noTwoSpaces.test(name))
      throw new Error('Name is invalid, no two spaces allowed');

    if (!Validator.minLength(3).test(name))
      throw new Error('Name is invalid, min length 3 chars');

    if (!Validator.maxLength(100).test(name))
      throw new Error('Name is invalid, max length 20 chars');

    if (email && typeof email !== 'string') throw new Error('Email is invalid');
    if (!email) throw new Error('Email is required');
    if (!Validator.email.test(email)) throw new Error('Email is invalid');

    if (typeof password !== 'string') throw new Error('Password is invalid');
    if (!password) throw new Error('Password is required');
    if (!Validator.minLength(8).test(password))
      throw new Error('Password is invalid, min length 8 chars');

    if (!Validator.maxLength(20).test(password))
      throw new Error('Password is invalid, max length 20 chars');

    if (!Validator.onlyAlphaNumeric.test(password))
      throw new Error('Password is invalid, only alphanumeric chars allowed');

    return new RegisterUserDto(name, email, password);
  }
}
