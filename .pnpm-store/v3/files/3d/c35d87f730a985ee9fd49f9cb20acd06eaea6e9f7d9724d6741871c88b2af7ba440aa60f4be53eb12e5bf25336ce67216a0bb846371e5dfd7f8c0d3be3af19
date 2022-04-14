"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePan = void 0;
var react_1 = require("react");
exports.usePan = function (cb, deps) {
    var _a = react_1.useState([0, 0]), lastPosition = _a[0], savePosition = _a[1];
    var _b = react_1.useState(false), isPanning = _b[0], setPanState = _b[1];
    var onMouseDown = react_1.useCallback(function (ev) {
        if (ev.button !== 0) {
            return;
        }
        savePosition([ev.screenX, ev.screenY]);
        setPanState(true);
    }, [setPanState, savePosition]);
    var onTouchStart = react_1.useCallback(function (ev) {
        var touch = ev.touches[0];
        savePosition([touch.screenX, touch.screenY]);
        setPanState(true);
    }, [setPanState, savePosition]);
    var move = react_1.useCallback(function (p) {
        if (!isPanning) {
            return;
        }
        savePosition(function (prev) {
            cb([p[0] - prev[0], p[1] - prev[1]]);
            return p;
        });
    }, __spreadArrays([savePosition, isPanning], deps));
    var onMouseMove = react_1.useCallback(function (ev) {
        var screenX = ev.screenX, screenY = ev.screenY;
        move([screenX, screenY]);
    }, [move]);
    var onTouchMove = react_1.useCallback(function (ev) {
        var _a = ev.touches[0], screenX = _a.screenX, screenY = _a.screenY;
        move([screenX, screenY]);
    }, __spreadArrays([savePosition, isPanning], deps));
    var clear = react_1.useCallback(function () {
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
