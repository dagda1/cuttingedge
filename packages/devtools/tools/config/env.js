"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) {
              t[p] = s[p];
            }
          }
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientEnv = exports.nodePath = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
delete require.cache[require.resolve("./paths")];
var NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
  throw new Error(
    "The NODE_ENV environment variable is required but was not specified."
  );
}
var appDirectory = fs_1.default.realpathSync(process.cwd());
exports.nodePath = (process.env.NODE_PATH || "")
  .split(path_1.default.delimiter)
  .filter(function (folder) {
    return folder && !path_1.default.isAbsolute(folder);
  })
  .map(function (folder) {
    return path_1.default.resolve(appDirectory, folder);
  })
  .join(path_1.default.delimiter);
function getClientEnv(target, options, additional) {
  if (target === void 0) {
    target = "web";
  }
  if (options === void 0) {
    options = {};
  }
  if (additional === void 0) {
    additional = {};
  }
  var raw = __assign(
    {
      NODE_ENV: process.env.NODE_ENV || "development",
      VERBOSE: !!process.env.VERBOSE,
      HOST: process.env.HOST || options.host || "localhost",
      BUILD_TARGET: target === "web" ? "client" : "server",
      PUBLIC_PATH: process.env.PUBLIC_PATH || "/",
      CI: !!process.env.CI,
      PUBLIC_URL: options.publicUrl || "",
      nodePath: exports.nodePath,
    },
    additional
  );
  // Stringify all values so we can feed into Webpack DefinePlugin
  var stringified = Object.keys(raw).reduce(function (env, key) {
    if (["__DEV__", "__BROWSER__", "__COMMIT__"].includes(key)) {
      env[key] = JSON.stringify(raw[key]);
    } else {
      env["process.env." + key] = JSON.stringify(raw[key]);
    }
    return env;
  }, {});
  return { raw: raw, stringified: stringified };
}
exports.getClientEnv = getClientEnv;
//# sourceMappingURL=env.js.map
