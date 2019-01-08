import invariant from 'invariant';

export function elementIsVisibleInScrollable(container: HTMLElement, element: HTMLElement) {
  const containerTop = container.scrollTop;
  const containerBottom = containerTop + container.clientHeight;

  const elementTop = element.offsetTop;
  const elementBottom = elementTop + element.clientHeight;

  const isVisibleAtTop = elementTop >= containerTop;

  const isVisibleAtBottom = elementBottom <= containerBottom;

  return isVisibleAtTop && isVisibleAtBottom;
}

export function getElementY(element: HTMLElement, options: { offset: number }) {
  const offsetTop = options.offset;

  return element.offsetTop + offsetTop;
}

function doScrolling(element: HTMLElement, container: HTMLElement, duration: number, options: { offset: number }) {
  const containerScrollTop = container.scrollTop;
  const elementOffSetTop = getElementY(element, options);

  if (!elementOffSetTop) {
    return;
  }

  const diff = elementOffSetTop - containerScrollTop;

  // Easing function: easeInOutCubic
  // From: https://gist.github.com/gre/1650294
  const easing = (t: number) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);
  let start: number;

  if (!diff) {
    return;
  }

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp: number) {
    if (!start) {
      start = timestamp;
    }
    // Elapsed miliseconds since start of scrolling.
    const time = timestamp - start;
    // Get percent of completion in range [0, 1].
    let percent = Math.min(time / duration, 1);
    // Apply the easing.
    // It can cause bad-looking slow frames in browser performance tool, so be careful.
    percent = easing(percent);

    container.scrollTop = containerScrollTop + diff * percent;

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}

export interface ScrollToOptions {
  container: HTMLElement | Window | string;
  offset: number;
  duration: number;
}

export const resolveElement = (element: HTMLElement | string): HTMLElement =>
  typeof element === 'string' ? (document.querySelector(element) as HTMLElement) : element;

export const scrollToElement = (
  element: HTMLElement | string,
  { container, duration, offset }: { container: HTMLElement | string | Window; duration: number; offset: number }
) => (e?: Event) => {
  const elementToScrollTo = resolveElement(element);
  const scollContainer = resolveElement(container);

  invariant(elementToScrollTo, 'element cannot be null');
  invariant(scollContainer, 'container cannot be null');

  setTimeout(() => {
    if (elementIsVisibleInScrollable(elementToScrollTo, scollContainer)) {
      return;
    }

    doScrolling(elementToScrollTo, scollContainer, 1000, options);
  });
};

/* export const scrollTo = (element: HTMLElement, options: ScrollToOptions = { offset: 0 }) => {
  return scrollToElement(element, options);
}; */
