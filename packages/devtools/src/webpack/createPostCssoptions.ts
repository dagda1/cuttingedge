import kebabCase from 'lodash/kebabCase';
import { paths } from '../config/paths';
import fs from 'fs';
import { assert } from 'assert-ts';

assert(fs.existsSync(paths.tailwindcssConfig), `no tailwindcss at ${paths.tailwindcssConfig}`);

export class TailwindExtractor {
  static extract(content: string): string[] {
    const matches = content.match(/[A-Za-z0-9-_:/]+/g) || [];
    const kebab = matches.map((m) => kebabCase(m));
    return matches.concat(kebab).filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  }
}

export const createPostCssOptions = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isProduction,
}: {
  isProduction: boolean;
}): {
  sourceMap: boolean;
  postcssOptions: {
    parser: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: any[];
  };
} => ({
  sourceMap: true,
  postcssOptions: {
    parser: 'postcss-scss',
    plugins: [
      'postcss-import',
      'autoprefixer',
      require('tailwindcss')(paths.tailwindcssConfig),
      // isProduction && require('postcss-flexbugs-fixes'),
      // [
      //   require('postcss-preset-env'),
      //   {
      //     autoprefixer: {
      //       flexbox: 'no-2009',
      //     },
      //     stage: 3,
      //   },
      // ],
      // If you comment out the purgecss section, everything works fine.
      // require('@fullhuman/postcss-purgecss')({
      //   content: [`${paths.appSrc}/**/*/tsx`, paths.appHtml],
      //   extractors: [
      //     {
      //       extractor: TailwindExtractor,
      //       extensions: ['html', 'tsx'],
      //     },
      //   ],
      // }),
    ].filter(Boolean),
  },
});
