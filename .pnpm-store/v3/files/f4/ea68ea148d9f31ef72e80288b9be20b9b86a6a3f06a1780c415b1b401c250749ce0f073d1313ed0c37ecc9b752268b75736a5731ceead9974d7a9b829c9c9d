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
    ruleName: "no-single-element-tuple-type",
    description: "Forbids `[T]`, which should be `T[]`.",
    optionsDescription: "Not configurable.",
    options: null,
    type: "functionality",
    typescriptOnly: true,
};
function walk(ctx) {
    const { sourceFile } = ctx;
    sourceFile.forEachChild(function cb(node) {
        var _a;
        if (ts.isTupleTypeNode(node) && ((_a = node.elements) !== null && _a !== void 0 ? _a : node.elementTypes).length === 1) {
            ctx.addFailureAtNode(node, (0, util_1.failure)(Rule.metadata.ruleName, "Type [T] is a single-element tuple type. You probably meant T[]."));
        }
        node.forEachChild(cb);
    });
}
//# sourceMappingURL=noSingleElementTupleTypeRule.js.map