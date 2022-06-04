import { generateUUID } from './uuid';
import { describe, it, expect } from '@jest/globals';

describe('generateUUID', () => {
  it('should generate a uuid', () => {
    console.log(generateUUID());
    expect(generateUUID()).toBeDefined();
  });
});
