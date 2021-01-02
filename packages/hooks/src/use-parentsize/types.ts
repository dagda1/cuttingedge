import type { LegacyRef, RefObject } from 'react';

export interface Dimensions {
  width: number;
  height: number;
}

export type UseParentSizeResult = Dimensions & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: LegacyRef<any> | RefObject<any>;
};
