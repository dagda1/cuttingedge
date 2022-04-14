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
Object.defineProperty(exports, "__esModule", { value: true });
var CssStyles_js_1 = require("../../output/common/CssStyles.js");
require("../sre.js");
var AbstractRegion = (function () {
    function AbstractRegion(document) {
        this.document = document;
        this.CLASS = this.constructor;
        this.AddStyles();
        this.AddElement();
    }
    AbstractRegion.prototype.AddStyles = function () {
        if (this.CLASS.styleAdded) {
            return;
        }
        var node = this.document.adaptor.node('style');
        node.innerHTML = this.CLASS.style.cssText;
        this.document.adaptor.head(this.document.adaptor.document).
            appendChild(node);
        this.CLASS.styleAdded = true;
    };
    AbstractRegion.prototype.AddElement = function () {
        var element = this.document.adaptor.node('div');
        element.classList.add(this.CLASS.className);
        element.style.backgroundColor = 'white';
        this.div = element;
        this.inner = this.document.adaptor.node('div');
        this.div.appendChild(this.inner);
        this.document.adaptor.
            body(this.document.adaptor.document).
            appendChild(this.div);
    };
    AbstractRegion.prototype.Show = function (node, highlighter) {
        this.position(node);
        this.highlight(highlighter);
        this.div.classList.add(this.CLASS.className + '_Show');
    };
    AbstractRegion.prototype.Hide = function () {
        this.div.classList.remove(this.CLASS.className + '_Show');
    };
    AbstractRegion.prototype.Clear = function () {
        this.Update('');
        this.inner.style.top = '';
        this.inner.style.backgroundColor = '';
    };
    AbstractRegion.prototype.Update = function (speech) {
        this.inner.textContent = '';
        this.inner.textContent = speech;
    };
    return AbstractRegion;
}());
AbstractRegion.styleAdded = false;
exports.AbstractRegion = AbstractRegion;
var ToolTip = (function (_super) {
    __extends(ToolTip, _super);
    function ToolTip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolTip.prototype.position = function (node) {
        var rect = node.getBoundingClientRect();
        var baseBottom = 0;
        var baseLeft = Number.POSITIVE_INFINITY;
        var tooltips = this.document.adaptor.document.getElementsByClassName(this.CLASS.className + '_Show');
        for (var i = 0, tooltip = void 0; tooltip = tooltips[i]; i++) {
            if (tooltip !== this.div) {
                baseBottom = Math.max(tooltip.getBoundingClientRect().bottom, baseBottom);
                baseLeft = Math.min(tooltip.getBoundingClientRect().left, baseLeft);
            }
        }
        var bot = (baseBottom ? baseBottom : rect.bottom + 10) + window.pageYOffset;
        var left = (baseLeft < Number.POSITIVE_INFINITY ? baseLeft : rect.left) + window.pageXOffset;
        this.div.style.top = bot + 'px';
        this.div.style.left = left + 'px';
    };
    ToolTip.prototype.highlight = function (highlighter) {
        var color = highlighter.colorString();
        this.inner.style.backgroundColor = color.background;
        this.inner.style.color = color.foreground;
    };
    return ToolTip;
}(AbstractRegion));
ToolTip.className = 'MJX_ToolTip';
ToolTip.style = new CssStyles_js_1.CssStyles((_a = {}, _a['.' + ToolTip.className] = {
    position: 'absolute',
    display: 'inline-block',
    height: '1px', width: '1px'
}, _a['.' + ToolTip.className + '_Show'] = {
    width: 'auto', height: 'auto',
    opacity: 1,
    'text-align': 'center',
    'border-radius': '6px',
    padding: '0px 0px',
    'border-bottom': '1px dotted black',
    position: 'absolute',
    'z-index': 202
}, _a));
exports.ToolTip = ToolTip;
var LiveRegion = (function (_super) {
    __extends(LiveRegion, _super);
    function LiveRegion(document) {
        var _this = _super.call(this, document) || this;
        _this.document = document;
        _this.div.setAttribute('aria-live', 'assertive');
        return _this;
    }
    LiveRegion.prototype.Show = function (node, highlighter) {
        _super.prototype.Show.call(this, node, highlighter);
    };
    LiveRegion.prototype.position = function (node) {
        var rect = node.getBoundingClientRect();
        var bot = rect.bottom + 10 + window.pageYOffset;
        var left = rect.left + window.pageXOffset;
        this.div.style.top = bot + 'px';
        this.div.style.left = left + 'px';
    };
    LiveRegion.prototype.highlight = function (highlighter) {
        var color = highlighter.colorString();
        this.inner.style.backgroundColor = color.background;
        this.inner.style.color = color.foreground;
    };
    return LiveRegion;
}(AbstractRegion));
LiveRegion.className = 'MJX_LiveRegion';
LiveRegion.style = new CssStyles_js_1.CssStyles((_b = {}, _b['.' + LiveRegion.className] = {
    position: 'absolute', top: '0', height: '1px', width: '1px',
    padding: '1px', overflow: 'hidden'
}, _b['.' + LiveRegion.className + '_Show'] = {
    top: '0', position: 'absolute', width: 'auto', height: 'auto',
    padding: '0px 0px', opacity: 1, 'z-index': '202',
    left: 0, right: 0, 'margin': '0 auto',
    'background-color': 'rgba(0, 0, 255, 0.2)', 'box-shadow': '0px 10px 20px #888',
    border: '2px solid #CCCCCC'
}, _b));
exports.LiveRegion = LiveRegion;
var HoverRegion = (function (_super) {
    __extends(HoverRegion, _super);
    function HoverRegion(document) {
        var _this = _super.call(this, document) || this;
        _this.document = document;
        _this.div.style.fontSize = '800%';
        _this.inner.classList.add('MJX-TEX');
        return _this;
    }
    HoverRegion.prototype.Show = function (node, highlighter) {
        _super.prototype.Show.call(this, node, highlighter);
    };
    HoverRegion.prototype.position = function (node) {
        var rect = node.getBoundingClientRect();
        var top = rect.top;
        var left = rect.left;
        this.div.style.top = top + 'px';
        this.div.style.left = left + 'px';
    };
    HoverRegion.prototype.highlight = function (highlighter) {
    };
    HoverRegion.prototype.AddNode = function (node) {
        this.Clear();
        this.inner.appendChild(node);
    };
    return HoverRegion;
}(AbstractRegion));
HoverRegion.className = 'MJX_HoverRegion';
HoverRegion.style = new CssStyles_js_1.CssStyles((_c = {}, _c['.' + HoverRegion.className] = {
    position: 'absolute', top: '0', height: '1px', width: '1px',
    padding: '1px', overflow: 'hidden'
}, _c['.' + HoverRegion.className + '_Show'] = {
    top: '0', position: 'absolute', width: 'max-content', height: 'auto',
    padding: '0px 0px', opacity: 1, 'z-index': '202',
    left: 0, right: 0, 'margin': '0 auto',
    'background-color': 'rgba(0, 0, 255, 0.2)',
    'box-shadow': '0px 10px 20px #888',
    border: '2px solid #CCCCCC'
}, _c));
exports.HoverRegion = HoverRegion;
var _a, _b, _c;
//# sourceMappingURL=Region.js.map