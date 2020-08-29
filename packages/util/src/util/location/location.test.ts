import { origin } from './origin';

describe('location utility', () => {
  it('should find the cross browser origin url', () => {
    expect(origin()).toBe('http://localhost');
  });
});
