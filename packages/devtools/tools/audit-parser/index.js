#!/usr/bin/env node
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
exports.audit = void 0;
const path_1 = __importDefault(require('path'));
const fs_extra_1 = __importDefault(require('fs-extra'));
const mkdirp_1 = __importDefault(require('mkdirp'));
const paths_1 = require('../config/paths');
const commander_1 = require('commander');
const run_1 = require('../scripts/utils/run');
const logger_1 = require('../scripts/logger');
const xml_1 = __importDefault(require('xml'));
const LogFailurePrefix = 'ossindex.sonatype.org';
function audit(exceptions) {
  var _a, _b, _c;
  return __awaiter(this, void 0, void 0, function* () {
    try {
      let auditResult;
      try {
        auditResult = yield (0, run_1.run)('pnpm audit --json --level=moderate');
      } catch (err) {
        logger_1.logger.error(JSON.stringify(err));
        logger_1.logger.warn('Call to yarnkpg audit has caused an error.  Exiting for now.  Audits caught on next build');
        process.exit(0);
        return;
      }
      const [report, ...vulnerabilities] = auditResult
        .trim()
        .split('\n')
        .reverse()
        .filter((a) => {
          if (!a) {
            logger_1.logger.error(a);
            return false;
          }
          return true;
        })
        .map((s) => JSON.parse(s));
      const totalDependencies =
        (_a = report === null || report === void 0 ? void 0 : report.data) === null || _a === void 0 ? void 0 : _a.totalDependencies;
      if (!totalDependencies) {
        logger_1.logger.error('Call to Yarn audit has failed.  Exiting for now.  Audits caught on next build');
        logger_1.logger.error(report);
        logger_1.logger.error(auditResult);
        process.exit(0);
      }
      const { name, version } = yield Promise.resolve().then(() =>
        __importStar(require(path_1.default.join(process.cwd(), 'package.json'))),
      );
      const displayName = `${name}@${version}`;
      const logMessage = `running pnpm audit for ${displayName}`;
      logger_1.logger.info(logMessage);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const failures = vulnerabilities.filter((vulnerability) => {
        var _a, _b;
        if (
          !((_a = vulnerability === null || vulnerability === void 0 ? void 0 : vulnerability.data) === null || _a === void 0
            ? void 0
            : _a.advisory)
        ) {
          logger_1.logger.info(typeof vulnerability);
          console.dir(vulnerability);
        }
        const advisory = (_b = vulnerability.data) === null || _b === void 0 ? void 0 : _b.advisory;
        const severity = advisory === null || advisory === void 0 ? void 0 : advisory.severity;
        const packageName = advisory.module_name;
        const meetsCrieria = !!severity && exceptions.includes(packageName) === false;
        if (meetsCrieria) {
          const logMessage = `${LogFailurePrefix} - Found a ${severity} vulneability for ${packageName} in ${displayName} - ${advisory.url}`;
          logger_1.logger.error(logMessage);
        }
        return meetsCrieria;
      });
      const jsonResults = {
        testsuites: [
          {
            _attr: {
              name: 'Yarn Audit',
              failures: failures.length,
              tests: totalDependencies,
            },
          },
        ],
      };
      const testSuite = {
        testsuite: [
          {
            _attr: {
              name: displayName,
              errors: 0,
              failures: failures.length,
              skipped: 0,
              timestamp: new Date().toISOString().slice(0, -5),
            },
          },
        ],
      };
      for (let i = 0; i < failures.length; i++) {
        const failure = failures[i];
        if (
          !((_c =
            (_b = failure === null || failure === void 0 ? void 0 : failure.data) === null || _b === void 0 ? void 0 : _b.resolution) ===
            null || _c === void 0
            ? void 0
            : _c.path)
        ) {
          const logMessage = `irregular json = ${JSON.stringify(failure)}`;
          logger_1.logger.error('Houston we have a problem.......');
          logger_1.logger.error(logMessage);
          process.exit(1);
        }
        const {
          data: {
            advisory,
            recommendation,
            resolution: { path },
          },
        } = failure;
        const { overview, module_name } = advisory;
        const dependencyPath = path.split('>').length === 1 ? path : path.split('>')[0];
        const message = [overview, recommendation].join('\n');
        const testCase = {
          testcase: [
            {
              _attr: {
                id: i + 1,
                classname: module_name,
                name: module_name,
              },
            },
            {
              failure: [
                {
                  _attr: {
                    message: `Dependency of ${dependencyPath}`,
                  },
                },
                message,
              ],
            },
          ],
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        testSuite.testsuite.push(testCase);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      jsonResults.testsuites.push(testSuite);
      const { ossIndex } = paths_1.paths;
      if (!fs_extra_1.default.existsSync(ossIndex)) {
        (0, mkdirp_1.default)(ossIndex);
      }
      fs_extra_1.default.emptyDirSync(ossIndex);
      fs_extra_1.default.writeFileSync(
        path_1.default.join(ossIndex, 'junitReport.xml'),
        (0, xml_1.default)(jsonResults, { indent: '  ', declaration: true }),
      );
      const finalMessage = `audit finished with ${failures.length} found.`;
      logger_1.logger.done(finalMessage);
      process.exit(0);
    } catch (err) {
      logger_1.logger.error(err);
      process.exit(1);
    }
  });
}
exports.audit = audit;
const program = (0, commander_1.createCommand)('audit-parser');
program
  .description('run pnpm audit against the yarn.lock file in current cwd')
  .helpOption('-h, --help', 'show help')
  .option('-e, --exceptions', 'a list of packages to ignore, i.e. angular 1.3 in bpm should be the only one')
  .action((_, options = []) =>
    __awaiter(void 0, void 0, void 0, function* () {
      yield audit(options);
    }),
  );
program.parse(process.argv);
//# sourceMappingURL=index.js.map
