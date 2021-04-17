// import type { Task } from 'effection';
import program from 'commander';
import { watch } from 'chokidar';
import { findIO, isMonorepo } from './utils/get-root-package';
import { main } from '@effection/node';
import { on } from 'effection';
// import { buildAndRun } from './watch';
import { logger } from '@cutting/devtools/tools/scripts/logger';
import path from 'path';
import fs from 'fs';

export const hasPackageJson = (cwd: string): boolean => fs.existsSync(path.join(cwd, 'package.json'));

program
  .description('Start and watch some scripts based on something')
  .helpOption('-h, --help', 'show help')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .action((_, options = []) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    main(function* (scope) {
      const rootPackage = yield findIO(process.cwd(), isMonorepo);

      logger.start(`using ${rootPackage} as repo root.`);

      const watcher = watch('./**/*.{ts,tsx}', { ignoreInitial: true, ignored: ['dist', 'node_modules'] });
      try {
        // const process: Task = scope.spawn(buildAndRun(500));

        yield on(watcher, 'all').forEach(function (...args) {
          console.dir(args);
          // const nearestPkg = yield findIO();
          console.log('building.....');
          // process.halt();
          // process = scope.spawn(buildAndRun(500));
        });
      } finally {
        watcher.close();
      }
    });
  });

program.parse(process.argv);
