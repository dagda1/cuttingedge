import {
  getLast,
  padNumber,
  stripSpaces,
  stripSpacesFromObject,
  trimAndReplaceEmptyWithNull,
  trimObject,
  capitalize,
} from '.';

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

  it('should trim all fields of an object', () => {
    const o = {
      a: '  1',
      b: 2,
      c: '  3   ',
      d: undefined,
      e: ['  a  ', '  b  '],
      f: {
        g: ' k ',
      },
    };

    expect(trimObject(o)).toEqual({
      a: '1',
      b: 2,
      c: '3',
      d: undefined,
      e: ['a', 'b'],
      f: {
        g: 'k',
      },
    });
  });

  it('should strip spaces from all fields of an object', () => {
    const o = {
      a: '  1  2',
      b: 2,
      c: '  3  5 ',
      d: undefined,
      e: ['  a  b  ', '  c d  '],
      f: {
        g: ' K L F ',
      },
    };

    expect(stripSpacesFromObject(o)).toEqual({
      a: '12',
      b: 2,
      c: '35',
      d: undefined,
      e: ['ab', 'cd'],
      f: {
        g: 'KLF',
      },
    });
  });

  it('should get last split part', () => {
    expect(getLast('/one/two/three', '/')).toBe('three');
  });

  it('should replaces empty spaces with null', () => {
    const o = {
      a: '  1  2',
      b: 2,
      c: '   ',
      d: 'Some text',
      e: ['  a  b  ', '  c d  ', ''],
      f: {
        g: '  ',
        h: '',
      },
    };

    const result = trimAndReplaceEmptyWithNull(o);

    expect(result).toEqual({
      a: '1  2',
      b: 2,
      c: null,
      d: 'Some text',
      e: ['a  b', 'c d', null],
      f: {
        g: null,
        h: null,
      },
    });
  });

  it('should work with a string', () => {
    expect(trimAndReplaceEmptyWithNull('aaa  ')).toEqual('aaa');
  });

  it('should work for arrays', () => {
    expect(trimAndReplaceEmptyWithNull([{ forename: 'aa', surname: 'ff' }])).toEqual([
      { forename: 'aa', surname: 'ff' },
    ]);
  });
});
