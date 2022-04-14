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
import "@figspec/components";
import { createElement, forwardRef, useCallback, useEffect, useImperativeHandle, useState, } from "react";
const bindEvent = (element, event, cb) => {
    const listener = ((ev) => {
        cb(ev);
    });
    element.addEventListener(event, listener);
    return () => element.removeEventListener(event, listener);
};
export const FigspecFrameViewer = forwardRef((_a, ref) => {
    var { nodes, renderedImage, className, panSpeed, zoomMargin, zoomSpeed, onNodeSelect, onPositionChange, onScaleChange } = _a, rest = __rest(_a, ["nodes", "renderedImage", "className", "panSpeed", "zoomMargin", "zoomSpeed", "onNodeSelect", "onPositionChange", "onScaleChange"]);
    const [refNode, setNode] = useState(null);
    useImperativeHandle(ref, () => refNode, [refNode]);
    const refCb = useCallback((node) => {
        if (node) {
            setNode(node);
            node.nodes = nodes;
            node.renderedImage = renderedImage;
        }
    }, []);
    useEffect(() => {
        if (!refNode)
            return;
        refNode.nodes = nodes;
        refNode.renderedImage = renderedImage;
    }, [refNode, nodes, renderedImage]);
    useEffect(() => {
        if (!refNode || !onNodeSelect)
            return;
        return bindEvent(refNode, "nodeselect", onNodeSelect);
    }, [refNode, onNodeSelect]);
    useEffect(() => {
        if (!refNode || !onPositionChange)
            return;
        return bindEvent(refNode, "positionchange", onPositionChange);
    }, [refNode, onPositionChange]);
    useEffect(() => {
        if (!refNode || !onScaleChange)
            return;
        return bindEvent(refNode, "scalechange", onScaleChange);
    }, [refNode, onScaleChange]);
    return (createElement("figspec-frame-viewer", Object.assign({ ref: refCb, class: className, "pan-speed": panSpeed, "zoom-margin": zoomMargin, "zoom-speed": zoomSpeed }, rest)));
});
export const FigspecFileViewer = forwardRef((_a, ref) => {
    var { documentNode, renderedImages, className, panSpeed, zoomMargin, zoomSpeed, onNodeSelect, onPositionChange, onScaleChange } = _a, rest = __rest(_a, ["documentNode", "renderedImages", "className", "panSpeed", "zoomMargin", "zoomSpeed", "onNodeSelect", "onPositionChange", "onScaleChange"]);
    const [refNode, setNode] = useState(null);
    useImperativeHandle(ref, () => refNode, [refNode]);
    const refCb = useCallback((node) => {
        if (node) {
            setNode(node);
            node.documentNode = documentNode;
            node.renderedImages = renderedImages;
        }
    }, []);
    useEffect(() => {
        if (!refNode)
            return;
        refNode.documentNode = documentNode;
        refNode.renderedImages = renderedImages;
    }, [refNode, documentNode, renderedImages]);
    useEffect(() => {
        if (!refNode || !onNodeSelect)
            return;
        return bindEvent(refNode, "nodeselect", onNodeSelect);
    }, [refNode, onNodeSelect]);
    useEffect(() => {
        if (!refNode || !onPositionChange)
            return;
        return bindEvent(refNode, "positionchange", onPositionChange);
    }, [refNode, onPositionChange]);
    useEffect(() => {
        if (!refNode || !onScaleChange)
            return;
        return bindEvent(refNode, "scalechange", onScaleChange);
    }, [refNode, onScaleChange]);
    return (createElement("figspec-file-viewer", Object.assign({ ref: refCb, class: className, "pan-speed": panSpeed, "zoom-margin": zoomMargin, "zoom-speed": zoomSpeed }, rest)));
});
