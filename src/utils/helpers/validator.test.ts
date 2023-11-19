import { Validator } from './validator';
describe('Validator', () => {
  describe('email', () => {
    it('should match valid email addresses', () => {
      const validEmails = [
        'test@example.com',
        'user123@gmail.com',
        'john.doe@example.co.uk',
      ];

      validEmails.forEach((email) => {
        expect(Validator.email.test(email)).toBe(true);
      });
    });

    it('should not match invalid email addresses', () => {
      const invalidEmails = [
        'test@example',
        'user123@gmail',
        'john.doe@example.',
        'john.doe@example.c',
        'john.doe@example.com.',
      ];

      invalidEmails.forEach((email) => {
        expect(Validator.email.test(email)).toBe(false);
      });
    });
  });

  describe('onlyChars', () => {
    it('should match strings with only alphabetic characters', () => {
      const validStrings = ['abc', 'ABC', 'ñÑ'];

      validStrings.forEach((str) => {
        expect(Validator.onlyChars.test(str)).toBe(true);
      });
    });

    it('should not match strings with non-alphabetic characters', () => {
      const invalidStrings = ['123', 'abc123', 'abc 123', 'abc@123'];

      invalidStrings.forEach((str) => {
        expect(Validator.onlyChars.test(str)).toBe(false);
      });
    });
  });

  // Add more test cases for other validation rules...
});
