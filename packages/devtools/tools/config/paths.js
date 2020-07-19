"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.paths = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var appDirectory = fs_1.default.realpathSync(process.cwd());
var resolveApp = function (relativePath) { return path_1.default.resolve(appDirectory, relativePath); };
var DefaultBuildDir = 'dist';
var getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');
var publicUrlOrPath = getPublicUrlOrPath(process.env.NODE_ENV === 'development', require(resolveApp('package.json')).homepage, process.env.PUBLIC_URL);
var resolveOwn = function (relativePath) { return path_1.default.resolve(__dirname, '..', relativePath); };
var requireRelative = function (relativePath) { return path_1.default.resolve(__dirname, relativePath); };
var nodePaths = (process.env.NODE_PATH || '')
    .split(process.platform === 'win32' ? ';' : ':')
    .filter(Boolean)
    .filter(function (folder) { return !path_1.default.isAbsolute(folder); })
    .map(resolveApp);
var resolvedNodeModules = ['../node_modules', './node_modules']
    .filter(function (m) { return fs_1.default.existsSync(m); })
    .map(function (m) { return path_1.default.join(process.cwd(), m); });
var libPackages = [
    'packages/devtools',
    'packages/eslint-config',
    'packages/useful-types',
    'packages/util',
    'packages/hooks',
    'packages/use-abort',
    'packages/component-library',
    'packages/connected-components',
    'packages/use-shortcuts',
    'packages/react-typed-mousetrap',
    'packages/graphql-swagger',
].map(function (dep) { return path_1.default.resolve(process.cwd(), dep); });
var webAppPackages = ['packages/website'].map(function (dep) { return path_1.default.resolve(process.cwd(), dep); });
var jestConfig = fs_1.default.existsSync(resolveApp('jest.config.js'))
    ? resolveApp('jest.config.js')
    : path_1.default.resolve(__dirname, '../jest/jest.config.js');
var tsConfigPath = resolveApp('tsconfig.json');
var tsConfig = fs_1.default.existsSync(tsConfigPath)
    ? require(tsConfigPath)
    : { compilerOptions: { outDir: undefined } };
var outDir = ((_a = tsConfig.compilerOptions) === null || _a === void 0 ? void 0 : _a.outDir) || DefaultBuildDir;
var appBuild = outDir ? resolveApp(outDir) : resolveApp(DefaultBuildDir);
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
    jsBuildConfigPath: requireRelative('./build.config.js'),
    localBuildConfig: resolveApp('./build.config.js'),
    resolvedNodeModules: resolvedNodeModules,
    tsConfig: tsConfigPath,
    devDir: resolveApp('demo'),
    devDirPublic: resolveApp('demo/public'),
    libPackages: libPackages,
    webAppPackages: webAppPackages,
    allPackages: __spreadArrays(libPackages, webAppPackages),
    defaultBuildConfigPath: path_1.default.join(__dirname, './build.config.js'),
    proxySetup: resolveApp('setupProxy.js'),
    tranlationsDir: resolveApp('src/translations'),
    publicUrlOrPath: publicUrlOrPath,
    eslintConfig: resolveApp('./.eslintrc.json'),
    ossIndex: resolveApp('ossindex'),
    jestConfig: jestConfig,
};
//# sourceMappingURL=paths.js.map