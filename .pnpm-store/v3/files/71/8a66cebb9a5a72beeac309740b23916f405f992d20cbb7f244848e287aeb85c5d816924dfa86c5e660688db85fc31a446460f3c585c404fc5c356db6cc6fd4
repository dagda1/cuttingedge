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
    static FAILURE_STRING(typeParameter) {
        return (0, util_1.failure)(Rule.metadata.ruleName, `Type parameter ${typeParameter} is used only once.`);
    }
    static FAILURE_STRING_NEVER(typeParameter) {
        return (0, util_1.failure)(Rule.metadata.ruleName, `Type parameter ${typeParameter} is never used.`);
    }
    applyWithProgram(sourceFile, program) {
        return this.applyWithFunction(sourceFile, ctx => walk(ctx, program.getTypeChecker()));
    }
}
exports.Rule = Rule;
Rule.metadata = {
    ruleName: "no-unnecessary-generics",
    description: "Forbids signatures using a generic parameter only once.",
    optionsDescription: "Not configurable.",
    options: null,
    type: "style",
    typescriptOnly: true,
};
function walk(ctx, checker) {
    const { sourceFile } = ctx;
    sourceFile.forEachChild(function cb(node) {
        if (ts.isFunctionLike(node)) {
            checkSignature(node);
        }
        node.forEachChild(cb);
    });
    function checkSignature(sig) {
        if (!sig.typeParameters) {
            return;
        }
        for (const tp of sig.typeParameters) {
            const typeParameter = tp.name.text;
            const res = getSoleUse(sig, assertDefined(checker.getSymbolAtLocation(tp.name)), checker);
            switch (res.type) {
                case "ok":
                    break;
                case "sole":
                    ctx.addFailureAtNode(res.soleUse, Rule.FAILURE_STRING(typeParameter));
                    break;
                case "never":
                    ctx.addFailureAtNode(tp, Rule.FAILURE_STRING_NEVER(typeParameter));
                    break;
                default:
                    assertNever(res);
            }
        }
    }
}
function getSoleUse(sig, typeParameterSymbol, checker) {
    const exit = {};
    let soleUse;
    try {
        if (sig.typeParameters) {
            for (const tp of sig.typeParameters) {
                if (tp.constraint) {
                    recur(tp.constraint);
                }
            }
        }
        for (const param of sig.parameters) {
            if (param.type) {
                recur(param.type);
            }
        }
        if (sig.type) {
            recur(sig.type);
        }
    }
    catch (err) {
        if (err === exit) {
            return { type: "ok" };
        }
        throw err;
    }
    return soleUse ? { type: "sole", soleUse } : { type: "never" };
    function recur(node) {
        if (ts.isIdentifier(node)) {
            if (checker.getSymbolAtLocation(node) === typeParameterSymbol) {
                if (soleUse === undefined) {
                    soleUse = node;
                }
                else {
                    throw exit;
                }
            }
        }
        else {
            node.forEachChild(recur);
        }
    }
}
function assertDefined(value) {
    if (value === undefined) {
        throw new Error("unreachable");
    }
    return value;
}
function assertNever(_) {
    throw new Error("unreachable");
}
//# sourceMappingURL=noUnnecessaryGenericsRule.js.map