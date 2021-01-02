import type { Dimensions, UseParentSizeResult } from './types';
import { useMemo, useReducer, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useIsomorphicLayoutEffect } from '../use-isomorphic-layout-effect/useIsomorphicLayoutEffect';

const setSize = ({ width, height }: Dimensions) =>
  ({
    type: 'SET_SIZE',
    payload: { width, height },
  } as const);

type Actions = ReturnType<typeof setSize>;

export const useParentSize = (): UseParentSizeResult => {
  const ref = useRef<HTMLElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>();

  function reducer(state: Dimensions, action: Actions) {
    switch (action.type) {
      case 'SET_SIZE': {
        return { ...state, width: action.payload.width, height: action.payload.height };
      }
      default:
        throw new Error('unknown size error');
    }
  }

  const [dimensions, dispatch] = useReducer(reducer, { width: 1, height: 1 });

  useIsomorphicLayoutEffect(() => {
    if (!ref.current || !!resizeObserverRef.current) {
      return;
    }

    console.log('settting the dawg');

    resizeObserverRef.current = new ResizeObserver((entries) => {
      if (!Array.isArray(entries) || entries.length !== 1) {
        return;
      }

      const entry = entries[0];
      const { width, height } = dimensions;
      const newWidth = Math.round(entry.contentRect.width);
      const newHeight = Math.round(entry.contentRect.height);

      console.log({ newWidth, newHeight });

      if (width !== newWidth || height !== newHeight) {
        dispatch(setSize({ width: newWidth, height: newHeight }));
      }
    });

    resizeObserverRef.current.observe(ref.current);

    // return () => {
    //   console.log('killing......');
    //   resizeObserverRef.current?.disconnect();
    //   resizeObserverRef.current = null;
    // };
  }, [ref]);

  // console.log({ width: dimensions.width, height: dimensions.height });

  return useMemo(
    () => ({
      width: dimensions.width,
      height: dimensions.height,
      ref,
    }),
    [dimensions.height, dimensions.width],
  );
};
