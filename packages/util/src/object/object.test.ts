import { isEmptyObject } from './isEmptyObject';

describe('object utils', () => {
  describe('isEmptyObject', () => {
    it('should return true for undefined', () => {
      expect(isEmptyObject(undefined)).toBe(true);
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
  });
});
