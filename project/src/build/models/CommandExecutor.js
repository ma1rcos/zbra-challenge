"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandExecutor = void 0;
var CommandExecutor = /** @class */ (function () {
    function CommandExecutor(commands) {
        this.commands = commands;
        this.address = 0;
    }
    CommandExecutor.prototype.executeCommands = function () {
        while (this.address < this.commands.length) {
            this.address = this.commands[this.address].execute(this.address);
        }
        return this.address;
    };
    return CommandExecutor;
}());
exports.CommandExecutor = CommandExecutor;
