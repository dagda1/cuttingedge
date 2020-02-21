import { isTest } from '.';

describe('environment', () => {
  it('should be isTest', () => {
    expect(isTest).toBe(true);
  });
});
