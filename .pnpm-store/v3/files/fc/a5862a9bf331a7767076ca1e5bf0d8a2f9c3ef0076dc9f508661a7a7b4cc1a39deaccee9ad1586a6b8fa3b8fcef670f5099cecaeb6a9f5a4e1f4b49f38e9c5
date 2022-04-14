"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useZoom = void 0;
var react_1 = require("react");
exports.useZoom = function (initialValue, deps) {
    var _a = react_1.useState(1), scale = _a[0], setScale = _a[1];
    react_1.useEffect(function () {
        setScale(initialValue);
    }, deps);
    var zoomIn = react_1.useCallback(function () {
        setScale(function (prevScale) { return prevScale + 0.1; });
    }, [setScale]);
    var zoomOut = react_1.useCallback(function () {
        setScale(function (prevScale) { return Math.max(prevScale - 0.1, 0.1); });
    }, [setScale]);
    var resetZoom = react_1.useCallback(function () {
        setScale(1);
    }, [setScale]);
    return { scale: scale, zoomIn: zoomIn, zoomOut: zoomOut, resetZoom: resetZoom };
};
