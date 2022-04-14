"use strict";
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
exports.interceptClientRequest = void 0;
var debug_1 = require("debug");
var http_1 = __importDefault(require("http"));
var https_1 = __importDefault(require("https"));
var http_get_1 = require("./http.get");
var http_request_1 = require("./http.request");
var log = debug_1.debug('http override');
/**
 * Intercepts requests issued by native "http" and "https" modules.
 */
var interceptClientRequest = function (observer, resolver) {
    var e_1, _a;
    var pureModules = new Map();
    var modules = [
        ['http', http_1.default],
        ['https', https_1.default],
    ];
    try {
        for (var modules_1 = __values(modules), modules_1_1 = modules_1.next(); !modules_1_1.done; modules_1_1 = modules_1.next()) {
            var _b = __read(modules_1_1.value, 2), protocol = _b[0], requestModule = _b[1];
            log('patching the "%s" module...', protocol);
            pureModules.set(protocol, {
                module: requestModule,
                request: requestModule.request,
                get: requestModule.get,
            });
            // @ts-ignore Call signature overloads are incompatible.
            requestModule.request =
                // Force a line-break to prevent ignoring the "request" call.
                http_request_1.request(protocol, resolver, observer);
            // @ts-ignore Call signature overloads are incompatible.
            requestModule.get =
                // Force a line-break to prevent ignoring the "get" call.
                http_get_1.get(protocol, resolver, observer);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (modules_1_1 && !modules_1_1.done && (_a = modules_1.return)) _a.call(modules_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return function () {
        var e_2, _a;
        log('done, restoring modules...');
        try {
            for (var _b = __values(pureModules.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var requestModule = _c.value;
                requestModule.module.get = requestModule.get;
                requestModule.module.request = requestModule.request;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        pureModules.clear();
    };
};
exports.interceptClientRequest = interceptClientRequest;
//# sourceMappingURL=index.js.map