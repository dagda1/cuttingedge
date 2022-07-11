const raf = (window.requestAnimationFrame = (cb) => {
    return setTimeout(cb, 0);
});
export default raf;
//# sourceMappingURL=raf.js.map