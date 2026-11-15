import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';

export interface Diagnostic {
  code: string;
  message: string;
  filename: string;
}

const oxlintPath = join(import.meta.dirname, 'node_modules', '.bin', 'oxlint');

export type DiagnosticsByFile = (fileName: string) => Diagnostic[];

export function lintFixtures(configExport: 'eslint' | 'react', sources: Record<string, string>): DiagnosticsByFile {
  const fixtureDir = mkdtempSync(join(import.meta.dirname, '.fixture-'));
  const configPath = join(fixtureDir, 'oxlint.config.ts');
  const fileNames = Object.keys(sources);
  const filePaths = fileNames.map((fileName) => join(fixtureDir, fileName));

  try {
    writeFileSync(configPath, `import config from '@cutting/oxc-config/${configExport}';\n\nexport default config;\n`);
    fileNames.forEach((fileName) => writeFileSync(join(fixtureDir, fileName), sources[fileName]));

    const result = spawnSync(oxlintPath, ['-c', configPath, '--format', 'json', ...filePaths], { encoding: 'utf8' });

    if (result.error) {
      throw result.error;
    }

    if (result.status !== 0 && result.status !== 1) {
      throw new Error(`oxlint exited with status ${result.status} for ${configExport}: ${result.stderr}`);
    }

    const diagnostics: Diagnostic[] = JSON.parse(result.stdout).diagnostics;

    return (fileName) => {
      if (!fileNames.includes(fileName)) {
        throw new Error(`${fileName} is not one of the linted fixtures: ${fileNames.join(', ')}`);
      }

      return diagnostics.filter((diagnostic) => basename(diagnostic.filename) === fileName);
    };
  } finally {
    rmSync(fixtureDir, { recursive: true, force: true });
  }
}
