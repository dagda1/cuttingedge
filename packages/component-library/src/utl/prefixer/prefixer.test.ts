import { prefixId } from '.';

describe('prpefixer', () => {
  it('prefixes with no args', () => {
    const result = prefixId();

    expect(/^ctrl\d+/.test(result)).toBe(true);
  });

  it('should prefix custom label', () => {
    const result = prefixId('label');

    expect(/^label\d+/.test(result)).toBe(true);
  });
});
