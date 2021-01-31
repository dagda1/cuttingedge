#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.audit = void 0;
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var mkdirp_1 = __importDefault(require("mkdirp"));
var paths_1 = require("../config/paths");
var commander_1 = __importDefault(require("commander"));
var run_1 = require("../scripts/utils/run");
var logger_1 = require("../scripts/logger");
var xml_1 = __importDefault(require("xml"));
var LogFailurePrefix = 'ossindex.sonatype.org';
function audit(exceptions) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var auditResult, err_1, _d, report, vulnerabilities, totalDependencies, _e, name_1, version, displayName_1, logMessage, failures, jsonResults, testSuite, i, failure, logMessage_1, _f, advisory, recommendation, path_2, overview, module_name, dependencyPath, message, testCase, ossIndex, finalMessage, err_2;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _g.trys.push([0, 6, , 7]);
                    auditResult = void 0;
                    _g.label = 1;
                case 1:
                    _g.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, run_1.run('yarn audit --json --level=moderate')];
                case 2:
                    auditResult = _g.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _g.sent();
                    logger_1.logger.error(JSON.stringify(err_1));
                    logger_1.logger.warn('Call to yarnkpg audit has caused an error.  Exiting for now.  Audits caught on next build');
                    process.exit(0);
                    return [2 /*return*/];
                case 4:
                    _d = __read(auditResult
                        .trim()
                        .split('\n')
                        .reverse()
                        .filter(function (a) {
                        if (!a) {
                            logger_1.logger.error(a);
                            return false;
                        }
                        return true;
                    })
                        .map(function (s) { return JSON.parse(s); })), report = _d[0], vulnerabilities = _d.slice(1);
                    totalDependencies = (_a = report === null || report === void 0 ? void 0 : report.data) === null || _a === void 0 ? void 0 : _a.totalDependencies;
                    if (!totalDependencies) {
                        logger_1.logger.error('Call to Yarn audit has failed.  Exiting for now.  Audits caught on next build');
                        logger_1.logger.error(report);
                        logger_1.logger.error(auditResult);
                        process.exit(0);
                    }
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require(path_1.default.join(process.cwd(), 'package.json'))); })];
                case 5:
                    _e = _g.sent(), name_1 = _e.name, version = _e.version;
                    displayName_1 = name_1 + "@" + version;
                    logMessage = "running yarn audit for " + displayName_1;
                    logger_1.logger.info(logMessage);
                    failures = vulnerabilities.filter(function (vulnerability) {
                        var _a, _b;
                        if (!((_a = vulnerability === null || vulnerability === void 0 ? void 0 : vulnerability.data) === null || _a === void 0 ? void 0 : _a.advisory)) {
                            logger_1.logger.info(typeof vulnerability);
                            console.dir(vulnerability);
                        }
                        var advisory = (_b = vulnerability.data) === null || _b === void 0 ? void 0 : _b.advisory;
                        var severity = advisory === null || advisory === void 0 ? void 0 : advisory.severity;
                        var packageName = advisory.module_name;
                        var meetsCrieria = !!severity && exceptions.includes(packageName) === false;
                        if (meetsCrieria) {
                            var logMessage_2 = LogFailurePrefix + " - Found a " + severity + " vulneability for " + packageName + " in " + displayName_1 + " - " + advisory.url;
                            logger_1.logger.error(logMessage_2);
                        }
                        return meetsCrieria;
                    });
                    jsonResults = {
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
                    testSuite = {
                        testsuite: [
                            {
                                _attr: {
                                    name: displayName_1,
                                    errors: 0,
                                    failures: failures.length,
                                    skipped: 0,
                                    timestamp: new Date().toISOString().slice(0, -5),
                                },
                            },
                        ],
                    };
                    for (i = 0; i < failures.length; i++) {
                        failure = failures[i];
                        if (!((_c = (_b = failure === null || failure === void 0 ? void 0 : failure.data) === null || _b === void 0 ? void 0 : _b.resolution) === null || _c === void 0 ? void 0 : _c.path)) {
                            logMessage_1 = "irregular json = " + JSON.stringify(failure);
                            logger_1.logger.error('Houston we have a problem.......');
                            logger_1.logger.error(logMessage_1);
                            process.exit(1);
                        }
                        _f = failure.data, advisory = _f.advisory, recommendation = _f.recommendation, path_2 = _f.resolution.path;
                        overview = advisory.overview, module_name = advisory.module_name;
                        dependencyPath = path_2.split('>').length === 1 ? path_2 : path_2.split('>')[0];
                        message = [overview, recommendation].join('\n');
                        testCase = {
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
                                                message: "Dependency of " + dependencyPath,
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
                    ossIndex = paths_1.paths.ossIndex;
                    if (!fs_extra_1.default.existsSync(ossIndex)) {
                        mkdirp_1.default(ossIndex);
                    }
                    fs_extra_1.default.emptyDirSync(ossIndex);
                    fs_extra_1.default.writeFileSync(path_1.default.join(ossIndex, 'junitReport.xml'), xml_1.default(jsonResults, { indent: '  ', declaration: true }));
                    finalMessage = "audit finished with " + failures.length + " found.";
                    logger_1.logger.done(finalMessage);
                    process.exit(0);
                    return [3 /*break*/, 7];
                case 6:
                    err_2 = _g.sent();
                    logger_1.logger.error(err_2);
                    process.exit(1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.audit = audit;
commander_1.default
    .description('run yarn audit against the yarn.lock file in current cwd')
    .helpOption('-h, --help', 'show help')
    .option('-e, --exceptions', 'a list of packages to ignore, i.e. angular 1.3 in bpm should be the only one')
    .action(function (_, options) {
    if (options === void 0) { options = []; }
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, audit(options)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
commander_1.default.parse(process.argv);
//# sourceMappingURL=index.js.map