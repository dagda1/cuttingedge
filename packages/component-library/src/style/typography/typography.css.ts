import { createThemeContract, style, styleVariants, assignVars } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { createTextStyle } from '@capsizecss/vanilla-extract';
import { vars } from '~/style/themes/vars.css.js';
import { mapToProperty } from '../util/map-property';
import { breakpointQuery } from '../breakpoints.js';
import { responsiveStyle } from '../responsive-style.js';

export const fontFamily = style({
  fontFamily: vars.fontFamily.text,
});

export const headingFontFamily = style({
  fontFamily: vars.fontFamily.heading,
});

export const fontWeight = styleVariants(vars.textWeight, mapToProperty('fontWeight'));

export const textSizeTrimmed = styleVariants(vars.textSize, ({ mobile, tablet }, variant) => [
  createTextStyle(
    {
      fontSize: mobile.fontSize,
      lineHeight: mobile.lineHeight,
      ...mobile.capsizeTrims,
    },
    {
      '@media': {
        [breakpointQuery.tablet]: {
          fontSize: tablet.fontSize,
          lineHeight: tablet.lineHeight,
          ...tablet.capsizeTrims,
        },
      },
    },
    `textSize_${variant}`,
  ),
]);

export const textSizeUntrimmed = styleVariants(vars.textSize, ({ mobile, tablet }) =>
  responsiveStyle({
    mobile: {
      fontSize: mobile.fontSize,
      lineHeight: mobile.lineHeight,
    },
    tablet: {
      fontSize: tablet.fontSize,
      lineHeight: tablet.lineHeight,
    },
  }),
);

export const headingWeight = styleVariants(vars.headingWeight, mapToProperty('fontWeight'));

export const heading = styleVariants(vars.headingLevel, ({ mobile, tablet }, variant) => [
  createTextStyle(
    {
      fontSize: mobile.fontSize,
      lineHeight: mobile.lineHeight,
      ...mobile.capsizeTrims,
    },
    {
      '@media': {
        [breakpointQuery.tablet]: {
          fontSize: tablet.fontSize,
          lineHeight: tablet.lineHeight,
          ...tablet.capsizeTrims,
        },
      },
    },
    `heading_${variant}`,
  ),
]);

const makeTouchableSpacing = (touchableHeight: string, textHeight: string) => {
  const space = calc(touchableHeight).subtract(textHeight).divide(2).toString();

  return {
    paddingTop: space,
    paddingBottom: space,
  };
};

export const touchableText = styleVariants(vars.textSize, (textDefinition) =>
  responsiveStyle({
    mobile: makeTouchableSpacing(vars.touchableSize, textDefinition.mobile.lineHeight),
    tablet: makeTouchableSpacing(vars.touchableSize, textDefinition.tablet.lineHeight),
  }),
);

const textToneVars = createThemeContract({
  primary: null,
  critical: null,
  caution: null,
  info: null,
  promote: null,
  positive: null,
  neutral: null,
  secondary: null,
  warning: null,
  link: null,
  h1: null,
  h2: null,
  h3: null,
  h4: null,
});

const textTones = assignVars(textToneVars, {
  primary: vars.foregroundColor.primary,
  critical: vars.foregroundColor.critical,
  caution: vars.foregroundColor.caution,
  info: vars.foregroundColor.info,
  promote: vars.foregroundColor.promote,
  positive: vars.foregroundColor.positive,
  neutral: vars.foregroundColor.neutral,
  secondary: vars.foregroundColor.secondary,
  link: vars.foregroundColor.link,
  warning: vars.foregroundColor.primary,
  h1: vars.foregroundColor.h1,
  h2: vars.foregroundColor.h2,
  h3: vars.foregroundColor.h3,
  h4: vars.foregroundColor.h4,
});

export const tone = styleVariants(textToneVars, (toneVar) => ({ color: textTones[toneVar] }));
