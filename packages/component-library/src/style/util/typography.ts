import type { FontMetrics } from '@capsizecss/core';

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
