import { noop, thenable, isAsyncFunction } from './functions';

describe('functions', () => {
  it('should determine promises', async () => {
    expect(thenable(noop)).toBe(false);

    expect(thenable(new Promise(() => 1))).toBe(true);
  });

  it('should determine async functions', () => {
    expect(isAsyncFunction(noop)).toBe(false);

    const asyncFn = async () => {
      await Promise.resolve(42);
    };

    expect(isAsyncFunction(asyncFn)).toBe(true);

    const voidAsyncFn = async () => 42;

    expect(isAsyncFunction(voidAsyncFn)).toBe(true);

    expect(isAsyncFunction(() => Promise.resolve(42))).toBe(false);
  });
});
