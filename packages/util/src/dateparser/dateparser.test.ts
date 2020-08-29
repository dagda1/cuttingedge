import { dateParser } from '.';

const DateFormat = 'YYYY-MM-DD';

describe('dateparser', () => {
  it('should parse dates in strict mode', () => {
    expect(dateParser('2001-01-01', DateFormat, true).isValid()).toBe(true);

    expect(dateParser('2001-99-01', DateFormat, true).isValid()).toBe(false);
  });
});
