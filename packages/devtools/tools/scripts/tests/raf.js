"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var raf = (window.requestAnimationFrame = function (cb) {
    return setTimeout(cb, 0);
});
exports.default = raf;
//# sourceMappingURL=raf.js.map