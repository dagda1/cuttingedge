'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.run = void 0;
const child_process_1 = require('child_process');
exports.run = function (cmd) {
  return new Promise(function (resolve, reject) {
    const command = child_process_1.exec('' + cmd);
    let result = '';
    command.stdout.on('data', function (data) {
      result += data.toString();
    });
    command.on('close', function () {
      resolve(result);
    });
    command.on('error', function (err) {
      console.error(console.error());
      reject(err);
    });
  });
};
