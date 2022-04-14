import { useCallback, useEffect, useState } from 'react';
export var useZoom = function (initialValue, deps) {
    var _a = useState(1), scale = _a[0], setScale = _a[1];
    useEffect(function () {
        setScale(initialValue);
    }, deps);
    var zoomIn = useCallback(function () {
        setScale(function (prevScale) { return prevScale + 0.1; });
    }, [setScale]);
    var zoomOut = useCallback(function () {
        setScale(function (prevScale) { return Math.max(prevScale - 0.1, 0.1); });
    }, [setScale]);
    var resetZoom = useCallback(function () {
        setScale(1);
    }, [setScale]);
    return { scale: scale, zoomIn: zoomIn, zoomOut: zoomOut, resetZoom: resetZoom };
};
