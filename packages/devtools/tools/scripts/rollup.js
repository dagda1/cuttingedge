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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
var logger_1 = require("./logger");
var plugin_node_resolve_1 = __importDefault(require("@rollup/plugin-node-resolve"));
var assert_ts_1 = require("assert-ts");
var rollup_plugin_inject_process_env_1 = __importDefault(require("rollup-plugin-inject-process-env"));
var plugin_babel_1 = __importDefault(require("@rollup/plugin-babel"));
var plugin_json_1 = __importDefault(require("@rollup/plugin-json"));
var rollup_plugin_sourcemaps_1 = __importDefault(require("rollup-plugin-sourcemaps"));
var rollup_plugin_terser_1 = require("rollup-plugin-terser");
var copy_assets_1 = require("./copy-assets");
var rollup_plugin_postcss_1 = __importDefault(require("rollup-plugin-postcss"));
var rollup_plugin_md_1 = require("@cutting/rollup-plugin-md");
// @ts-ignore
var rollup_plugin_svgo_1 = __importDefault(require("rollup-plugin-svgo"));
// @ts-ignore
var rollup_plugin_eslint_1 = __importDefault(require("@rbnlffl/rollup-plugin-eslint"));
// @ts-ignore
var postcss_url_1 = __importDefault(require("postcss-url"));
// @ts-ignore
var autoprefixer_1 = __importDefault(require("autoprefixer"));
var rollup_plugin_analyzer_1 = __importDefault(require("rollup-plugin-analyzer"));
var plugin_commonjs_1 = __importDefault(require("@rollup/plugin-commonjs"));
var createBabelConfig_1 = require("./createBabelConfig");
var helpers_1 = require("../rollup/helpers");
var write_package_1 = require("./write-package");
var csv_1 = require("../rollup/plugins/csv");
var postcss_import_1 = __importDefault(require("postcss-import"));
var empty_build_dir_1 = require("./empty-build-dir");
var core_1 = require("@babel/core");
logger_1.logger.debug("using  " + path_1.default.basename(paths_1.paths.tsConfigProduction));
function generateBundledModule(_a) {
    var packageName = _a.packageName, inputFile = _a.inputFile, moduleFormat = _a.moduleFormat, env = _a.env;
    return __awaiter(this, void 0, void 0, function () {
        var minify, babelConfig, bundle, pkgName, extension, fileName, outputFileName;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    assert_ts_1.assert(fs_extra_1.default.existsSync(inputFile), "Input file " + inputFile + " does not exist");
                    minify = env === 'production';
                    babelConfig = __rest(createBabelConfig_1.createBabelConfig({
                        isDevelopment: false,
                        isProduction: true,
                        isNode: false,
                        moduleFormat: moduleFormat,
                    }), []);
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
                                plugin_commonjs_1.default({
                                    // use a regex to make sure to include eventual hoisted packages
                                    include: moduleFormat === 'umd' ? /\/node_modules\// : /\/regenerator-runtime\//,
                                }),
                                plugin_json_1.default(),
                                rollup_plugin_md_1.md(),
                                rollup_plugin_postcss_1.default({
                                    extract: true,
                                    modules: false,
                                    autoModules: true,
                                    sourceMap: true,
                                    use: ['sass'],
                                    plugins: [
                                        postcss_import_1.default(),
                                        autoprefixer_1.default(),
                                        // env === 'production' &&
                                        //   purgecss({
                                        //     content: [paths.appHtml, './src/**/*.tsx'],
                                        //     defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
                                        //   }),
                                        postcss_url_1.default({
                                            url: 'inline',
                                        }),
                                    ],
                                }),
                                csv_1.csv(),
                                rollup_plugin_typescript2_1.default({
                                    typescript: require('typescript'),
                                    tsconfig: paths_1.paths.tsConfigProduction,
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
                                plugin_babel_1.default(__assign(__assign({ exclude: /\/node_modules\/(core-js)\//, babelHelpers: 'runtime' }, babelConfig), { extensions: __spreadArray(__spreadArray([], __read(core_1.DEFAULT_EXTENSIONS)), ['ts', 'tsx']) })),
                                rollup_plugin_inject_process_env_1.default({
                                    NODE_ENV: env,
                                }),
                                rollup_plugin_svgo_1.default(),
                                rollup_plugin_sourcemaps_1.default(),
                                minify &&
                                    rollup_plugin_terser_1.terser({
                                        output: { comments: false },
                                        compress: {
                                            keep_infinity: true,
                                            pure_getters: true,
                                            passes: 10,
                                        },
                                        ecma: 5,
                                        toplevel: moduleFormat === 'cjs',
                                    }),
                                rollup_plugin_analyzer_1.default({ summaryOnly: true, showExports: false, hideDeps: false }),
                            ].filter(Boolean),
                        })];
                case 1:
                    bundle = _b.sent();
                    pkgName = helpers_1.safePackageName(packageName);
                    extension = env === 'production' ? 'min.js' : 'js';
                    fileName = moduleFormat === 'umd' ? pkgName + ".umd.js" : 'esm' ? pkgName + ".esm.js" : pkgName + ".cjs." + env + "." + extension;
                    outputFileName = path_1.default.join(paths_1.paths.appBuild, fileName);
                    logger_1.logger.info("writing " + path_1.default.basename(outputFileName) + " for " + packageName);
                    return [4 /*yield*/, bundle.write({
                            file: outputFileName,
                            format: moduleFormat,
                            name: packageName,
                            exports: 'named',
                            sourcemap: true,
                            esModule: moduleFormat !== 'umd',
                            interop: 'auto',
                            freeze: false,
                        })];
                case 2:
                    _b.sent();
                    copy_assets_1.copyAssets();
                    return [2 /*return*/];
            }
        });
    });
}
var getInputFile = function (packageName) {
    if (process.argv[2] === '--input-file') {
        var file = path_1.default.resolve(process.argv[3]);
        assert_ts_1.assert(fs_extra_1.default.existsSync(file), "no file found at " + file);
        return file;
    }
    var candidates = [];
    [packageName, path_1.default.join(packageName, 'index'), 'index', path_1.default.join('bin', helpers_1.safePackageName(packageName))].forEach(function (candidate) {
        ['.ts', '.tsx'].forEach(function (fileType) {
            candidates.push(path_1.default.join(paths_1.paths.appSrc, "" + candidate + fileType));
        });
    });
    var inputFile = candidates.find(function (candidate) { return fs_extra_1.default.existsSync(candidate); });
    assert_ts_1.assert(!!inputFile, 'No rootFile found for rollup');
    logger_1.logger.start("using input file " + path_1.default.basename(inputFile) + " for " + packageName);
    return inputFile;
};
function build() {
    return __awaiter(this, void 0, void 0, function () {
        var pkgJsonPath, pkg, packageName, inputFile, configs, configs_1, configs_1_1, _a, moduleFormat, env, e_1_1, pkgJson, pkgName, moduleFile;
        var e_1, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    empty_build_dir_1.emptyBuildDir();
                    pkgJsonPath = path_1.default.join(process.cwd(), 'package.json');
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require(pkgJsonPath)); })];
                case 1:
                    pkg = (_c.sent()).default;
                    packageName = pkg.name;
                    inputFile = getInputFile(packageName);
                    configs = [
                        { moduleFormat: 'cjs', env: 'development' },
                        { moduleFormat: 'cjs', env: 'production' },
                        { moduleFormat: 'esm', env: 'development' },
                        { moduleFormat: 'esm', env: 'production' },
                        { moduleFormat: 'umd', env: 'production' },
                    ];
                    logger_1.logger.info("Generating " + packageName + " bundle.");
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 7, 8, 9]);
                    configs_1 = __values(configs), configs_1_1 = configs_1.next();
                    _c.label = 3;
                case 3:
                    if (!!configs_1_1.done) return [3 /*break*/, 6];
                    _a = configs_1_1.value, moduleFormat = _a.moduleFormat, env = _a.env;
                    return [4 /*yield*/, generateBundledModule({ packageName: packageName, inputFile: inputFile, moduleFormat: moduleFormat, env: env })];
                case 4:
                    _c.sent();
                    _c.label = 5;
                case 5:
                    configs_1_1 = configs_1.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_1_1 = _c.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (configs_1_1 && !configs_1_1.done && (_b = configs_1.return)) _b.call(configs_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 9: return [4 /*yield*/, helpers_1.writeCjsEntryFile(packageName)];
                case 10:
                    _c.sent();
                    pkgJson = __assign({}, pkg);
                    pkgName = helpers_1.safePackageName(packageName);
                    pkgJson.main = path_1.default.join('dist', 'index.js');
                    moduleFile = path_1.default.join('dist', pkgName + ".esm.js");
                    pkgJson.module = moduleFile;
                    pkgJson.browser = path_1.default.join('dist', pkgName + ".umd.js");
                    return [4 /*yield*/, write_package_1.writeToPackage(pkgJsonPath, pkgJson)];
                case 11:
                    _c.sent();
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