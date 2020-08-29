import { AssertionError } from './AssertionError';

describe('AssertionError', () => {
  it('should instantiate error', () => {
    const error = new AssertionError('blah');

    expect(error).toBeInstanceOf(AssertionError);
    expect(error.message).toBe('blah');
  });
});
