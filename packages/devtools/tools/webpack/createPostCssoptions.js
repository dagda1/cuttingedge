'use strict';
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.createPostCssOptions = exports.TailwindExtractor = void 0;
const kebabCase_1 = __importDefault(require('lodash/kebabCase'));
const TailwindExtractor = /** @class */ (function () {
  function TailwindExtractor() {}
  TailwindExtractor.extract = function (content) {
    const matches = content.match(/[A-Za-z0-9-_:/]+/g) || [];
    const kebab = matches.map(function (m) {
      return kebabCase_1.default(m);
    });
    return matches.concat(kebab).filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });
  };
  return TailwindExtractor;
})();
exports.TailwindExtractor = TailwindExtractor;
const createPostCssOptions = function (_a) {
  const // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isProduction = _a.isProduction;
  return {
    sourceMap: true,
    ident: 'postcss',
    parser: 'postcss-scss',
    plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')].filter(Boolean),
  };
};
exports.createPostCssOptions = createPostCssOptions;
//# sourceMappingURL=createPostCssoptions.js.map
