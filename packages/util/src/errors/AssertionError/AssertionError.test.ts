import { AssertionError } from '.';

describe('AssertionError', () => {
  it('should instantiate error', () => {
    const error = new AssertionError('blah');

    expect(error.message).toBe('blah');
  });
});
