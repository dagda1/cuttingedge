import type { UseParentSizeOptions, Dimensions, UseParentSizeResult } from './types';
import { useCallback, useMemo, useReducer, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useIsomorphicLayoutEffect } from '../use-isomorphic-layout-effect/useIsomorphicLayoutEffect';

const DefaultOptions: UseParentSizeOptions = {
  initialDimensions: { width: 1, height: 1 },
  offset: { width: 0, height: 0 },
};

const setSize = ({ width, height }: Dimensions) =>
  ({
    type: 'SET_SIZE',
    payload: { width, height },
  } as const);

type Actions = ReturnType<typeof setSize>;

export const useParentSize = (options: Partial<UseParentSizeOptions> = {}): UseParentSizeResult => {
  const ref = useRef<HTMLElement>(null);

  function reducer(state: Dimensions, action: Actions) {
    switch (action.type) {
      case 'SET_SIZE': {
        return { ...state, width: action.payload.width, height: action.payload.height };
      }
      default:
        throw new Error('unknown size error');
    }
  }

  const { initialDimensions, offset }: UseParentSizeOptions = {
    initialDimensions: { ...(options?.initialDimensions || DefaultOptions.initialDimensions) },
    offset: { ...((options?.offset || DefaultOptions.offset) as Dimensions) },
  };

  const [dimensions, dispatch] = useReducer(reducer, initialDimensions);

  const handleResize = useCallback(
    (entries: ResizeObserverEntry[]) => {
      if (!Array.isArray(entries)) {
        return;
      }

      const entry = entries[0];
      const { width, height } = dimensions;
      const newWidth = Math.round(entry.contentRect.width);
      const newHeight = Math.round(entry.contentRect.height);

      if (width !== newWidth || height !== newHeight) {
        dispatch(setSize({ width: newWidth, height: newHeight }));
      }
    },
    [dimensions],
  );

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    let resizeObserver: ResizeObserver | null = new ResizeObserver((entries: ResizeObserverEntry[]) =>
      handleResize(entries),
    );

    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver?.disconnect();
      resizeObserver = null;
    };
  }, [handleResize, ref]);

  return useMemo(
    () => ({
      width: dimensions.width + (offset?.width || 0),
      height: dimensions.height + (offset?.height || 0),
      ref,
    }),
    [dimensions.height, dimensions.width, offset?.height, offset?.width],
  );
};
