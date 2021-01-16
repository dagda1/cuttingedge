"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostCssOptions = void 0;
var createPostCssOptions = function () { return ({
    parser: 'postcss-scss',
    plugins: [
        require('postcss-flexbugs-fixes'),
        [
            require('postcss-preset-env')({
                autoprefixer: {
                    flexbox: 'no-2009',
                },
                stage: 3,
                features: {
                    'custom-properties': false,
                },
            }),
        ],
    ],
    sourceMap: true,
}); };
exports.createPostCssOptions = createPostCssOptions;
//# sourceMappingURL=createPostCssoptions.js.map