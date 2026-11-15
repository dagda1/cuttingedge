import { describe, expect, it } from 'vitest';

import { lintFixture } from './oxlint-fixture';

function lintCodes(fileName: string, source: string): string[] {
  return lintFixture('react', fileName, source).map((diagnostic) => diagnostic.code);
}

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

  it('reports the React namespace in values and in types', () => {
    const source = [
      'export function handle(event: React.MouseEvent): string {',
      '  return React.version + event.type;',
      '}',
      '',
    ].join('\n');

    const codes = lintCodes('handle.ts', source);

    expect(codes).toContain('cutting(no-react-namespace)');
    expect(codes).toContain('cutting(no-react-namespace-types)');
  });

  it('reports a JSX import from react', () => {
    const source = "import type { JSX } from 'react';\n\nexport type Rendered = JSX.Element;\n";

    const diagnostics = lintFixture('react', 'rendered.ts', source);

    expect(diagnostics).toContainEqual(
      expect.objectContaining({
        code: 'eslint(no-restricted-imports)',
        message: expect.stringContaining("'JSX' import from 'react'"),
      }),
    );
  });

  it('applies the storybook rules to a story file', () => {
    const source = "export const Primary = { args: { label: 'Save' } };\n";

    expect(lintCodes('Button.stories.tsx', source)).toContain('storybook(default-exports)');
  });
});
