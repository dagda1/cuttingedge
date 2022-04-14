var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { useCallback, useState } from 'react';
export var usePan = function (cb, deps) {
    var _a = useState([0, 0]), lastPosition = _a[0], savePosition = _a[1];
    var _b = useState(false), isPanning = _b[0], setPanState = _b[1];
    var onMouseDown = useCallback(function (ev) {
        if (ev.button !== 0) {
            return;
        }
        savePosition([ev.screenX, ev.screenY]);
        setPanState(true);
    }, [setPanState, savePosition]);
    var onTouchStart = useCallback(function (ev) {
        var touch = ev.touches[0];
        savePosition([touch.screenX, touch.screenY]);
        setPanState(true);
    }, [setPanState, savePosition]);
    var move = useCallback(function (p) {
        if (!isPanning) {
            return;
        }
        savePosition(function (prev) {
            cb([p[0] - prev[0], p[1] - prev[1]]);
            return p;
        });
    }, __spreadArrays([savePosition, isPanning], deps));
    var onMouseMove = useCallback(function (ev) {
        var screenX = ev.screenX, screenY = ev.screenY;
        move([screenX, screenY]);
    }, [move]);
    var onTouchMove = useCallback(function (ev) {
        var _a = ev.touches[0], screenX = _a.screenX, screenY = _a.screenY;
        move([screenX, screenY]);
    }, __spreadArrays([savePosition, isPanning], deps));
    var clear = useCallback(function () {
        savePosition([0, 0]);
        setPanState(false);
    }, [setPanState, savePosition]);
    return {
        onMouseDown: onMouseDown,
        onMouseMove: onMouseMove,
        onMouseUp: clear,
        onMouseLeave: clear,
        onTouchStart: onTouchStart,
        onTouchMove: onTouchMove,
        onTouchCancel: clear,
        onTouchEnd: clear
    };
};
