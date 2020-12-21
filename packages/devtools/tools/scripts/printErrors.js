"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("./logger");
var printErrors = function (summary, errors) {
    logger_1.logger.error(summary);
    errors.forEach(function (err) {
        logger_1.logger.error(err.message || err);
    });
};
exports.default = printErrors;
//# sourceMappingURL=printErrors.js.map