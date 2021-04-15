import { expect, it, describe } from '@jest/globals';
import { isEmptyObject } from './isEmptyObject';

describe('isEmptyObject', () => {
  it('should return true for undefined', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(isEmptyObject(undefined as any)).toBe(true);
  });

  it('should return true for empty hash', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  it('should return true for object with empty props', () => {
    expect(isEmptyObject({ name: undefined })).toBe(true);
  });

  it('should return true for nested object with empty props', () => {
    expect(
      isEmptyObject({
        name: undefined,
        address: { line1: undefined, postcode: undefined },
      }),
    ).toBe(true);
  });

  it('should return false for object with props', () => {
    expect(isEmptyObject({ name: 'Bob' })).toBe(false);
  });

  it('should return false for nested object with empty props', () => {
    expect(
      isEmptyObject({
        name: undefined,
        address: { line1: undefined, postcode: 'SW12 7AS' },
      }),
    ).toBe(false);
  });

  it('should return false if the only key is a boolean filed with false', () => {
    expect(
      isEmptyObject({
        predicate: false,
      }),
    ).toBe(false);
  });

  it('should return true if the only key with empty string', () => {
    expect(
      isEmptyObject({
        predicate: '',
      }),
    ).toBe(false);
  });
});
