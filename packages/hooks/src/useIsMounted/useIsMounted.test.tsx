import { renderHook } from '@testing-library/react-hooks';
import { it, describe, expect } from '@jest/globals';
import { useIsMounted } from './useIsMounted.js';

describe('useIsMounted', () => {
  it('returning a ref to the mounted state', () => {
    const { result, unmount } = renderHook(() => useIsMounted());

    expect(result.current.current).toBe(true);

    unmount();

    expect(result.current.current).toBe(false);
  });
});
