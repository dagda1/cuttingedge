import { describe, it, expect } from '@jest/globals';
import { clearArray } from './clearArray';

describe('clearArray', () => {
  it('should clear an array with items', () => {
    const a: number[] = [0, 1, 2, 3, 4];

    clearArray(a);

    expect(a).toHaveLength(0);
  });

  it('should not blow up with empty array', () => {
    const a: unknown[] = [];

    clearArray(a);

    expect(a).toHaveLength(0);
  });

  it('should not blow up with undefined', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clearArray(undefined as any);
  });
});
