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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Design = exports.Image = exports.IFrame = exports.Figspec = exports.Figma = exports.DocBlockBase = void 0;
var react_1 = require("react");
var blocks_1 = require("@storybook/addon-docs/blocks");
var components_1 = require("@storybook/components");
var theming_1 = require("@storybook/theming");
var Figma_1 = require("./register/components/Figma");
var Figspec_1 = require("./register/components/Figspec");
var IFrame_1 = require("./register/components/IFrame");
var Image_1 = require("./register/components/Image");
var Wrapper_1 = require("./register/components/Wrapper");
var addon_1 = require("./addon");
var ResetWrapper = theming_1.styled.div(function (_a) {
    var theme = _a.theme;
    return "\n  font-family: " + theme.typography.fonts.base + ";\n  font-size: " + theme.typography.size.s3 + "px;\n  margin: 0;\n";
});
var Wrapper = theming_1.styled.div(function (_a) {
    var theme = _a.theme, _b = _a.height, height = _b === void 0 ? '60%' : _b, collapsed = _a.collapsed;
    return "\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding: 0;\n  padding-top: " + (collapsed ? '3em' : typeof height == 'string' ? height : height + 'px') + ";\n  margin: 25px 0 40px;\n  border: 1px solid " + theme.appBorderColor + ";\n\n  border-radius: " + theme.appBorderRadius + "px;\n  box-shadow:\n    " + (theme.base === 'light'
        ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
        : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0') + ";\n";
});
var CollapsedText = theming_1.styled(components_1.Placeholder)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n"])));
exports.DocBlockBase = function (_a) {
    var children = _a.children, _b = _a.collapsable, collapsable = _b === void 0 ? true : _b, _c = _a.defaultCollapsed, defaultCollapsed = _c === void 0 ? false : _c, placeholder = _a.placeholder, _d = _a.showLink, showLink = _d === void 0 ? true : _d, rest = __rest(_a, ["children", "collapsable", "defaultCollapsed", "placeholder", "showLink"]);
    var _e = react_1.useState(!!defaultCollapsed), collapsed = _e[0], setCollapsed = _e[1];
    var showOpenInNewTab = showLink && 'url' in rest;
    return (theming_1.jsx(ResetWrapper, null,
        theming_1.jsx(Wrapper, __assign({ collapsed: collapsable && collapsed }, rest),
            collapsable && collapsed ? (theming_1.jsx(CollapsedText, null, placeholder)) : (children),
            theming_1.jsx(components_1.ActionBar, { actionItems: [
                    collapsable && {
                        title: collapsed ? 'Show' : 'Hide',
                        onClick: function () { return setCollapsed(function (v) { return !v; }); },
                    },
                    showOpenInNewTab && {
                        title: 'Open in new tab',
                        onClick: function () { return window.open(rest.url, '_blank'); },
                    },
                ].filter(function (s) { return !!s; }) }))));
};
exports.Figma = function (_a) {
    var placeholder = _a.placeholder, props = __rest(_a, ["placeholder"]);
    return (theming_1.jsx(exports.DocBlockBase, __assign({ placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : 'Design (Figma)' }, props),
        theming_1.jsx(Figma_1.Figma, { config: __assign({ type: 'figma' }, props) })));
};
exports.Figspec = function (_a) {
    var placeholder = _a.placeholder, props = __rest(_a, ["placeholder"]);
    return (theming_1.jsx(exports.DocBlockBase, __assign({ placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : 'Design (Figma-Spec)' }, props),
        theming_1.jsx(Figspec_1.Figspec, { config: __assign({ type: 'figspec' }, props) })));
};
exports.IFrame = function (_a) {
    var placeholder = _a.placeholder, props = __rest(_a, ["placeholder"]);
    return (theming_1.jsx(exports.DocBlockBase, __assign({ placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : 'Design (iframe)' }, props),
        theming_1.jsx(IFrame_1.IFrame, { config: props })));
};
exports.Image = function (_a) {
    var placeholder = _a.placeholder, props = __rest(_a, ["placeholder"]);
    return (theming_1.jsx(exports.DocBlockBase, __assign({ placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : 'Design (Image)' }, props),
        theming_1.jsx(Image_1.ImagePreview, { config: __assign({ type: 'image' }, props) })));
};
var AbsoluteLocater = theming_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  overflow: auto;\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  overflow: auto;\n"])));
exports.Design = function (_a) {
    var _b;
    var storyId = _a.storyId, placeholder = _a.placeholder, rest = __rest(_a, ["storyId", "placeholder"]);
    var storyStore = react_1.useContext(blocks_1.DocsContext).storyStore;
    var story = storyStore === null || storyStore === void 0 ? void 0 : storyStore.fromId(storyId);
    return (theming_1.jsx(exports.DocBlockBase, __assign({ placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : 'Design' }, rest),
        theming_1.jsx(AbsoluteLocater, null,
            theming_1.jsx(Wrapper_1.Wrapper, { config: (_b = story === null || story === void 0 ? void 0 : story.parameters) === null || _b === void 0 ? void 0 : _b[addon_1.ParameterName] }))));
};
var templateObject_1, templateObject_2;
