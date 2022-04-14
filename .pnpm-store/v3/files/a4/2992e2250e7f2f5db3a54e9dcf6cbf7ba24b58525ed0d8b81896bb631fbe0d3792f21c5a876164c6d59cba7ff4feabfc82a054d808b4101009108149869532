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
    ruleName: "no-bad-reference",
    description: 'Forbid <reference path="../etc"/> in any file, and forbid <reference path> in test files.',
    optionsDescription: "Not configurable.",
    options: null,
    type: "functionality",
    typescriptOnly: true,
};
Rule.FAILURE_STRING = (0, util_1.failure)(Rule.metadata.ruleName, "Don't use <reference path> to reference another package. Use an import or <reference types> instead.");
Rule.FAILURE_STRING_REFERENCE_IN_TEST = (0, util_1.failure)(Rule.metadata.ruleName, "Don't use <reference path> in test files. Use <reference types> or include the file in 'tsconfig.json'.");
function walk(ctx) {
    const { sourceFile } = ctx;
    for (const ref of sourceFile.referencedFiles) {
        if (sourceFile.isDeclarationFile) {
            if (ref.fileName.startsWith("..")) {
                ctx.addFailure(ref.pos, ref.end, Rule.FAILURE_STRING);
            }
        }
        else {
            ctx.addFailure(ref.pos, ref.end, Rule.FAILURE_STRING_REFERENCE_IN_TEST);
        }
    }
}
//# sourceMappingURL=noBadReferenceRule.js.map