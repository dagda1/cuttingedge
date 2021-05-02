import { Dimensions, UseParentSizeOptions, UseParentSizeResult } from './types';
import { RefObject, useMemo, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useIsomorphicLayoutEffect } from 'react-use';
import { useDebouncedCallback } from 'use-debounce';
import { useIsMounted } from '../useIsMounted/useIsMounted';
import { isNil } from '@cutting/util';
import assert from 'assert-ts';

export const useParentSize = <E extends Element>(
  ref: RefObject<E>,
  { debounceDelay = 0, initialValues = { width: 1, height: 1 } }: Partial<UseParentSizeOptions> = {},
): UseParentSizeResult => {
  const isMounted = useIsMounted();
  const [{ width, height }, setDimensions] = useState<Dimensions>({
    width: initialValues.width,
    height: initialValues.height,
  });
  const previousDimensions = useRef<Dimensions>({ width: initialValues.width, height: initialValues.height });

  assert(!!ref, 'You must pass a valid ref to useParent');

  const debouncedCallback = useDebouncedCallback(
    (value: Dimensions) => {
      setDimensions(value);
    },
    debounceDelay,
    {
      leading: true,
    },
  );

  const refElement = ref.current;

  useIsomorphicLayoutEffect(() => {
    if (isNil(refElement)) {
      setDimensions({ width, height });
      return;
    }

    const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
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
        if (isMounted) {
          debouncedCallback(newSize);
        }
      }
    });

    resizeObserver.observe(refElement);

    return () => {
      if (!!refElement) {
        resizeObserver?.unobserve(refElement);
      }
    };
  }, [debouncedCallback, height, isMounted, refElement, width]);

  return useMemo(
    () => ({
      width,
      height,
    }),
    [height, width],
  );
};
