import React, { useEffect, useReducer } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export interface ParentSizeState {
  height: number;
  width: number;
  left: number;
  top: number;
}

export interface ParentSizeResult {
  ref: React.RefObject<HTMLDivElement>;
  resize: (dimensions: ParentSizeState) => void;
}

export interface Dimensions {
  width: number;
  height: number;
}

type Transform = (dimensions: Dimensions) => Dimensions;

const identityTransform: Transform = (dimensions: Dimensions) => dimensions;

export interface ParentSizeProps {
  ref: React.RefObject<HTMLDivElement>;
  transformFunc?: ({ width, height }: Dimensions) => Dimensions;
}

function getSize(
  el: HTMLElement | null,
  transformFunc: Transform = identityTransform,
): Dimensions {
  if (!el) {
    return transformFunc({
      width: 0,
      height: 0,
    });
  }

  const { width, height } = el.getBoundingClientRect();

  return transformFunc({
    width,
    height,
  });
}

export enum SizeActionTypes {
  SET_SIZE = 'SET_SIZE',
}

export interface SizeAction {
  type: SizeActionTypes.SET_SIZE;
}

export const useParentSize = ({
  ref,
  transformFunc = dimensions => dimensions,
}: ParentSizeProps) => {
  function reducer(state: Dimensions, action: SizeAction) {
    switch (action.type) {
      case SizeActionTypes.SET_SIZE: {
        return getSize(ref.current, transformFunc);
      }
      default:
        throw new Error('unknown size error');
    }
  }

  const [state, dispatch] = useReducer(
    reducer,
    transformFunc({ width: 0, height: 0 }),
  );

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    let resizeObserver: ResizeObserver | null = new ResizeObserver(() => {
      dispatch({ type: SizeActionTypes.SET_SIZE });
    });

    resizeObserver.observe(ref.current);

    return () => {
      if (!resizeObserver) {
        return;
      }

      resizeObserver.disconnect();
      resizeObserver = null;
    };
  }, [ref]);

  return state;
};
