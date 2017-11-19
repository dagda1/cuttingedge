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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function pageWithStyles(WrappedComponent) {
    var PageWithStyles = /** @class */ (function (_super) {
        __extends(PageWithStyles, _super);
        function PageWithStyles() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PageWithStyles.prototype.getChildContext = function () {
            var _this = this;
            var insertCss = typeof window === 'undefined'
                ? function () {
                    var styles = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        styles[_i] = arguments[_i];
                    }
                    styles.forEach(function (style) {
                        var cssText = style._getCss();
                        if (!~_this.props.css.indexOf(cssText)) {
                            _this.props.css.push(cssText);
                        }
                    });
                }
                : function () {
                    var styles = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        styles[_i] = arguments[_i];
                    }
                    var removeCss = styles.map(function (x) { return x._insertCss(); });
                    return function () {
                        removeCss.forEach(function (f) { return f(); });
                    };
                };
            return { insertCss: insertCss };
        };
        PageWithStyles.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(WrappedComponent, __assign({}, this.props)),
                React.createElement("style", { className: "_isl-styles", dangerouslySetInnerHTML: { __html: this.props.css.join('') } })));
        };
        PageWithStyles.defaultName = "PageWithStyles(" + (WrappedComponent.displayName || 'Component') + ")";
        PageWithStyles.defaultProps = { css: [] };
        return PageWithStyles;
    }(React.Component));
    return PageWithStyles;
}
exports.pageWithStyles = pageWithStyles;
//# sourceMappingURL=pageWithStyles.js.map