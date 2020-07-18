"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommitHash = void 0;
var logger_1 = __importDefault(require("../logger"));
exports.getCommitHash = function () {
    try {
        return require('child_process').execSync('git rev-parse HEAD', { timeout: 1000 }).toString().trim();
    }
    catch (err) {
        logger_1.default.error(err);
        throw err;
    }
};
//# sourceMappingURL=index.js.map