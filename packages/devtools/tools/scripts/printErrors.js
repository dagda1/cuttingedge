"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("./logger"));
var printErrors = function (summary, errors) {
    logger_1.default.error(summary);
    errors.forEach(function (err) {
        logger_1.default.error(err.message || err);
    });
};
exports.default = printErrors;
//# sourceMappingURL=printErrors.js.map