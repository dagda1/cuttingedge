"use strict";
var animation = {
    requestAnimationFrame: function () { return 0; },
    cancelAnimationFrame: function () { return undefined; },
};
if (window) {
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    var win_1 = window;
    animation.requestAnimationFrame = vendors
        .map(function (vendor) { return win_1[vendor + 'RequestAnimationFrame']; })
        .reduce(function (accumulator, func) { return accumulator || func; }, window.requestAnimationFrame);
    animation.cancelAnimationFrame = vendors
        .map(function (vendor) { return win_1[vendor + 'CancelAnimationFrame'] || win_1[vendor + 'CancelRequestAnimationFrame']; })
        .reduce(function (accumulator, func) { return accumulator || func; }, window.cancelAnimationFrame);
}
if (!animation.requestAnimationFrame) {
    var lastTime_1 = 0;
    animation.requestAnimationFrame = function (callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime_1));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime_1 = currTime + timeToCall;
        return id;
    };
    if (!animation.cancelAnimationFrame) {
        animation.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    }
}
global.requestAnimationFrame = window.requestAnimationFrame =
    window.requestAnimationFrame || animation.requestAnimationFrame;
global.cancelAnimationFrame = window.cancelAnimationFrame =
    window.cancelAnimationFrame || animation.cancelAnimationFrame;
//# sourceMappingURL=raf.js.map