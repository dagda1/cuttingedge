"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostCssOptions = exports.TailwindExtractor = void 0;
var kebabCase_1 = __importDefault(require("lodash/kebabCase"));
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
var createPostCssOptions = function () { return ({
    parser: 'postcss-scss',
    sourceMap: true,
    ident: 'postcss',
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}); };
exports.createPostCssOptions = createPostCssOptions;
//# sourceMappingURL=createPostCssoptions.js.map