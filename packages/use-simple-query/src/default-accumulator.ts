import { UseQueryOptions } from './types';

export function getDefaultAccumulator<D, R>(
  initialData?: R,
): Pick<UseQueryOptions<D, R>, 'accumulator'>['accumulator'] {
  if (Array.isArray(initialData)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (initialData: R, current: D) => ([...(initialData as any), current] as unknown) as R;
  }

  return (_: R, current: D) => (current as unknown) as R;
}

export const noOp = (): void => void 0;
