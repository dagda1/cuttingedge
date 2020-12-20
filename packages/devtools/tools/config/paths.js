"use strict";
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.paths = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var finders_1 = require("../scripts/utils/finders");
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
var appNodeModules = finders_1.findAppNodeModules(process.cwd());
var resolvedNodeModules = [appNodeModules, './node_modules']
    .filter(function (m) { return fs_1.default.existsSync(m); })
    .map(function (m) { return path_1.default.relative(process.cwd(), m); });
var libPackages = [
    'packages/devtools',
    'packages/eslint-config',
    'packages/useful-types',
    'packages/util',
    'packages/hooks',
    'packages/component-library',
    'packages/use-shortcuts',
    'packages/graphql-explorer',
].map(function (dep) { return path_1.default.resolve(process.cwd(), dep); });
var webAppPackages = ['packages/website'].map(function (dep) { return path_1.default.resolve(process.cwd(), dep); });
var tsConfigPath = resolveApp('tsconfig.json');
var testTsConfigPath = resolveApp('tsconfig.test.json');
var tsConfig = fs_1.default.existsSync(tsConfigPath)
    ? require(tsConfigPath)
    : { compilerOptions: { outDir: undefined } };
var testTsConfig = fs_1.default.existsSync(testTsConfigPath)
    ? testTsConfigPath
    : path_1.default.resolve(__dirname, '../../typescript/tsconfig.test.json');
var outDir = ((_a = tsConfig.compilerOptions) === null || _a === void 0 ? void 0 : _a.outDir) || DefaultBuildDir;
var appBuild = outDir ? resolveApp(outDir) : resolveApp(DefaultBuildDir);
var DevFolder = 'demo ';
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
    devDir: resolveApp(DevFolder),
    devDirPublic: resolveApp(DevFolder + "/public"),
    libPackages: libPackages,
    webAppPackages: webAppPackages,
    allPackages: __spread(libPackages, webAppPackages),
    defaultBuildConfigPath: path_1.default.join(__dirname, './build.config.js'),
    proxySetup: resolveApp('setupProxy.js'),
    tranlationsDir: resolveApp('src/translations'),
    publicUrlOrPath: publicUrlOrPath,
    eslintConfig: resolveApp('./.eslintrc.json'),
    ossIndex: resolveApp('ossindex'),
    ownJestConfig: resolveApp('jest.config.js'),
    jestConfig: path_1.default.join(__dirname, '../jest/jest.config.js'),
    testTsConfig: testTsConfig,
};
//# sourceMappingURL=paths.js.map