import { describe, expect, it } from 'vitest';

import { safePackageName } from './safePackageName.js';

describe('safePackageName', () => {
  it('drops the scope of a scoped package', () => {
    expect(safePackageName('@cutting/devtools')).toBe('devtools');
  });

  it('lower-cases the name and drops characters a file name cannot hold', () => {
    expect(safePackageName('@scope/My Package!')).toBe('mypackage');
  });

  it('drops leading characters that are not letters when there is no scope', () => {
    expect(safePackageName('123-tool')).toBe('tool');
  });

  it('keeps leading digits after a scope', () => {
    expect(safePackageName('@scope/1tool')).toBe('1tool');
  });

  it('drops trailing characters that are not letters or digits', () => {
    expect(safePackageName('tool.js-')).toBe('tool.js');
  });
});
