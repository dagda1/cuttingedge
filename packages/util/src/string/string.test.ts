import { padNumber, stripSpaces, capitalize } from './index';
import { expect, it, describe } from 'vitest';

describe('string', () => {
  it('capitalize - should have first char uppercase', () => {
    expect(capitalize('hi')).toBe('Hi');
    expect(capitalize('foo bar')).toBe('Foo bar');
  });

  test.each([
    [null, ''],
    [' a b c ', 'abc'],
    [null, ''],
    [' a b c ', 'abc'],
    ['  ', ''],
    ['a  b  c       ', 'abc'],
    ['', ''],
  ])('stripSpaces(%s) -> %s', (a: any, expected) => {
    expect(stripSpaces(a)).toBe(expected);
  });

  it('should pad number', () => {
    expect(padNumber('1')).toBe('01');
  });

  it('should not pad number with two digits', () => {
    expect(padNumber('11')).toBe('11');
  });
});
