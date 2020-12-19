const raf = (window.requestAnimationFrame = (cb: FrameRequestCallback) => {
  return (setTimeout(cb, 0) as unknown) as number;
});

export default raf;
