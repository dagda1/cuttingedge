"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostCssOptions = void 0;
var postcss_normalize_1 = __importDefault(require("postcss-normalize"));
var createPostCssOptions = function (_a) {
    var 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isProduction = _a.isProduction;
    return ({
        postcssOptions: {
            sourceMap: true,
            ident: 'postcss',
            parser: 'postcss-scss',
            plugins: [
                require('postcss-flexbugs-fixes'),
                [
                    require('postcss-preset-env'),
                    {
                        autoprefixer: {
                            flexbox: 'no-2009',
                        },
                        stage: 3,
                    },
                ],
                // Adds PostCSS Normalize as the reset css with default options,
                // so that it honors browserslist config in package.json
                // which in turn let's users customize the target behavior as per their needs.
                postcss_normalize_1.default(),
            ],
        },
    });
};
exports.createPostCssOptions = createPostCssOptions;
//# sourceMappingURL=createPostCssoptions.js.map