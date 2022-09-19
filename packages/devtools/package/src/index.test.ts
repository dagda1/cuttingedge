import { describe, it, expect } from 'vitest';
import { add } from './index';

describe('add', () => {
  it('should add up', () => {
    expect(add(1, 1)).toBe(2);
  });
});
