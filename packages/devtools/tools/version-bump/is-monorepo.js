"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMonorepo = void 0;
var child_process_1 = require("child_process");
exports.isMonorepo = function () {
    return new Promise(function (resolve) {
        child_process_1.exec('yarn workspaces info', function (err) {
            resolve({ monorepo: err === null });
        });
    });
};
//# sourceMappingURL=is-monorepo.js.map