import { describe, expect, it } from 'vitest';

import { isTest } from '.';

describe('environment', () => {
  it('should be isTest', () => {
    expect(isTest).toBe(true);
  });
});
