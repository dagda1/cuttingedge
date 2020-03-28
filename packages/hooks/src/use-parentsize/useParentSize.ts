import { useEffect, useState, useCallback, RefObject } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export interface Dimensions {
  width: number;
  height: number;
}

export interface UseParentSizeOptions {
  initialDimensions: Dimensions;
}

export const useParentSize = (
  ref: RefObject<HTMLElement>,
  { initialDimensions }: UseParentSizeOptions,
) => {
  const [dimensions, setDimensions] = useState(initialDimensions);

  const handleResize = useCallback(
    (entries: ResizeObserverEntry[]) => {
      if (!Array.isArray(entries)) {
        return;
      }

      const entry = entries[0];
      const { width } = dimensions;
      const newWidth = Math.round(entry.contentRect.width);
      const newHeight = Math.round(entry.contentRect.height);

      if (width !== newWidth) {
        setDimensions({ width: newWidth, height: newHeight });
      }
    },
    [dimensions],
  );

  useEffect(() => {
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
