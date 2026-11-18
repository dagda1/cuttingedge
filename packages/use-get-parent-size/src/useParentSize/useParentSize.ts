import type { RefObject } from 'react';
import { useEffect, useEffectEvent, useMemo, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import type { ResizeObserverContentRect, UseParentSizeOptions, UseParentSizeResult } from './types';
import { identity } from './util';

interface Size {
  width: number;
  height: number;
}

interface Observation<E extends Element> {
  element: E;
  resizeObserver: ResizeObserver;
}

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

const isWithin = (previous: Size, next: Size, maxDifference: number): boolean =>
  Math.abs(next.width - previous.width) <= maxDifference && Math.abs(next.height - previous.height) <= maxDifference;

export const useParentSize = <E extends Element>(
  ref: RefObject<E | null>,
  {
    debounceDelay = 500,
    initialValues = initialContentRect,
    transformFunc = identity,
    maxDifference = 10,
    callback = identity,
  }: Partial<UseParentSizeOptions> = {},
): UseParentSizeResult => {
  const [contentRect, setContentRect] = useState<ResizeObserverContentRect>({
    ...initialContentRect,
    ...initialValues,
  } as ResizeObserverContentRect);
  const previousSize = useRef<Size>(undefined);
  const observation = useRef<Observation<E>>(undefined);

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

  const reportResize = useEffectEvent((entries: ResizeObserverEntry[]) => {
    if (entries.length !== 1) {
      return;
    }

    const entry = entries[0];
    const size = { width: Math.round(entry.contentRect.width), height: Math.round(entry.contentRect.height) };

    if (previousSize.current !== undefined && isWithin(previousSize.current, size, maxDifference)) {
      return;
    }

    previousSize.current = size;
    debouncedCallback(entry.contentRect);
  });

  useEffect(() => {
    const element = ref.current;

    if (element === null || observation.current?.element === element) {
      return;
    }

    observation.current?.resizeObserver.disconnect();

    const resizeObserver = new ResizeObserver((entries) => reportResize(entries));
    resizeObserver.observe(element);
    observation.current = { element, resizeObserver };
  });

  useEffect(
    () => () => {
      observation.current?.resizeObserver.disconnect();
      observation.current = undefined;
    },
    [],
  );

  return useMemo(() => transformFunc(contentRect), [contentRect, transformFunc]);
};
