const raf: any = (window.requestAnimationFrame = (cb: FrameRequestCallback): number => {
  return setTimeout(cb, 0);
});

module.exports = raf;
