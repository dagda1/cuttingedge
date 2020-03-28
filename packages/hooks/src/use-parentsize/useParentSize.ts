import React, { useEffect, useState, useRef } from 'react';
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

export interface UseParentSizeOptions {
  initialDimensions: Dimensions;
  transformFunc?: Transform;
}

const identityTransform: Transform = (dimensions: Dimensions) => dimensions;

export const useParentSize = <E extends HTMLElement = HTMLElement>(
  ref: React.RefObject<E>,
  {
    initialDimensions = { width: 0, height: 0 },
    transformFunc = identityTransform,
  }: UseParentSizeOptions = { initialDimensions: { width: 0, height: 0 } },
) => {
  const [dimensions, setDimensions] = useState(initialDimensions);

  const previous = useRef(dimensions);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const resizeObserver: ResizeObserver = new ResizeObserver(entries => {
      console.log(entries);
      if (!Array.isArray(entries)) {
        return;
      }

      const entry = entries[0];

      const newWidth = Math.round(entry.contentRect.width);
      const newHeight = Math.round(entry.contentRect.height);

      if (
        newWidth !== previous.current.width &&
        newHeight !== previous.current.height
      ) {
        previous.current.height = newHeight;
        previous.current.width = newWidth;

        setDimensions(transformFunc({ width: newWidth, height: newHeight }));
      }
    });

    resizeObserver.observe(ref.current);

    return () => {
      if (!resizeObserver) {
        return;
      }

      resizeObserver.disconnect();
    };
  }, [ref, transformFunc]);

  return dimensions;
};
