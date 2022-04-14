"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
var global_js_1 = require("./global.js");
var MathItem_js_1 = require("../core/MathItem.js");
var PrioritizedList_js_1 = require("../util/PrioritizedList.js");
;
var Startup;
(function (Startup) {
    var extensions = new PrioritizedList_js_1.PrioritizedList();
    var visitor;
    var mathjax;
    Startup.constructors = {};
    Startup.input = [];
    Startup.output = null;
    Startup.handler = null;
    Startup.adaptor = null;
    Startup.elements = null;
    Startup.document = null;
    Startup.promise = null;
    Startup.pagePromise = new Promise(function (resolve, reject) {
        var doc = global.document;
        if (!doc || !doc.readyState || doc.readyState === 'complete' || doc.readyState === 'interactive') {
            resolve();
        }
        else {
            var listener = function () { return resolve(); };
            doc.defaultView.addEventListener('load', listener, true);
            doc.defaultView.addEventListener('DOMContentLoaded', listener, true);
        }
    });
    function toMML(node) {
        return visitor.visitTree(node, Startup.document);
    }
    Startup.toMML = toMML;
    ;
    function registerConstructor(name, constructor) {
        Startup.constructors[name] = constructor;
    }
    Startup.registerConstructor = registerConstructor;
    ;
    function useHandler(name, force) {
        if (force === void 0) { force = false; }
        if (!exports.CONFIG.handler || force) {
            exports.CONFIG.handler = name;
        }
    }
    Startup.useHandler = useHandler;
    ;
    function useAdaptor(name, force) {
        if (force === void 0) { force = false; }
        if (!exports.CONFIG.adaptor || force) {
            exports.CONFIG.adaptor = name;
        }
    }
    Startup.useAdaptor = useAdaptor;
    ;
    function useInput(name, force) {
        if (force === void 0) { force = false; }
        if (!inputSpecified || force) {
            exports.CONFIG.input.push(name);
        }
    }
    Startup.useInput = useInput;
    ;
    function useOutput(name, force) {
        if (force === void 0) { force = false; }
        if (!exports.CONFIG.output || force) {
            exports.CONFIG.output = name;
        }
    }
    Startup.useOutput = useOutput;
    ;
    function extendHandler(extend, priority) {
        if (priority === void 0) { priority = 10; }
        extensions.add(extend, priority);
    }
    Startup.extendHandler = extendHandler;
    ;
    function defaultReady() {
        getComponents();
        makeMethods();
        if (exports.CONFIG.pageReady) {
            Startup.pagePromise = Startup.pagePromise.then(exports.CONFIG.pageReady);
        }
        Startup.promise = (exports.CONFIG.typeset && exports.MathJax.TypesetPromise ?
            Startup.pagePromise.then(exports.MathJax.TypesetPromise) : Startup.pagePromise);
    }
    Startup.defaultReady = defaultReady;
    ;
    function getComponents() {
        visitor = new exports.MathJax._.core.MmlTree.SerializedMmlVisitor.SerializedMmlVisitor();
        mathjax = exports.MathJax._.mathjax.MathJax;
        Startup.input = getInputJax();
        Startup.output = getOutputJax();
        Startup.adaptor = getAdaptor();
        Startup.handler = getHandler();
    }
    Startup.getComponents = getComponents;
    ;
    function makeMethods() {
        if (!Startup.handler)
            return;
        mathjax.handlers.register(Startup.handler);
        getDocument();
        if (Startup.input && Startup.output) {
            makeTypesetMethods();
        }
        var oname = (Startup.output ? Startup.output.name.toLowerCase() : '');
        try {
            for (var input_1 = __values(Startup.input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
                var jax = input_1_1.value;
                var iname = jax.name.toLowerCase();
                makeMmlMethods(iname, jax);
                makeResetMethod(iname, jax);
                if (Startup.output) {
                    makeOutputMethods(iname, oname, jax);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (input_1_1 && !input_1_1.done && (_a = input_1.return)) _a.call(input_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _a;
    }
    Startup.makeMethods = makeMethods;
    ;
    function makeTypesetMethods() {
        exports.MathJax.Typeset = function (elements) {
            if (elements === void 0) { elements = null; }
            Startup.document.options.elements = elements;
            Startup.document.render();
        };
        exports.MathJax.TypesetPromise = function (elements) {
            if (elements === void 0) { elements = null; }
            Startup.document.options.elements = elements;
            return mathjax.handleRetriesFor(function () {
                Startup.document.render();
            });
        };
        exports.MathJax.TypesetClear = function () { return Startup.document.clear(); };
    }
    Startup.makeTypesetMethods = makeTypesetMethods;
    ;
    function makeOutputMethods(iname, oname, input) {
        var name = iname + '2' + oname;
        exports.MathJax[name] =
            function (math, options) {
                if (options === void 0) { options = {}; }
                options.format = input.name;
                return Startup.document.convert(math, options);
            };
        exports.MathJax[name + 'Promise'] =
            function (math, options) {
                if (options === void 0) { options = {}; }
                options.format = input.name;
                return mathjax.handleRetriesFor(function () { return Startup.document.convert(math, options); });
            };
        exports.MathJax[oname + 'Stylesheet'] = function () { return Startup.output.styleSheet(Startup.document); };
    }
    Startup.makeOutputMethods = makeOutputMethods;
    ;
    function makeMmlMethods(name, input) {
        exports.MathJax[name + '2mml'] =
            function (math, options) {
                if (options === void 0) { options = {}; }
                options.end = MathItem_js_1.STATE.CONVERT;
                options.format = input.name;
                return toMML(Startup.document.convert(math, options));
            };
        exports.MathJax[name + '2mmlPromise'] =
            function (math, options) {
                if (options === void 0) { options = {}; }
                options.end = MathItem_js_1.STATE.CONVERT;
                options.format = input.name;
                return mathjax.handleRetriesFor(function () { return toMML(Startup.document.convert(math, options)); });
            };
    }
    Startup.makeMmlMethods = makeMmlMethods;
    ;
    function makeResetMethod(name, input) {
        if (name === 'tex') {
            exports.MathJax.texReset = function () { return input.parseOptions.tags.reset(); };
        }
    }
    Startup.makeResetMethod = makeResetMethod;
    ;
    function getInputJax() {
        var jax = [];
        try {
            for (var _a = __values(exports.CONFIG.input), _b = _a.next(); !_b.done; _b = _a.next()) {
                var name_1 = _b.value;
                var inputClass = Startup.constructors[name_1];
                if (inputClass) {
                    jax.push(new inputClass(exports.MathJax.config[name_1]));
                }
                else {
                    throw Error('Input Jax "' + name_1 + '" is not defined (has it been loaded?)');
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return jax;
        var e_2, _c;
    }
    Startup.getInputJax = getInputJax;
    ;
    function getOutputJax() {
        var name = exports.CONFIG.output;
        if (!name)
            return null;
        var outputClass = Startup.constructors[name];
        if (!outputClass) {
            throw Error('Output Jax "' + name + '" is not defined (has it been loaded?)');
        }
        return new outputClass(exports.MathJax.config[name]);
    }
    Startup.getOutputJax = getOutputJax;
    ;
    function getAdaptor() {
        var name = exports.CONFIG.adaptor;
        if (!name || name === 'none')
            return null;
        var adaptor = Startup.constructors[name];
        if (!adaptor) {
            throw Error('DOMAdaptor "' + name + '" is not defined (has it been loaded?)');
        }
        return adaptor(exports.MathJax.config[name]);
    }
    Startup.getAdaptor = getAdaptor;
    ;
    function getHandler() {
        var name = exports.CONFIG.handler;
        if (!name || name === 'none' || !Startup.adaptor)
            return null;
        var handlerClass = Startup.constructors[name];
        if (!handlerClass) {
            throw Error('Handler "' + name + '" is not defined (has it been loaded?)');
        }
        var handler = new handlerClass(Startup.adaptor, 5);
        try {
            for (var extensions_1 = __values(extensions), extensions_1_1 = extensions_1.next(); !extensions_1_1.done; extensions_1_1 = extensions_1.next()) {
                var extend = extensions_1_1.value;
                handler = extend.item(handler);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (extensions_1_1 && !extensions_1_1.done && (_a = extensions_1.return)) _a.call(extensions_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return handler;
        var e_3, _a;
    }
    Startup.getHandler = getHandler;
    ;
    function getDocument() {
        Startup.document = mathjax.document(exports.CONFIG.document, __assign({}, exports.MathJax.config.options, { InputJax: Startup.input, OutputJax: Startup.output }));
        return Startup.document;
    }
    Startup.getDocument = getDocument;
})(Startup = exports.Startup || (exports.Startup = {}));
;
exports.MathJax = global_js_1.MathJax;
if (typeof exports.MathJax._.startup === 'undefined') {
    global_js_1.combineDefaults(exports.MathJax.config, 'startup', {
        input: [],
        output: '',
        handler: null,
        adaptor: null,
        document: (typeof document === 'undefined' ? '' : document),
        elements: null,
        typeset: true,
        ready: Startup.defaultReady.bind(Startup)
    });
    global_js_1.combineWithMathJax({
        startup: Startup,
        options: {}
    });
}
exports.CONFIG = exports.MathJax.config.startup;
var inputSpecified = exports.CONFIG.input.length !== 0;
//# sourceMappingURL=startup.js.map