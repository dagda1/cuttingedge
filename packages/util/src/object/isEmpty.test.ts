/* eslint-disable @typescript-eslint/no-explicit-any */
import { isEmpty } from './isEmpty';

describe('isEmpty', () => {
  it('should return true for empty', () => {
    expect(isEmpty(true as any)).toBe(true);
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty(NaN)).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty('')).toBe(true);
  });

  it('should return false for non-empty', () => {
    expect(isEmpty([0])).toBe(false);
    expect(isEmpty({ a: 0 })).toBe(false);
    expect(isEmpty({ length: '0' })).toBe(false);
  });
});
