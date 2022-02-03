import { combinations } from './combinations';
import { describe, expect, it } from '@jest/globals';

const arr = ['red', 'orange', 'yellow', 'green'];

const sort = (s: string[][]) =>
  s
    .map((c) => c.sort((a, b) => a.localeCompare(b)))
    .sort((a, b) => {
      const initial = a.length - b.length;
      if (initial === 0) {
        return a?.[0]?.localeCompare(b?.[0]);
      } else {
        return initial;
      }
    });

describe('combinations', () => {
  it('should generate all combinations', () => {
    const result = sort(Array.from(combinations(arr)));
    const expected = sort([
      ['red'],
      ['orange'],
      ['yellow'],
      ['green'],
      ['red', 'orange'],
      ['red', 'yellow'],
      ['red', 'green'],
      ['orange', 'yellow'],
      ['orange', 'green'],
      ['yellow', 'green'],
      ['red', 'orange', 'yellow'],
      ['red', 'orange', 'green'],
      ['red', 'yellow', 'green'],
      ['orange', 'yellow', 'green'],
      ['red', 'orange', 'yellow', 'green'],
    ]);

    expect(result).toEqual(expected);
  });
});
