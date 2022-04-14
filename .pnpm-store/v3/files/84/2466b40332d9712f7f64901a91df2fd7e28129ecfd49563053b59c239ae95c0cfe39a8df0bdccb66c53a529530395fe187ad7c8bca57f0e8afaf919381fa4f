"use strict";
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
exports.FigspecFileViewer = exports.FigspecFrameViewer = void 0;
require("@figspec/components");
const react_1 = require("react");
const bindEvent = (element, event, cb) => {
    const listener = ((ev) => {
        cb(ev);
    });
    element.addEventListener(event, listener);
    return () => element.removeEventListener(event, listener);
};
exports.FigspecFrameViewer = react_1.forwardRef((_a, ref) => {
    var { nodes, renderedImage, className, panSpeed, zoomMargin, zoomSpeed, onNodeSelect, onPositionChange, onScaleChange } = _a, rest = __rest(_a, ["nodes", "renderedImage", "className", "panSpeed", "zoomMargin", "zoomSpeed", "onNodeSelect", "onPositionChange", "onScaleChange"]);
    const [refNode, setNode] = react_1.useState(null);
    react_1.useImperativeHandle(ref, () => refNode, [refNode]);
    const refCb = react_1.useCallback((node) => {
        if (node) {
            setNode(node);
            node.nodes = nodes;
            node.renderedImage = renderedImage;
        }
    }, []);
    react_1.useEffect(() => {
        if (!refNode)
            return;
        refNode.nodes = nodes;
        refNode.renderedImage = renderedImage;
    }, [refNode, nodes, renderedImage]);
    react_1.useEffect(() => {
        if (!refNode || !onNodeSelect)
            return;
        return bindEvent(refNode, "nodeselect", onNodeSelect);
    }, [refNode, onNodeSelect]);
    react_1.useEffect(() => {
        if (!refNode || !onPositionChange)
            return;
        return bindEvent(refNode, "positionchange", onPositionChange);
    }, [refNode, onPositionChange]);
    react_1.useEffect(() => {
        if (!refNode || !onScaleChange)
            return;
        return bindEvent(refNode, "scalechange", onScaleChange);
    }, [refNode, onScaleChange]);
    return (react_1.createElement("figspec-frame-viewer", Object.assign({ ref: refCb, class: className, "pan-speed": panSpeed, "zoom-margin": zoomMargin, "zoom-speed": zoomSpeed }, rest)));
});
exports.FigspecFileViewer = react_1.forwardRef((_a, ref) => {
    var { documentNode, renderedImages, className, panSpeed, zoomMargin, zoomSpeed, onNodeSelect, onPositionChange, onScaleChange } = _a, rest = __rest(_a, ["documentNode", "renderedImages", "className", "panSpeed", "zoomMargin", "zoomSpeed", "onNodeSelect", "onPositionChange", "onScaleChange"]);
    const [refNode, setNode] = react_1.useState(null);
    react_1.useImperativeHandle(ref, () => refNode, [refNode]);
    const refCb = react_1.useCallback((node) => {
        if (node) {
            setNode(node);
            node.documentNode = documentNode;
            node.renderedImages = renderedImages;
        }
    }, []);
    react_1.useEffect(() => {
        if (!refNode)
            return;
        refNode.documentNode = documentNode;
        refNode.renderedImages = renderedImages;
    }, [refNode, documentNode, renderedImages]);
    react_1.useEffect(() => {
        if (!refNode || !onNodeSelect)
            return;
        return bindEvent(refNode, "nodeselect", onNodeSelect);
    }, [refNode, onNodeSelect]);
    react_1.useEffect(() => {
        if (!refNode || !onPositionChange)
            return;
        return bindEvent(refNode, "positionchange", onPositionChange);
    }, [refNode, onPositionChange]);
    react_1.useEffect(() => {
        if (!refNode || !onScaleChange)
            return;
        return bindEvent(refNode, "scalechange", onScaleChange);
    }, [refNode, onScaleChange]);
    return (react_1.createElement("figspec-file-viewer", Object.assign({ ref: refCb, class: className, "pan-speed": panSpeed, "zoom-margin": zoomMargin, "zoom-speed": zoomSpeed }, rest)));
});
