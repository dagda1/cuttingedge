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
        if (!sourceFile.isDeclarationFile) {
            return [];
        }
        const packageName = (0, util_1.getCommonDirectoryName)(program.getRootFileNames());
        return this.applyWithFunction(sourceFile, ctx => walk(ctx, packageName));
    }
}
exports.Rule = Rule;
Rule.metadata = {
    ruleName: "no-declare-current-package",
    description: "Don't use an ambient module declaration of the current package; use a normal module.",
    optionsDescription: "Not configurable.",
    options: null,
    type: "functionality",
    typescriptOnly: true,
};
function walk(ctx, packageName) {
    for (const statement of ctx.sourceFile.statements) {
        if (ts.isModuleDeclaration(statement) && ts.isStringLiteral(statement.name)) {
            const { text } = statement.name;
            if (text === packageName || text.startsWith(`${packageName}/`)) {
                const preferred = text === packageName ? '"index.d.ts"' : `"${text}.d.ts" or "${text}/index.d.ts`;
                ctx.addFailureAtNode(statement.name, (0, util_1.failure)(Rule.metadata.ruleName, `Instead of declaring a module with \`declare module "${text}"\`, ` +
                    `write its contents in directly in ${preferred}.`));
            }
        }
    }
}
//# sourceMappingURL=noDeclareCurrentPackageRule.js.map