import { describe, expect, it } from 'vitest';

import { isObject } from './isObject';

describe('isObject', () => {
  it('should determine objects', () => {
    expect(isObject([1, 2, 3])).toBe(true);
    expect(isObject(Object(false))).toBe(true);
    expect(isObject(new Date())).toBe(true);
    expect(isObject(new Error())).toBe(true);
    expect(isObject(Array.prototype.slice)).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject(Object(0))).toBe(true);
    expect(isObject(/x/)).toBe(true);
    expect(isObject(Object('a'))).toBe(true);
  });
});
