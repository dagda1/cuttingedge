import { assert } from '@cutting/assert';
import type { RefObject } from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import type { ResizeObserverContentRect, UseParentSizeOptions, UseParentSizeResult, Writeable } from './types';
import { identity } from './util';

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
  const previousContentRect = useRef<Writeable<ResizeObserverContentRect>>(initialValues as ResizeObserverContentRect);
  const firstUpdateDone = useRef(false);

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

  useEffect(() => {
    const element = ref.current;
    assert(element !== null, 'useParentSize: the ref is not attached to an element');

    const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      if (!Array.isArray(entries) || entries.length !== 1) {
        return;
      }

      const entry = entries[0];
      const newWidth = Math.round(entry.contentRect.width);
      const newHeight = Math.round(entry.contentRect.height);

      if (!firstUpdateDone.current) {
        previousContentRect.current.height = newHeight;
        previousContentRect.current.width = newWidth;
        debouncedCallback(entry.contentRect);
        firstUpdateDone.current = true;
        return;
      }

      const widthDiff = Math.abs(newWidth - (previousContentRect.current.width ?? 0));
      const heightDiff = Math.abs(newHeight - (previousContentRect.current.height ?? 0));

      if (widthDiff > maxDifference || heightDiff > maxDifference) {
        previousContentRect.current.height = newHeight;
        previousContentRect.current.width = newWidth;
        debouncedCallback(entry.contentRect);
      }
    });

    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, [ref, maxDifference, debouncedCallback]);

  return useMemo(() => transformer(contentRect), [contentRect, transformer]);
};
