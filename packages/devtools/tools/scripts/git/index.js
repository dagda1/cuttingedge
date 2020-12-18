"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommitHash = void 0;
var logger_1 = require("../logger");
var child_process_1 = require("child_process");
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
exports.getCommitHash = function () {
    try {
        return child_process_1.execSync('git rev-parse HEAD', { timeout: 1000 }).toString().trim();
    }
    catch (err) {
        logger_1.logger.error(err);
        throw err;
    }
};
//# sourceMappingURL=index.js.map