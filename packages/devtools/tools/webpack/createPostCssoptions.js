"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostCssOptions = void 0;
const createPostCssOptions = ({ 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
isProduction, }) => ({
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
exports.createPostCssOptions = createPostCssOptions;
//# sourceMappingURL=createPostCssoptions.js.map