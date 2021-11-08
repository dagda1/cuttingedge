'use strict';
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) {
      return o;
    }
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
        ar.push(r.value);
      }
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) {
          m.call(i);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    return ar;
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2) {
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) {
            ar = Array.prototype.slice.call(from, 0, i);
          }
          ar[i] = from[i];
        }
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.configure = void 0;
var webpack_1 = __importDefault(require('webpack'));
var path_1 = __importDefault(require('path'));
var webpack_merge_1 = require('webpack-merge');
var html_webpack_plugin_1 = __importDefault(require('html-webpack-plugin'));
var common_1 = require('./common');
var paths_1 = require('../config/paths');
var fs_1 = __importDefault(require('fs'));
var InterpolateHtmlPlugin_1 = __importDefault(require('react-dev-utils/InterpolateHtmlPlugin'));
var react_refresh_webpack_plugin_1 = __importDefault(require('@pmmmwh/react-refresh-webpack-plugin'));
var getUrlParts_1 = require('./getUrlParts');
var getEnvironment_1 = require('./getEnvironment');
var createDevServer_1 = require('./loaders/createDevServer');
var createWebpackOptimisation_1 = require('./optimisation/createWebpackOptimisation');
var webpack_plugin_1 = __importDefault(require('@loadable/webpack-plugin'));
var html_webpack_partials_plugin_1 = __importDefault(require('html-webpack-partials-plugin'));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var ModuleNotFoundPlugin_1 = __importDefault(require('react-dev-utils/ModuleNotFoundPlugin'));
var getFileName_1 = require('./getFileName');
var isProfilerEnabled = function () {
  return process.argv.includes('--profile');
};
var configure = function (options, overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  var entries = options.entries,
    publicDir = options.publicDir,
    proxy = options.proxy,
    devServer = options.devServer,
    isStaticBuild = options.isStaticBuild;
  var _a = (0, getEnvironment_1.getEnvironment)(),
    isDevelopment = _a.isDevelopment,
    isProduction = _a.isProduction,
    commitHash = _a.commitHash;
  var ssrBuild = !isStaticBuild;
  var _b = (0, getUrlParts_1.getUrlParts)({ ssrBuild: ssrBuild, isProduction: isProduction }),
    protocol = _b.protocol,
    publicPath = _b.publicPath,
    port = _b.port,
    sockPort = _b.sockPort;
  options.publicUrl = publicPath.length > 1 && publicPath.substr(-1) === '/' ? publicPath.slice(0, -1) : publicPath;
  options.isNode = false;
  options.isWeb = true;
  var common = (0, common_1.configureCommon)(options, overrides);
  var polyfills = ['core-js/stable', 'regenerator-runtime/runtime', 'whatwg-fetch'];
  var iter = typeof entries === 'string' || Array.isArray(entries) ? { client: entries } : entries;
  var finalEntries = Object.keys(iter).reduce(function (acc, key) {
    var value = iter[key];
    var entryPoints = typeof value === 'string' ? [value] : value;
    acc[key] = __spreadArray(__spreadArray([], __read(polyfills), false), __read(entryPoints), false);
    return acc;
  }, {});
  var template = publicDir ? path_1.default.join(publicDir, 'index.html') : 'public/index.html';
  var templateExists = fs_1.default.existsSync(template);
  var jsFile = (0, getFileName_1.getFileName)({ isProduction: isProduction, fileType: 'js' }) + '.js';
  var jsChunkFile = (0, getFileName_1.getFileName)({ isProduction: isProduction, fileType: 'js' }) + '.js';
  var config = (0, webpack_merge_1.merge)(common, overrides, {
    name: 'client',
    target: 'web',
    entry: finalEntries,
    devServer: isDevelopment
      ? (0, createDevServer_1.createDevServer)({ protocol: protocol, sockPort: sockPort, proxy: proxy, port: port })
      : {},
    output: {
      path: isStaticBuild ? paths_1.paths.appBuild : paths_1.paths.appBuildPublic,
      publicPath: publicPath,
      pathinfo: isDevelopment,
      filename: jsFile,
      hotUpdateChunkFilename: 'static/js/[id].[hash].hot-update.js',
      hotUpdateMainFilename: 'static/js/[hash].hot-update.json',
      chunkFilename: jsChunkFile,
      library: {
        name: 'LIB',
        type: 'var',
      },
      devtoolModuleFilenameTemplate: isProduction
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          function (info) {
            return path_1.default.relative(paths_1.paths.appSrc, info.absoluteResourcePath).replace(/\\/g, '/');
          }
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          function (info) {
            return path_1.default.resolve(info.absoluteResourcePath).replace(/\\/g, '/');
          },
    },
    plugins: [
      isDevelopment &&
        new react_refresh_webpack_plugin_1.default({
          overlay: {
            sockIntegration: 'wds',
            sockPort: sockPort,
          },
        }),
      isDevelopment && isStaticBuild && new webpack_1.default.HotModuleReplacementPlugin(),
      ssrBuild &&
        new webpack_plugin_1.default({
          writeToDisk: { filename: paths_1.paths.appBuild },
        }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      isStaticBuild && new InterpolateHtmlPlugin_1.default(html_webpack_plugin_1.default, { PUBLIC_URL: options.publicUrl }),
      (devServer || (isStaticBuild && templateExists)) &&
        new html_webpack_plugin_1.default({
          inject: true,
          template: template,
          minify: isProduction && {
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
        }),
      new html_webpack_partials_plugin_1.default([
        {
          path: path_1.default.join(__dirname, './partial.html'),
          location: 'body',
          priority: 'low',
          options: {
            hash: commitHash,
          },
        },
      ]),
      // TODO: should not need this anymore?
      new webpack_1.default.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
      new ModuleNotFoundPlugin_1.default(paths_1.paths.appPath),
      isProfilerEnabled() && new webpack_1.default.debug.ProfilingPlugin(),
    ].filter(Boolean),
    stats: {
      colors: true,
      preset: 'errors_only',
      timings: isDevelopment,
      errors: true,
    },
    infrastructureLogging: {
      level: 'verbose',
    },
  });
  config.optimization = (0, createWebpackOptimisation_1.createWebpackOptimisation)({
    optimization: config.optimization,
    isProduction: isProduction,
  });
  return config;
};
exports.configure = configure;
//# sourceMappingURL=client.js.map
