export class Validator {
  static get email() {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  }
  static get onlyChars() {
    return /^[a-zA-ZñÑ]+$/;
  }

  static get onlyNumbers() {
    return /^[/d]+$/;
  }

  static get onlyAlphaNumeric() {
    return /^[a-zA-Z0-9]+$/;
  }

  static get onlyAlphaNumericWithSpace() {
    return /^[a-zA-Z0-9 ]+$/;
  }

  static get noTwoSpaces() {
    return /^[^\s]+(\s+[^\s]+)*$/;
  }

  static get minLength() {
    return (min: number) => new RegExp(`^.{${min},}$`);
  }

  static get maxLength() {
    return (max: number) => new RegExp(`^.{0,${max}}$`);
  }
}
