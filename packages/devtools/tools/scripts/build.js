"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
process.env.NODE_ENV = 'production';
process.on('unhandledRejection', function (err) {
    throw err;
});
require("../config/env");
var fs_extra_1 = __importDefault(require("fs-extra"));
var paths_1 = require("../config/paths");
var logger_1 = require("./logger");
var FileSizeReporter_1 = __importDefault(require("react-dev-utils/FileSizeReporter"));
var copy_public_folder_1 = require("./utils/copy-public-folder");
var compile_1 = require("./webpack/compile");
var build_1 = require("../types/build");
var build_config_1 = require("../config/build.config");
var webpack_merge_1 = require("webpack-merge");
var client_1 = require("../webpack/client");
var server_1 = require("../webpack/server");
var node_1 = require("../webpack/node");
var assert_ts_1 = require("assert-ts");
var empty_build_dir_1 = require("./empty-build-dir");
var measureFileSizesBeforeBuild = FileSizeReporter_1.default.measureFileSizesBeforeBuild;
var printFileSizesAfterBuild = FileSizeReporter_1.default.printFileSizesAfterBuild;
var build = function (_a) {
    var buildClient = _a.buildClient, buildServer = _a.buildServer, buildNode = _a.buildNode;
    return __awaiter(void 0, void 0, void 0, function () {
        var localBuildConfig, _b, buildConfig, nodeConfig, publicDir, previousFileSizes, serverConfig, clientConfig, clientStats, err_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    logger_1.logger.start('starting build');
                    if (!fs_extra_1.default.existsSync(paths_1.paths.localBuildConfig)) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require(paths_1.paths.localBuildConfig)); })];
                case 1:
                    _b = _c.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _b = {};
                    _c.label = 3;
                case 3:
                    localBuildConfig = _b;
                    buildConfig = webpack_merge_1.merge(build_config_1.config, localBuildConfig);
                    nodeConfig = !!buildNode && node_1.configure(buildConfig.node);
                    publicDir = buildServer ? paths_1.paths.appBuildPublic : paths_1.paths.appBuild;
                    _c.label = 4;
                case 4:
                    _c.trys.push([4, 11, , 12]);
                    return [4 /*yield*/, measureFileSizesBeforeBuild(publicDir)];
                case 5:
                    previousFileSizes = _c.sent();
                    empty_build_dir_1.emptyBuildDir();
                    copy_public_folder_1.copyPublicFolder();
                    if (!nodeConfig) return [3 /*break*/, 7];
                    return [4 /*yield*/, compile_1.compile(nodeConfig, build_1.BuildType.node)];
                case 6:
                    _c.sent();
                    logger_1.logger.done('finished building node webpack build');
                    return [2 /*return*/];
                case 7:
                    serverConfig = !!buildServer && server_1.configure(buildConfig.server);
                    clientConfig = buildClient && client_1.configure(__assign(__assign({}, buildConfig.client), { isStaticBuild: !buildServer }));
                    assert_ts_1.assert(!!clientConfig, 'clientConfig is not present');
                    return [4 /*yield*/, compile_1.compile(clientConfig, build_1.BuildType.client)];
                case 8:
                    clientStats = (_c.sent()).stats;
                    logger_1.logger.done('finished building client webpack build');
                    if (!serverConfig) return [3 /*break*/, 10];
                    return [4 /*yield*/, compile_1.compile(serverConfig, build_1.BuildType.server)];
                case 9:
                    _c.sent();
                    logger_1.logger.done('finished building server webpack build');
                    _c.label = 10;
                case 10:
                    printFileSizesAfterBuild(clientStats, previousFileSizes, publicDir);
                    logger_1.logger.done('build finished');
                    return [3 /*break*/, 12];
                case 11:
                    err_1 = _c.sent();
                    logger_1.logger.error('Failed to compile.');
                    logger_1.logger.error(err_1.message || err_1);
                    logger_1.logger.error(err_1.stack);
                    process.exit(1);
                    return [3 /*break*/, 12];
                case 12: return [2 /*return*/];
            }
        });
    });
};
exports.build = build;
//# sourceMappingURL=build.js.map