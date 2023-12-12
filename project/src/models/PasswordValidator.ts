export class PasswordValidator {

  private minPassword: number;
  private maxPassword: number;

  constructor() {
    this.minPassword = 184759;
    this.maxPassword = 856920;
  }

  private digitsNeverDecrease(passwordStr: string): boolean {
    const digits = passwordStr.split('').map(Number);
    return digits.every((digit, index) => index === 0 || digit >= digits[index - 1]);
  }

  private hasAdjacentDigits(passwordStr: string): boolean {
    return passwordStr.split('').some((digit, index) => index > 0 && digit === passwordStr[index - 1]);
  }

  isPasswordValid(password: number): boolean {
    const passwordStr = password.toString();
    if (password < this.minPassword || password > this.maxPassword) return false;
    return this.digitsNeverDecrease(passwordStr) && this.hasAdjacentDigits(passwordStr);
  }

  isPasswordValidWithNewRule(password: number): boolean {
    if (!this.isPasswordValid(password)) return false;
    const passwordStr = password.toString();
    const digitGroups = passwordStr.match(/(\d)\1+/g);
    return digitGroups !== null && digitGroups.some(group => group.length === 2);
  }

  getMinPassword() {
    return this.minPassword;
  }

  getMaxPassword() {
    return this.maxPassword;
  }

}