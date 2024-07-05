import { renderHook } from '@testing-library/react-hooks';
import { describe, expect, it } from 'vitest';

import { usePrevious } from './usePrevious';

const setUp = () => renderHook(({ state = 0 }) => usePrevious(state), { initialProps: { state: 0 } });

describe('usePrevious', () => {
  it('should return undefined on initial render', () => {
    const { result } = setUp();

    expect(result.current).toBeUndefined();
  });

  it('should always return previous state after each update', () => {
    const { result, rerender } = setUp();

    rerender({ state: 2 });
    expect(result.current).toBe(0);

    rerender({ state: 4 });
    expect(result.current).toBe(2);

    rerender({ state: 6 });
    expect(result.current).toBe(4);
  });
});
