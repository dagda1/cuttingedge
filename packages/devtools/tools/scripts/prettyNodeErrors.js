"use strict";
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
const fs_1 = __importDefault(require("fs"));
const jest_message_util_1 = require("jest-message-util");
const { codeFrameColumns } = require('@babel/code-frame');
function pretty(error) {
    const { message, stack } = error;
    const lines = (0, jest_message_util_1.getStackTraceLines)(stack);
    const topFrame = (0, jest_message_util_1.getTopFrame)(lines);
    const fallback = `${message}${stack}`;
    if (!topFrame) {
        return fallback;
    }
    const { file, line } = topFrame;
    try {
        const result = codeFrameColumns(fs_1.default.readFileSync(file, 'utf8'), { start: { line } }, { highlightCode: true });
        return `\n${message}\n\n${result}\n${stack}\n`;
    }
    catch (error) {
        return fallback;
    }
}
function usePrettyErrors(transform) {
    const { prepareStackTrace } = Error;
    Error.prepareStackTrace = (error, trace) => {
        const prepared = prepareStackTrace ? (0, jest_message_util_1.separateMessageFromStack)(prepareStackTrace(error, trace)) : error;
        const transformed = transform ? transform(prepared) : prepared;
        return pretty(transformed);
    };
}
// Clean up Webpack's sourcemap namespacing in error stacks
// @see https://github.com/facebook/create-react-app/blob/next/packages/react-dev-utils/formatWebpackMessages.js#L112
const stackTransform = (_a) => {
    var { stack = '' } = _a, rest = __rest(_a, ["stack"]);
    return (Object.assign({ stack: stack.replace('/build/webpack:', '') }, rest));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
usePrettyErrors(stackTransform);
//# sourceMappingURL=prettyNodeErrors.js.map