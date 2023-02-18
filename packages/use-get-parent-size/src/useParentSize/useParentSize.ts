import type { Dimensions, UseParentSizeOptions, UseParentSizeResult } from './types';
import type { RefObject } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useDebouncedCallback } from 'use-debounce';
import { identity, isNil } from '@cutting/util';
import { assert } from 'assert-ts';
import { useLayoutEffect } from 'react';

export const useParentSize = <E extends Element>(
  ref: RefObject<E>,
  {
    debounceDelay = 0,
    initialValues = { width: 0, height: 0 },
    transformFunc = identity,
    cuttoff = 10,
  }: Partial<UseParentSizeOptions> = {},
): UseParentSizeResult => {
  const [{ width, height }, setDimensions] = useState<Dimensions>({
    width: initialValues.width,
    height: initialValues.height,
  });
  const previousDimensions = useRef<Required<Dimensions>>({
    width: initialValues.width,
    height: initialValues.height,
  });

  const transformer = useCallback(transformFunc, [transformFunc]);

  assert(!!ref, 'You must pass a valid ref to useParentSize');

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

  useLayoutEffect(() => {
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

      const widthDiff = Math.abs(newWidth - previousDimensions.current.width);
      const heightDiff = Math.abs(newHeight - previousDimensions.current.height);

      if (widthDiff > cuttoff || heightDiff > cuttoff) {
        previousDimensions.current.height = newHeight;
        previousDimensions.current.width = newWidth;
        debouncedCallback(newSize);
      }
    });

    requestAnimationFrame(() => resizeObserver.observe(refElement));

    return () => {
      if (!!refElement) {
        resizeObserver?.unobserve(refElement);
      }
    };
  }, [cuttoff, debouncedCallback, height, refElement, width]);

  return useMemo(
    () =>
      transformer({
        width,
        height,
      }),
    [height, transformer, width],
  );
};
