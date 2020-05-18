const raf = (window.requestAnimationFrame = global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
});

module.exports = raf;
