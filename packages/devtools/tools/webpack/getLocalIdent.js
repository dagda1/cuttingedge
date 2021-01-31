"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalIdent = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var path_1 = __importDefault(require("path"));
var constants_1 = require("./constants");
var string_1 = require("../scripts/utils/string");
var getLocalIdent = function (loaderContext, _, localName, options) {
    if (!options.context) {
        options.context =
            loaderContext.options && typeof loaderContext.options.context === 'string'
                ? loaderContext.options.context
                : loaderContext.context;
    }
    var request = path_1.default.relative(options.context, loaderContext.resourcePath).replace(constants_1.sassModuleRegex, '');
    var prefix = string_1.dasherize(path_1.default.parse(request).name);
    return prefix + "__" + localName;
};
exports.getLocalIdent = getLocalIdent;
//# sourceMappingURL=getLocalIdent.js.map