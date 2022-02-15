"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.process = void 0;
const path_1 = __importDefault(require("path"));
const createExport = (filename) => `
    if (typeof module === 'object' && module) {
        Object.defineProperty(exports, "__esModule", {
          value: true
      });
        module.exports = ${JSON.stringify(path_1.default.basename(filename))}
    } else {
      Object.defineProperty(exports, "__esModule", {
          value: true
      });
      exports.default = ${JSON.stringify(path_1.default.basename(filename))};
    }
`
    .trim()
    .replace(/^\s{4}/g, '');
const process = (src, filename) => {
    const exp = createExport(filename);
    return exp;
};
exports.process = process;
exports.default = { process: exports.process };
//# sourceMappingURL=fileTransform.js.map