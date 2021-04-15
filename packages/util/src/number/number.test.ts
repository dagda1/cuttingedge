import { isNumber } from '.';
import { expect, it, describe } from '@jest/globals';

describe('isNumber', () => {
  it('should test for number', () => {
    expect(['123', '22', '555555'].every(isNumber)).toBe(true);
  });

  it('should fail for non numbers', () => {
    expect([' i0l', '', undefined, null, '009911A'].every((x) => isNumber(x) === false)).toBe(true);
  });
});
