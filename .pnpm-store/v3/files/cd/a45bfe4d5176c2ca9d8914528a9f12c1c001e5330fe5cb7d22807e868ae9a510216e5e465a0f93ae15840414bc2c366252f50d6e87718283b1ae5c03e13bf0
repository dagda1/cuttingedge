"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loader_js_1 = require("./loader.js");
var PackageError = (function (_super) {
    __extends(PackageError, _super);
    function PackageError(message, name) {
        var _this = _super.call(this, message) || this;
        _this.package = name;
        return _this;
    }
    return PackageError;
}(Error));
exports.PackageError = PackageError;
;
;
var Package = (function () {
    function Package(name, noLoad) {
        if (noLoad === void 0) { noLoad = false; }
        this.isLoaded = false;
        this.isLoading = false;
        this.hasFailed = false;
        this.dependents = [];
        this.dependencies = [];
        this.dependencyCount = 0;
        this.provided = [];
        this.name = name;
        this.noLoad = noLoad;
        Package.packages.set(name, this);
        this.promise = this.makePromise(this.makeDependencies());
    }
    Package.resolvePath = function (name, addExtension) {
        if (addExtension === void 0) { addExtension = true; }
        var file = loader_js_1.CONFIG.source[name] || name;
        if (!file.match(/^(?:[a-z]+:\/)?\/|\[/)) {
            file = '[mathjax]/' + file.replace(/^\.\//, '');
        }
        if (addExtension && !file.match(/\.[^\/]+$/)) {
            file += '.js';
        }
        var match;
        while ((match = file.match(/^\[([^\]]*)\]/))) {
            if (!loader_js_1.CONFIG.paths.hasOwnProperty(match[1]))
                break;
            file = loader_js_1.CONFIG.paths[match[1]] + file.substr(match[0].length);
        }
        return file;
    };
    Object.defineProperty(Package.prototype, "canLoad", {
        get: function () {
            return this.dependencyCount === 0 && !this.noLoad && !this.isLoading && !this.hasFailed;
        },
        enumerable: true,
        configurable: true
    });
    Package.prototype.makeDependencies = function () {
        var promises = [];
        var map = Package.packages;
        var noLoad = this.noLoad;
        var name = this.name;
        var dependencies = [];
        if (loader_js_1.CONFIG.dependencies.hasOwnProperty(name)) {
            dependencies.push.apply(dependencies, __spread(loader_js_1.CONFIG.dependencies[name]));
        }
        else if (name !== 'core') {
            dependencies.push('core');
        }
        try {
            for (var dependencies_1 = __values(dependencies), dependencies_1_1 = dependencies_1.next(); !dependencies_1_1.done; dependencies_1_1 = dependencies_1.next()) {
                var dependent = dependencies_1_1.value;
                var extension = map.get(dependent) || new Package(dependent, noLoad);
                if (this.dependencies.indexOf(extension) < 0) {
                    extension.addDependent(this, noLoad);
                    this.dependencies.push(extension);
                    if (!extension.isLoaded) {
                        this.dependencyCount++;
                        promises.push(extension.promise);
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (dependencies_1_1 && !dependencies_1_1.done && (_a = dependencies_1.return)) _a.call(dependencies_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return promises;
        var e_1, _a;
    };
    Package.prototype.makePromise = function (promises) {
        var _this = this;
        var promise = new Promise((function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        }));
        var config = (loader_js_1.CONFIG[this.name] || {});
        if (config.ready) {
            promise = promise.then(function (name) { return config.ready(_this.name); });
        }
        if (promises.length) {
            promises.push(promise);
            promise = Promise.all(promises).then(function (names) { return names.join(', '); });
        }
        if (config.failed) {
            promise.catch(function (message) { return config.failed(new PackageError(message, _this.name)); });
        }
        return promise;
    };
    Package.prototype.load = function () {
        if (!this.isLoaded && !this.isLoading && !this.noLoad) {
            this.isLoading = true;
            var url = Package.resolvePath(this.name);
            if (loader_js_1.CONFIG.require) {
                this.loadCustom(url);
            }
            else {
                this.loadScript(url);
            }
        }
    };
    Package.prototype.loadCustom = function (url) {
        var _this = this;
        try {
            var result = loader_js_1.CONFIG.require(url);
            if (result instanceof Promise) {
                result.then(function () { return _this.checkLoad(); })
                    .catch(function () { return _this.failed('Can\'t load "' + url + '"'); });
            }
            else {
                this.checkLoad();
            }
        }
        catch (err) {
            this.failed(err.message);
        }
    };
    Package.prototype.loadScript = function (url) {
        var _this = this;
        var script = document.createElement('script');
        script.src = url;
        script.charset = 'UTF-8';
        script.onload = function (event) { return _this.checkLoad(); };
        script.onerror = function (event) { return _this.failed('Can\'t load "' + url + '"'); };
        document.head.appendChild(script);
    };
    Package.prototype.loaded = function () {
        this.isLoaded = true;
        this.isLoading = false;
        try {
            for (var _a = __values(this.dependents), _b = _a.next(); !_b.done; _b = _a.next()) {
                var dependent = _b.value;
                dependent.requirementSatisfied();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var _d = __values(this.provided), _e = _d.next(); !_e.done; _e = _d.next()) {
                var provided = _e.value;
                provided.loaded();
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.resolve(this.name);
        var e_2, _c, e_3, _f;
    };
    Package.prototype.failed = function (message) {
        this.hasFailed = true;
        this.isLoading = false;
        this.reject(new PackageError(message, this.name));
    };
    Package.prototype.checkLoad = function () {
        var _this = this;
        var config = (loader_js_1.CONFIG[this.name] || {});
        var checkReady = config.checkReady || (function () { return Promise.resolve(); });
        checkReady().then(function () { return _this.loaded(); })
            .catch(function (message) { return _this.failed(message); });
    };
    Package.prototype.requirementSatisfied = function () {
        if (this.dependencyCount) {
            this.dependencyCount--;
            if (this.canLoad) {
                this.load();
            }
        }
    };
    Package.prototype.provides = function (names) {
        if (names === void 0) { names = []; }
        try {
            for (var names_1 = __values(names), names_1_1 = names_1.next(); !names_1_1.done; names_1_1 = names_1.next()) {
                var name_1 = names_1_1.value;
                var provided = Package.packages.get(name_1);
                if (!provided) {
                    if (!loader_js_1.CONFIG.dependencies[name_1]) {
                        loader_js_1.CONFIG.dependencies[name_1] = [];
                    }
                    loader_js_1.CONFIG.dependencies[name_1].push(name_1);
                    provided = new Package(name_1, true);
                    provided.isLoading = true;
                }
                this.provided.push(provided);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (names_1_1 && !names_1_1.done && (_a = names_1.return)) _a.call(names_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        var e_4, _a;
    };
    Package.prototype.addDependent = function (extension, noLoad) {
        this.dependents.push(extension);
        if (!noLoad) {
            this.checkNoLoad();
        }
    };
    Package.prototype.checkNoLoad = function () {
        if (this.noLoad) {
            this.noLoad = false;
            try {
                for (var _a = __values(this.dependencies), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var dependency = _b.value;
                    dependency.checkNoLoad();
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        var e_5, _c;
    };
    Package.loadAll = function () {
        try {
            for (var _a = __values(this.packages.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                var extension = _b.value;
                if (extension.canLoad) {
                    extension.load();
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_6) throw e_6.error; }
        }
        var e_6, _c;
    };
    return Package;
}());
Package.packages = new Map();
exports.Package = Package;
//# sourceMappingURL=package.js.map