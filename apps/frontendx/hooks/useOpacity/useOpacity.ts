import { useCallback, useEffect, useRef, useState } from 'react';

export function useOpacity(): number {
  const newScrollHeight = useRef(0);

  const [currentScrollHeight, setCurrentScrollHeight] = useState(0);

  const handler = useCallback(() => {
    newScrollHeight.current = Math.ceil(window.scrollY / 50) * 50;

    if (newScrollHeight.current !== currentScrollHeight) {
      setCurrentScrollHeight(newScrollHeight.current);
    }
  }, [currentScrollHeight]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return Math.min(100 / currentScrollHeight, 1);
}
