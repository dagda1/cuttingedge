"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalIdent = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const path_1 = __importDefault(require("path"));
const constants_1 = require("./constants");
const string_1 = require("../scripts/utils/string");
const getLocalIdent = (loaderContext, _, localName, options) => {
    if (!options.context) {
        options.context =
            loaderContext.options && typeof loaderContext.options.context === 'string'
                ? loaderContext.options.context
                : loaderContext.context;
    }
    const request = path_1.default.relative(options.context, loaderContext.resourcePath).replace(constants_1.sassModuleRegex, '');
    const prefix = (0, string_1.dasherize)(path_1.default.parse(request).name);
    return `${prefix}__${localName}`;
};
exports.getLocalIdent = getLocalIdent;
//# sourceMappingURL=getLocalIdent.js.map