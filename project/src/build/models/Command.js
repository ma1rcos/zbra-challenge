"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JumpCommand = exports.IncrementCommand = exports.Command = void 0;
var Command = /** @class */ (function () {
    function Command() {
    }
    return Command;
}());
exports.Command = Command;
var IncrementCommand = /** @class */ (function (_super) {
    __extends(IncrementCommand, _super);
    function IncrementCommand(incrementAmount) {
        var _this = _super.call(this) || this;
        _this.incrementAmount = incrementAmount;
        return _this;
    }
    IncrementCommand.prototype.execute = function (address) {
        return address + this.incrementAmount;
    };
    return IncrementCommand;
}(Command));
exports.IncrementCommand = IncrementCommand;
var JumpCommand = /** @class */ (function (_super) {
    __extends(JumpCommand, _super);
    function JumpCommand(jumpType, jumpAmount) {
        var _this = _super.call(this) || this;
        _this.jumpType = jumpType;
        _this.jumpAmount = jumpAmount;
        return _this;
    }
    JumpCommand.prototype.execute = function (address) {
        switch (this.jumpType) {
            case 1:
                return address + 1;
            case 2:
                return address + 2;
            case 10:
                return address + this.jumpAmount;
            default:
                return address + 1;
        }
    };
    return JumpCommand;
}(Command));
exports.JumpCommand = JumpCommand;
