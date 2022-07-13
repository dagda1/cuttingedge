const plugins = [
  await import('postcss-import'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  await import('postcss-url'),
  await import('autoprefixer'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  await import('postcss-flexbugs-fixes'),
];

export const createPostCssOptions = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isProduction,
}: {
  isProduction: boolean;
}): {
  postcssOptions: {
    sourceMap: boolean;
    parser: string;
    ident: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: any[];
  };
} => ({
  postcssOptions: {
    sourceMap: true,
    ident: 'postcss',
    parser: 'postcss-scss',
    plugins,
  },
});
