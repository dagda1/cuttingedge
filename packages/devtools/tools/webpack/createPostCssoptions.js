"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostCssOptions = void 0;
var createPostCssOptions = function () { return ({
    parser: 'postcss-scss',
    plugins: [
        require('postcss-flexbugs-fixes'),
        require('autoprefixer')
    ],
    sourceMap: true,
}); };
exports.createPostCssOptions = createPostCssOptions;
//# sourceMappingURL=createPostCssoptions.js.map