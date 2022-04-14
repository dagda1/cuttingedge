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
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
class Rule extends Lint.Rules.AbstractRule {
    static FAILURE_STRING(kind, token) {
        return (0, util_1.failure)(Rule.metadata.ruleName, `Don't leave a blank line ${kind} '${ts.tokenToString(token)}'.`);
    }
    apply(sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    }
}
exports.Rule = Rule;
Rule.metadata = {
    ruleName: "no-padding",
    description: "Forbids a blank line after `(` / `[` / `{`, or before `)` / `]` / `}`.",
    optionsDescription: "Not configurable.",
    options: null,
    type: "style",
    typescriptOnly: true,
};
function walk(ctx) {
    const { sourceFile } = ctx;
    function fail(kind, child) {
        ctx.addFailureAtNode(child, Rule.FAILURE_STRING(kind, child.kind));
    }
    sourceFile.forEachChild(function cb(node) {
        const children = node.getChildren();
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            switch (child.kind) {
                case ts.SyntaxKind.OpenParenToken:
                case ts.SyntaxKind.OpenBracketToken:
                case ts.SyntaxKind.OpenBraceToken:
                    if (i < children.length - 1 && blankLineInBetween(child.getEnd(), children[i + 1].getStart())) {
                        fail("after", child);
                    }
                    break;
                case ts.SyntaxKind.CloseParenToken:
                case ts.SyntaxKind.CloseBracketToken:
                case ts.SyntaxKind.CloseBraceToken:
                    if (i > 0 && blankLineInBetween(child.getStart() - 1, children[i - 1].getEnd() - 1)) {
                        fail("before", child);
                    }
                    break;
                default:
                    cb(child);
            }
        }
    });
    // Looks for two newlines (with nothing else in between besides whitespace)
    function blankLineInBetween(start, end) {
        const step = start < end ? 1 : -1;
        let seenLine = false;
        for (let i = start; i !== end; i += step) {
            switch (sourceFile.text[i]) {
                case "\n":
                    if (seenLine) {
                        return true;
                    }
                    else {
                        seenLine = true;
                    }
                    break;
                case " ":
                case "\t":
                case "\r":
                    break;
                default:
                    return false;
            }
        }
        return false;
    }
}
//# sourceMappingURL=noPaddingRule.js.map