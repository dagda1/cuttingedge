"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const raf = (window.requestAnimationFrame = (cb) => {
    return setTimeout(cb, 0);
});
exports.default = raf;
//# sourceMappingURL=raf.js.map