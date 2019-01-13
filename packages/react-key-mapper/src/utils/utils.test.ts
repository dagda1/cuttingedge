import { isPlainObject } from '.';

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
