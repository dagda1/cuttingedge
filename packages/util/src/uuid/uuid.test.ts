import { describe, expect, it } from 'vitest';

import { generateUUID } from './uuid';

describe('generateUUID', () => {
  it('should generate a uuid', () => {
    console.log(generateUUID());
    expect(generateUUID()).toBeDefined();
  });
});
