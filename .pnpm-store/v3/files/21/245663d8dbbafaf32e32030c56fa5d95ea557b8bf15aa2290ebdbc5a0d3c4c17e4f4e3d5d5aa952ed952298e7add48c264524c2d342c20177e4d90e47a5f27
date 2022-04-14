"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pan = void 0;
var react_1 = require("react");
var theming_1 = require("@storybook/theming");
var usePan_1 = require("./hooks/usePan");
exports.Pan = function (_a) {
    var children = _a.children, className = _a.className, style = _a.style, defaultValue = _a.defaultValue, value = _a.value, onChange = _a.onChange;
    var _b = react_1.useState([0, 0]), offset = _b[0], move = _b[1];
    react_1.useEffect(function () {
        if (defaultValue) {
            move(defaultValue);
        }
        else {
            move(value || [0, 0]);
        }
    }, [defaultValue]);
    var panHandlers = usePan_1.usePan(function (delta) {
        if (onChange) {
            onChange(delta);
        }
        move(function (prev) { return [prev[0] + delta[0], prev[1] + delta[1]]; });
    }, [move, onChange]);
    var transform = react_1.useMemo(function () {
        var vec = value || offset;
        return {
            transform: "translate(" + vec[0] + "px, " + vec[1] + "px)"
        };
    }, [value, offset]);
    return (theming_1.jsx("div", __assign({ css: $container, className: className, style: style }, panHandlers),
        theming_1.jsx("div", { css: $transformLayer, style: transform }, children)));
};
exports.default = exports.Pan;
var $container = theming_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n\n  &:active {\n    cursor: move;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n\n  &:active {\n    cursor: move;\n  }\n"])));
var $transformLayer = theming_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"])));
var templateObject_1, templateObject_2;
