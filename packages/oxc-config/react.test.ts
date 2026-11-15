import { beforeAll, describe, expect, it } from 'vitest';

import type { DiagnosticsByFile } from './oxlint-fixture';
import { lintFixtures } from './oxlint-fixture';

const sources = {
  'Counter.tsx': [
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
  ].join('\n'),
  'handle.ts': [
    'export function handle(event: React.MouseEvent): string {',
    '  return React.version + event.type;',
    '}',
    '',
  ].join('\n'),
  'Rows.tsx': [
    'export function Rows(): JSX.Element {',
    '  return <React.Fragment>rows</React.Fragment>;',
    '}',
    '',
  ].join('\n'),
  'rendered.ts': "import type { JSX } from 'react';\n\nexport type Rendered = JSX.Element;\n",
  'Button.stories.tsx': "export const Primary = { args: { label: 'Save' } };\n",
};

describe('@cutting/oxc-config/react', () => {
  let diagnosticsFor: DiagnosticsByFile;

  function lintCodes(fileName: keyof typeof sources): string[] {
    return diagnosticsFor(fileName).map((diagnostic) => diagnostic.code);
  }

  beforeAll(() => {
    diagnosticsFor = lintFixtures('react', sources);
  });

  it('checks hook dependencies in useIsomorphicLayoutEffect', () => {
    expect(diagnosticsFor('Counter.tsx')).toContainEqual(
      expect.objectContaining({
        code: 'react-hooks(exhaustive-deps)',
        message: expect.stringContaining("missing dependency: 'count'"),
      }),
    );
  });

  it('reports the React namespace in values and in types', () => {
    const codes = lintCodes('handle.ts');

    expect(codes).toContain('cutting(no-react-namespace)');
    expect(codes).toContain('cutting(no-react-namespace-types)');
  });

  it('reports the React namespace in a JSX tag', () => {
    expect(lintCodes('Rows.tsx')).toContain('cutting(no-react-namespace)');
  });

  it('reports a JSX import from react', () => {
    expect(diagnosticsFor('rendered.ts')).toContainEqual(
      expect.objectContaining({
        code: 'eslint(no-restricted-imports)',
        message: expect.stringContaining("'JSX' import from 'react'"),
      }),
    );
  });

  it('applies the storybook rules to a story file', () => {
    expect(lintCodes('Button.stories.tsx')).toContain('storybook(default-exports)');
  });
});
