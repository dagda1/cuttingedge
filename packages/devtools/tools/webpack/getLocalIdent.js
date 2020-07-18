"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalIdent = void 0;
var path_1 = __importDefault(require("path"));
var constants_1 = require("./constants");
var decamelize = function (str) { return str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase(); };
var dasherize = function (str) { return decamelize(str).replace(/[ _]/g, '-'); };
exports.getLocalIdent = function (loaderContext, localIdentName, localName, options) {
    if (!options.context) {
        options.context =
            loaderContext.options && typeof loaderContext.options.context === 'string'
                ? loaderContext.options.context
                : loaderContext.context;
    }
    var request = path_1.default.relative(options.context, loaderContext.resourcePath).replace(constants_1.sassModuleRegex, '');
    var prefix = dasherize(path_1.default.parse(request).name);
    return prefix + "__" + localName;
};
//# sourceMappingURL=getLocalIdent.js.map