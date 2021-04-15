import { isDate } from './date';
import { expect, it, describe } from '@jest/globals';

describe('isDate', () => {
  it('should determine dates', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate([1, 2, 3])).toBe(false);
    expect(isDate(true)).toBe(false);
    expect(isDate(new Error())).toBe(false);
    expect(isDate(Array.prototype.slice)).toBe(false);
    expect(isDate({ a: 1 })).toBe(false);
    expect(isDate(1)).toBe(false);
    expect(isDate(/x/)).toBe(false);
    expect(isDate('a')).toBe(false);
  });
});
