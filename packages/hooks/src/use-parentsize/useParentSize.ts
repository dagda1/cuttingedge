import type { UseParentSizeResult } from './types';
import { useMemo, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useIsomorphicLayoutEffect } from '../use-isomorphic-layout-effect/useIsomorphicLayoutEffect';

export const useParentSize = (): UseParentSizeResult => {
  const ref = useRef<HTMLElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>();

  const [{ width, height }, setDimensions] = useState({ width: 1, height: 1 });

  useIsomorphicLayoutEffect(() => {
    if (!ref.current || !!resizeObserverRef.current) {
      return;
    }

    console.log('settting the dawg');

    resizeObserverRef.current = new ResizeObserver((entries) => {
      if (!Array.isArray(entries) || entries.length !== 1) {
        return;
      }

      const entry = entries[0];
      const newWidth = Math.round(entry.contentRect.width);
      const newHeight = Math.round(entry.contentRect.height);

      // console.log({ width, height, newWidth, newHeight });

      if (width !== newWidth || height !== newHeight) {
        setDimensions({ width: newWidth, height: newHeight });
      }
    });

    resizeObserverRef.current.observe(ref.current);

    return () => {
      console.log('killing......');
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
    };
  }, [ref]);

  // console.log({ width: dimensions.width, height: dimensions.height });

  return useMemo(
    () => ({
      width,
      height,
      ref,
    }),
    [height, width],
  );
};
