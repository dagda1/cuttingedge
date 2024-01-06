import { expect, describe, it } from 'vitest';
import { isNil } from './isNil';

describe('isNil', () => {
  it.each([
    [undefined, true],
    [null, true],
    [NaN, false],
    ['default', false],
    [{ a: 'a' }, false],
  ])('isNil %d to be %d', (a, expected) => {
    expect(isNil(a)).toEqual(expected);
  });
});
