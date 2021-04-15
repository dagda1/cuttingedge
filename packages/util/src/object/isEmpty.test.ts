import { expect, it, describe } from '@jest/globals';
import { isEmpty } from './isEmpty';

describe('isEmpty', () => {
  it('should return true for empty', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(isEmpty(undefined as any)).toBe(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(isEmpty(null as any)).toBe(true);
    expect(isEmpty('')).toBe(true);
  });

  it('should return false for non-empty', () => {
    expect(isEmpty([0])).toBe(false);
    expect(isEmpty({ a: 0 })).toBe(false);
    expect(isEmpty({ length: '0' })).toBe(false);
  });
});
