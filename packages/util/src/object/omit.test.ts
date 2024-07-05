import { describe, expect, it } from 'vitest';

import { omit } from './omit';

describe('omit', () => {
  it('should omit object values by key', () => {
    const o = { a: 1, b: '2', c: 3 };

    expect(omit(o, 'a', 'c')).toEqual({ b: '2' });
  });

  it('should type correctly', () => {
    const a = {
      ['@media']: {
        right: 2,
      },
      left: 20,
    };

    expect(omit(a, '@media')).toEqual({ left: 20 });
  });

  it('should return an empty object for undefined', () => {
    expect(omit(undefined, '@media')).toEqual({});
  });
});
