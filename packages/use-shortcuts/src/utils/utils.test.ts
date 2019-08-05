import { isPlainObject, clearArray } from '.';

describe('isPlainObject', () => {
  it('should recognise object', () => {
    expect(isPlainObject({ foo: 'bar' })).toBe(true);
  });

  it('should not recognise string', () => {
    expect(isPlainObject('bar')).toBe(false);
  });

  it('should not recognise function', () => {
    expect(isPlainObject(() => undefined)).toBe(false);
  });

  it('should not recognise undefined', () => {
    expect(isPlainObject(undefined)).toBe(false);
  });

  it('should not recognise null', () => {
    expect(isPlainObject(null)).toBe(false);
  });
});

describe('clearArray', () => {
  it('should clear an array with items', () => {
    const a: number[] = [0, 1, 2, 3, 4];

    clearArray(a);

    expect(a).toHaveLength(0);
  });

  it('should not blow up with empty array', () => {
    const a: unknown[] = [];

    clearArray(a);

    expect(a).toHaveLength(0);
  });

  it('should not blow up with empty array', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clearArray(undefined as any);
  });
});
