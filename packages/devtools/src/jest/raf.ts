export const raf = (window.requestAnimationFrame = global.requestAnimationFrame = (cb) => {
  return setTimeout(cb, 0);
});
