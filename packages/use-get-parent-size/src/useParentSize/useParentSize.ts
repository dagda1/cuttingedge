import { assert } from '@cutting/assert';
import type { RefObject } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useDebouncedCallback } from 'use-debounce';

import type { ResizeObserverContentRect, UseParentSizeOptions, UseParentSizeResult, Writeable } from './types';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import { identity, isNil } from './util';

const initialContentRect: Partial<ResizeObserverContentRect> = {
  bottom: undefined,
  height: undefined,
  left: undefined,
  width: undefined,
  right: undefined,
  top: undefined,
  x: undefined,
  y: undefined,
};

export const useParentSize = <E extends Element>(
  ref: RefObject<E | null>,
  {
    debounceDelay = 500,
    initialValues = initialContentRect,
    transformFunc = (o: Partial<ResizeObserverContentRect>) => o as ResizeObserverContentRect,
    maxDifference = 10,
    callback = identity,
  }: Partial<UseParentSizeOptions> = {},
): UseParentSizeResult => {
  const [contentRect, setContentRect] = useState<ResizeObserverContentRect>({
    ...initialContentRect,
    ...initialValues,
  } as ResizeObserverContentRect);
  const rerenderCount = useRef(0);
  const previousContentRect = useRef<Writeable<ResizeObserverContentRect>>(initialValues as ResizeObserverContentRect);

  const transformer = useCallback(transformFunc, [transformFunc]);

  assert(!!ref, 'You must pass a valid ref to useParentSize');

  const debouncedCallback = useDebouncedCallback(
    (value: ResizeObserverContentRect) => {
      setContentRect(value);
      callback(value);
    },
    debounceDelay,
    {
      leading: true,
    },
  );

  const refElement = ref.current;

  useIsomorphicLayoutEffect(() => {
    if (isNil(refElement)) {
      if (rerenderCount.current > 10) {
        throw new Error('Maximum rerender count and no refElement Found');
      }

      setContentRect({ ...contentRect } as ResizeObserverContentRect);
      rerenderCount.current++;
      return;
    }

    const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      if (!Array.isArray(entries) || entries.length !== 1) {
        return;
      }

      const entry = entries[0];
      const newWidth = Math.round(entry.contentRect.width);
      const newHeight = Math.round(entry.contentRect.height);

      const widthDiff = Math.abs(newWidth - (previousContentRect.current.width ?? 0));
      const heightDiff = Math.abs(newHeight - (previousContentRect.current.height ?? 0));

      if (widthDiff > maxDifference || heightDiff > maxDifference) {
        previousContentRect.current.height = newHeight;
        previousContentRect.current.width = newWidth;
        debouncedCallback(entry.contentRect);
      }
    });

    requestAnimationFrame(() => resizeObserver?.observe(refElement));

    return () => {
      if (!!refElement) {
        resizeObserver?.unobserve(refElement);
      }
    };
  }, [maxDifference, debouncedCallback, refElement, initialValues, contentRect]);

  return useMemo(() => transformer(contentRect), [contentRect, transformer]);
};
