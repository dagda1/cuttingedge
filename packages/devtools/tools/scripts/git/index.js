"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommitHash = void 0;
var logger_1 = require("../logger");
var child_process_1 = require("child_process");
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var getCommitHash = function () {
    try {
        return child_process_1.execSync('git rev-parse HEAD', { timeout: 1000 }).toString().trim();
    }
    catch (err) {
        logger_1.logger.error('The git is not working.  Creating a timestamp');
        console.error(err);
        return new Date().toISOString();
    }
};
exports.getCommitHash = getCommitHash;
//# sourceMappingURL=index.js.map