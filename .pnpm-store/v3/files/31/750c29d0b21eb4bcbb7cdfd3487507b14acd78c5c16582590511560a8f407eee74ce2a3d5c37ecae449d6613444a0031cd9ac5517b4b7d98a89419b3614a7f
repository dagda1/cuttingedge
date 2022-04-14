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
    applyWithProgram(_sourceFile, program) {
        if (seenPrograms.has(program)) {
            return [];
        }
        seenPrograms.add(program);
        const failures = [];
        for (const sourceFile of program.getSourceFiles()) {
            const { fileName } = sourceFile;
            if (fileName.includes("/DefinitelyTyped/node_modules/") && !program.isSourceFileDefaultLibrary(sourceFile)) {
                const msg = (0, util_1.failure)(Rule.metadata.ruleName, `File ${fileName} comes from a \`node_modules\` but is not declared in this type's \`package.json\`. `);
                failures.push(new Lint.RuleFailure(sourceFile, 0, 1, msg, Rule.metadata.ruleName));
            }
        }
        return failures;
    }
}
exports.Rule = Rule;
Rule.metadata = {
    ruleName: "no-outside-dependencies",
    description: "Don't import things in `DefinitelyTyped/node_modules`.",
    optionsDescription: "Not configurable.",
    options: null,
    type: "functionality",
    typescriptOnly: true,
};
const seenPrograms = new WeakSet();
//# sourceMappingURL=noOutsideDependenciesRule.js.map