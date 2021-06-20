"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostCssOptions = void 0;
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
                require('postcss-import'),
                require('postcss-url'),
                require('autoprefixer'),
                require('postcss-flexbugs-fixes'),
            ],
        },
    });
};
exports.createPostCssOptions = createPostCssOptions;
//# sourceMappingURL=createPostCssoptions.js.map