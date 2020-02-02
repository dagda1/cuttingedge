import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

export interface UseScrollToTopProps<E = HTMLElement> {
  ref: React.RefObject<E>;
}

export const useScrollToTop = ({ ref }: UseScrollToTopProps): void => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    window.scrollTo(0, 0);

    const clearTimer = setTimeout(() => {
      ref.current?.focus();
    }, 100);

    return (): void => {
      clearTimeout(clearTimer);
    };
  }, [pathname, ref]);
};
