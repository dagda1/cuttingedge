import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export interface Diagnostic {
  code: string;
  message: string;
}

export function lintFixture(configExport: 'eslint' | 'react', fileName: string, source: string): Diagnostic[] {
  const fixtureDir = mkdtempSync(join(import.meta.dirname, '.fixture-'));
  const configPath = join(fixtureDir, 'oxlint.config.ts');
  const filePath = join(fixtureDir, fileName);

  try {
    writeFileSync(
      configPath,
      `import config from '@cutting/eslint-config/${configExport}';\n\nexport default config;\n`,
    );
    writeFileSync(filePath, source);

    const result = spawnSync('oxlint', ['-c', configPath, '--format', 'json', filePath], { encoding: 'utf8' });

    if (result.error) {
      throw result.error;
    }

    if (result.status !== 0 && result.status !== 1) {
      throw new Error(`oxlint exited with status ${result.status} for ${fileName}: ${result.stderr}`);
    }

    return JSON.parse(result.stdout).diagnostics;
  } finally {
    rmSync(fixtureDir, { recursive: true, force: true });
  }
}
