import esbuild from 'esbuild';
import { paths } from '../config/paths';
import { consolidateBuildConfigs } from './consolidateBuildConfigs';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import { assert } from 'assert-ts';
import { safePackageName } from '../rollup/helpers';
import logger from './logger';
import { CommonOptions } from 'esbuild';
import path from 'path';

const buildConfig = consolidateBuildConfigs();

type ModuleFormat = Required<Pick<CommonOptions, 'format'>>['format'];

async function bundle({
  packageName,
  format,
  env,
}: {
  packageName: 'string';
  format: ModuleFormat;
  env: 'development' | 'production';
}): Promise<void> {
  assert(Array.isArray(buildConfig.client.entries), `build config entries needs to be a string array`);

  const pkgName = safePackageName(packageName);
  const extension = env === 'production' ? 'min.js' : 'js';
  const fileName = ['esm', 'umd'].includes(format) ? `${pkgName}.${format}.js` : `${pkgName}.cjs.${env}.${extension}`;
  const outputFileName = path.join(paths.appBuild, format, fileName);

  logger.info(`writing ${path.basename(outputFileName)} for ${packageName}`);

  await esbuild
    .build({
      entryPoints: buildConfig.client.entries,
      outfile: `dist/${safePackageName(packageName)}`,
      bundle: true,
      minify: env === 'production',
      platform: 'node',
      sourcemap: true,
      format,
      target: 'node14',
      treeShaking: true,
      jsx: 'preserve',
      logLevel: 'verbose',
      color: true,
      plugins: [
        nodeExternalsPlugin({
          packagePath: paths.appPackageJson,
        }),
      ],
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

const build = async () => {
  const { default: pkg } = await import(paths.appPackageJson);

  const packageName = pkg.name;

  const configs: { format: ModuleFormat; env: 'development' | 'production' }[] = [
    { format: 'cjs', env: 'production' },
    { format: 'esm', env: 'production' },
  ];

  logger.info(`Generating ${packageName} bundle.`);

  for (const { format, env } of configs) {
    await bundle({ packageName, format, env });
  }
};

build();
