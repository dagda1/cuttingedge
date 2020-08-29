import { flatten, flattenDeep } from './lists';

describe('flatten', () => {
  it('should flatten', () => {
    expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);
  });
});

describe('flattenDeep', () => {
  it('should flattten deep', () => {
    expect(flattenDeep(flattenDeep([1, [[2], [3, [4]], 5]]))).toEqual([1, 2, 3, 4, 5]);
  });
});
