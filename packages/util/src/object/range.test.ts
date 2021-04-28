import { expect, it, describe } from '@jest/globals';
import { range } from './range';
import { identity } from './identity';

describe('range', () => {
  it('creates a range iterator with start and end arguments', () => {
    const iterator = range(0, 360, 30);

    const r = Array.from(iterator).map(identity);

    expect(r).toEqual([0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360]);
  });

  it('only needs a start value', () => {
    const iterator = range(3);

    const r = Array.from(iterator).map(identity);

    expect(r).toEqual([0, 1, 2, 3]);
  });
});
