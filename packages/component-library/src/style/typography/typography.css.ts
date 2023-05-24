import type { StyleRule } from '@vanilla-extract/css';
import { style } from '@vanilla-extract/css';
import { createTextStyle } from '@capsizecss/vanilla-extract';
import { vars } from '../themes/vars.css';
import { breakpointQuery, responsiveStyle } from '../responsive-style';
import type { FontWeight } from '../types';
import type { tokens } from '../themes/tokens';

type Vars = typeof vars;
type HeadingDefinition = Vars['headingLevel'];
type TypographicDefinition = HeadingDefinition[keyof HeadingDefinition];

const makeTypographyRules = (
  textDefinition: TypographicDefinition,
  debug?: string,
): {
  untrimmed: string;
  trimmed: string;
} => {
  const {
    fontSize: mobileFontSize,
    lineHeight: mobileLineHeight,
    capsizeTrims: mobileCapsizeTrims,
  } = textDefinition.mobile;

  const {
    fontSize: tabletFontSize,
    lineHeight: tabletLineHeight,
    capsizeTrims: tabletCapsizeTrims,
  } = textDefinition.tablet;

  return {
    untrimmed: style(
      responsiveStyle({
        mobile: {
          fontSize: mobileFontSize,
          lineHeight: mobileLineHeight,
        },
        tablet: {
          fontSize: tabletFontSize,
          lineHeight: tabletLineHeight,
        },
      }),
    ),
    trimmed: createTextStyle(
      {
        fontSize: mobileFontSize,
        lineHeight: mobileLineHeight,
        ...mobileCapsizeTrims,
      },
      {
        '@media': {
          [breakpointQuery.tablet]: {
            fontSize: tabletFontSize,
            lineHeight: tabletLineHeight,
            ...tabletCapsizeTrims,
          },
        },
      },
      debug,
    ),
  };
};

const makeTypographyStyleRules = (textDefinition: TypographicDefinition): StyleRule => {
  const { fontSize: mobileFontSize, lineHeight: mobileLineHeight } = textDefinition.mobile;
  const { fontSize: tabletFontSize, lineHeight: tabletLineHeight } = textDefinition.tablet;

  return responsiveStyle({
    mobile: {
      fontSize: mobileFontSize,
      lineHeight: mobileLineHeight,
    },
    tablet: {
      fontSize: tabletFontSize,
      lineHeight: tabletLineHeight,
    },
  });
};

export const responsiveTextStyleRule = {
  body: makeTypographyStyleRules(vars.text.body),
};

export const responsiveText = {
  body: makeTypographyRules(vars.text.body, 'body'),
};

type Level = keyof (typeof tokens)['color']['foreground']['heading'];

// TODO: make fontSize rem
export const globalHeadingStyle = ({ weight = 'regular', level }: { weight: FontWeight; level: Level }): StyleRule => ({
  fontFamily: vars.fontFamily.heading,
  fontWeight: vars.fontWeight[weight],
  color: vars.foregroundColor.heading[level],
  ...responsiveStyle({
    mobile: {
      fontSize: vars.headingLevel[level].mobile.fontSize,
      lineHeight: vars.headingLevel[level].mobile.lineHeight,
    },
    tablet: {
      fontSize: vars.headingLevel[level].tablet.fontSize,
      lineHeight: vars.headingLevel[level].tablet.lineHeight,
    },
  }),
});
