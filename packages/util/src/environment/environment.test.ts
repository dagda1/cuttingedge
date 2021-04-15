import { isTest } from '.';
import { expect, it, describe } from '@jest/globals';

describe('environment', () => {
  it('should be isTest', () => {
    expect(isTest).toBe(true);
  });
});
