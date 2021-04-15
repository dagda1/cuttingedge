import { uniqueId } from './uniqueid';
import { expect, it, describe } from '@jest/globals';

describe('uniqueId', () => {
  it('should be incrementing', () => {
    expect(uniqueId('contact_')).toBe('contact_1');

    expect(uniqueId()).toBe('2');

    expect(uniqueId()).toBe('3');

    expect(uniqueId()).toBe('4');

    expect(uniqueId()).toBe('5');
  });
});
