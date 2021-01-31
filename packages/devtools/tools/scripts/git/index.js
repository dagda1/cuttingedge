"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommitHash = void 0;
var logger_1 = require("../logger");
var child_process_1 = require("child_process");
var fs_extra_1 = __importDefault(require("fs-extra"));
var paths_1 = require("../../config/paths");
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var getCommitHash = function () {
    if (fs_extra_1.default.existsSync(paths_1.paths.gitDir) === false) {
        logger_1.logger.error('You have not ran `git init`.');
        process.exit(1);
    }
    try {
        return child_process_1.execSync('git rev-parse HEAD', { timeout: 1000 }).toString().trim();
    }
    catch (err) {
        logger_1.logger.error('You must have at least 1 git commit');
        process.exit(1);
    }
};
exports.getCommitHash = getCommitHash;
//# sourceMappingURL=index.js.map