"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCjsEntryFile = exports.safePackageName = void 0;
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var paths_1 = require("../config/paths");
var safePackageName = function (name) {
    return name.toLowerCase().replace(/(^@.*\/)|((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g, '');
};
exports.safePackageName = safePackageName;
var writeCjsEntryFile = function (name) {
    var baseLine = "module.exports = require('./" + exports.safePackageName(name);
    var contents = "\n  'use strict'\n  \n  if (process.env.NODE_ENV === 'production') {\n    " + baseLine + ".cjs.production.min.js')\n  } else {\n    " + baseLine + ".cjs.development.js')\n  }\n  ";
    return fs_extra_1.default.outputFile(path_1.default.join(paths_1.paths.appBuild, 'index.js'), contents);
};
exports.writeCjsEntryFile = writeCjsEntryFile;
//# sourceMappingURL=helpers.js.map