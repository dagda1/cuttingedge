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
    ruleName: "no-single-declare-module",
    description: "Don't use an ambient module declaration if there's just one -- write it as a normal module.",
    rationale: "Cuts down on nesting",
    optionsDescription: "Not configurable.",
    options: null,
    type: "style",
    typescriptOnly: true,
};
Rule.FAILURE_STRING = (0, util_1.failure)(Rule.metadata.ruleName, "File has only 1 ambient module declaration. Move the contents outside the ambient module block, rename the file to match the ambient module name, and remove the block.");
function walk(ctx) {
    const { sourceFile } = ctx;
    // If it's an external module, any module declarations inside are augmentations.
    if (ts.isExternalModule(sourceFile)) {
        return;
    }
    let moduleDecl;
    for (const statement of sourceFile.statements) {
        if (ts.isModuleDeclaration(statement) && ts.isStringLiteral(statement.name)) {
            if (statement.name.text.indexOf('*') !== -1) {
                // Ignore wildcard module declarations
                return;
            }
            if (moduleDecl === undefined) {
                moduleDecl = statement;
            }
            else {
                // Has more than 1 declaration
                return;
            }
        }
    }
    if (moduleDecl) {
        ctx.addFailureAtNode(moduleDecl, Rule.FAILURE_STRING);
    }
}
//# sourceMappingURL=noSingleDeclareModuleRule.js.map