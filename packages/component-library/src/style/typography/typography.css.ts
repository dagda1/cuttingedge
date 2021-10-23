import { style, StyleRule } from '@vanilla-extract/css';
import { createTextStyle } from '@capsizecss/vanilla-extract';
import { vars } from '../themes/vars.css';
import { breakpointQuery, responsiveStyle } from '../responsive-style';
import { FontWeight } from 'src';

type Vars = typeof vars;
type HeadingDefinition = Vars['headingLevel'];
type TypographicDefinition = HeadingDefinition[keyof HeadingDefinition];

// export const fontFamily = style({
//   fontFamily: vars.fontFamily,
// });

// export const fontWeight = styleVariants(vars.textWeight, mapToProperty('fontWeight'));

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

const makeTypographyStyleRules = (textDefinition: TypographicDefinition) => {
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

export const globalHeadingStyle = ({
  weight = 'regular',
  level,
}: {
  weight: FontWeight;
  level: string;
}): StyleRule => ({
  fontFamily: vars.fontFamily.heading,
  fontWeight: vars.fontWeight[weight],
  color: vars.foregroundColor.heading,
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
