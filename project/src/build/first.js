"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PasswordValidator_1 = require("./models/PasswordValidator");
var validator = new PasswordValidator_1.PasswordValidator();
// Part 1
var validPasswordCount = 0;
for (var password = validator.getMinPassword(); password <= validator.getMaxPassword(); password++) {
    if (validator.isPasswordValid(password)) {
        validPasswordCount++;
    }
}
console.log("Number of valid passwords (Part 1): ".concat(validPasswordCount));
// Part 2
var validPasswordCountWithNewRule = 0;
for (var password = validator.getMinPassword(); password <= validator.getMaxPassword(); password++) {
    if (validator.isPasswordValidWithNewRule(password)) {
        validPasswordCountWithNewRule++;
    }
}
console.log("Number of valid passwords (Part 2): ".concat(validPasswordCountWithNewRule));
