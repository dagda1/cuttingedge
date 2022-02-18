'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) {
          k2 = k;
        }
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) {
          k2 = k;
        }
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) {
      return mod;
    }
    var result = {};
    if (mod != null) {
      for (var k in mod) {
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) {
          __createBinding(result, mod, k);
        }
      }
    }
    __setModuleDefault(result, mod);
    return result;
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const esbuild_1 = require('esbuild');
const paths_1 = require('../config/paths');
const consolidateBuildConfigs_1 = require('./consolidateBuildConfigs');
const esbuild_node_externals_1 = require('esbuild-node-externals');
const assert_ts_1 = require('assert-ts');
const logger_1 = __importDefault(require('./logger'));
const path_1 = __importDefault(require('path'));
// import { emptyBuildDir } from './empty-build-dir';
const esbuild_plugin_1 = require('@vanilla-extract/esbuild-plugin');
const copy_assets_1 = require('./copy-assets');
const fs_1 = __importDefault(require('fs'));
const buildConfig = (0, consolidateBuildConfigs_1.consolidateBuildConfigs)();
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function processCss(css) {
  return __awaiter(this, void 0, void 0, function* () {
    const result = yield postcss([autoprefixer]).process(css, {
      from: undefined /* suppress source map warning */,
    });
    return result.css;
  });
}
function bundle({
  packageName,
  format,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  env,
}) {
  return __awaiter(this, void 0, void 0, function* () {
    const entryPoints = typeof buildConfig.client.entries === 'string' ? [buildConfig.client.entries] : buildConfig.client.entries;
    (0, assert_ts_1.assert)(Array.isArray(entryPoints), `build config entries needs to be a string array`);
    const fileName = `index.js`;
    const outfile = path_1.default.join(paths_1.paths.appBuild, format === 'iife' ? 'umd' : format, fileName);
    logger_1.default.info(`writing ${path_1.default.basename(outfile)} for ${packageName} in ${format} format`);
    const reactShimPath = path_1.default.resolve(__dirname, '..', '..', 'react-shim.js');
    if (!fs_1.default.existsSync(reactShimPath)) {
      throw new Error(`no reactShim at ${reactShimPath}`);
    }
    yield (0, esbuild_1.build)({
      entryPoints,
      outfile,
      bundle: true,
      // minify: env === 'production',
      minify: false,
      platform: 'node',
      sourcemap: true,
      format,
      target: 'node16',
      treeShaking: true,
      allowOverwrite: true,
      inject: [path_1.default.resolve(__dirname, '..', '..', 'react-shim.js')],
      tsconfig: paths_1.paths.tsConfigProduction,
      jsx: 'transform',
      logLevel: 'warning',
      color: true,
      plugins: [
        (0, esbuild_node_externals_1.nodeExternalsPlugin)({
          packagePath: paths_1.paths.appPackageJson,
        }),
        (0, esbuild_plugin_1.vanillaExtractPlugin)({
          processCss,
        }),
      ],
    }).catch((err) => {
      console.error(err);
      process.exit(1);
    });
  });
}
const buildPackage = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    // emptyBuildDir();
    (0, copy_assets_1.copyAssets)();
    const { default: pkg } = yield Promise.resolve().then(() => __importStar(require(paths_1.paths.appPackageJson)));
    const packageName = pkg.name;
    const configs = [
      { format: 'iife', env: 'production' },
      { format: 'cjs', env: 'production' },
      { format: 'esm', env: 'production' },
    ];
    logger_1.default.info(`Generating ${packageName} bundle.`);
    for (const { format, env } of configs) {
      yield bundle({ packageName, format, env });
    }
  });
buildPackage();
//# sourceMappingURL=esbuild.js.map
