import { describe, expect, it } from 'vitest';

import { isAsyncFunction, isFunction, isPromise, noop } from './functions';

describe('functions', () => {
  it('should determine promises', async () => {
    expect(isPromise(noop)).toBe(false);

    expect(isPromise(new Promise(() => 1))).toBe(true);
  });

  it('should recognise functions', () => {
    expect(isFunction(() => ({}))).toBe(true);

    expect(isFunction(function () {})).toBe(true);

    expect(isFunction(async () => {})).toBe(true);

    expect(isFunction(function* () {})).toBe(true);
    expect(isFunction(Math.round)).toBe(true);
    expect(isFunction(new Date())).toBe(false);
    expect(isFunction(new (class {})())).toBe(false);
    expect(isFunction('class A {})')).toBe(false);
    expect(isFunction(class Any {})).toBe(true);
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
