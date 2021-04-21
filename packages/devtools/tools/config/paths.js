"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.paths = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var finders_1 = require("../scripts/utils/finders");
var getPublicUrlOrPath_1 = __importDefault(require("react-dev-utils/getPublicUrlOrPath"));
var appDirectory = fs_1.default.realpathSync(process.cwd());
var resolveApp = function (relativePath) { return path_1.default.resolve(appDirectory, relativePath); };
var DefaultBuildDir = 'dist';
var publicUrlOrPath = getPublicUrlOrPath_1.default(process.env.NODE_ENV === 'development', undefined, process.env.PUBLIC_URL);
var resolveOwn = function (relativePath) { return path_1.default.resolve(__dirname, '..', relativePath); };
var nodePaths = (process.env.NODE_PATH || '')
    .split(process.platform === 'win32' ? ';' : ':')
    .filter(Boolean)
    .filter(function (folder) { return !path_1.default.isAbsolute(folder); })
    .map(resolveApp);
var appNodeModules = finders_1.findAppNodeModules(process.cwd());
var resolvedNodeModules = [appNodeModules, './node_modules']
    .filter(function (m) { return fs_1.default.existsSync(m); })
    .map(function (m) { return path_1.default.relative(process.cwd(), m); });
var libPackages = [
    'packages/devtools',
    'packages/testing',
    'packages/eslint-config',
    'packages/tsconfig',
    'packages/useful-types',
    'packages/util',
    'packages/hooks',
    'packages/use-mathjax',
    'packages/component-library',
    'packages/svg',
    'packages/use-operation',
    'packages/use-shortcuts',
    'packages/react-abortable-fetch',
].map(function (dep) { return path_1.default.resolve(process.cwd(), dep); });
var tsConfigPath = resolveApp('tsconfig.json');
var testTsConfigPath = require.resolve('@cutting/tsconfig/tsconfig.test.json');
var tsConfigProductionPath = resolveApp('tsconfig.dist.json');
var tsConfig = fs_1.default.existsSync(tsConfigPath)
    ? require(tsConfigPath)
    : { compilerOptions: { outDir: undefined, module: undefined } };
var tsConfigProduction = fs_1.default.existsSync(tsConfigProductionPath) ? tsConfigProductionPath : tsConfigPath;
var testTsConfig = fs_1.default.existsSync(testTsConfigPath)
    ? testTsConfigPath
    : path_1.default.resolve(__dirname, '../../typescript/tsconfig.test.json');
var outDir = ((_a = tsConfig.compilerOptions) === null || _a === void 0 ? void 0 : _a.outDir) || DefaultBuildDir;
var isCommonJs = ((_c = (_b = tsConfig.compilerOptions) === null || _b === void 0 ? void 0 : _b.module) === null || _c === void 0 ? void 0 : _c.toLowerCase()) === 'commonjs';
var appBuild = outDir ? resolveApp(outDir) : resolveApp(DefaultBuildDir);
var DevFolder = 'demo';
exports.paths = {
    dotenv: resolveApp('.env'),
    appPath: resolveApp('.'),
    appBuild: appBuild,
    appBuildPublic: path_1.default.join(appBuild, 'public'),
    appManifest: path_1.default.join(appBuild, 'loadable-stats.json'),
    appPublic: resolveApp('public'),
    appNodeModules: resolveApp('node_modules'),
    appSrc: resolveApp('src'),
    appPackageJson: resolveApp('package.json'),
    appServerIndexJs: resolveApp('src'),
    appClientIndexJs: resolveApp('src/client'),
    appSrcIndexJs: './src',
    ownPath: resolveOwn('.'),
    appHtml: resolveApp('public/index.html'),
    nodePaths: nodePaths,
    ownNodeModules: resolveOwn('node_modules'),
    localBuildConfig: resolveApp('./build.config.js'),
    resolvedNodeModules: resolvedNodeModules,
    tsConfig: tsConfigPath,
    tsConfigProduction: tsConfigProduction,
    devDir: resolveApp(DevFolder),
    devDirPublic: resolveApp(DevFolder + "/public"),
    libPackages: libPackages,
    defaultBuildConfigPath: path_1.default.join(__dirname, './build.config.js'),
    proxySetup: resolveApp('setupProxy.js'),
    tranlationsDir: resolveApp('src/translations'),
    publicUrlOrPath: publicUrlOrPath,
    gitDir: resolveApp('./.git'),
    eslintConfig: resolveApp('./.eslintrc.json'),
    gitIgnore: resolveApp('./.gitignore'),
    ossIndex: resolveApp('ossindex'),
    ownJestConfig: resolveApp('jest.config.js'),
    jestConfig: path_1.default.join(__dirname, '../jest/jest.config.js'),
    testTsConfig: testTsConfig,
    projectReferences: !!tsConfig.references,
    isCommonJS: isCommonJs,
};
//# sourceMappingURL=paths.js.map