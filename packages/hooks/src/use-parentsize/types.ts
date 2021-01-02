import type { LegacyRef, RefObject } from 'react';

export interface Dimensions {
  width: number;
  height: number;
}

export type UseParentSizeResult = {
  width: number;
  height: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: LegacyRef<any> | RefObject<any>;
};

export interface UseParentSizeOptions {
  initialDimensions: Dimensions;
  offset?: Dimensions;
}
