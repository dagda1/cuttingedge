import { configure } from '@cutting/devtools/tools/webpack/client';
import path from 'path';
import fs from 'fs-extra';
import webpack from 'webpack';
import { assert } from 'assert-ts';
import WebpackDevServer from 'webpack-dev-server';
import ora from 'ora';
import globby from 'globby';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { globalSetup, globalTeardown } from 'jest-playwright-preset';
import type { Config as JestConfig } from '@jest/types';

const cwd = process.cwd();
const entryFilesDir = path.join(cwd, 'webpack');
const publicDir = path.join(cwd, 'public');

let server: WebpackDevServer;

export const setup = async (jestConfig: JestConfig.GlobalConfig): Promise<void> => {
  assert(fs.existsSync(publicDir), `${publicDir} does not exist`);

  const PORT = Number(process.env.PORT) || 1122;

  try {
    const testFiles = await globby(`${cwd}/**/*.browser.(ts|tsx)`);

    assert(testFiles.length > 0, `no test files found in ${cwd}`);

    const config = configure({
      entries: [
        path.join(entryFilesDir, 'add-jest-to-window'),
        ...testFiles,
        path.join(entryFilesDir, 'ready-browser'),
      ],
      isStaticBuild: true,
      publicDir,
      devServer: true,
    });

    const spinner = ora({ color: 'yellow', stream: process.stdout });

    const compiler = webpack(config);

    const compilerHooks = new Promise((resolve, reject) => {
      compiler.hooks.watchRun.tapAsync('@bigtest/playright', (_, callback) => {
        spinner.start('Waiting for webpack build to succeed...');
        callback();
      });

      compiler.hooks.done.tapAsync('@bigtest/playright', (stats, callback) => {
        if (stats.hasErrors()) {
          spinner.fail('Webpack build failed');
          reject(stats);
        } else {
          spinner.succeed('Webpack build finished');
          resolve(stats);
        }
        callback();
      });
    });

    server = new WebpackDevServer(compiler, {
      noInfo: true,
      disableHostCheck: true,
      stats: 'minimal',
      ...(config.devServer || {}),
    });

    console.debug(`starting webpack-dev-server on port ${PORT}`);
    server.listen(PORT);

    try {
      await compilerHooks;
    } catch (e) {
      return;
    }

    await globalSetup(jestConfig);
  } catch (err) {
    if (err) {
      console.error(err);
    }
    process.exit(1);
  }
};

export const teardown = async (jestConfig: JestConfig.GlobalConfig): Promise<void> => {
  try {
    server?.close();
    await globalTeardown(jestConfig);
  } catch (err) {
    console.error(err);

    process.exit(1);
  }
};
