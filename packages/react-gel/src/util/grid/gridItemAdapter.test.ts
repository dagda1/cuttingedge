import { gridItemAdapter } from '.';

describe('gridItemAdapter', () => {
  test('creates grid item classes', () => {
    expect(gridItemAdapter({ w: '1/1' })).toBe('gel-1/1');
    expect(gridItemAdapter({ s: '1/2' })).toBe('gel-1/2@s');
    expect(gridItemAdapter({ m: '5/8' })).toBe('gel-5/8@m');
    expect(gridItemAdapter({ l: '11/12' })).toBe('gel-11/12@l');
    expect(gridItemAdapter({ xl: '3/4' })).toBe('gel-3/4@xl');
  });
});
