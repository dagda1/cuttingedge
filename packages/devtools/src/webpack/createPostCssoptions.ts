import { paths } from '../config/paths';
import path from 'path';
import globby from 'globby';
import purgeCss from '@fullhuman/postcss-purgecss';
import { findAppNodeModules } from '../scripts/utils/finders';

const FileGlobPattern = '/**/*.{js,tsx}';

const repoNodeModules = findAppNodeModules(__dirname);

const dsDir = path.join(repoNodeModules, '@cutting/component-library/dist');

export const createPostCssOptions = (): {
  ident: string;
  syntax: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: () => any[];
  sourceMap: boolean;
} => ({
  ident: 'postcss',
  syntax: 'postcss-scss',
  plugins: () =>
    [
      require('postcss-flexbugs-fixes'),
      require('postcss-preset-env')({
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
      }),
      purgeCss({
        content: [
          paths.appHtml,
          ...globby.sync([path.join(paths.appSrc, FileGlobPattern), path.join(path.resolve(dsDir), FileGlobPattern)], {
            onlyFiles: true,
            ignore: ['**/csg-pvg-online', '**/applicant-pvg-online', '**/*.test.*'],
          }),
        ],
        whitelistPatterns: [/^:global/],
      }),
      require('postcss-normalize'),
    ].filter(Boolean),
  sourceMap: true,
});
