import type { Accumulator } from './types';

export function getDefaultAccumulator<R, T>(initialState?: R): Accumulator<R, T> {
  if (Array.isArray(initialState)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ((initialState: R, current: T) => [...(initialState as any), current]) as any;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return ((_: R, current: T) => current) as any;
}

export const noOp = (): void => void 0;
