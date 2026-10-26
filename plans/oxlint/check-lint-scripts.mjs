import { existsSync, readdirSync, readFileSync } from 'node:fs';

const wrongScripts = [];

for (const folder of ['apps', 'packages']) {
  for (const name of readdirSync(folder)) {
    const manifestPath = `${folder}/${name}/package.json`;

    if (!existsSync(manifestPath)) {
      continue;
    }

    const scripts = JSON.parse(readFileSync(manifestPath, 'utf8')).scripts ?? {};

    if (!('lint' in scripts) && !('lint:fix' in scripts)) {
      continue;
    }

    const targets = folder === 'apps' ? './src ./server.mts' : './src';
    const expected = `oxlint ${targets} --fix && oxfmt ${targets}`;

    if (scripts.lint !== expected || 'lint:fix' in scripts) {
      wrongScripts.push(`${manifestPath}: lint is "${scripts.lint}", lint:fix is "${scripts['lint:fix']}", expected lint "${expected}" and no lint:fix`);
    }
  }
}

if (wrongScripts.length > 0) {
  console.error(wrongScripts.join('\n'));
  process.exit(1);
}
