import { describe, it, expect } from '@jest/globals';
import { add } from './index';

describe('add', () => {
  it('should add up', () => {
    expect(add(1, 1)).toBe(2);
  });
});
