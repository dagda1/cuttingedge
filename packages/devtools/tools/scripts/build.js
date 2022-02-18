'use strict';
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
exports.build = void 0;
process.env.NODE_ENV = 'production';
process.on('unhandledRejection', (err) => {
  throw err;
});
require('../config/env');
const paths_1 = require('../config/paths');
const logger_1 = require('./logger');
const FileSizeReporter_1 = __importDefault(require('react-dev-utils/FileSizeReporter'));
const copy_public_folder_1 = require('./utils/copy-public-folder');
const compile_1 = require('./webpack/compile');
const build_1 = require('../types/build');
const client_1 = require('../webpack/client');
const server_1 = require('../webpack/server');
const node_1 = require('../webpack/node');
const assert_ts_1 = require('assert-ts');
const empty_build_dir_1 = require('./empty-build-dir');
const consolidateBuildConfigs_1 = require('./consolidateBuildConfigs');
const measureFileSizesBeforeBuild = FileSizeReporter_1.default.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter_1.default.printFileSizesAfterBuild;
const build = ({ buildClient, buildServer, buildNode }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    logger_1.logger.start('starting build');
    const buildConfig = (0, consolidateBuildConfigs_1.consolidateBuildConfigs)();
    const nodeConfig = !!buildNode && (0, node_1.configure)(buildConfig.node);
    const publicDir = buildServer ? paths_1.paths.appBuildPublic : paths_1.paths.appBuild;
    try {
      const previousFileSizes = yield measureFileSizesBeforeBuild(publicDir);
      (0, empty_build_dir_1.emptyBuildDir)();
      (0, copy_public_folder_1.copyPublicFolder)();
      if (nodeConfig) {
        yield (0, compile_1.compile)(nodeConfig, build_1.BuildType.node);
        logger_1.logger.done('finished building node webpack build');
        return;
      }
      const serverConfig = !!buildServer && (0, server_1.configure)(buildConfig.server);
      const clientConfig =
        buildClient &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (0, client_1.configure)(Object.assign(Object.assign({}, buildConfig.client), { isStaticBuild: !buildServer }));
      (0, assert_ts_1.assert)(!!clientConfig, 'clientConfig is not present');
      const { stats: clientStats } = yield (0, compile_1.compile)(clientConfig, build_1.BuildType.client);
      logger_1.logger.done('finished building client webpack build');
      if (serverConfig) {
        yield (0, compile_1.compile)(serverConfig, build_1.BuildType.server);
        logger_1.logger.done('finished building server webpack build');
      }
      printFileSizesAfterBuild(clientStats, previousFileSizes, publicDir);
      logger_1.logger.done('build finished');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err) {
      logger_1.logger.error('Failed to compile.');
      logger_1.logger.error(err.message || err);
      logger_1.logger.error(err.stack);
      process.exit(1);
    }
  });
exports.build = build;
//# sourceMappingURL=build.js.map
