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
    ruleName: "no-dead-reference",
    description: "Ensures that all `/// <reference>` comments go at the top of the file.",
    rationale: "style",
    optionsDescription: "Not configurable.",
    options: null,
    type: "functionality",
    typescriptOnly: true,
};
Rule.FAILURE_STRING = (0, util_1.failure)(Rule.metadata.ruleName, "`/// <reference>` directive must be at top of file to take effect.");
function walk(ctx) {
    const { sourceFile: { statements, text } } = ctx;
    if (!statements.length) {
        return;
    }
    // 'm' flag makes it multiline, so `^` matches the beginning of any line.
    // 'g' flag lets us set rgx.lastIndex
    const rgx = /^\s*(\/\/\/ <reference)/mg;
    // Start search at the first statement. (`/// <reference>` before that is OK.)
    rgx.lastIndex = statements[0].getStart();
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const match = rgx.exec(text);
        if (match === null) {
            break;
        }
        const length = match[1].length;
        const start = match.index + match[0].length - length;
        ctx.addFailureAt(start, length, Rule.FAILURE_STRING);
    }
}
//# sourceMappingURL=noDeadReferenceRule.js.map