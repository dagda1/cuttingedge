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
class Rule extends Lint.Rules.TypedRule {
    applyWithProgram(sourceFile, program) {
        if (sourceFile.isDeclarationFile) {
            return [];
        }
        return this.applyWithFunction(sourceFile, ctx => walk(ctx, program.getTypeChecker()));
    }
}
exports.Rule = Rule;
Rule.metadata = {
    ruleName: "no-relative-import-in-test",
    description: "Forbids test (non-declaration) files to use relative imports.",
    optionsDescription: "Not configurable.",
    options: null,
    type: "functionality",
    typescriptOnly: false,
};
const FAILURE_STRING = (0, util_1.failure)(Rule.metadata.ruleName, "Test file should not use a relative import. Use a global import as if this were a user of the package.");
function walk(ctx, checker) {
    const { sourceFile } = ctx;
    for (const i of sourceFile.imports) {
        if (i.text.startsWith(".")) {
            const moduleSymbol = checker.getSymbolAtLocation(i);
            if (!moduleSymbol || !moduleSymbol.declarations) {
                continue;
            }
            for (const decl of moduleSymbol.declarations) {
                if (decl.kind === ts.SyntaxKind.SourceFile && decl.isDeclarationFile) {
                    ctx.addFailureAtNode(i, FAILURE_STRING);
                }
            }
        }
    }
}
//# sourceMappingURL=noRelativeImportInTestRule.js.map