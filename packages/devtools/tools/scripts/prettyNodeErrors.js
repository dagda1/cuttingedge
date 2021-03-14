"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var jest_message_util_1 = require("jest-message-util");
var codeFrameColumns = require('@babel/code-frame').codeFrameColumns;
function pretty(error) {
    var message = error.message, stack = error.stack;
    var lines = jest_message_util_1.getStackTraceLines(stack);
    var topFrame = jest_message_util_1.getTopFrame(lines);
    var fallback = "" + message + stack;
    if (!topFrame) {
        return fallback;
    }
    var file = topFrame.file, line = topFrame.line;
    try {
        var result = codeFrameColumns(fs_1.default.readFileSync(file, 'utf8'), { start: { line: line } }, { highlightCode: true });
        return "\n" + message + "\n\n" + result + "\n" + stack + "\n";
    }
    catch (error) {
        return fallback;
    }
}
function usePrettyErrors(transform) {
    var prepareStackTrace = Error.prepareStackTrace;
    Error.prepareStackTrace = function (error, trace) {
        var prepared = prepareStackTrace ? jest_message_util_1.separateMessageFromStack(prepareStackTrace(error, trace)) : error;
        var transformed = transform ? transform(prepared) : prepared;
        return pretty(transformed);
    };
}
// Clean up Webpack's sourcemap namespacing in error stacks
// @see https://github.com/facebook/create-react-app/blob/next/packages/react-dev-utils/formatWebpackMessages.js#L112
var stackTransform = function (_a) {
    var _b = _a.stack, stack = _b === void 0 ? '' : _b, rest = __rest(_a, ["stack"]);
    return (__assign({ stack: stack.replace('/build/webpack:', '') }, rest));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
usePrettyErrors(stackTransform);
//# sourceMappingURL=prettyNodeErrors.js.map