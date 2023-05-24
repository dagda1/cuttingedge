import type { DeepPartial } from '@cutting/util';
import { mapValues } from '@cutting/util';
import type { Tokens } from './tokens';
import { tokens as defaultTokens } from './tokens';
import deepmerge from 'deepmerge';
import type { FontMetrics } from '@capsizecss/core';
import { getCapHeight } from '@capsizecss/core';
import { precomputeValues } from '@capsizecss/vanilla-extract';
import colors from 'tailwindcss/colors';
import type { Breakpoint } from '../breakpoints';

const scaleCreator = (scale: 'px' | 'rem') => (v: string | number) => `${v}${scale}`;

const px = scaleCreator('px');

type FontSizeText = {
  fontSize: number;
  rows: number;
};

export type TextBreakpoint = Extract<Breakpoint, 'mobile' | 'tablet'>;

export type TextDefinition = Record<TextBreakpoint, FontSizeText>;

const fontSizeToCapHeight = (
  grid: number,
  definition: TextDefinition,
  fontMetrics: Omit<FontMetrics, 'familyName' | 'xHeight' | 'xWidthAvg'>,
) => {
  const { mobile, tablet } = definition;

  const mobileCapHeight = getCapHeight({
    fontSize: mobile.fontSize,
    fontMetrics,
  });

  const tabletCapHeight = getCapHeight({
    fontSize: tablet.fontSize,
    fontMetrics,
  });

  const {
    fontSize: mobileFontSize,
    lineHeight: mobileLineHeight,
    ...mobileTrims
  } = precomputeValues({
    fontSize: mobile.fontSize,
    leading: mobile.rows * grid,
    fontMetrics,
  });

  const {
    fontSize: tabletFontSize,
    lineHeight: tabletLineHeight,
    ...tabletTrims
  } = precomputeValues({
    fontSize: tablet.fontSize,
    leading: tablet.rows * grid,
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
  const { foreground, background } = tokens.color;

  const resolvedTokens = {
    borderRadius: tokens.border.radius,
    borderColor: tokens.border.color,
    borderWidth: mapValues(tokens.border.width, px),
    foregroundColor: foreground,
    backgroundColor: {
      ...background,
    },
    fontFamily: {
      ...tokens.typography.fonts,
    },
    colors: {
      ...tokens.colors,
    },
    fontWeight: mapValues(tokens.typography.fontWeight, String),
    inlineFieldSize: {
      standard: '2.5rem',
      small: '1.25rem',
    },
    space: {
      ...tokens.space,
    },
    width: {
      ...tokens.width,
    },
    inputWidth: {
      ...tokens.inputWidth,
    },
    headingLevel: mapValues(tokens.typography.heading.level, (definition) =>
      fontSizeToCapHeight(tokens.grid, definition, tokens.typography.fontMetrics),
    ),
    text: mapValues(tokens.typography.text, (definition) =>
      fontSizeToCapHeight(tokens.grid, definition, tokens.typography.fontMetrics),
    ),
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
        color: tokens.buttons.primary.color,
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
        color: tokens.buttons.secondary.color,
        padding: tokens.buttons.secondary.padding,
        ':hover': {
          background: tokens.buttons.secondary.focusColor,
        },
      },
      warning: {
        border: `${tokens.buttons.warning.borderWidth} solid ${tokens.buttons.warning.borderWidth}`,
        background: tokens.buttons.warning.background,
        color: tokens.buttons.warning.color,
        padding: tokens.buttons.secondary.padding,
        ':hover': {
          background: tokens.buttons.warning.focusColor,
        },
      },
    },
    radios: {
      ...tokens.radios,
    },
    transition: tokens.transitions,
  };

  return resolvedTokens;
};
