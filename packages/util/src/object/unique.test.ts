import { describe, expect, it } from 'vitest';

import { unique } from './unique';

describe('unique', () => {
  it('is unique', () => {
    expect(unique([1, 1, 1, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
