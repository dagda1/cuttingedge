import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

const line120 =
  'export const result = someFunctionName(firstArgumentValue, secondArgumentValue, thirdArgumentValue, xxxxxxxxxxxxxxxxxx);\n';
const line121 =
  'export const result = someFunctionName(firstArgumentValue, secondArgumentValue, thirdArgumentValue, xxxxxxxxxxxxxxxxxxx);\n';
const line140 =
  'export const result = someFunctionName(firstArgumentValue, secondArgumentValue, thirdArgumentValue, xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx);\n';
const line141 =
  'export const result = someFunctionName(firstArgumentValue, secondArgumentValue, thirdArgumentValue, xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx);\n';

function formatFixture(fileName: string, source: string): string {
  const fixtureDir = mkdtempSync(join(import.meta.dirname, '.fixture-'));
  const configPath = join(fixtureDir, 'oxfmt.config.ts');

  try {
    writeFileSync(configPath, "import config from '@cutting/oxc-config/oxfmt';\n\nexport default config;\n");

    const result = spawnSync('oxfmt', ['-c', configPath, '--stdin-filepath', join(fixtureDir, fileName)], {
      input: source,
      encoding: 'utf8',
    });

    if (result.error) {
      throw result.error;
    }

    if (result.status !== 0) {
      throw new Error(`oxfmt exited with status ${result.status} for ${fileName}: ${result.stderr}`);
    }

    return result.stdout;
  } finally {
    rmSync(fixtureDir, { recursive: true, force: true });
  }
}

describe('@cutting/oxc-config/oxfmt', () => {
  it('wraps .ts files at 120 columns with trailing commas', () => {
    expect(formatFixture('fits.ts', line120)).toBe(line120);
    expect(formatFixture('wraps.ts', line121)).toBe(
      [
        'export const result = someFunctionName(',
        '  firstArgumentValue,',
        '  secondArgumentValue,',
        '  thirdArgumentValue,',
        '  xxxxxxxxxxxxxxxxxxx,',
        ');',
        '',
      ].join('\n'),
    );
  });

  it('wraps .js files at 140 columns without trailing commas', () => {
    expect(formatFixture('fits.js', line140)).toBe(line140);
    expect(formatFixture('wraps.js', line141)).toBe(
      [
        'export const result = someFunctionName(',
        '  firstArgumentValue,',
        '  secondArgumentValue,',
        '  thirdArgumentValue,',
        '  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        ');',
        '',
      ].join('\n'),
    );
  });
});
