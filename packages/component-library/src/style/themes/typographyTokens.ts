import arialMetfics from '@capsizecss/metrics/arial';

import { extractFontMetricsForTheme } from '../util/typography';

export const fontWeight = {
  regular: 400,
  medium: 500,
  strong: 700,
};

export const typography = {
  fontFamily: {
    heading: 'arial,sans-serif',
    text: 'arial,sans-serif',
  },
  fontMetrics: extractFontMetricsForTheme(arialMetfics),
  webFont: null as { heading: string; text: string } | null,
  fontWeight: {
    ...fontWeight,
  },
  heading: {
    weight: {
      weak: 'regular',
      regular: 'medium',
    } as const,
    level: {
      '1': {
        mobile: {
          fontSize: 28,
          lineGap: 11,
        },
        tablet: {
          fontSize: 36,
          lineGap: 14,
        },
      },
      '2': {
        mobile: {
          fontSize: 24,
          lineGap: 11,
        },
        tablet: {
          fontSize: 30,
          lineGap: 13,
        },
      },
      '3': {
        mobile: {
          fontSize: 22,
          lineGap: 10,
        },
        tablet: {
          fontSize: 24,
          lineGap: 11,
        },
      },
      '4': {
        mobile: {
          fontSize: 20,
          lineGap: 9,
        },
        tablet: {
          fontSize: 20,
          lineGap: 9,
        },
      },
    },
  },
  text: {
    large: {
      mobile: {
        fontSize: 19,
        lineGap: 13,
      },
      tablet: {
        fontSize: 22,
        lineGap: 13,
      },
    },
    standard: {
      mobile: {
        fontSize: 16,
        lineGap: 10,
      },
      tablet: {
        fontSize: 19,
        lineGap: 13,
      },
    },
    small: {
      mobile: {
        fontSize: 14,
        lineGap: 10,
      },
      tablet: {
        fontSize: 17,
        lineGap: 10,
      },
    },
    xsmall: {
      mobile: {
        fontSize: 12,
        lineGap: 9,
      },
      tablet: {
        fontSize: 15,
        lineGap: 9,
      },
    },
  },
};
