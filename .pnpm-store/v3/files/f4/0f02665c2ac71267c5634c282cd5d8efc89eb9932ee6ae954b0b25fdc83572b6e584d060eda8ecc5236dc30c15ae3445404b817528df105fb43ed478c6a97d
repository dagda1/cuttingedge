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
    apply(sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    }
}
exports.Rule = Rule;
Rule.metadata = {
    ruleName: "void-return",
    description: "`void` may only be used as a return type.",
    rationale: "style",
    optionsDescription: "Not configurable.",
    options: null,
    type: "style",
    typescriptOnly: true,
};
Rule.FAILURE_STRING = (0, util_1.failure)(Rule.metadata.ruleName, "Use the `void` type for return types only. Otherwise, use `undefined`.");
function walk(ctx) {
    ctx.sourceFile.forEachChild(function cb(node) {
        if (node.kind === ts.SyntaxKind.VoidKeyword && !mayContainVoid(node.parent) && !isReturnType(node)) {
            ctx.addFailureAtNode(node, Rule.FAILURE_STRING);
        }
        else {
            node.forEachChild(cb);
        }
    });
}
function mayContainVoid({ kind }) {
    switch (kind) {
        case ts.SyntaxKind.TypeReference:
        case ts.SyntaxKind.ExpressionWithTypeArguments:
        case ts.SyntaxKind.NewExpression:
        case ts.SyntaxKind.CallExpression:
        case ts.SyntaxKind.TypeParameter: // Allow f<T = void>
            return true;
        default:
            return false;
    }
}
function isReturnType(node) {
    let parent = node.parent;
    if (parent.kind === ts.SyntaxKind.UnionType) {
        [node, parent] = [parent, parent.parent];
    }
    return isSignatureDeclaration(parent) && parent.type === node;
}
function isSignatureDeclaration(node) {
    switch (node.kind) {
        case ts.SyntaxKind.ArrowFunction:
        case ts.SyntaxKind.CallSignature:
        case ts.SyntaxKind.FunctionDeclaration:
        case ts.SyntaxKind.FunctionExpression:
        case ts.SyntaxKind.FunctionType:
        case ts.SyntaxKind.MethodDeclaration:
        case ts.SyntaxKind.MethodSignature:
            return true;
        default:
            return false;
    }
}
//# sourceMappingURL=voidReturnRule.js.map