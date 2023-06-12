import { createThemeContract, style, styleVariants, assignVars } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { createTextStyle } from '@capsizecss/vanilla-extract';
import { vars } from '~/style/themes/vars.css';
import { mapToProperty } from '../util/map-property';
import { breakpointQuery } from '../breakpoints';
import { responsiveStyle } from '../responsive-style';

export const fontFamily = style({
  fontFamily: vars.fontFamily,
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
  critical: null,
  caution: null,
  info: null,
  promote: null,
  positive: null,
  neutral: null,
  secondary: null,
  link: null,
});

const textTones = assignVars(textToneVars, {
  critical: vars.foregroundColor.critical,
  caution: vars.foregroundColor.caution,
  info: vars.foregroundColor.info,
  promote: vars.foregroundColor.promote,
  positive: vars.foregroundColor.positive,
  neutral: vars.foregroundColor.neutral,
  secondary: vars.foregroundColor.secondary,
  link: vars.foregroundColor.link,
});

export const tone = styleVariants(textToneVars, (toneVar) => ({ color: textTones[toneVar] }));
