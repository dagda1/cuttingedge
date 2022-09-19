import { generateUUID } from './uuid';
import { describe, it, expect } from 'vitest';

describe('generateUUID', () => {
  it('should generate a uuid', () => {
    console.log(generateUUID());
    expect(generateUUID()).toBeDefined();
  });
});
