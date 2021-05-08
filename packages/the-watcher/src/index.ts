import type { Task } from 'effection';
import program from 'commander';
import { watch } from 'chokidar';
import { findIO, isMonorepo } from './utils/io';
import { main } from '@effection/node';
import { onEmit, sleep } from 'effection';
import { buildAndRun } from './watch';
import { logger } from '@cutting/devtools/tools/scripts/logger';
import path from 'path';
import fs from 'fs';

export const hasPackageJson = async (p: string): Promise<boolean> => fs.existsSync(path.join(p, 'package.json'));

const cwd = process.cwd();

program
  .description('Watch for file changes, find the nearest package.json file and call build.')
  .helpOption('-h, --help', 'show help')
  .option(
    '-b, --build-command <b>',
    'the build command to run in the package that triggered the change.',
    'yarn run build',
  )
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .action((_) => {
    const { buildCommand } = program.opts();
    main(function* (scope) {
      const rootPackage = yield findIO(cwd, isMonorepo);

      logger.start(`using ${rootPackage} as repo root.`);

      const watcher = watch('./**/*.{ts,tsx,scss}', {
        ignoreInitial: true,
        ignored: ['**/dist/**', '**/node_modules/**', '**/*.d.ts'],
        cwd: rootPackage,
      });
      try {
        let proc: Task = scope.spawn(buildAndRun(buildCommand, cwd));

        proc.halt();
        yield onEmit<[string, string]>(watcher, 'all').forEach(function* ([, file]) {
          logger.debug(`triggered by ${path.dirname(file)}`);
          yield sleep(1000);

          const dir = path.dirname(path.join(rootPackage, file));
          const nearestPackage = yield findIO(dir, hasPackageJson);

          if (cwd === nearestPackage) {
            logger.debug(`in current cwd ${path.basename(cwd)} so skipping.`);
            return;
          }

          logger.debug(`
          ${path.basename(file)} changed
          
          calling ${buildCommand} in ${path.dirname(file)}`);

          proc = scope.spawn(buildAndRun(buildCommand, nearestPackage));
        });
      } finally {
        logger.done(`the watcher is switching off.  Over and out!`);
        watcher.close();
      }
    });
  })
  .parse(process.argv);
