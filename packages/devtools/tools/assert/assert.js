"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = void 0;
var AssertionError_1 = require("./AssertionError");
function assert(condition, msg) {
    if (!condition) {
        throw new AssertionError_1.AssertionError(msg);
    }
}
exports.assert = assert;
//# sourceMappingURL=assert.js.map