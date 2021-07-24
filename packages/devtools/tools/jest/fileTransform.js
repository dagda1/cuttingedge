"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.process = void 0;
var path_1 = __importDefault(require("path"));
var createExport = function (filename) {
    return ("\n    if (typeof module === 'object' && module) {\n        Object.defineProperty(exports, \"__esModule\", {\n          value: true\n      });\n        module.exports = " + JSON.stringify(path_1.default.basename(filename)) + "\n    } else {\n      Object.defineProperty(exports, \"__esModule\", {\n          value: true\n      });\n      exports.default = " + JSON.stringify(path_1.default.basename(filename)) + ";\n    }\n")
        .trim()
        .replace(/^\s{4}/g, '');
};
var process = function (src, filename) {
    var exp = createExport(filename);
    return exp;
};
exports.process = process;
//# sourceMappingURL=fileTransform.js.map