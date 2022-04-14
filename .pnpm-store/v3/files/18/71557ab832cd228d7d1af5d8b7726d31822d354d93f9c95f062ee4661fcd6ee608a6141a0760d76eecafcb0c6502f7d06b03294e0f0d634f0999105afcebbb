"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertSorted = exports.fail = exports.assertNever = exports.assertDefined = void 0;
const assert_1 = __importDefault(require("assert"));
function assertDefined(x, message) {
    (0, assert_1.default)(x !== undefined, message);
    return x;
}
exports.assertDefined = assertDefined;
function assertNever(member, message = "Illegal value:", stackCrawlMark) {
    const detail = JSON.stringify(member);
    return fail(`${message} ${detail}`, stackCrawlMark || assertNever);
}
exports.assertNever = assertNever;
function fail(message, stackCrawlMark) {
    debugger;
    const e = new Error(message ? `Debug Failure. ${message}` : "Debug Failure.");
    if (Error.captureStackTrace) {
        Error.captureStackTrace(e, stackCrawlMark || fail);
    }
    throw e;
}
exports.fail = fail;
function assertSorted(a, cb = (t) => t) {
    let prev = a[0];
    for (let i = 1; i < a.length; i++) {
        const x = a[i];
        (0, assert_1.default)(cb(x) >= cb(prev), `${JSON.stringify(x)} >= ${JSON.stringify(prev)}`);
        prev = x;
    }
    return a;
}
exports.assertSorted = assertSorted;
//# sourceMappingURL=assertions.js.map