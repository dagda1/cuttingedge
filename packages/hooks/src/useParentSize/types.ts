import type { LegacyRef, RefCallback, RefObject } from 'react';

export interface Dimensions {
  width: number | undefined;
  height: number | undefined;
}

export type UseParentSizeResult = Dimensions & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: LegacyRef<any> | RefObject<any> | RefCallback<HTMLElement>;
};
