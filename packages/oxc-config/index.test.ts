import { beforeAll, describe, expect, it } from 'vitest';

import type { DiagnosticsByFile } from './oxlint-fixture';
import { lintFixtures } from './oxlint-fixture';

function exportLines(count: number): string {
  return Array.from({ length: count }, (_unused, index) => `export const value${index} = ${index};\n`).join('');
}

const storageSource = [
  "export const saved = localStorage.getItem('theme');",
  "export const kept = sessionStorage.getItem('theme');",
  '',
].join('\n');

const testImportSource = "import { vi } from 'vitest';\n\nexport const timer = vi.fn();\n";

const nestedConditionalSource =
  'export const pick = (first: boolean, second: boolean): number => (first ? (second ? 1 : 2) : 3);\n';

const sources = {
  'sorting.ts': "import { b } from './b';\nimport { a } from './a';\n\nexport const sum = a + b;\n",
  'unused.ts': [
    'export function add(_first: number, second: number): number {',
    '  const _skipped = 1;',
    '  const unused = 2;',
    '',
    '  return 0;',
    '}',
    '',
  ].join('\n'),
  'theme.test.ts': storageSource,
  'theme.ts': storageSource,
  'timer.ts': testImportSource,
  'timer.test.ts': testImportSource,
  'timer.stories.tsx': testImportSource,
  'pick.ts': nestedConditionalSource,
  'pick.test.ts': nestedConditionalSource,
  'pick.stories.tsx': nestedConditionalSource,
  'long.ts': exportLines(201),
  'full.ts': exportLines(200),
  'long.test.ts': exportLines(201),
  'run.ts': ['export function run(): void {', '  if (Date.now() > 0) {', '  }', '}', ''].join('\n'),
  'add.ts': [
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
  ].join('\n'),
  'one.ts': '// $ExpectType number\nexport const one = 1;\n',
  'cli.ts': '#!/usr/bin/env node\nexport const exitCode = 0;\n',
};

describe('@cutting/oxc-config/eslint', () => {
  let diagnosticsFor: DiagnosticsByFile;

  function lintCodes(fileName: keyof typeof sources): string[] {
    return diagnosticsFor(fileName).map((diagnostic) => diagnostic.code);
  }

  beforeAll(() => {
    diagnosticsFor = lintFixtures('eslint', sources);
  });

  it('sorts imports', () => {
    expect(lintCodes('sorting.ts')).toContain('simple-import-sort(imports)');
  });

  it('reports unused variables unless they start with an underscore', () => {
    const unusedNames = diagnosticsFor('unused.ts')
      .filter((diagnostic) => diagnostic.code === 'eslint(no-unused-vars)')
      .map((diagnostic) => diagnostic.message.match(/'(\w+)'/)?.[1]);

    expect(unusedNames.sort()).toEqual(['second', 'unused']);
  });

  it('reports browser storage in a test file only', () => {
    const storageCodes = lintCodes('theme.test.ts').filter((code) => code === 'cutting(no-browser-storage)');

    expect(storageCodes).toHaveLength(2);
    expect(lintCodes('theme.ts')).not.toContain('cutting(no-browser-storage)');
  });

  it('reports a test package import in app code only', () => {
    expect(lintCodes('timer.ts')).toContain('cutting(no-test-code-imports)');
    expect(lintCodes('timer.test.ts')).not.toContain('cutting(no-test-code-imports)');
    expect(lintCodes('timer.stories.tsx')).not.toContain('cutting(no-test-code-imports)');
  });

  it('applies the sonar rules to app code only', () => {
    expect(lintCodes('pick.ts')).toContain('sonarjs(no-nested-conditional)');
    expect(lintCodes('pick.test.ts')).not.toContain('sonarjs(no-nested-conditional)');
    expect(lintCodes('pick.stories.tsx')).not.toContain('sonarjs(no-nested-conditional)');
  });

  it('limits an app file to 200 lines', () => {
    expect(lintCodes('long.ts')).toContain('eslint(max-lines)');
    expect(lintCodes('full.ts')).not.toContain('eslint(max-lines)');
    expect(lintCodes('long.test.ts')).not.toContain('eslint(max-lines)');
  });

  it('reports an empty block', () => {
    expect(lintCodes('run.ts')).toContain('eslint(no-empty)');
  });

  it('reports a comment unless it is a lint or compiler directive', () => {
    const commentCodes = lintCodes('add.ts').filter((code) => code === 'cutting(no-comments)');

    expect(commentCodes).toHaveLength(2);
  });

  it('does not report a dtslint assertion as a comment', () => {
    expect(lintCodes('one.ts')).not.toContain('cutting(no-comments)');
  });

  it('does not report a shebang line as a comment', () => {
    expect(lintCodes('cli.ts')).not.toContain('cutting(no-comments)');
  });
});
