import { Dimensions, UseParentSizeResult } from './types';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
// import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect/useIsomorphicLayoutEffect';
import { useDebouncedCallback } from 'use-debounce';
import { useIsMounted } from '../useIsMounted/useIsMounted';

// const createResizeObserver = () => {
//   const callbacks: Set<ResizeObserverCallback> = new Set();

//   return {
//     observer: new ResizeObserver((entries, observer) => {
//       for (const callback of callbacks) {
//         callback(entries, observer);
//       }
//     }),
//     subscribe: (callback: ResizeObserverCallback) => callbacks.add(callback),
//     unsubscribe: (callback: ResizeObserverCallback) => callbacks.delete(callback),
//   };
// };

export const useParentSize = (debounceDelay = 0): UseParentSizeResult => {
  const ref = useRef<HTMLElement>(null);
  const isMounted = useIsMounted();
  const resizeObserverRef = useRef<ResizeObserver | null>();
  const [{ width, height }, setDimensions] = useState<Dimensions>({ width: undefined, height: undefined });
  const previousDimensions = useRef<Dimensions>({ width: undefined, height: undefined });
  const shortCircuit = useRef(0);
  shortCircuit.current++;

  const { callback: debouncedCallback } = useDebouncedCallback(
    (value: Dimensions) => {
      setDimensions(value);
    },
    debounceDelay,
    {
      leading: true,
    },
  );

  useLayoutEffect(() => {
    if (!!resizeObserverRef.current || !ref.current || shortCircuit.current >= 5) {
      return;
    }

    console.log('creating a new one');

    resizeObserverRef.current = new ResizeObserver((entries) => {
      if (!Array.isArray(entries) || entries.length !== 1) {
        return;
      }

      const entry = entries[0];
      const newWidth = Math.round(entry.contentRect.width) - 2;
      const newHeight = Math.round(entry.contentRect.height) - 2;

      console.log({
        previousHeight: previousDimensions.current?.height,
        newHeight,
        elHeight: entry.target.getBoundingClientRect().height,
      });
      const newSize = { width: newWidth, height: newHeight };
      if (previousDimensions.current?.width !== newWidth || previousDimensions.current?.height !== newHeight) {
        previousDimensions.current.height = newHeight;
        previousDimensions.current.width = newWidth;
        if (isMounted.current) {
          console.log('bouncy bouncy');
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

  if (shortCircuit.current >= 5) {
    console.log('circuit breaker.......');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // resizeObserverRef.current?.unobserve(ref.current as any);
    // resizeObserverRef.current?.disconnect();
    // resizeObserverRef.current = null;
  }

  return useMemo(
    () => ({
      width,
      height,
      ref,
    }),
    [height, width],
  );
};
