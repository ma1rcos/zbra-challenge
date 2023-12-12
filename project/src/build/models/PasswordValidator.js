"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordValidator = void 0;
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
        this.minPassword = 184759;
        this.maxPassword = 856920;
    }
    PasswordValidator.prototype.digitsNeverDecrease = function (passwordStr) {
        var digits = passwordStr.split('').map(Number);
        return digits.every(function (digit, index) { return index === 0 || digit >= digits[index - 1]; });
    };
    PasswordValidator.prototype.hasAdjacentDigits = function (passwordStr) {
        return passwordStr.split('').some(function (digit, index) { return index > 0 && digit === passwordStr[index - 1]; });
    };
    PasswordValidator.prototype.isPasswordValid = function (password) {
        var passwordStr = password.toString();
        if (password < this.minPassword || password > this.maxPassword)
            return false;
        return this.digitsNeverDecrease(passwordStr) && this.hasAdjacentDigits(passwordStr);
    };
    PasswordValidator.prototype.isPasswordValidWithNewRule = function (password) {
        if (!this.isPasswordValid(password))
            return false;
        var passwordStr = password.toString();
        var digitGroups = passwordStr.match(/(\d)\1+/g);
        return digitGroups !== null && digitGroups.some(function (group) { return group.length === 2; });
    };
    PasswordValidator.prototype.getMinPassword = function () {
        return this.minPassword;
    };
    PasswordValidator.prototype.getMaxPassword = function () {
        return this.maxPassword;
    };
    return PasswordValidator;
}());
exports.PasswordValidator = PasswordValidator;
