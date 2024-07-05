import type { FontMetrics } from '@capsizecss/core';

import type { Tokens } from '../themes/tokens';

export type FontMetricsForTheme = Pick<FontMetrics, 'capHeight' | 'ascent' | 'descent' | 'lineGap' | 'unitsPerEm'>;

export const extractFontMetricsForTheme = ({
  capHeight,
  ascent,
  descent,
  lineGap,
  unitsPerEm,
}: FontMetrics): FontMetricsForTheme => ({
  capHeight,
  ascent,
  descent,
  lineGap,
  unitsPerEm,
});

export const makeWebFonts = (
  webFont: Tokens['typography']['webFont'],
): {
  linkTag: string;
}[] => {
  if (!webFont) {
    return [];
  }

  return [{ linkTag: `<link href="${webFont}" rel="stylesheet" />` }];
};
