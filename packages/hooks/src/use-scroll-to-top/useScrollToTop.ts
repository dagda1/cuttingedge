import React, { useLayoutEffect } from 'react';
import { usePrevious } from '../use-previous';
import { useLocation } from 'react-router';

export interface UseScrollToTopProps<E = HTMLElement> {
  ref: React.RefObject<E>;
}

export const useScrollToTop = ({ ref }: UseScrollToTopProps): void => {
  const { pathname } = useLocation();
  const previousPathname = usePrevious(pathname);

  useLayoutEffect(() => {
    if (pathname === previousPathname || !ref.current) {
      return;
    }

    const clearTimer = setTimeout(() => {
      ref.current?.focus();
    }, 100);

    return (): void => {
      clearTimeout(clearTimer);
    };
  }, [pathname, previousPathname, ref]);
};
