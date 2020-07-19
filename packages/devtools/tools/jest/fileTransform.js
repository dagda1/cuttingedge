"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fileTransform = {
    process: function (src, filename) {
        return "module.exports = " + JSON.stringify(path_1.default.basename(filename)) + ";";
    },
};
module.exports = fileTransform;
//# sourceMappingURL=fileTransform.js.map