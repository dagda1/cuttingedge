"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("./logger");
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var printErrors = function (summary, errors) {
    logger_1.logger.error(summary);
    errors.forEach(function (err) {
        logger_1.logger.error(err.message || err);
    });
};
exports.default = printErrors;
//# sourceMappingURL=printErrors.js.map