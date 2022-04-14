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
class Rule extends Lint.Rules.TypedRule {
    applyWithProgram(sourceFile, program) {
        if (!sourceFile.isDeclarationFile) {
            return [];
        }
        const name = (0, util_1.getCommonDirectoryName)(program.getRootFileNames());
        return this.applyWithFunction(sourceFile, ctx => walk(ctx, name));
    }
}
exports.Rule = Rule;
Rule.metadata = {
    ruleName: "no-self-import",
    description: "Forbids declaration files to import the current package using a global import.",
    optionsDescription: "Not configurable.",
    options: null,
    type: "functionality",
    typescriptOnly: false,
};
const FAILURE_STRING = (0, util_1.failure)(Rule.metadata.ruleName, "Declaration file should not use a global import of itself. Use a relative import.");
function walk(ctx, packageName) {
    for (const i of ctx.sourceFile.imports) {
        if (i.text === packageName || i.text.startsWith(packageName + "/")) {
            ctx.addFailureAtNode(i, FAILURE_STRING);
        }
    }
}
//# sourceMappingURL=noSelfImportRule.js.map