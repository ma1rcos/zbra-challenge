import { PasswordValidator } from "../models/PasswordValidator";

describe('PasswordValidator', () => {
  
  test('should return true for a valid password', () => {
    const validator = new PasswordValidator();
    const validPassword = 222222;
    const result = validator.isPasswordValid(validPassword);
    expect(result).toBe(true);
  });

  test('should return false for an invalid password with decreasing digits', () => {
    const validator = new PasswordValidator();
    const invalidPassword = 236775;
    const result = validator.isPasswordValid(invalidPassword);
    expect(result).toBe(false);
  });

  test('should return false for an invalid password with no adjacent digits', () => {
    const validator = new PasswordValidator();
    const invalidPassword = 345789;
    const result = validator.isPasswordValid(invalidPassword);
    expect(result).toBe(false);
  });

  test('should return true for a valid password (Part 2)', () => {
    const validator = new PasswordValidator();
    const validPassword = 334478;
    const result = validator.isPasswordValidWithNewRule(validPassword);
    expect(result).toBe(true);
  });

  test('should return false for an invalid password with adjacent 3 repeated digits (Part 2)', () => {
    const validator = new PasswordValidator();
    const invalidPassword = 347779;
    const result = validator.isPasswordValidWithNewRule(invalidPassword);
    expect(result).toBe(false);
  });

  test('should return true for a valid password with repeated digits (Part 2)', () => {
    const validator = new PasswordValidator();
    const validPassword = 444557;
    const result = validator.isPasswordValidWithNewRule(validPassword);
    expect(result).toBe(true);
  });

});