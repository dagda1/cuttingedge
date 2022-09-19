import { isTest } from '.';
import { expect, it, describe } from 'vitest';

describe('environment', () => {
  it('should be isTest', () => {
    expect(isTest).toBe(true);
  });
});
