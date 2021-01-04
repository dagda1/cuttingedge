import { Dimensions, UseParentSizeOptions, UseParentSizeResult } from './types';
import { useMemo, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useIsomorphicLayoutEffect } from 'react-use';
import { useDebouncedCallback } from 'use-debounce';
import { useIsMounted } from '../useIsMounted/useIsMounted';

export const useParentSize = ({ debounceDelay = 0 }: Partial<UseParentSizeOptions> = {}): UseParentSizeResult => {
  const ref = useRef<HTMLElement>(null);
  const isMounted = useIsMounted();
  const resizeObserverRef = useRef<ResizeObserver | null>();
  const [{ width, height }, setDimensions] = useState<Dimensions>({ width: undefined, height: undefined });
  const previousDimensions = useRef<Dimensions>({ width: undefined, height: undefined });

  const { callback: debouncedCallback } = useDebouncedCallback(
    (value: Dimensions) => {
      setDimensions(value);
    },
    debounceDelay,
    {
      leading: true,
    },
  );

  useIsomorphicLayoutEffect(() => {
    if (!!resizeObserverRef.current || !ref.current) {
      return;
    }

    resizeObserverRef.current = new ResizeObserver((entries) => {
      if (!Array.isArray(entries) || entries.length !== 1) {
        return;
      }

      const entry = entries[0];
      const newWidth = Math.round(entry.contentRect.width);
      const newHeight = Math.round(entry.contentRect.height);

      const newSize = { width: newWidth, height: newHeight };

      if (previousDimensions.current?.width !== newWidth || previousDimensions.current?.height !== newHeight) {
        previousDimensions.current.height = newHeight;
        previousDimensions.current.width = newWidth;
        if (isMounted.current) {
          debouncedCallback(newSize);
        }
      }
    });

    resizeObserverRef.current.observe(ref.current);

    const refElement = ref.current;
    return () => {
      if (!!refElement) {
        resizeObserverRef.current?.unobserve(refElement);
      }
    };
  }, [debouncedCallback, isMounted]);

  return useMemo(
    () => ({
      width,
      height,
      ref,
    }),
    [height, width],
  );
};
