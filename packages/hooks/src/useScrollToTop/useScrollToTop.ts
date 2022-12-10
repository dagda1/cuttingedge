import type { RefObject } from 'react';
import { useLayoutEffect } from 'react';
import { usePrevious } from '../usePrevious/usePrevious';

export interface UseScrollToTopProps<E = HTMLElement> {
  ref: RefObject<E>;
}

export const useScrollToTop = ({ ref }: UseScrollToTopProps): void => {
  const { pathname } = window.location;
  const previousPathname = usePrevious(pathname);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || pathname === previousPathname || !ref.current) {
      return;
    }

    window.scrollTo(0, 0);

    const clearTimer = setTimeout(() => {
      ref.current?.focus();
    }, 100);

    return (): void => {
      clearTimeout(clearTimer);
    };
  }, [pathname, previousPathname, ref]);
};
