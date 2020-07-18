"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.raf = void 0;
exports.raf = (window.requestAnimationFrame = global.requestAnimationFrame = function (cb) {
    return setTimeout(cb, 0);
});
//# sourceMappingURL=raf.js.map