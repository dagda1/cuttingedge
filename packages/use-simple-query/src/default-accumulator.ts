import { UseQueryOptions } from './types';

export function getDefaultAccumulator<D, R>(
  initialState?: R,
): Pick<UseQueryOptions<D, R>, 'accumulator'>['accumulator'] {
  if (Array.isArray(initialState)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (initialState: R, current: D) => ([...(initialState as any), current] as unknown) as R;
  }

  return (_: R, current: D) => (current as unknown) as R;
}

export const noOp = (): void => void 0;
