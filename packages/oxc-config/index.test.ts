import { describe, expect, it } from 'vitest';

import { lintFixture } from './oxlint-fixture';

describe('@cutting/oxc-config/eslint', () => {
  it('sorts imports', () => {
    const source = "import { b } from './b';\nimport { a } from './a';\n\nexport const sum = a + b;\n";

    const diagnostics = lintFixture('eslint', 'sorting.ts', source);

    expect(diagnostics.map((diagnostic) => diagnostic.code)).toContain('simple-import-sort(imports)');
  });

  it('reports unused variables unless they start with an underscore', () => {
    const source = [
      'export function add(_first: number, second: number): number {',
      '  const _skipped = 1;',
      '  const unused = 2;',
      '',
      '  return 0;',
      '}',
      '',
    ].join('\n');

    const diagnostics = lintFixture('eslint', 'unused.ts', source);

    const unusedNames = diagnostics
      .filter((diagnostic) => diagnostic.code === 'eslint(no-unused-vars)')
      .map((diagnostic) => diagnostic.message.match(/'(\w+)'/)?.[1]);

    expect(unusedNames.sort()).toEqual(['second', 'unused']);
  });
});
