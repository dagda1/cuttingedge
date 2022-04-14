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
    ruleName: "redundant-undefined",
    description: "Forbids optional parameters to include an explicit `undefined` in their type; requires it in optional properties.",
    optionsDescription: "Not configurable.",
    options: null,
    type: "style",
    typescriptOnly: true,
};
function walk(ctx) {
    if (ctx.sourceFile.fileName.includes('node_modules'))
        return;
    ctx.sourceFile.forEachChild(function recur(node) {
        if (node.kind === ts.SyntaxKind.UndefinedKeyword
            && ts.isUnionTypeNode(node.parent)
            && isOptionalParameter(node.parent.parent)) {
            ctx.addFailureAtNode(node, (0, util_1.failure)(Rule.metadata.ruleName, `Parameter is optional, so no need to include \`undefined\` in the type.`));
        }
        node.forEachChild(recur);
    });
}
function isOptionalParameter(node) {
    return node.kind === ts.SyntaxKind.Parameter
        && node.questionToken !== undefined;
}
//# sourceMappingURL=redundantUndefinedRule.js.map