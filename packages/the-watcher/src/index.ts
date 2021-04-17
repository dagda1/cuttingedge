import type { Task } from 'effection';
import program from 'commander';
import { watch } from 'chokidar';
import { findIO, isMonorepo } from './utils/io';
import { main } from '@effection/node';
import { onEmit } from 'effection';
import { buildAndRun } from './watch';
import { logger } from '@cutting/devtools/tools/scripts/logger';
import path from 'path';
import fs from 'fs';

export const hasPackageJson = async (p: string): Promise<boolean> => fs.existsSync(path.join(p, 'package.json'));

const cwd = process.cwd();

logger.info('hoors');

program
  .description('Watch for file changes, find the nearest package.json file and call build.')
  .helpOption('-h, --help', 'show help')
  .option('-w, --watch-command <w>', 'the command to run of the client package', 'yarn start')
  .option(
    '-b, --build-command <b>',
    'the build command to run in the package that triggered the change.',
    'yarn run build',
  )
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .action((_) => {
    const { watchCommand, buildCommand } = program.opts();
    console.dir({ watchCommand, buildCommand });
    main(function* (scope) {
      const rootPackage = yield findIO(cwd, isMonorepo);

      logger.start(`using ${rootPackage} as repo root.`);

      const watcher = watch('./**/*.{ts,tsx}', {
        ignoreInitial: true,
        ignored: ['**/dist/**', '**/node_modules/**', '**/*.d.ts'],
        cwd: rootPackage,
      });
      try {
        let proc: Task = scope.spawn(buildAndRun(watchCommand, buildCommand, cwd));

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        yield onEmit<[string, string]>(watcher, 'all').forEach(async function ([_, file]) {
          const dir = path.dirname(path.join(rootPackage, file));
          const nearestPackage = await findIO(dir, hasPackageJson);

          proc.halt();
          logger.debug(`
${file} changed
calling build in ${path.dirname(file)}`);
          proc = scope.spawn(buildAndRun(watchCommand, buildCommand, nearestPackage));
        });
      } finally {
        logger.done(`the watcher is switching off.  Over and out!`);
        watcher.close();
      }
    });
  })
  .parse(process.argv);
