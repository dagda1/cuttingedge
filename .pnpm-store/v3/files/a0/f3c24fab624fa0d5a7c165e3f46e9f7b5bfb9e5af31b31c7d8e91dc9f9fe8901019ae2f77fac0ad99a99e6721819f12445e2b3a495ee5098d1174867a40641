"use strict";
/**
 * Created by user on 2017/12/9/009.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports._this_origin = exports.fn = exports.upath = exports.win32 = exports.posix = exports.PathWrap = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const type_1 = require("./lib/type");
const util_1 = require("./lib/util");
const path_is_network_drive_1 = require("path-is-network-drive");
const fix_1 = require("./lib/fix");
class PathWrap {
    constructor(path, id) {
        var _a;
        this.sep = '/';
        this.node = path_1.default;
        let _static = (0, util_1.getStatic)(this);
        // @ts-ignore
        this.fn = (0, util_1.defaults)(this.__proto__, _static.fn, path);
        this.delimiter = (_a = path.delimiter) !== null && _a !== void 0 ? _a : _static.fn.delimiter;
        [
            'join',
            'normalize',
            'relative',
            'resolve',
            'parse',
            'format',
            'basename',
            'dirname',
            'extname',
            'isAbsolute',
            'toNamespacedPath',
        ]
            .forEach(prop => {
            //this.fn[prop] = this.fn[prop].bind(this);
            this[prop] = this[prop].bind(this);
        });
        delete this[id];
        Object.defineProperty(this, type_1.ORIGIN_KEY, {
            enumerable: false,
            value: path,
        });
        this.fn[id] = this[id] = this;
        this.name = id;
    }
    join(path, ...paths) {
        // @ts-ignore
        path = (0, fix_1._fix_special)(this, path, true);
        return (0, util_1._replace_sep)(this, _this_origin(this).join(path, ...paths));
    }
    normalize(path) {
        let ret = (0, fix_1._fix_special)(this, path);
        if (ret === null || ret === void 0 ? void 0 : ret.length) {
            return ret;
        }
        return (0, util_1._replace_sep)(this, _this_origin(this).normalize(path));
    }
    relative(from, to) {
        from = (0, fix_1._fix_special)(this, from, true);
        to = (0, fix_1._fix_special)(this, to, true);
        return (0, util_1._replace_sep)(this, _this_origin(this).relative(from.toString(), to.toString()));
    }
    resolve(path, ...paths) {
        // @ts-ignore
        path = (0, fix_1._fix_special)(this, path, true);
        return (0, util_1._replace_sep)(this, _this_origin(this).resolve(path, ...paths));
    }
    parse(path) {
        path = this.normalize(path);
        let ret = _this_origin(this).parse(path);
        ret.root = (0, util_1._replace_sep)(this, ret.root);
        ret.dir = (0, util_1._replace_sep)(this, ret.dir);
        return ret;
    }
    format(pathObject) {
        return (0, util_1._replace_sep)(this, _this_origin(this).format(pathObject));
    }
    // ---------
    basename(path, ext) {
        return _this_origin(this).basename(path, ext);
    }
    dirname(path) {
        let r;
        if (false && this.name !== 'posix' && (0, path_is_network_drive_1.pathIsNetworkDrive)(path)) {
            if ((0, path_is_network_drive_1.matchNetworkDriveRoot)(path)) {
                r = path;
            }
            else {
                let m = (0, path_is_network_drive_1.matchNetworkDrive02)(path);
                if (m === null || m === void 0 ? void 0 : m.length) {
                    return `\\\\${m[1]}`;
                }
                r = _this_origin(this).dirname(path);
            }
        }
        else {
            r = _this_origin(this).dirname(path);
        }
        if (r.length > 1 && !/^\w:[/\\]$/.test(r)) {
            r = (0, util_1._strip_sep)(r);
        }
        return (0, util_1._replace_sep)(this, r);
    }
    extname(path) {
        return _this_origin(this).extname(path);
    }
    isAbsolute(path) {
        return _this_origin(this).isAbsolute(path);
    }
    toNamespacedPath(path) {
        return _this_origin(this).toNamespacedPath(path);
    }
}
exports.PathWrap = PathWrap;
(function (PathWrap) {
    let __proto__ = {};
    // get prototype from class
    for (let i in Object.getOwnPropertyDescriptors(PathWrap.prototype)) {
        __proto__[i] = PathWrap.prototype[i];
    }
    PathWrap.fn = __proto__;
    delete PathWrap.fn.name;
    PathWrap.fn['fn'] = PathWrap.fn;
    // @ts-ignore
    PathWrap.fn.sep = '/';
    PathWrap.prototype.fn = PathWrap.fn;
})(PathWrap = exports.PathWrap || (exports.PathWrap = {}));
exports.posix = new PathWrap(path_1.default.posix, 'posix');
exports.win32 = new PathWrap(path_1.default.win32, 'win32');
const _upath = new PathWrap(path_1.default, 'upath');
exports.upath = _upath;
exports.upath.PathWrap = PathWrap;
exports.fn = PathWrap.fn = exports.upath.fn;
// @ts-ignore
path_1.default.upath = exports.upath;
for (const [key, lib] of [
    ['win32', exports.win32],
    ['posix', exports.posix],
    ['upath', exports.upath],
    ['default', exports.upath],
    ['node', path_1.default],
]) {
    delete exports.win32.fn[key];
    delete exports.posix.fn[key];
    delete exports.upath.fn[key];
    delete exports.win32[key];
    delete exports.posix[key];
    delete exports.upath[key];
    // @ts-ignore
    exports.win32[key] = exports.posix[key] = exports.upath[key] = lib;
    //win32.__proto__[key] = posix.__proto__[key] = lib;
}
Object.defineProperty(exports.upath, "__esModule", { value: true });
// @ts-ignore
//export default upath as PathWrap & IPath & IPathNode;
exports.default = exports.upath;
function _this_origin(who) {
    if (who[type_1.ORIGIN_KEY]) {
        // @ts-ignore
        return who[type_1.ORIGIN_KEY];
    }
    // @ts-ignore
    else if (who === exports.upath) {
        // @ts-ignore
        return path_1.default;
    }
    else if (who === exports.win32) {
        // @ts-ignore
        return path_1.default.win32;
    }
    else if (who === exports.posix) {
        // @ts-ignore
        return path_1.default.posix;
    }
    throw new TypeError(`this not PathWrap`);
}
exports._this_origin = _this_origin;
//# sourceMappingURL=core.js.map