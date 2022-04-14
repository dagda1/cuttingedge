"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rule = void 0;
const Lint = __importStar(require("tslint"));
const util_1 = require("../util");
class Rule extends Lint.Rules.AbstractRule {
    apply(sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    }
}
exports.Rule = Rule;
Rule.metadata = {
    ruleName: "trim-file",
    description: "Forbids leading/trailing blank lines in a file. Allows file to end in '\n'.",
    optionsDescription: "Not configurable.",
    options: null,
    type: "style",
    typescriptOnly: false,
};
Rule.FAILURE_STRING_LEADING = (0, util_1.failure)(Rule.metadata.ruleName, "File should not begin with a blank line.");
Rule.FAILURE_STRING_TRAILING = (0, util_1.failure)(Rule.metadata.ruleName, "File should not end with a blank line. (Ending in one newline OK, ending in two newlines not OK.)");
function walk(ctx) {
    const { sourceFile: { text } } = ctx;
    if (text.startsWith("\r") || text.startsWith("\n")) {
        ctx.addFailureAt(0, 0, Rule.FAILURE_STRING_LEADING);
    }
    if (text.endsWith("\n\n") || text.endsWith("\r\n\r\n")) {
        const start = text.endsWith("\r\n") ? text.length - 2 : text.length - 1;
        ctx.addFailureAt(start, 0, Rule.FAILURE_STRING_TRAILING);
    }
}
//# sourceMappingURL=trimFileRule.js.map