"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostCssOptions = exports.TailwindExtractor = void 0;
var kebabCase_1 = __importDefault(require("lodash/kebabCase"));
var paths_1 = require("../config/paths");
var fs_1 = __importDefault(require("fs"));
var assert_ts_1 = require("assert-ts");
assert_ts_1.assert(fs_1.default.existsSync(paths_1.paths.tailwindcssConfig), "no tailwindcss at " + paths_1.paths.tailwindcssConfig);
var TailwindExtractor = /** @class */ (function () {
    function TailwindExtractor() {
    }
    TailwindExtractor.extract = function (content) {
        var matches = content.match(/[A-Za-z0-9-_:/]+/g) || [];
        var kebab = matches.map(function (m) { return kebabCase_1.default(m); });
        return matches.concat(kebab).filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });
    };
    return TailwindExtractor;
}());
exports.TailwindExtractor = TailwindExtractor;
var createPostCssOptions = function (_a) {
    var 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isProduction = _a.isProduction;
    return ({
        sourceMap: true,
        postcssOptions: {
            parser: 'postcss-scss',
            plugins: [
                'postcss-import',
                'autoprefixer',
                require('tailwindcss')(paths_1.paths.tailwindcssConfig),
            ].filter(Boolean),
        },
    });
};
exports.createPostCssOptions = createPostCssOptions;
//# sourceMappingURL=createPostCssoptions.js.map