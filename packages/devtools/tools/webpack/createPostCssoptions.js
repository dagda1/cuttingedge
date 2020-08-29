"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostCssOptions = void 0;
var paths_1 = require("../config/paths");
var path_1 = __importDefault(require("path"));
var globby_1 = __importDefault(require("globby"));
var postcss_purgecss_1 = __importDefault(require("@fullhuman/postcss-purgecss"));
var finders_1 = require("../scripts/utils/finders");
var FileGlobPattern = '/**/*.{js,tsx}';
var repoNodeModules = finders_1.findAppNodeModules(__dirname);
var dsDir = path_1.default.join(repoNodeModules, '@cutting/component-library/dist');
exports.createPostCssOptions = function () { return ({
    ident: 'postcss',
    syntax: 'postcss-scss',
    plugins: function () {
        return [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
                autoprefixer: {
                    flexbox: 'no-2009',
                },
                stage: 3,
            }),
            postcss_purgecss_1.default({
                content: __spreadArrays([
                    paths_1.paths.appHtml
                ], globby_1.default.sync([path_1.default.join(paths_1.paths.appSrc, FileGlobPattern), path_1.default.join(path_1.default.resolve(dsDir), FileGlobPattern)], {
                    onlyFiles: true,
                    ignore: ['**/csg-pvg-online', '**/applicant-pvg-online', '**/*.test.*'],
                })),
                whitelistPatterns: [/^:global/],
            }),
            require('postcss-normalize'),
        ].filter(Boolean);
    },
    sourceMap: true,
}); };
//# sourceMappingURL=createPostCssoptions.js.map