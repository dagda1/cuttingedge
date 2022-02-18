'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.run = void 0;
const child_process_1 = require('child_process');
const logger_1 = require('../logger');
const run = (cmd) => {
  return new Promise((resolve, reject) => {
    var _a;
    const command = (0, child_process_1.exec)(`${cmd}`);
    let result = '';
    (_a = command.stdout) === null || _a === void 0
      ? void 0
      : _a.on('data', function (data) {
          result += data.toString();
        });
    command.on('close', function () {
      resolve(result);
    });
    command.on('error', function (err) {
      logger_1.logger.error(err);
      reject(err);
    });
  });
};
exports.run = run;
//# sourceMappingURL=run.js.map
