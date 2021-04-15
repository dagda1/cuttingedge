import { padNumber, stripSpaces, capitalize } from './index';
import { expect, it, describe, test } from '@jest/globals';

describe('string', () => {
  it('capitalize - should have first char uppercase', () => {
    expect(capitalize('hi')).toBe('Hi');
    expect(capitalize('foo bar')).toBe('Foo bar');
  });

  test.each`
    subject             | expected | message
    ${null}             | ${''}    | ${'null should be empty string'}
    ${' a b c '}        | ${'abc'} | ${'remove leading spaces'}
    ${'  '}             | ${''}    | ${'strips to empty string'}
    ${'a  b  c       '} | ${'abc'} | ${'removes all kinds of sapces'}
    ${''}               | ${''}    | ${'can parse an empty string'}
  `('subject:$subject is $expected, //$message', ({ subject, expected }) => {
    expect(stripSpaces(subject)).toBe(expected);
  });

  it('should pad number', () => {
    expect(padNumber('1')).toBe('01');
  });

  it('should not pad number with two digits', () => {
    expect(padNumber('11')).toBe('11');
  });
});
