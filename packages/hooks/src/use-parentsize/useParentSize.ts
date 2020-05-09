import { useEffect, useCallback, RefObject, useReducer } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export interface Dimensions {
  width: number;
  height: number;
}

export interface UseParentSizeOptions {
  initialDimensions: Dimensions;
  offset?: Dimensions;
}

export enum SizeActionTypes {
  SetSize = 'SET_SIZE',
}

export interface SizeAction {
  type: SizeActionTypes.SetSize;
  payload: Dimensions;
}

export const useParentSize = (
  ref: RefObject<HTMLElement>,
  { initialDimensions, offset }: UseParentSizeOptions = {
    initialDimensions: { width: 0, height: 0 },
    offset: { width: 0, height: 0 },
  },
) => {
  // need to use useReducer because useState with setDimensions({ width: //etc })
  // causes an infinite re-render as you are setting a new object each time
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
      const { width } = dimensions;
      const newWidth = Math.round(entry.contentRect.width);
      const newHeight = Math.round(entry.contentRect.height);

      if (width !== newWidth) {
        dispatch({
          type: SizeActionTypes.SetSize,
          payload: { width: newWidth, height: newHeight },
        });
      }
    },
    [dimensions],
  );

  useEffect(() => {
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
    width: dimensions.width + offset?.width! || 0,
    height: dimensions.height + offset?.height! || 0,
  };
};
