"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyBuildDir = void 0;
var paths_1 = require("../config/paths");
var logger_1 = __importDefault(require("./logger"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var emptyBuildDir = function () {
    if (process.env.WATCHING !== 'true') {
        logger_1.default.warn("emptying dist " + paths_1.paths.appBuild);
        fs_extra_1.default.emptyDirSync(paths_1.paths.appBuild);
    }
    else {
        logger_1.default.warn("WATCHING so not deleting build directory");
    }
};
exports.emptyBuildDir = emptyBuildDir;
//# sourceMappingURL=empty-build-dir.js.map