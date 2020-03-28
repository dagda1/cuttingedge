import { useLayoutEffect, useState, useCallback, RefObject } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export interface Dimensions {
  width: number;
  height: number;
}

export const useParentSize = (ref: RefObject<HTMLElement>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleResize = useCallback((entries: ResizeObserverEntry[]) => {
    if (!Array.isArray(entries)) {
      return;
    }

    const entry = entries[0];
    const newWidth = Math.round(entry.contentRect.width);
    const newHeight = Math.round(entry.contentRect.height);

    setDimensions({ width: newWidth, height: newHeight });
  }, []);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    let resizeObserver: ResizeObserver | null = new ResizeObserver(
      (entries: ResizeObserverEntry[]) => handleResize(entries),
    );
    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver?.disconnect();
      resizeObserver = null;
    };
  }, [handleResize, ref]);

  return dimensions;
};
