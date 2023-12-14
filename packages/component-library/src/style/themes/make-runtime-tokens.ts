import type { Tokens } from './tokens.js';

const makeWebFonts = (webFont: Tokens['typography']['webFont']) => {
  if (!webFont) {
    return [];
  }

  return [{ linkTag: `<link href="${webFont}" rel="stylesheet" />` }];
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const makeRuntimeTokens = (tokens: Tokens) => ({
  webFonts: makeWebFonts(tokens.typography.webFont),
  space: {
    grid: tokens.grid,
    space: tokens.space,
  },
  color: tokens.color,
});
