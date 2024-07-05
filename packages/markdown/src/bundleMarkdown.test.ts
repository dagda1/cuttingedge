import { join } from 'path';
import { describe, expect, it } from 'vitest';

import { bundleMarkdown } from './bundleMarkdown';

describe('bundleMarkdown', () => {
  it('should bundle markdown', async () => {
    const testPath = join(process.cwd(), 'test.md');

    const { code } = await bundleMarkdown(testPath);

    expect(typeof code === 'string').toBe(true);
  }, 70000);
});
