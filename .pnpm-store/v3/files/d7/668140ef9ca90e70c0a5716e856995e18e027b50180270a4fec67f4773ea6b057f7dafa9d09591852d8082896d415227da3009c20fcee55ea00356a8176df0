"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.overridePresets = exports.corePresets = exports.build = exports.bail = exports.start = exports.executor = exports.getConfig = void 0;

require("core-js/modules/es.promise.js");

var _webpack = _interopRequireWildcard(require("webpack"));

var _webpackDevMiddleware = _interopRequireDefault(require("webpack-dev-middleware"));

var _webpackHotMiddleware = _interopRequireDefault(require("webpack-hot-middleware"));

var _nodeLogger = require("@storybook/node-logger");

var _coreCommon = require("@storybook/core-common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var compilation;
var reject;

var getConfig = async function (options) {
  var presets = options.presets;
  var typescriptOptions = await presets.apply('typescript', {}, options);
  var babelOptions = await presets.apply('babel', {}, _objectSpread(_objectSpread({}, options), {}, {
    typescriptOptions: typescriptOptions
  }));
  var frameworkOptions = await presets.apply(`${options.framework}Options`, {}, options);
  return presets.apply('webpack', {}, _objectSpread(_objectSpread({}, options), {}, {
    babelOptions: babelOptions,
    typescriptOptions: typescriptOptions,
    [`${options.framework}Options`]: frameworkOptions
  }));
};

exports.getConfig = getConfig;
var executor = {
  get: async function (options) {
    var _await$options$preset;

    var version = (await options.presets.apply('webpackVersion')) || '5';
    var webpackInstance = ((_await$options$preset = await options.presets.apply('webpackInstance')) === null || _await$options$preset === void 0 ? void 0 : _await$options$preset.default) || _webpack.default;
    (0, _coreCommon.checkWebpackVersion)({
      version: version
    }, '5', 'builder-webpack5');
    return webpackInstance;
  }
};
exports.executor = executor;

var start = async function ({
  startTime: startTime,
  options: options,
  router: router
}) {
  var _config$output;

  var webpackInstance = await executor.get(options);
  var config = await getConfig(options);
  var compiler = webpackInstance(config);

  if (!compiler) {
    var err = `${config.name}: missing webpack compiler at runtime!`;

    _nodeLogger.logger.error(err);

    return {
      bail: bail,
      totalTime: process.hrtime(startTime),
      stats: {
        hasErrors: function () {
          return true;
        },
        hasWarnings: function () {
          return false;
        },
        toJson: function () {
          return {
            warnings: [],
            errors: [err]
          };
        }
      }
    };
  }

  var _await$useProgressRep = await (0, _coreCommon.useProgressReporting)(router, startTime, options),
      handler = _await$useProgressRep.handler,
      modulesCount = _await$useProgressRep.modulesCount;

  new _webpack.ProgressPlugin({
    handler: handler,
    modulesCount: modulesCount
  }).apply(compiler);
  var middlewareOptions = {
    publicPath: (_config$output = config.output) === null || _config$output === void 0 ? void 0 : _config$output.publicPath,
    writeToDisk: true
  };
  compilation = (0, _webpackDevMiddleware.default)(compiler, middlewareOptions);
  router.use(compilation);
  router.use((0, _webpackHotMiddleware.default)(compiler));
  var stats = await new Promise(function (ready, stop) {
    compilation.waitUntilValid(ready);
    reject = stop;
  });

  if (!stats) {
    throw new Error('no stats after building preview');
  }

  if (stats.hasErrors()) {
    throw stats;
  }

  return {
    bail: bail,
    stats: stats,
    totalTime: process.hrtime(startTime)
  };
};

exports.start = start;

var bail = function (e) {
  if (reject) {
    reject();
  }

  if (process) {
    try {
      compilation.close();

      _nodeLogger.logger.warn('Force closed preview build');
    } catch (err) {
      _nodeLogger.logger.warn('Unable to close preview build!');
    }
  }

  throw e;
};

exports.bail = bail;

var build = async function ({
  options: options,
  startTime: startTime
}) {
  var webpackInstance = await executor.get(options);

  _nodeLogger.logger.info('=> Compiling preview..');

  var config = await getConfig(options);
  return new Promise(function (succeed, fail) {
    var compiler = webpackInstance(config);
    compiler.run(function (error, stats) {
      if (error || !stats || stats.hasErrors()) {
        _nodeLogger.logger.error('=> Failed to build the preview');

        process.exitCode = 1;

        if (error) {
          _nodeLogger.logger.error(error.message);

          compiler.close(function () {
            return fail(error);
          });
          return;
        }

        if (stats && (stats.hasErrors() || stats.hasWarnings())) {
          var _stats$toJson = stats.toJson({
            warnings: true,
            errors: true
          }),
              _stats$toJson$warning = _stats$toJson.warnings,
              warnings = _stats$toJson$warning === void 0 ? [] : _stats$toJson$warning,
              _stats$toJson$errors = _stats$toJson.errors,
              errors = _stats$toJson$errors === void 0 ? [] : _stats$toJson$errors;

          errors.forEach(function (e) {
            return _nodeLogger.logger.error(e.message);
          });
          warnings.forEach(function (e) {
            return _nodeLogger.logger.error(e.message);
          });
          compiler.close(function () {
            return options.debugWebpack ? fail(stats) : fail(new Error('=> Webpack failed, learn more with --debug-webpack'));
          });
          return;
        }
      }

      _nodeLogger.logger.trace({
        message: '=> Preview built',
        time: process.hrtime(startTime)
      });

      if (stats && stats.hasWarnings()) {
        stats.toJson({
          warnings: true
        }).warnings.forEach(function (e) {
          return _nodeLogger.logger.warn(e.message);
        });
      } // https://webpack.js.org/api/node/#run
      // #15227


      compiler.close(function (closeErr) {
        if (closeErr) {
          return fail(closeErr);
        }

        return succeed(stats);
      });
    });
  });
};

exports.build = build;
var corePresets = [require.resolve('./presets/preview-preset.js')];
exports.corePresets = corePresets;
var overridePresets = [require.resolve('./presets/custom-webpack-preset.js')];
exports.overridePresets = overridePresets;