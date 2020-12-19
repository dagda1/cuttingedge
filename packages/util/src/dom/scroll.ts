import { isElementInViewportTop } from './dom';
import { wait } from './wait';

function getElementY(query: string, options: { offset: number }) {
  const el = document.querySelector(query);

  if (!el) {
    return 0;
  }

  const offsetTop = options.offset;

  return window.pageYOffset + el.getBoundingClientRect().top + offsetTop;
}

function doScrolling(element: string, duration: number, options: { offset: number }) {
  const startingY = window.pageYOffset;
  const elementY = getElementY(element, options);

  if (!elementY) {
    return;
  }

  const targetY =
    document.body.scrollHeight - elementY < window.innerHeight
      ? document.body.scrollHeight - window.innerHeight
      : elementY;
  const diff = targetY - startingY;
  // Easing function: easeInOutCubic
  // From: https://gist.github.com/gre/1650294
  const easing = (t: number) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);
  let start: number;

  if (!diff) {
    return;
  }

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) {
      start = timestamp;
    }
    const time = timestamp - start;
    let percent = Math.min(time / duration, 1);
    percent = easing(percent);

    window.scrollTo(0, startingY + diff * percent);

    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}

export const scrollToElement = (
  selector: string,
  predicate: (e?: Event) => true = () => true,
  options: {
    offset: number;
  } = { offset: 0 },
) => (e?: Event): void => {
  if (!predicate(e)) {
    return;
  }

  setTimeout(() => {
    doScrolling(selector, 1000, options);
  });
};

const defaultValidatorSelector = '[data-selector="validation-summary"] h2';

export const scrollToValidationError = async (summarySelector: string = defaultValidatorSelector): Promise<void> => {
  try {
    await wait(summarySelector);
  } catch {
    return;
  }

  const scroller = scrollToElement(summarySelector, () => true, {
    offset: -400,
  });

  const link = document.querySelector(summarySelector) as HTMLElement;

  if (!link) {
    return;
  }

  if (!isElementInViewportTop(link)) {
    scroller();
    setTimeout(() => link.focus());
    return;
  }

  link.focus();
};
