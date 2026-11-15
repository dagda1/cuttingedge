import { describe, expect, it } from 'vitest';

import { trimSlashes } from './trimSlashes.js';

describe('trimSlashes', () => {
  it('removes the slashes at both ends and keeps the ones inside', () => {
    expect(trimSlashes('//blog/first-post/')).toBe('blog/first-post');
  });

  it('returns an empty string for a path of slashes only', () => {
    expect(trimSlashes('///')).toBe('');
  });

  it('leaves a path with no outer slashes as it is', () => {
    expect(trimSlashes('about')).toBe('about');
  });
});
