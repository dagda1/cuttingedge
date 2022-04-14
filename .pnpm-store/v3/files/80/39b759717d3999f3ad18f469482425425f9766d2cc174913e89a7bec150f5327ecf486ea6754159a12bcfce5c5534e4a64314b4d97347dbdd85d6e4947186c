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
exports.disabler = exports.Rule = void 0;
const dts_critic_1 = require("dts-critic");
const Lint = __importStar(require("tslint"));
const suggestions_1 = require("../suggestions");
const util_1 = require("../util");
const defaultOptions = {
    mode: dts_critic_1.Mode.NameOnly,
};
class Rule extends Lint.Rules.AbstractRule {
    apply(sourceFile) {
        return this.applyWithFunction(sourceFile, walk, toCriticOptions(parseOptions(this.ruleArguments)));
    }
}
exports.Rule = Rule;
Rule.metadata = {
    ruleName: "npm-naming",
    description: "Ensure that package name and DefinitelyTyped header match npm package info.",
    optionsDescription: `An object with a \`mode\` property should be provided.
If \`mode\` is '${dts_critic_1.Mode.Code}', then option \`errors\` can be provided.
\`errors\` should be an array specifying which code checks should be enabled or disabled.`,
    options: {
        oneOf: [
            {
                type: "object",
                properties: {
                    "mode": {
                        type: "string",
                        enum: [dts_critic_1.Mode.NameOnly],
                    },
                    "single-line": {
                        description: "Whether to print error messages in a single line. Used for testing.",
                        type: "boolean",
                    },
                    "required": ["mode"],
                },
            },
            {
                type: "object",
                properties: {
                    "mode": {
                        type: "string",
                        enum: [dts_critic_1.Mode.Code],
                    },
                    "errors": {
                        type: "array",
                        items: {
                            type: "array",
                            items: [
                                { description: "Name of the check.",
                                    type: "string",
                                    enum: [dts_critic_1.ErrorKind.NeedsExportEquals, dts_critic_1.ErrorKind.NoDefaultExport],
                                },
                                {
                                    description: "Whether the check is enabled or disabled.",
                                    type: "boolean",
                                },
                            ],
                            minItems: 2,
                            maxItems: 2,
                        },
                        default: [],
                    },
                    "single-line": {
                        description: "Whether to print error messages in a single line. Used for testing.",
                        type: "boolean",
                    },
                    "required": ["mode"],
                },
            },
        ],
    },
    optionExamples: [
        true,
        [true, { mode: dts_critic_1.Mode.NameOnly }],
        [
            true,
            {
                mode: dts_critic_1.Mode.Code,
                errors: [[dts_critic_1.ErrorKind.NeedsExportEquals, true], [dts_critic_1.ErrorKind.NoDefaultExport, false]],
            },
        ],
    ],
    type: "functionality",
    typescriptOnly: true,
};
function parseOptions(args) {
    if (args.length === 0) {
        return defaultOptions;
    }
    const arg = args[0];
    if (arg == null) {
        return defaultOptions;
    }
    if (!arg.mode || typeof arg.mode !== "string") {
        return defaultOptions;
    }
    const mode = (0, dts_critic_1.parseMode)(arg.mode);
    if (!mode) {
        return defaultOptions;
    }
    const singleLine = !!arg["single-line"];
    switch (mode) {
        case dts_critic_1.Mode.NameOnly:
            return { mode, singleLine };
        case dts_critic_1.Mode.Code:
            if (!arg.errors || !Array.isArray(arg.errors)) {
                return { mode, errors: [], singleLine };
            }
            return { mode, errors: parseEnabledErrors(arg.errors), singleLine };
    }
}
function parseEnabledErrors(errors) {
    const enabledChecks = [];
    for (const tuple of errors) {
        if (Array.isArray(tuple)
            && tuple.length === 2
            && typeof tuple[0] === "string"
            && typeof tuple[1] === "boolean") {
            const error = (0, dts_critic_1.parseExportErrorKind)(tuple[0]);
            if (error) {
                enabledChecks.push([error, tuple[1]]);
            }
        }
    }
    return enabledChecks;
}
function toCriticOptions(options) {
    switch (options.mode) {
        case dts_critic_1.Mode.NameOnly:
            return options;
        case dts_critic_1.Mode.Code:
            return Object.assign(Object.assign({}, options), { errors: new Map(options.errors) });
    }
}
function walk(ctx) {
    const { sourceFile } = ctx;
    const { text } = sourceFile;
    const lookFor = (search, explanation) => {
        const idx = text.indexOf(search);
        if (idx !== -1) {
            ctx.addFailureAt(idx, search.length, (0, util_1.failure)(Rule.metadata.ruleName, explanation));
        }
    };
    if ((0, util_1.isMainFile)(sourceFile.fileName, /*allowNested*/ false)) {
        try {
            const optionsWithSuggestions = toOptionsWithSuggestions(ctx.options);
            const diagnostics = (0, dts_critic_1.dtsCritic)(sourceFile.fileName, /* sourcePath */ undefined, optionsWithSuggestions);
            const errors = filterErrors(diagnostics, ctx);
            for (const error of errors) {
                switch (error.kind) {
                    case dts_critic_1.ErrorKind.NoMatchingNpmPackage:
                    case dts_critic_1.ErrorKind.NoMatchingNpmVersion:
                    case dts_critic_1.ErrorKind.NonNpmHasMatchingPackage:
                        lookFor("// Type definitions for", errorMessage(error, ctx.options));
                        break;
                    case dts_critic_1.ErrorKind.DtsPropertyNotInJs:
                    case dts_critic_1.ErrorKind.DtsSignatureNotInJs:
                    case dts_critic_1.ErrorKind.JsPropertyNotInDts:
                    case dts_critic_1.ErrorKind.JsSignatureNotInDts:
                    case dts_critic_1.ErrorKind.NeedsExportEquals:
                    case dts_critic_1.ErrorKind.NoDefaultExport:
                        if (error.position) {
                            ctx.addFailureAt(error.position.start, error.position.length, (0, util_1.failure)(Rule.metadata.ruleName, errorMessage(error, ctx.options)));
                        }
                        else {
                            ctx.addFailure(0, 1, (0, util_1.failure)(Rule.metadata.ruleName, errorMessage(error, ctx.options)));
                        }
                        break;
                }
            }
        }
        catch (e) {
            // We're ignoring exceptions.
        }
    }
    // Don't recur, we're done.
}
const enabledSuggestions = [
    dts_critic_1.ErrorKind.JsPropertyNotInDts,
    dts_critic_1.ErrorKind.JsSignatureNotInDts,
];
function toOptionsWithSuggestions(options) {
    if (options.mode === dts_critic_1.Mode.NameOnly) {
        return options;
    }
    const optionsWithSuggestions = { mode: options.mode, errors: new Map(options.errors) };
    enabledSuggestions.forEach(err => optionsWithSuggestions.errors.set(err, true));
    return optionsWithSuggestions;
}
function filterErrors(diagnostics, ctx) {
    const errors = [];
    diagnostics.forEach(diagnostic => {
        var _a, _b;
        if (isSuggestion(diagnostic, ctx.options)) {
            (0, suggestions_1.addSuggestion)(ctx, diagnostic.message, (_a = diagnostic.position) === null || _a === void 0 ? void 0 : _a.start, (_b = diagnostic.position) === null || _b === void 0 ? void 0 : _b.length);
        }
        else {
            errors.push(diagnostic);
        }
    });
    return errors;
}
function isSuggestion(diagnostic, options) {
    return options.mode === dts_critic_1.Mode.Code
        && enabledSuggestions.includes(diagnostic.kind)
        && !options.errors.get(diagnostic.kind);
}
function tslintDisableOption(error) {
    switch (error) {
        case dts_critic_1.ErrorKind.NoMatchingNpmPackage:
        case dts_critic_1.ErrorKind.NoMatchingNpmVersion:
        case dts_critic_1.ErrorKind.NonNpmHasMatchingPackage:
            return `false`;
        case dts_critic_1.ErrorKind.NoDefaultExport:
        case dts_critic_1.ErrorKind.NeedsExportEquals:
        case dts_critic_1.ErrorKind.JsSignatureNotInDts:
        case dts_critic_1.ErrorKind.JsPropertyNotInDts:
        case dts_critic_1.ErrorKind.DtsSignatureNotInJs:
        case dts_critic_1.ErrorKind.DtsPropertyNotInJs:
            return JSON.stringify([true, { mode: dts_critic_1.Mode.Code, errors: [[error, false]] }]);
    }
}
function errorMessage(error, opts) {
    const message = error.message +
        `\nIf you won't fix this error now or you think this error is wrong,
you can disable this check by adding the following options to your project's tslint.json file under "rules":

    "npm-naming": ${tslintDisableOption(error.kind)}
`;
    if (opts.singleLine) {
        return message.replace(/(\r\n|\n|\r|\t)/gm, " ");
    }
    return message;
}
/**
 * Given npm-naming lint failures, returns a rule configuration that prevents such failures.
 */
