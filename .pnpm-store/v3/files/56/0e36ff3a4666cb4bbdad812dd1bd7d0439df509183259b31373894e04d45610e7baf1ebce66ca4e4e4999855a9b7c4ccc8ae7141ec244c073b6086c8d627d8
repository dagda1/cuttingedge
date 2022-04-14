"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchGestureMixin = void 0;
function shouldSkipEvent(ev) {
    return ev.touches.length === 0 || ev.touches.length > 2;
}
function getDistance(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
exports.TouchGestureMixin = (superClass) => class CTouchGesture extends superClass {
    constructor(...args) {
        super(...args);
        this.previousTouches = null;
        this.addEventListener("touchstart", (ev) => {
            if (shouldSkipEvent(ev)) {
                return;
            }
            ev.preventDefault();
            this.previousTouches = ev.touches;
        });
        this.addEventListener("touchend", (ev) => {
            if (shouldSkipEvent(ev)) {
                return;
            }
            ev.preventDefault();
            this.previousTouches = null;
        });
        this.addEventListener("touchcancel", (ev) => {
            if (shouldSkipEvent(ev)) {
                return;
            }
            ev.preventDefault();
            this.previousTouches = null;
        });
        this.addEventListener("touchmove", (ev) => {
            if (shouldSkipEvent(ev)) {
                return;
            }
            const previousTouches = Array.from(this.previousTouches || []);
            const currentTouches = Array.from(ev.touches);
            this.previousTouches = ev.touches;
            // When one or more than one of touch input sources differs, skip processing.
            if (currentTouches.length !== previousTouches.length ||
                !currentTouches.every((t) => previousTouches.some((pt) => pt.identifier === t.identifier))) {
                return;
            }
            // Pan
            if (currentTouches.length === 1) {
                this.onTouchPan({
                    x: currentTouches[0].pageX - previousTouches[0].pageX,
                    y: currentTouches[0].pageY - previousTouches[0].pageY,
                });
                return;
            }
            // Pinch
            this.onTouchPinch(getDistance({
                x: currentTouches[0].pageX,
                y: currentTouches[0].pageY,
            }, {
                x: previousTouches[0].pageX,
                y: previousTouches[0].pageY,
            }));
            return;
        });
    }
    get isTouching() {
        return !!(this.previousTouches && this.previousTouches.length > 0);
    }
    onTouchPan(delta) { }
    onTouchPinch(delta) { }
};
