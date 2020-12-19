"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.process = void 0;
var path_1 = __importDefault(require("path"));
var process = function (src, filename) {
    return "module.exports = " + JSON.stringify(path_1.default.basename(filename)) + ";";
};
exports.process = process;
//# sourceMappingURL=fileTransform.js.map