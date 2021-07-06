import { describe, it, expect } from '@jest/globals';
import { isEqual } from './is-equal';

describe('isEqual', () => {
  describe('happy', () => {
    it('should equal object equality', () => {
      expect(isEqual({ a: 'b', c: 2, d: 3 }, { a: 'b', c: 2, d: 3 })).toBe(true);
    });

    it('should equal array equality', () => {
      expect(isEqual([{ a: 'b', c: 2, d: 3 }], [{ a: 'b', c: 2, d: 3 }])).toBe(true);
      expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    });

    it('should equal functions', () => {
      const o = () => console.log('b');

      expect(isEqual(o, o)).toBe(true);
    });

    it('should equal primitives', () => {
      expect(isEqual(1, 1)).toBe(true);
      expect(isEqual('1', '1')).toBe(true);
      expect(isEqual(false, false)).toBe(true);
    });
  });

  describe('sad', () => {
    it('should not equal object equality', () => {
      expect(isEqual({ a: 'b', c: 2, d: 3 }, { a: 'b', c: '2', d: 3 })).toBe(false);
      expect(isEqual({ a: 'b', c: 2, d: 3 }, undefined)).toBe(false);
      expect(isEqual({ a: 'b', c: 2, d: 3 }, null)).toBe(false);
    });

    it('should not equal array equality', () => {
      expect(isEqual([{ a: 'b', c: 2, d: 3 }], [{ a: 'b', c: 2, d: '3' }])).toBe(false);
      expect(isEqual([1, 2, 3], [1, 2])).toBe(false);
      expect(isEqual([1, 2, 3], undefined)).toBe(false);
      expect(isEqual([1, 2, 3], null)).toBe(false);
    });

    it('should equal functions', () => {
      const o = () => console.log('b');

      expect(isEqual(o, () => console.log('c'))).toBe(false);
      expect(isEqual(o, undefined)).toBe(false);
    });

    it('should equal primitives', () => {
      expect(isEqual(1, 2)).toBe(false);
      expect(isEqual('1', '3')).toBe(false);
      expect(isEqual(false, true)).toBe(false);
      expect(isEqual(8, undefined)).toBe(false);
      expect(isEqual('8', null)).toBe(false);
    });
  });
});
