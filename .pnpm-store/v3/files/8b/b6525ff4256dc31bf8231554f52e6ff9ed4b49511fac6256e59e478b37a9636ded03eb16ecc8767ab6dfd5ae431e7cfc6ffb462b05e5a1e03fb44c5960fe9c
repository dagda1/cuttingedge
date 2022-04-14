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
// Same functionality as https://github.com/palantir/tslint/pull/1654, but simpler implementation.
// Remove when that PR is in.
class Rule extends Lint.Rules.AbstractRule {
    apply(sourceFile) {
        const { statements, referencedFiles, typeReferenceDirectives } = sourceFile;
        if (statements.length + referencedFiles.length + typeReferenceDirectives.length !== 0) {
            return [];
        }
        return [new Lint.RuleFailure(sourceFile, 0, 1, Rule.FAILURE_STRING, this.ruleName)];
    }
}
exports.Rule = Rule;
Rule.metadata = {
    ruleName: "no-useless-files",
    description: "Forbids files with no content.",
    optionsDescription: "Not configurable.",
    options: null,
    type: "functionality",
    typescriptOnly: false,
};
Rule.FAILURE_STRING = (0, util_1.failure)(Rule.metadata.ruleName, "File has no content.");
//# sourceMappingURL=noUselessFilesRule.js.map