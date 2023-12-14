import type { DeepPartial } from '@cutting/util';
import { mapValues } from '@cutting/util';
import type { Tokens } from './tokens.js';
import { tokens as defaultTokens } from './tokens.js';
import deepmerge from 'deepmerge';
import { getCapHeight } from '@capsizecss/core';
import { precomputeValues } from '@capsizecss/vanilla-extract';
import colors from 'tailwindcss/colors';
import type { Breakpoint } from '../breakpoints.js';
import type { FontMetricsForTheme } from '../util/typography.js';

const scaleCreator = (scale: 'px' | 'rem') => (v: string | number) => `${v}${scale}`;

const px = scaleCreator('px');

type FontSizeText =
  | {
      fontSize: number;
      rows: number;
    }
  | {
      fontSize: number;
      lineGap: number;
    };

export type TextBreakpoint = Extract<Breakpoint, 'mobile' | 'tablet'>;

export type TextDefinition = Record<TextBreakpoint, FontSizeText>;

const fontSizeToCapHeight = (grid: number, definition: TextDefinition, fontMetrics: FontMetricsForTheme) => {
  const { mobile, tablet } = definition;

  const mobileCapHeight = getCapHeight({
    fontSize: mobile.fontSize,
    fontMetrics,
  });

  const tabletCapHeight = getCapHeight({
    fontSize: tablet.fontSize,
    fontMetrics,
  });

  const mobileConfig =
    'lineGap' in mobile
      ? {
          fontSize: mobile.fontSize,
          lineGap: mobile.lineGap,
        }
      : {
          fontSize: mobile.fontSize,
          leading: mobile.rows * grid,
        };

  const tabletConfig =
    'lineGap' in tablet
      ? {
          fontSize: tablet.fontSize,
          lineGap: tablet.lineGap,
        }
      : {
          fontSize: tablet.fontSize,
          leading: tablet.rows * grid,
        };

  const {
    fontSize: mobileFontSize,
    lineHeight: mobileLineHeight,
    ...mobileTrims
  } = precomputeValues({
    ...mobileConfig,
    fontMetrics,
  });

  const {
    fontSize: tabletFontSize,
    lineHeight: tabletLineHeight,
    ...tabletTrims
  } = precomputeValues({
    ...tabletConfig,
    fontMetrics,
  });

  return {
    mobile: {
      fontSize: mobileFontSize,
      lineHeight: mobileLineHeight,
      capHeight: px(mobileCapHeight),
      capsizeTrims: {
        ...mobileTrims,
      },
    },
    tablet: {
      fontSize: tabletFontSize,
      lineHeight: tabletLineHeight,
      capHeight: px(tabletCapHeight),
      capsizeTrims: {
        ...tabletTrims,
      },
    },
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const makeTheme = (customTokens: DeepPartial<Tokens> = {}) => {
  const { ...tokens } = deepmerge(defaultTokens, customTokens) as Tokens;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { webFont, ...typography } = tokens.typography;
  const { foreground, background } = tokens.color;

  const textSize = mapValues(tokens.typography.text, (definition) =>
    fontSizeToCapHeight(tokens.grid, definition, typography.fontMetrics),
  );

  const resolvedTokens = {
    touchableSize: px(tokens.touchableSize * tokens.grid),
    grid: px(tokens.grid),
    borderRadius: tokens.border.radius,
    borderColor: tokens.border.color,
    borderWidth: mapValues(tokens.border.width, px),
    foregroundColor: foreground,
    backgroundColor: background,
    fontFamily: typography.fontFamily,
    textWeight: mapValues(tokens.typography.fontWeight, String),
    inlineFieldSize: {
      standard: '2.5rem',
      small: '1.25rem',
    },
    space: mapValues(tokens.space, (sp) => px(sp * tokens.grid)),
    width: tokens.width,
    inputWidth: tokens.inputWidth,
    textSize,
    headingLevel: mapValues(tokens.typography.heading.level, (definition) =>
      fontSizeToCapHeight(tokens.grid, definition, tokens.typography.fontMetrics),
    ),
    headingWeight: {
      weak: String(tokens.typography.fontWeight[tokens.typography.heading.weight.weak]),
      regular: String(tokens.typography.fontWeight[tokens.typography.heading.weight.regular]),
    },
    accessibility: {
      visibleFocus: {
        outline: `${tokens.accessibility.outlineWidth} solid ${tokens.accessibility.elementFocusColor}`,
        outlineOffset: tokens.accessibility.outlineOffset,
      },
      linkFocus: {
        outline: `3px solid transparent`,
        color: tokens.accessibility.linkFocusColor,
        backgroundColor: tokens.accessibility.elementFocusColor,
        boxShadow: `0 -2px #fd0, 0 4px ${tokens.accessibility.boxShadowColor}`,
        textDecoration: `none`,
      },
      accessibleOutline: {
        backgroundColor: tokens.accessibility.accessibleOutlineColor,
        outline: `${tokens.accessibility.outlineWidth} solid ${tokens.accessibility.accessibleOutlineColor}`,
      },
    },
    invalid: {
      color: tokens.color.foreground.error,
    },
    links: {
      ...tokens.links,
    },
    banners: {
      titleColor: colors.white,
      color: tokens.banners.color,
      backgroundColor: tokens.banners.backgroundColor,
    },
    buttons: {
      textTransform: tokens.buttons.textTransform,
      fontWeight: tokens.buttons.fontWeight,
      width: {
        ...tokens.buttons.width,
      },
      primary: {
        border: `${tokens.buttons.primary.borderWidth} solid ${tokens.buttons.primary.borderWidth}`,
        borderBottomColor: tokens.buttons.primary.borderBottomColor,
        borderBottomWidth: '2px',
        background: tokens.buttons.primary.background,
        padding: tokens.buttons.primary.padding,
        ':hover': {
          background: tokens.buttons.primary.focusColor,
        },
      },
      secondary: {
        border: `${tokens.buttons.secondary.borderWidth} solid ${tokens.buttons.secondary.borderWidth}`,
        borderBottomColor: tokens.buttons.secondary.borderBottomColor,
        borderBottomWidth: '2px',
        background: tokens.buttons.secondary.background,
        padding: tokens.buttons.secondary.padding,
        ':hover': {
          background: tokens.buttons.secondary.focusColor,
        },
      },
      warning: {
        border: `${tokens.buttons.warning.borderWidth} solid ${tokens.buttons.warning.borderWidth}`,
        background: tokens.buttons.warning.background,
        padding: tokens.buttons.secondary.padding,
        ':hover': {
          background: tokens.buttons.warning.focusColor,
        },
      },
    },
    radios: {
      ...tokens.radios,
    },
    contentWidth: mapValues(tokens.contentWidth, px),
    transition: tokens.transitions,
    shadow: tokens.shadows,
    focusRingSize: px(tokens.focusRingSize),
  };

  return resolvedTokens;
};
