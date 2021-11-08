'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.createAssetsLoader = void 0;
var createAssetsLoader = function () {
  return {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  };
};
exports.createAssetsLoader = createAssetsLoader;
//# sourceMappingURL=assets-loader.js.map
