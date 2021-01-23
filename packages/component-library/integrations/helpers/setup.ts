import { configure } from '@cutting/devtools/tools/webpack/client';
import path from 'path';
import fs from 'fs-extra';
import webpack from 'webpack';
import { assert } from 'assert-ts';
import WebpackDevServer from 'webpack-dev-server';
import ora from 'ora';
import { run } from './run';

const PORT = Number(process.env.PORT) || 1122;

const cwd = path.join(process.cwd(), 'integrations');

const publicDir = path.join(cwd, 'public');

const setup = async (): Promise<void> => {
  try {
    assert(fs.existsSync(publicDir), `${publicDir} does not exist`);
    const config = configure({ entries: [''], isStaticBuild: true, publicDir, devServer: true });

    const spinner = ora({ color: 'yellow', stream: process.stdout });

    const compiler = webpack(config);

    const compilerHooks = new Promise((resolve, reject) => {
      compiler.hooks.watchRun.tapAsync('jest-puppeeter-react', (_, callback) => {
        spinner.start('Waiting for webpack build to succeed...');
        callback();
      });
      compiler.hooks.done.tapAsync('jest-puppeeter-react', (stats, callback) => {
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

    const server = new WebpackDevServer(compiler, {
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

    await run();
  } catch (err) {
    if (err) {
      console.error(err);
    }
    process.exit(1);
  }
};

setup();
