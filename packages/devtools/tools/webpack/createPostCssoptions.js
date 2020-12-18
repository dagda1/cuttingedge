"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostCssOptions = void 0;
exports.createPostCssOptions = function () { return ({
    postcssOptions: {
        ident: 'postcss',
        syntax: 'postcss-scss',
        plugins: [
            'postcss-flexbugs-fixes',
            [
                'postcss-preset-env',
                {
                    autoprefixer: {
                        flexbox: 'no-2009',
                    },
                    stage: 3,
                    features: {
                        'custom-properties': false,
                    },
                },
            ],
        ],
        sourceMap: true,
    },
}); };
//# sourceMappingURL=createPostCssoptions.js.map