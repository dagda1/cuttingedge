import { pickBy, countBy, sortBy, sortedUniqBy, uniqBy, groupBy } from './by';
import { expect, it, describe } from '@jest/globals';

describe('by', () => {
  describe('pickBy', function () {
    it('should work with func', () => {
      expect(pickBy({ a: 1, b: '2', c: 3 }, (n) => typeof n === 'number')).toEqual({ a: 1, c: 3 });
    });
  });

  describe('countBy', function () {
    const array = [6.1, 4.2, 6.3];

    it('should transform keys by `iteratee`', function () {
      const actual = countBy(array, Math.floor);
      expect(actual).toEqual({ '4': 1, '6': 2 });
    });
  });

  describe('sortBy', () => {
    const users = [
      { user: 'fred', age: 48 },
      { user: 'joe', age: 36 },
      { user: 'bill', age: 40 },
      { user: 'arnie', age: 34 },
    ];

    it('should sort in ascending order by string', function () {
      expect(
        sortBy(users, (object) => {
          return object.user;
        }),
      ).toEqual([
        { user: 'arnie', age: 34 },
        { user: 'bill', age: 40 },
        { user: 'fred', age: 48 },
        { user: 'joe', age: 36 },
      ]);
    });

    it('should sort in ascending order by number', function () {
      expect(
        sortBy(users, (object) => {
          return object.age;
        }),
      ).toEqual([
        { user: 'arnie', age: 34 },
        { user: 'joe', age: 36 },
        { user: 'bill', age: 40 },
        { user: 'fred', age: 48 },
      ]);
    });
  });

  describe('uniqBy', () => {
    it('should remove duplicates', () => {
      const list = [
        { a: 'AA', b: 'AAA' },
        { a: 'FF', b: 'FF' },
        { a: 'ZZ', b: 'ZZ' },
        { a: 'AA', b: 'cc' },
        { a: 'CC', b: 'AAA' },
        { a: 'AA', b: 'AAA' },
        { a: 'FF', b: 'FF' },
        { a: 'ZZ', b: 'ZZ' },
        { a: 'AA', b: 'cc' },
        { a: 'CC', b: 'AAA' },
      ];

      expect(uniqBy(list, (a) => a.a)).toEqual([
        { a: 'AA', b: 'AAA' },
        { a: 'FF', b: 'FF' },
        { a: 'ZZ', b: 'ZZ' },
        { a: 'CC', b: 'AAA' },
      ]);
    });
  });

  describe('sortedUniqBy', () => {
    it('should sort and remove duplicates', () => {
      expect(sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)).toEqual([1.1, 2.3]);
    });
  });

  describe('groupBy', () => {
    it('should group by criteria', () => {
      const array = [
        { key: 'Address.anchorPostcodeFinder', value: 'Postcode lookup' },
        { key: 'Cookies.ariaLabel', value: 'Close this notification' },
        { key: 'Cookies.ariaLabel', value: 'Close this notification now' },
        {
          key: 'ContactDetails.telephoneInvalid',
          value: 'Enter a valid phone number',
        },
      ];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(groupBy(array, (row) => (row as any).key)).toEqual({
        'Address.anchorPostcodeFinder': [{ key: 'Address.anchorPostcodeFinder', value: 'Postcode lookup' }],
        'Cookies.ariaLabel': [
          { key: 'Cookies.ariaLabel', value: 'Close this notification' },
          { key: 'Cookies.ariaLabel', value: 'Close this notification now' },
        ],
        'ContactDetails.telephoneInvalid': [
          {
            key: 'ContactDetails.telephoneInvalid',
            value: 'Enter a valid phone number',
          },
        ],
      });
    });
  });
});
