import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { createTextStyle } from '@capsizecss/vanilla-extract';

import { vars } from '~/style/themes/vars.css';
import { mapToProperty } from '../util/map-property';
import { breakpoints } from '../breakpoints';
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
        [breakpoints.tablet]: {
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
        [breakpoints.tablet]: {
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
