import { renderHook } from '@testing-library/react-hooks';
import { describe, expect, it } from 'vitest';

import { useIsMounted } from './useIsMounted';

describe('useIsMounted', () => {
  it('returning a ref to the mounted state', () => {
    const { result, unmount } = renderHook(() => useIsMounted());

    expect(result.current.current).toBe(true);

    unmount();

    expect(result.current.current).toBe(false);
  });
});
