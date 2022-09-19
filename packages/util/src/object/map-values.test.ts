import { describe, expect, it } from 'vitest';
import { mapValues } from './map-values';

describe('mapValues', () => {
  it('should mapValues', () => {
    const fruits = {
      apple: {
        name: 'apple',
        number: 5,
      },
      orange: {
        name: 'orange',
        number: 10,
      },
    };

    expect(mapValues(fruits, (a) => a.number)).toEqual({
      apple: 5,
      orange: 10,
    });
  });

  it('should map complex object', () => {
    const breakpoints = {
      mobile: 0,
      tablet: 740,
      desktop: 992,
    } as const;

    const result = mapValues(breakpoints, (bp) => (bp === 0 ? {} : { '@media': `screen and (min-width: ${bp}px)` }));

    expect(result).toEqual({
      mobile: {},
      desktop: { '@media': 'screen and (min-width: 992px)' },
      tablet: { '@media': 'screen and (min-width: 740px)' },
    });
  });
});
