import type { RefObject } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

export interface UseScrollToTopProps<E = HTMLElement> {
  ref: RefObject<E>;
}

export const useScrollToTop = ({ ref }: UseScrollToTopProps): void => {
  const { pathname } = useLocation();

  useEffect(() => {
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
