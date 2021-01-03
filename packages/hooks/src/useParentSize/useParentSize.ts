import { Dimensions, UseParentSizeResult } from './types';
import { useMemo, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect/useIsomorphicLayoutEffect';
import { useDebouncedCallback } from 'use-debounce';

export const useParentSize = (debounceDelay = 0): UseParentSizeResult => {
  const ref = useRef<HTMLElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>();
  const [dimensions, setDimensions] = useState<Dimensions>({ width: undefined, height: undefined });

  const { callback: debouncedCallback } = useDebouncedCallback(
    (value: Dimensions) => {
      setDimensions(value);
    },
    debounceDelay,
    {
      leading: true,
    },
  );

  console.log('>>>>>>>>');
  console.log(debouncedCallback);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current || !!resizeObserverRef.current || !dimensions) {
      return;
    }

    resizeObserverRef.current = new ResizeObserver((entries) => {
      if (!Array.isArray(entries) || entries.length !== 1) {
        return;
      }

      const entry = entries[0];
      const newWidth = Math.round(entry.contentRect.width);
      const newHeight = Math.round(entry.contentRect.height);

      const { width, height } = dimensions;

      console.log({ width, height, newWidth, newHeight });

      if (width !== newWidth || height !== newHeight) {
        debouncedCallback({ width: newWidth, height: newHeight });
      }
    });

    resizeObserverRef.current.observe(ref.current);

    return () => {
      console.log({ curr: resizeObserverRef.current, currREf: ref.current });
      console.log(resizeObserverRef?.current?.unobserve);
      if (!resizeObserverRef.current) {
        return;
      }

      if (!!ref.current) {
        console.log('killing......');
        resizeObserverRef.current?.unobserve(ref.current);
      }
    };
  }, []);

  console.log('settting the dawg');

  // console.log({ width: dimensions.width, height: dimensions.height });

  const { width, height } = dimensions;

  return useMemo(
    () => ({
      width,
      height,
      ref,
    }),
    [height, width],
  );
};
