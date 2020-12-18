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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/ban-ts-comment */
var rollup_1 = require("rollup");
var paths_1 = require("../config/paths");
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var rollup_plugin_typescript2_1 = __importDefault(require("rollup-plugin-typescript2"));
var logger_1 = require("../scripts/logger");
var plugin_node_resolve_1 = __importDefault(require("@rollup/plugin-node-resolve"));
var assert_1 = require("../assert/assert");
var rollup_plugin_inject_process_env_1 = __importDefault(require("rollup-plugin-inject-process-env"));
var plugin_babel_1 = __importDefault(require("@rollup/plugin-babel"));
var plugin_json_1 = __importDefault(require("@rollup/plugin-json"));
var rollup_plugin_sourcemaps_1 = __importDefault(require("rollup-plugin-sourcemaps"));
var rollup_plugin_terser_1 = require("rollup-plugin-terser");
var copy_assets_1 = require("../scripts/copy-assets");
var rollup_plugin_postcss_1 = __importDefault(require("rollup-plugin-postcss"));
// @ts-ignore
var rollup_plugin_md_1 = __importDefault(require("rollup-plugin-md"));
// @ts-ignore
var rollup_plugin_svgo_1 = __importDefault(require("rollup-plugin-svgo"));
// @ts-ignore
var rollup_plugin_eslint_1 = __importDefault(require("@rbnlffl/rollup-plugin-eslint"));
// @ts-ignore
var postcss_url_1 = __importDefault(require("postcss-url"));
var createBabelConfig_1 = require("../scripts/createBabelConfig");
var helpers_1 = require("./helpers");
var write_package_1 = require("../scripts/write-package");
var csv_1 = require("./plugins/csv");
fs_extra_1.default.emptyDirSync(paths_1.paths.appBuild);
function generateBundledModule(_a) {
    var packageName = _a.packageName, inputFile = _a.inputFile, moduleFormat = _a.moduleFormat, env = _a.env;
    return __awaiter(this, void 0, void 0, function () {
        var _b, cacheDirectory, babelConfig, minify, bundle, pkgName, extension, fileName, outputFileName;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    assert_1.assert(fs_extra_1.default.existsSync(inputFile), "Input file " + inputFile + " does not exist");
                    logger_1.logger.info("Generating " + packageName + " bundle.");
                    _b = createBabelConfig_1.createBabelConfig({
                        isDevelopment: false,
                        isProduction: true,
                        isNode: false,
                        moduleFormat: moduleFormat,
                    }), cacheDirectory = _b.cacheDirectory, babelConfig = __rest(_b, ["cacheDirectory"]);
                    minify = moduleFormat === 'cjs' && env === 'production';
                    return [4 /*yield*/, rollup_1.rollup({
                            input: inputFile,
                            external: function (id) {
                                if (id === 'babel-plugin-transform-async-to-promises/helpers') {
                                    return false;
                                }
                                return !id.startsWith('.') && !path_1.default.isAbsolute(id);
                            },
                            treeshake: {
                                moduleSideEffects: false,
                            },
                            plugins: [
                                rollup_plugin_eslint_1.default({
                                    fix: false,
                                    throwOnError: true,
                                    throwOnWarning: true,
                                    extensions: ['.ts', '.tsx', '.test.ts', '.test.tsx'],
                                    filterInclude: 'src/**',
                                    filterExclude: ['**/*.scss', '**/*.css', '**/*.md', '**/*.csv', 'dist/**', '**/*.json'],
                                    useEslintrc: true,
                                }),
                                plugin_node_resolve_1.default({
                                    mainFields: ['module', 'browser', 'main'],
                                    extensions: ['.mjs', '.cjs', '.js', '.ts', '.tsx', '.json', '.jsx'],
                                }),
                                plugin_json_1.default(),
                                rollup_plugin_md_1.default(),
                                rollup_plugin_postcss_1.default({
                                    extract: true,
                                    modules: false,
                                    autoModules: true,
                                    use: ['sass'],
                                    plugins: [
                                        postcss_url_1.default({
                                            url: 'inline',
                                            maxSize: 10,
                                            fallback: 'copy',
                                        }),
                                    ],
                                }),
                                csv_1.csv(),
                                rollup_plugin_typescript2_1.default({
                                    clean: true,
                                    typescript: require('typescript'),
                                    tsconfig: paths_1.paths.tsConfig,
                                    abortOnError: true,
                                    tsconfigDefaults: {
                                        compilerOptions: {
                                            sourceMap: true,
                                            declaration: true,
                                            target: 'esnext',
                                            jsx: 'react-jsx',
                                        },
                                        useTsconfigDeclarationDir: true,
                                    },
                                    tsconfigOverride: {
                                        compilerOptions: {
                                            sourceMap: true,
                                            target: 'esnext',
                                        },
                                    },
                                }),
                                plugin_babel_1.default(__assign({ exclude: /\/node_modules\/(core-js)\//, babelHelpers: 'runtime' }, babelConfig)),
                                rollup_plugin_inject_process_env_1.default({
                                    NODE_ENV: env,
                                }),
                                rollup_plugin_svgo_1.default(),
                                rollup_plugin_sourcemaps_1.default(),
                                minify &&
                                    rollup_plugin_terser_1.terser({
                                        compress: {
                                            keep_infinity: true,
                                            pure_getters: true,
                                            passes: 10,
                                        },
                                        ecma: 2016,
                                        toplevel: moduleFormat === 'cjs',
                                        format: {
                                            comments: 'all',
                                        },
                                    }),
                            ].filter(Boolean),
                        })];
                case 1:
                    bundle = _c.sent();
                    pkgName = helpers_1.safePackageName(packageName);
                    extension = env === 'production' ? 'min.js' : 'js';
                    fileName = moduleFormat === 'esm' ? pkgName + ".esm.js" : pkgName + ".cjs." + env + "." + extension;
                    outputFileName = path_1.default.join(paths_1.paths.appBuild, fileName);
                    logger_1.logger.debug("writing output file " + outputFileName);
                    logger_1.logger.debug(minify === true ? 'creating a minified build' : 'creating a non minified build');
                    return [4 /*yield*/, bundle.write({
                            file: outputFileName,
                            format: moduleFormat,
                            name: packageName,
                            exports: 'named',
                            sourcemap: true,
                            esModule: true,
                            interop: 'default',
                            freeze: false,
                            globals: { react: 'React' },
                        })];
                case 2:
                    _c.sent();
                    copy_assets_1.copyAssets();
                    logger_1.logger.info('copying assets');
                    return [2 /*return*/];
            }
        });
    });
}
function build() {
    return __awaiter(this, void 0, void 0, function () {
        var candidates, pkgJsonPath, pkg, packageName, configs, inputFile, _i, configs_1, _a, moduleFormat, env, pkgJson, pkgName, moduleFile;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    fs_extra_1.default.emptyDirSync(paths_1.paths.appBuild);
                    candidates = [];
                    pkgJsonPath = path_1.default.join(process.cwd(), 'package.json');
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require(pkgJsonPath)); })];
                case 1:
                    pkg = (_b.sent()).default;
                    packageName = pkg.name;
                    [packageName, path_1.default.join(packageName, 'index'), 'index', path_1.default.join('bin', helpers_1.safePackageName(packageName))].forEach(function (candidate) {
                        ['.ts', '.tsx'].forEach(function (fileType) {
                            candidates.push(path_1.default.join(paths_1.paths.appSrc, "" + candidate + fileType));
                        });
                    });
                    configs = [
                        { moduleFormat: 'cjs', env: 'development' },
                        { moduleFormat: 'cjs', env: 'production' },
                        { moduleFormat: 'esm', env: 'production' },
                    ];
                    inputFile = candidates.find(function (candidate) { return fs_extra_1.default.existsSync(candidate); });
                    assert_1.assert(inputFile, 'No rootFile found for rollup');
                    logger_1.logger.start("using input file " + inputFile);
                    _i = 0, configs_1 = configs;
                    _b.label = 2;
                case 2:
                    if (!(_i < configs_1.length)) return [3 /*break*/, 5];
                    _a = configs_1[_i], moduleFormat = _a.moduleFormat, env = _a.env;
                    return [4 /*yield*/, generateBundledModule({ packageName: packageName, inputFile: inputFile, moduleFormat: moduleFormat, env: env })];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, helpers_1.writeCjsEntryFile(packageName)];
                case 6:
                    _b.sent();
                    logger_1.logger.info('updating package.json file');
                    pkgJson = __assign({}, pkg);
                    pkgName = helpers_1.safePackageName(packageName);
                    pkgJson.main = path_1.default.join('dist', 'index.js');
                    moduleFile = path_1.default.join('dist', pkgName + ".esm.js");
                    pkgJson.module = moduleFile;
                    pkgJson.browser = moduleFile;
                    pkgJson.type = 'module';
                    return [4 /*yield*/, write_package_1.writeToPackage(pkgJsonPath, pkgJson)];
                case 7:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, build()];
            case 1:
                _a.sent();
                logger_1.logger.done('finished building');
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                logger_1.logger.error(err_1);
                process.exit(1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=rollup.js.map