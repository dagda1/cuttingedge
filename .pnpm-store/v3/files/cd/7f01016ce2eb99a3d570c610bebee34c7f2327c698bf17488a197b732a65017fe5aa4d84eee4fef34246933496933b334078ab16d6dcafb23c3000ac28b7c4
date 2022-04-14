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
var sre_js_1 = require("../sre.js");
var AbstractExplorer = (function () {
    function AbstractExplorer(document, region, node) {
        var rest = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            rest[_i - 3] = arguments[_i];
        }
        this.document = document;
        this.region = region;
        this.node = node;
        this.events = [];
        this.active = false;
        this.oldIndex = null;
    }
    AbstractExplorer.stopEvent = function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        else {
            event.returnValue = false;
        }
        if (event.stopImmediatePropagation) {
            event.stopImmediatePropagation();
        }
        else if (event.stopPropagation) {
            event.stopPropagation();
        }
        event.cancelBubble = true;
    };
    AbstractExplorer.prototype.Events = function () {
        return this.events;
    };
    AbstractExplorer.create = function (document, region, node) {
        var rest = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            rest[_i - 3] = arguments[_i];
        }
        var explorer = new (this.bind.apply(this, __spread([void 0, document, region, node], rest)))();
        explorer.Attach();
        return explorer;
    };
    AbstractExplorer.prototype.Attach = function () {
        this.oldIndex = this.node.tabIndex;
        this.node.tabIndex = 1;
        this.AddEvents();
    };
    AbstractExplorer.prototype.Detach = function () {
        this.node.tabIndex = this.oldIndex;
        this.oldIndex = null;
        this.RemoveEvents();
    };
    AbstractExplorer.prototype.Start = function () {
        this.active = true;
    };
    AbstractExplorer.prototype.Stop = function () {
        if (this.active) {
            this.region.Clear();
            this.region.Hide();
            this.active = false;
        }
    };
    AbstractExplorer.prototype.AddEvents = function () {
        try {
            for (var _a = __values(this.events), _b = _a.next(); !_b.done; _b = _a.next()) {
                var _c = __read(_b.value, 2), eventkind = _c[0], eventfunc = _c[1];
                this.node.addEventListener(eventkind, eventfunc);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _d;
    };
    AbstractExplorer.prototype.RemoveEvents = function () {
        try {
            for (var _a = __values(this.events), _b = _a.next(); !_b.done; _b = _a.next()) {
                var _c = __read(_b.value, 2), eventkind = _c[0], eventfunc = _c[1];
                this.node.removeEventListener(eventkind, eventfunc);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var e_2, _d;
    };
    return AbstractExplorer;
}());
exports.AbstractExplorer = AbstractExplorer;
var AbstractKeyExplorer = (function (_super) {
    __extends(AbstractKeyExplorer, _super);
    function AbstractKeyExplorer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.events = _super.prototype.Events.call(_this).concat([['keydown', _this.KeyDown.bind(_this)],
            ['focusin', _this.FocusIn.bind(_this)],
            ['focusout', _this.FocusOut.bind(_this)]]);
        return _this;
    }
    AbstractKeyExplorer.prototype.FocusIn = function (event) {
    };
    AbstractKeyExplorer.prototype.FocusOut = function (event) {
        this.Stop();
    };
    return AbstractKeyExplorer;
}(AbstractExplorer));
exports.AbstractKeyExplorer = AbstractKeyExplorer;
var SpeechExplorer = (function (_super) {
    __extends(SpeechExplorer, _super);
    function SpeechExplorer(document, region, node, mml) {
        var _this = _super.call(this, document, region, node) || this;
        _this.document = document;
        _this.region = region;
        _this.node = node;
        _this.mml = mml;
        _this.started = false;
        _this.foreground = { color: 'red', alpha: 1 };
        _this.background = { color: 'blue', alpha: .2 };
        _this.initWalker();
        return _this;
    }
    SpeechExplorer.prototype.initWalker = function () {
        var jax = this.document.outputJax.name;
        this.highlighter = sre.HighlighterFactory.highlighter(this.background, this.foreground, { renderer: jax === 'CHTML' ? 'CommonHTML' : jax });
        this.speechGenerator = new sre.TreeSpeechGenerator();
        var dummy = new sre.DummyWalker(this.node, this.speechGenerator, this.highlighter, this.mml);
        this.Speech(dummy);
        this.speechGenerator = new sre.DirectSpeechGenerator();
        this.walker = new sre.TableWalker(this.node, this.speechGenerator, this.highlighter, this.mml);
    };
    SpeechExplorer.prototype.Start = function () {
        _super.prototype.Start.call(this);
        this.region.Show(this.node, this.highlighter);
        this.walker.activate();
        this.highlighter.highlight(this.walker.getFocus().getNodes());
        this.region.Update(this.walker.speech());
    };
    SpeechExplorer.prototype.Stop = function () {
        if (this.active) {
            this.highlighter.unhighlight();
        }
        _super.prototype.Stop.call(this);
    };
    SpeechExplorer.prototype.Speech = function (walker) {
        var _this = this;
        sre_js_1.sreReady.then(function () {
            var speech = walker.speech();
            _this.node.setAttribute('hasspeech', 'true');
        }).catch(function (error) { return console.log(error.message); });
    };
    SpeechExplorer.prototype.KeyDown = function (event) {
        var code = event.keyCode;
        if (code === 27) {
            this.Stop();
            AbstractExplorer.stopEvent(event);
            return;
        }
        if (this.active) {
            this.Move(code);
            AbstractExplorer.stopEvent(event);
            return;
        }
        if (code === 32 && event.shiftKey) {
            this.Start();
            AbstractExplorer.stopEvent(event);
        }
    };
    SpeechExplorer.prototype.Move = function (key) {
        this.walker.move(key);
        this.highlighter.unhighlight();
        this.highlighter.highlight(this.walker.getFocus().getNodes());
        this.region.Update(this.walker.speech());
    };
    return SpeechExplorer;
}(AbstractKeyExplorer));
exports.SpeechExplorer = SpeechExplorer;
var Magnifier = (function (_super) {
    __extends(Magnifier, _super);
    function Magnifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Magnifier.prototype.Start = function () {
        _super.prototype.Start.call(this);
        this.region.Show(this.node, this.highlighter);
        this.walker.activate();
        this.highlighter.highlight(this.walker.getFocus().getNodes());
        this.showFocus();
    };
    Magnifier.prototype.showFocus = function () {
        var node = this.walker.getFocus().getNodes()[0];
        var mjx = node.cloneNode(true);
        var region = this.region;
        region.Show(node, this.highlighter);
        region.AddNode(mjx);
    };
    Magnifier.prototype.Move = function (key) {
        this.walker.move(key);
        this.showFocus();
    };
    return Magnifier;
}(SpeechExplorer));
exports.Magnifier = Magnifier;
var AbstractMouseExplorer = (function (_super) {
    __extends(AbstractMouseExplorer, _super);
    function AbstractMouseExplorer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.events = _super.prototype.Events.call(_this).concat([['mouseover', _this.MouseOver.bind(_this)],
            ['mouseout', _this.MouseOut.bind(_this)]
        ]);
        return _this;
    }
    AbstractMouseExplorer.prototype.MouseOver = function (event) {
        this.Start();
    };
    AbstractMouseExplorer.prototype.MouseOut = function (event) {
        this.Stop();
    };
    return AbstractMouseExplorer;
}(AbstractExplorer));
exports.AbstractMouseExplorer = AbstractMouseExplorer;
var HoverExplorer = (function (_super) {
    __extends(HoverExplorer, _super);
    function HoverExplorer(document, region, node) {
        var _this = _super.call(this, document, region, node) || this;
        _this.document = document;
        _this.region = region;
        _this.node = node;
        _this.foreground = { color: 'red', alpha: 1 };
        _this.background = { color: 'blue', alpha: .2 };
        _this.nodeQuery = function (node) {
            return true;
        };
        _this.nodeAccess = function (node) {
            return '';
        };
        _this.highlighter = sre.HighlighterFactory.highlighter(_this.background, _this.foreground, { renderer: _this.document.outputJax.name });
        return _this;
    }
    HoverExplorer.prototype.MouseDown = function (event) { };
    ;
    HoverExplorer.prototype.MouseUp = function (event) { };
    ;
    HoverExplorer.prototype.MouseOut = function (event) {
        this.highlighter.unhighlight();
        this.region.Hide();
        _super.prototype.MouseOut.call(this, event);
    };
    HoverExplorer.prototype.MouseOver = function (event) {
        _super.prototype.MouseOver.call(this, event);
        var target = event.target;
        var _a = __read(this.getNode(target), 2), node = _a[0], kind = _a[1];
        if (!node) {
            return;
        }
        this.highlighter.unhighlight();
        this.highlighter.highlight([node]);
        this.region.Show(node, this.highlighter);
        this.region.Update(kind);
    };
    HoverExplorer.prototype.getNode = function (node) {
        var original = node;
        while (node && node !== this.node) {
            if (this.nodeQuery(node)) {
                return [node, this.nodeAccess(node)];
            }
            node = node.parentNode;
        }
        node = original;
        while (node) {
            if (this.nodeQuery(node)) {
                return [node, this.nodeAccess(node)];
            }
            node = node.childNodes[0];
        }
        return [null, ''];
    };
    return HoverExplorer;
}(AbstractMouseExplorer));
exports.HoverExplorer = HoverExplorer;
var TypeExplorer = (function (_super) {
    __extends(TypeExplorer, _super);
    function TypeExplorer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeQuery = function (node) {
            return node.hasAttribute('data-semantic-type');
        };
        _this.nodeAccess = function (node) {
            return node.getAttribute('data-semantic-type');
        };
        return _this;
    }
    return TypeExplorer;
}(HoverExplorer));
exports.TypeExplorer = TypeExplorer;
var RoleExplorer = (function (_super) {
    __extends(RoleExplorer, _super);
    function RoleExplorer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeQuery = function (node) {
            return node.hasAttribute('data-semantic-role');
        };
        _this.nodeAccess = function (node) {
            return node.getAttribute('data-semantic-role');
        };
        return _this;
    }
    return RoleExplorer;
}(HoverExplorer));
exports.RoleExplorer = RoleExplorer;
var TagExplorer = (function (_super) {
    __extends(TagExplorer, _super);
    function TagExplorer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeQuery = function (node) { return !!node.tagName; };
        _this.nodeAccess = function (node) { return node.tagName; };
        return _this;
    }
    return TagExplorer;
}(HoverExplorer));
exports.TagExplorer = TagExplorer;
//# sourceMappingURL=Explorer.js.map