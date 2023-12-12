import { PasswordValidator } from './models/PasswordValidator';

const validator = new PasswordValidator();

// Part 1
let validPasswordCount = 0;

for (let password = validator.getMinPassword(); password <= validator.getMaxPassword(); password++) {
    if (validator.isPasswordValid(password)) {
        validPasswordCount++;
    }
}

console.log(`Number of valid passwords (Part 1): ${validPasswordCount}`);

// Part 2
let validPasswordCountWithNewRule = 0;

for (let password = validator.getMinPassword(); password <= validator.getMaxPassword(); password++) {
    if (validator.isPasswordValidWithNewRule(password)) {
        validPasswordCountWithNewRule++;
    }
}

console.log(`Number of valid passwords (Part 2): ${validPasswordCountWithNewRule}`);