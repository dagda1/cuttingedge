import { useCallback, useReducer } from 'react';
import type { RefObject } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { UseParentSizeOptions, Dimensions, SizeAction, SizeActionTypes } from './types';
import { useIsomorphicLayoutEffect } from '../use-isomorphic-layout-effect/useIsomorphicLayoutEffect';

export const useParentSize = (
  ref: RefObject<HTMLElement>,
  { initialDimensions, offset }: UseParentSizeOptions = {
    initialDimensions: { width: 0, height: 0 },
    offset: { width: 0, height: 0 },
  },
): { width: number; height: number } => {
  function reducer(state: Dimensions, action: SizeAction) {
    switch (action.type) {
      case SizeActionTypes.SetSize: {
        return { width: action.payload.width, height: action.payload.height };
      }
      default:
        throw new Error('unknown size error');
    }
  }

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
        dispatch({
          type: SizeActionTypes.SetSize,
          payload: { width: newWidth, height: newHeight },
        });
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

  return {
    width: dimensions.width + (offset?.width || 0),
    height: dimensions.height + (offset?.height || 0),
  };
};
