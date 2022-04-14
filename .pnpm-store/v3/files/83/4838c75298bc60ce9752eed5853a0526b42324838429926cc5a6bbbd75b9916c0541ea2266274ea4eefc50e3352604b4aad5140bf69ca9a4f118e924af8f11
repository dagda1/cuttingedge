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
import { useContext, useState } from 'react';
import { DocsContext } from '@storybook/addon-docs/blocks';
import { ActionBar, Placeholder } from '@storybook/components';
import { jsx, styled } from '@storybook/theming';
import { Figma as FigmaInternal } from './register/components/Figma';
import { Figspec as FigspecInternal } from './register/components/Figspec';
import { IFrame as IFrameInternal } from './register/components/IFrame';
import { ImagePreview } from './register/components/Image';
import { Wrapper as WrapperInternal } from './register/components/Wrapper';
import { ParameterName } from './addon';
var ResetWrapper = styled.div(function (_a) {
    var theme = _a.theme;
    return "\n  font-family: " + theme.typography.fonts.base + ";\n  font-size: " + theme.typography.size.s3 + "px;\n  margin: 0;\n";
});
var Wrapper = styled.div(function (_a) {
    var theme = _a.theme, _b = _a.height, height = _b === void 0 ? '60%' : _b, collapsed = _a.collapsed;
    return "\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding: 0;\n  padding-top: " + (collapsed ? '3em' : typeof height == 'string' ? height : height + 'px') + ";\n  margin: 25px 0 40px;\n  border: 1px solid " + theme.appBorderColor + ";\n\n  border-radius: " + theme.appBorderRadius + "px;\n  box-shadow:\n    " + (theme.base === 'light'
        ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
        : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0') + ";\n";
});
var CollapsedText = styled(Placeholder)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n"])));
export var DocBlockBase = function (_a) {
    var children = _a.children, _b = _a.collapsable, collapsable = _b === void 0 ? true : _b, _c = _a.defaultCollapsed, defaultCollapsed = _c === void 0 ? false : _c, placeholder = _a.placeholder, _d = _a.showLink, showLink = _d === void 0 ? true : _d, rest = __rest(_a, ["children", "collapsable", "defaultCollapsed", "placeholder", "showLink"]);
    var _e = useState(!!defaultCollapsed), collapsed = _e[0], setCollapsed = _e[1];
    var showOpenInNewTab = showLink && 'url' in rest;
    return (jsx(ResetWrapper, null,
        jsx(Wrapper, __assign({ collapsed: collapsable && collapsed }, rest),
            collapsable && collapsed ? (jsx(CollapsedText, null, placeholder)) : (children),
            jsx(ActionBar, { actionItems: [
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
export var Figma = function (_a) {
    var placeholder = _a.placeholder, props = __rest(_a, ["placeholder"]);
    return (jsx(DocBlockBase, __assign({ placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : 'Design (Figma)' }, props),
        jsx(FigmaInternal, { config: __assign({ type: 'figma' }, props) })));
};
export var Figspec = function (_a) {
    var placeholder = _a.placeholder, props = __rest(_a, ["placeholder"]);
    return (jsx(DocBlockBase, __assign({ placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : 'Design (Figma-Spec)' }, props),
        jsx(FigspecInternal, { config: __assign({ type: 'figspec' }, props) })));
};
export var IFrame = function (_a) {
    var placeholder = _a.placeholder, props = __rest(_a, ["placeholder"]);
    return (jsx(DocBlockBase, __assign({ placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : 'Design (iframe)' }, props),
        jsx(IFrameInternal, { config: props })));
};
export var Image = function (_a) {
    var placeholder = _a.placeholder, props = __rest(_a, ["placeholder"]);
    return (jsx(DocBlockBase, __assign({ placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : 'Design (Image)' }, props),
        jsx(ImagePreview, { config: __assign({ type: 'image' }, props) })));
};
var AbsoluteLocater = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  overflow: auto;\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  overflow: auto;\n"])));
export var Design = function (_a) {
    var _b;
    var storyId = _a.storyId, placeholder = _a.placeholder, rest = __rest(_a, ["storyId", "placeholder"]);
    var storyStore = useContext(DocsContext).storyStore;
    var story = storyStore === null || storyStore === void 0 ? void 0 : storyStore.fromId(storyId);
    return (jsx(DocBlockBase, __assign({ placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : 'Design' }, rest),
        jsx(AbsoluteLocater, null,
            jsx(WrapperInternal, { config: (_b = story === null || story === void 0 ? void 0 : story.parameters) === null || _b === void 0 ? void 0 : _b[ParameterName] }))));
};
var templateObject_1, templateObject_2;
