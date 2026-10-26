import { describe, expect, it } from 'vitest';

import { lintFixture } from './oxlint-fixture';

describe('@cutting/oxc-config/react', () => {
  it('checks hook dependencies in useIsomorphicLayoutEffect', () => {
    const source = [
      "import { useState } from 'react';",
      '',
      "import { useIsomorphicLayoutEffect } from './hooks';",
      '',
      'export function Counter(): null {',
      '  const [count] = useState(0);',
      '',
      '  useIsomorphicLayoutEffect(() => {',
      '    console.log(count);',
      '  }, []);',
      '',
      '  return null;',
      '}',
      '',
    ].join('\n');

    const diagnostics = lintFixture('react', 'Counter.tsx', source);

    expect(diagnostics).toContainEqual(
      expect.objectContaining({
        code: 'react-hooks(exhaustive-deps)',
        message: expect.stringContaining("missing dependency: 'count'"),
      }),
    );
  });
});
