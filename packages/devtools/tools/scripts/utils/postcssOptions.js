"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var autoprefixer_1 = __importDefault(require("autoprefixer"));
var postCssOptions = {
    ident: 'postcss',
    plugins: function () {
        return [
            require('postcss-flexbugs-fixes'),
            autoprefixer_1.default({
                flexbox: 'no-2009',
            }),
            require('cssnano'),
        ].filter(Boolean);
    },
};
exports.default = postCssOptions;
//# sourceMappingURL=postcssOptions.js.map