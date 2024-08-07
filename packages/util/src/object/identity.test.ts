import { describe, expect, it } from 'vitest';

import { identity } from './identity';

describe('identity', () => {
  it('should return the same value', () => {
    const o = { a: 'b' };

    expect(identity(o)).toBe(o);
  });
});
