"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var CommandExecutor_1 = require("./models/CommandExecutor");
var Command_1 = require("./models/Command");
var DefaultCommand_1 = require("./models/DefaultCommand");
var commandsTxt = fs.readFileSync('./src/static/commands.txt', 'utf-8');
var commandNumbers = commandsTxt.split('\n').map(Number);
// Converts numbers into Command instances
var commands = commandNumbers.map(function (commandNumber) {
    var commandType = Math.floor(commandNumber / 100);
    if (commandType === 2) {
        return new Command_1.IncrementCommand(commandNumber % 100);
    }
    else if (commandType === 5) {
        var jumpType = Math.floor((commandNumber % 100) / 10);
        var jumpAmount = commandNumber % 10;
        return new Command_1.JumpCommand(jumpType, jumpAmount);
    }
    else {
        return new DefaultCommand_1.default();
    }
});
var executor = new CommandExecutor_1.CommandExecutor(commands);
var result = executor.executeCommands();
console.log("The value of the address variable is: ".concat(result));
