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
const header_parser_1 = require("@definitelytyped/header-parser");
const Lint = __importStar(require("tslint"));
const util_1 = require("../util");
class Rule extends Lint.Rules.AbstractRule {
    apply(sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    }
}
exports.Rule = Rule;
Rule.metadata = {
    ruleName: "dt-header",
    description: "Ensure consistency of DefinitelyTyped headers.",
    optionsDescription: "Not configurable.",
    options: null,
    type: "functionality",
    typescriptOnly: true,
};
function walk(ctx) {
    const { sourceFile } = ctx;
    const { text } = sourceFile;
    const lookFor = (search, explanation) => {
        const idx = text.indexOf(search);
        if (idx !== -1) {
            ctx.addFailureAt(idx, search.length, (0, util_1.failure)(Rule.metadata.ruleName, explanation));
        }
    };
    if (!(0, util_1.isMainFile)(sourceFile.fileName, /*allowNested*/ true)) {
        lookFor("// Type definitions for", "Header should only be in `index.d.ts` of the root.");
        lookFor("// TypeScript Version", "TypeScript version should be specified under header in `index.d.ts`.");
        lookFor("// Minimum TypeScript Version", "TypeScript version should be specified under header in `index.d.ts`.");
        return;
    }
    lookFor("// Definitions by: My Self", "Author name should be your name, not the default.");
    const error = (0, header_parser_1.validate)(text);
    if (error) {
        ctx.addFailureAt(error.index, 1, (0, util_1.failure)(Rule.metadata.ruleName, `Error parsing header. Expected: ${(0, header_parser_1.renderExpected)(error.expected)}.`));
    }
    // Don't recurse, we're done.
}
//# sourceMappingURL=dtHeaderRule.js.map