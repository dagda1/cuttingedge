import type { LegacyRef, RefCallback, RefObject } from 'react';

export interface Dimensions {
  width: number | undefined;
  height: number | undefined;
}

export interface UseParentSizeOptions {
  debounceDelay: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RefType = LegacyRef<any> | RefObject<any> | RefCallback<HTMLElement>;

export type UseParentSizeResult = Dimensions;
