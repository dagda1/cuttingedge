"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var autoprefixer_1 = __importDefault(require("autoprefixer"));
var postCssOptions = {
    // Necessary for external CSS imports to work
    // https://github.com/facebookincubator/create-react-app/issues/2677
    ident: 'postcss',
    plugins: function () { return [
        require('postcss-flexbugs-fixes'),
        autoprefixer_1.default({
            overrideBrowserslist: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9',
            ],
            flexbox: 'no-2009',
        }),
    ]; },
};
exports.default = postCssOptions;
//# sourceMappingURL=postCssoptions.js.map