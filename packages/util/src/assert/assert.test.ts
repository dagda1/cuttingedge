import { assert } from './assert';

describe('assert', () => {
  it('should throw AssertionError if condition is not met', () => {
    expect(() => assert(false, 'houston we have a problem')).toThrow(
      'houston we have a problem',
    );
  });

  it('should not throw if conditino is good', () => {
    expect(assert(true)).toBeUndefined();
  });
});