function disabler(failures) {
    const disabledErrors = new Set();
    for (const ruleFailure of failures) {
        if (ruleFailure.ruleName !== "npm-naming") {
            throw new Error(`Expected failures of rule "npm-naming", found failures of rule ${ruleFailure.ruleName}.`);
        }
        const message = ruleFailure.failure;
        // Name errors.
        if (message.includes("must have a matching npm package")
            || message.includes("must match a version that exists on npm")
            || message.includes("conflicts with the existing npm package")) {
            return false;
        }
        // Code errors.
        if (message.includes("declaration should use 'export =' syntax")) {
            disabledErrors.add(dts_critic_1.ErrorKind.NeedsExportEquals);
        }
        else if (message.includes("declaration specifies 'export default' but the JavaScript source \
            does not mention 'default' anywhere")) {
            disabledErrors.add(dts_critic_1.ErrorKind.NoDefaultExport);
        }
        else {
            return [true, { mode: dts_critic_1.Mode.NameOnly }];
        }
    }
    if (dts_critic_1.defaultErrors.every(error => disabledErrors.has(error))) {
        return [true, { mode: dts_critic_1.Mode.NameOnly }];
    }
    const errors = [];
    disabledErrors.forEach(error => errors.push([error, false]));
    return [true, { mode: dts_critic_1.Mode.Code, errors }];
}
exports.disabler = disabler;
//# sourceMappingURL=npmNamingRule.js.map