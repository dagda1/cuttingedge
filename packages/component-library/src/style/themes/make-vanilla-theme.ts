import { darken, lighten } from 'polished';
import mapValues from 'lodash/mapValues';
import { FontMetrics, getCapHeight } from 'capsize';

import { getAccessibleVariant, getLightVariant, isLight } from '../utils';
import { Tokens, TextDefinition } from './token-type';
import { buildValues } from '../hooks/typography/capsize/prebuilt';

const px = (v: string | number) => `${v}px`;

const getActiveColor = (x: string) => (isLight(x) ? darken(0.1, x) : darken(0.05, x));

const getHoverColor = (x: string) => (isLight(x) ? darken(0.05, x) : lighten(0.05, x));

const fontSizeToCapHeight = (grid: number, definition: TextDefinition, fontMetrics: FontMetrics) => {
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
  } = buildValues({
    fontSize: mobile.fontSize,
    leading: mobile.rows * grid,
    fontMetrics,
  });

  const {
    fontSize: tabletFontSize,
    lineHeight: tabletLineHeight,
    ...tabletTrims
  } = buildValues({
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
export const makeVanillaTheme = (tokens: Tokens) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { name, displayName, ...rest } = tokens;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { webFont, ...typography } = rest.typography;
  const { foreground, background } = rest.color;

  const getInlineFieldSize = (size: 'standard' | 'small') => {
    const scale = (typography.text[size].mobile.rows * rest.grid) / 42;
    return px(rest.grid * Math.round(rest.touchableSize * scale));
  };

  const resolvedTokens = {
    space: mapValues(rest.space, (sp) => px(sp * rest.grid)),
    touchableSize: px(rest.touchableSize * rest.grid),
    grid: px(rest.grid),
    borderRadius: rest.border.radius,
    borderColor: rest.border.color,
    borderWidth: mapValues(rest.border.width, px),
    contentWidth: mapValues(rest.contentWidth, px),
    foregroundColor: foreground,
    backgroundColor: {
      ...background,
      formAccentActive: getActiveColor(background.formAccent),
      formAccentHover: getHoverColor(background.formAccent),
      brandAccentActive: getActiveColor(background.brandAccent),
      brandAccentHover: getHoverColor(background.brandAccent),
      criticalActive: getActiveColor(background.critical),
      criticalHover: getHoverColor(background.critical),
      infoLight: getLightVariant(background.info),
      promoteLight: getLightVariant(background.promote),
      criticalLight: getLightVariant(background.critical),
      positiveLight: getLightVariant(background.positive),
      cautionLight: getLightVariant(background.caution),
      neutralLight: getLightVariant(background.neutral),
    },
    fontFamily: typography.fontFamily,
    fontMetrics: mapValues(typography.fontMetrics, String),
    textSize: mapValues(rest.typography.text, (definition) =>
      fontSizeToCapHeight(rest.grid, definition, typography.fontMetrics),
    ),
    textWeight: mapValues(typography.fontWeight, String),
    headingLevel: mapValues(rest.typography.heading.level, (definition) =>
      fontSizeToCapHeight(rest.grid, definition, typography.fontMetrics),
    ),
    headingWeight: {
      weak: String(rest.typography.fontWeight[rest.typography.heading.weight.weak]),
      regular: String(rest.typography.fontWeight[rest.typography.heading.weight.regular]),
    },
    inlineFieldSize: {
      standard: getInlineFieldSize('standard'),
      small: getInlineFieldSize('small'),
    },
    transition: rest.transitions,
    transform: rest.transforms,
    shadow: rest.shadows,
    formControl: {
      height: '2.5rem',
      width: '100%',
      padding: '5px',
    },
    accessibleForegroundColorOnLightVariant: {
      critical: {
        text: getAccessibleVariant(foreground.critical, 'text'),
        graphic: getAccessibleVariant(foreground.critical, 'graphic'),
      },
      caution: {
        text: getAccessibleVariant(foreground.caution, 'text'),
        graphic: getAccessibleVariant(foreground.caution, 'graphic'),
      },
      positive: {
        text: getAccessibleVariant(foreground.positive, 'text'),
        graphic: getAccessibleVariant(foreground.positive, 'graphic'),
      },
      info: {
        text: getAccessibleVariant(foreground.info, 'text'),
        graphic: getAccessibleVariant(foreground.info, 'graphic'),
      },
      promote: {
        text: getAccessibleVariant(foreground.promote, 'text'),
        graphic: getAccessibleVariant(foreground.promote, 'graphic'),
      },
    },
  } as const;

  return resolvedTokens;
};
