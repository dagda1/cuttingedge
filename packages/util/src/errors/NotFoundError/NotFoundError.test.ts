import { describe, expect, it } from 'vitest';

import { NotFoundError } from './NotFoundError';

describe('NotFoundError', () => {
  it('should instantiate error', () => {
    const error = new NotFoundError('blah');

    expect(error).toBeInstanceOf(NotFoundError);
    expect(error.message).toBe('blah');
  });
});
