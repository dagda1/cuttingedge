import { darken, lighten } from 'polished';
import mapValues from 'lodash/mapValues';
import values from 'lodash/values';
import { FontMetrics, getCapHeight } from 'capsize';
import { getLightVariant, isLight } from '../utils';
import { breakpoints } from '../breakpoints';
import { makeThemeUtils } from '../theme-utils';
import { Tokens, TextDefinition } from './token-type';
import { createTheme } from '@vanilla-extract/css';
import { vars } from './vars.css';
import { makeVanillaTheme } from './make-vanilla-theme';

const fontSizeToCapHeight = (definition: TextDefinition, fontMetrics: FontMetrics) => {
  const { mobile, tablet } = definition;

  return {
    mobile: {
      capHeight: getCapHeight({ fontSize: mobile.fontSize, fontMetrics }),
      rows: mobile.rows,
    },
    tablet: {
      capHeight: getCapHeight({ fontSize: tablet.fontSize, fontMetrics }),
      rows: tablet.rows,
    },
  };
};

const normaliseSizingToCapHeight = (typography: Tokens['typography']) => {
  const { heading, text, fontMetrics } = typography;

  return {
    ...typography,
    heading: {
      ...heading,
      level: {
        ...mapValues(heading.level, (definition) => fontSizeToCapHeight(definition, fontMetrics)),
      },
    },
    text: {
      ...text,
      ...mapValues(text, (definition) => fontSizeToCapHeight(definition, fontMetrics)),
    },
  };
};

const decorateTokens = (tokens: Tokens) => {
  const { color, typography, ...restTokens } = tokens;

  const getActiveColor = (x: string) => (isLight(x) ? darken(0.1, x) : darken(0.05, x));

  const getHoverColor = (x: string) => (isLight(x) ? darken(0.05, x) : lighten(0.05, x));

  const decoratedTokens = {
    color: {
      ...color,
      background: {
        ...color.background,
        formAccentActive: getActiveColor(color.background.formAccent),
        formAccentHover: getHoverColor(color.background.formAccent),
        brandAccentActive: getActiveColor(color.background.brandAccent),
        brandAccentHover: getHoverColor(color.background.brandAccent),
        criticalActive: getActiveColor(color.background.critical),
        criticalHover: getHoverColor(color.background.critical),
        infoLight: getLightVariant(color.background.info),
        promoteLight: getLightVariant(color.background.promote),
        criticalLight: getLightVariant(color.background.critical),
        positiveLight: getLightVariant(color.background.positive),
        cautionLight: getLightVariant(color.background.caution),
        neutralLight: getLightVariant(color.background.neutral),
      },
    },
    typography: normaliseSizingToCapHeight(typography),
    breakpoint: breakpoints,
    ...restTokens,
  };

  return {
    ...decoratedTokens,
    utils: makeThemeUtils(decoratedTokens),
  };
};

export type TreatTheme = ReturnType<typeof decorateTokens>;

const makeWebFonts = (tokens: TreatTheme) => {
  const name = tokens.typography.webFont;

  if (!name) {
    return [];
  }

  const weights = values(tokens.typography.fontWeight);
  const linkTag = `<link href="https://fonts.googleapis.com/css?family=${encodeURIComponent(
    `${name}:${weights.sort().join(',')}`,
  )}" rel="stylesheet" />`;

  return [{ linkTag }];
};

const makeRuntimeTokens = (tokens: TreatTheme) => ({
  name: tokens.name,
  displayName: tokens.displayName,
  background: tokens.color.background.body,
  webFonts: makeWebFonts(tokens),
  space: {
    grid: tokens.grid,
    space: tokens.space,
  },
  color: tokens.color,
  backgroundLightness: mapValues(tokens.color.background, (background, name) => {
    // Manual override to ensure we use inverted neutral text
    // on JobsDB 'brandAccent' background and its variants.
    if (tokens.name === 'jobsDb' && /^brandAccent/.test(name)) {
      return 'dark';
    }

    // This color map is used to ensure that all "hover" and "active"
    // variants are considered as a single set. If we don't do this,
    // colors might flip from light to dark during user interactions.
    // At the time of writing this, this was true of 'formAccent' in
    // the 'seekBusiness' theme, which went from white text to black
    // for 'formAccentHover'.
    const referenceColorMap = {
      brandAccentActive: 'brandAccent',
      brandAccentHover: 'brandAccent',
      formAccentActive: 'formAccent',
      formAccentHover: 'formAccent',
    } as const;

    const referenceColor =
      name in referenceColorMap
        ? tokens.color.background[referenceColorMap[name as keyof typeof referenceColorMap]]
        : background;

    if (!referenceColor) {
      throw new Error(`Error resolving background lightness for background "${background}" in "${tokens.name}" theme.`);
    }

    return isLight(referenceColor) ? 'light' : 'dark';
  }),
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function makeTheme(tokens: Tokens) {
  const decoratedTokens = decorateTokens(tokens);
  return {
    theme: createTheme(vars, makeVanillaTheme(tokens)),
    ...makeRuntimeTokens(decoratedTokens),
  };
}

export type Theme = ReturnType<typeof makeTheme>;
