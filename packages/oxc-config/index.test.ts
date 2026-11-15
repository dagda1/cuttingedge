import { describe, expect, it } from 'vitest';

import { lintFixture } from './oxlint-fixture';

function lintCodes(fileName: string, source: string): string[] {
  return lintFixture('eslint', fileName, source).map((diagnostic) => diagnostic.code);
}

function exportLines(count: number): string {
  return Array.from({ length: count }, (_unused, index) => `export const value${index} = ${index};\n`).join('');
}

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

  it('reports browser storage in a test file only', () => {
    const source = [
      "export const saved = localStorage.getItem('theme');",
      "export const kept = sessionStorage.getItem('theme');",
      '',
    ].join('\n');

    const storageCodes = lintCodes('theme.test.ts', source).filter((code) => code === 'cutting(no-browser-storage)');

    expect(storageCodes).toHaveLength(2);
    expect(lintCodes('theme.ts', source)).not.toContain('cutting(no-browser-storage)');
  });

  it('reports a test package import in app code only', () => {
    const source = "import { vi } from 'vitest';\n\nexport const timer = vi.fn();\n";

    expect(lintCodes('timer.ts', source)).toContain('cutting(no-test-code-imports)');
    expect(lintCodes('timer.test.ts', source)).not.toContain('cutting(no-test-code-imports)');
    expect(lintCodes('timer.stories.tsx', source)).not.toContain('cutting(no-test-code-imports)');
  });

  it('applies the sonar rules to app code only', () => {
    const source = 'export const pick = (first: boolean, second: boolean): number => (first ? (second ? 1 : 2) : 3);\n';

    expect(lintCodes('pick.ts', source)).toContain('sonarjs(no-nested-conditional)');
    expect(lintCodes('pick.test.ts', source)).not.toContain('sonarjs(no-nested-conditional)');
    expect(lintCodes('pick.stories.tsx', source)).not.toContain('sonarjs(no-nested-conditional)');
  });

  it('limits an app file to 200 lines', () => {
    expect(lintCodes('long.ts', exportLines(201))).toContain('eslint(max-lines)');
    expect(lintCodes('full.ts', exportLines(200))).not.toContain('eslint(max-lines)');
    expect(lintCodes('long.test.ts', exportLines(201))).not.toContain('eslint(max-lines)');
  });

  it('reports an empty block', () => {
    const source = ['export function run(): void {', '  if (Date.now() > 0) {', '  }', '}', ''].join('\n');

    expect(lintCodes('run.ts', source)).toContain('eslint(no-empty)');
  });

  it('reports a comment unless it is a lint or compiler directive', () => {
    const source = [
      '// adds one',
      'export const addOne = (value: number): number => value + 1;',
      '/* the total */',
      '// eslint-disable-next-line no-var',
      'export var total = 0;',
      '// oxlint-disable-next-line no-var',
      'export var count = 0;',
      '// @ts-expect-error the value is a string',
      'export const wrong: number = String(1);',
      '',
    ].join('\n');

    const commentCodes = lintCodes('add.ts', source).filter((code) => code === 'cutting(no-comments)');

    expect(commentCodes).toHaveLength(2);
  });

  it('does not report a dtslint assertion as a comment', () => {
    const source = '// $ExpectType number\nexport const one = 1;\n';

    expect(lintCodes('one.ts', source)).not.toContain('cutting(no-comments)');
  });

  it('does not report a shebang line as a comment', () => {
    const source = '#!/usr/bin/env node\nexport const exitCode = 0;\n';

    expect(lintCodes('cli.ts', source)).not.toContain('cutting(no-comments)');
  });
});
