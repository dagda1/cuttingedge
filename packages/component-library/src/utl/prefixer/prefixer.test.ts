import { describe, it, expect } from '@jest/globals';
import { prefixId } from '.';

describe('prefixer', () => {
  it('prefixes with no args', () => {
    const result = prefixId();

    expect(/^ctrl\d+/.test(result)).toBe(true);
  });

  it('should prefix custom label', () => {
    const result = prefixId('label');

    expect(/^label\d+/.test(result)).toBe(true);
  });
});
