"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var child_process_1 = require("child_process");
var logger_1 = __importDefault(require("../logger"));
exports.run = function (cmd) {
    return new Promise(function (resolve, reject) {
        var _a;
        var command = child_process_1.exec("" + cmd);
        var result = '';
        (_a = command.stdout) === null || _a === void 0 ? void 0 : _a.on('data', function (data) {
            result += data.toString();
        });
        command.on('close', function () {
            resolve(result);
        });
        command.on('error', function (err) {
            logger_1.default.error(err);
            reject(err);
        });
    });
};
//# sourceMappingURL=run.js.map