import type { StyleRule } from '@vanilla-extract/css';
import { createThemeContract } from '@vanilla-extract/css';
import { styleVariants, style } from '@vanilla-extract/css';
import { vars } from '~/style/themes/vars.css';
import { responsiveStyle } from '~/style/responsive-style';
import { createTextStyle } from '@capsizecss/vanilla-extract';
import { breakpoints } from '~/style/breakpoints';
import { mapToProperty } from '~/style/util/map-property';

export const fontWeight = styleVariants(vars.textWeight, mapToProperty('fontWeight'));

export const fontFamily = style({
  fontFamily: vars.fontFamily,
});

interface GlobalHeadingProps {
  weight?: keyof typeof vars.headingWeight;
  level: keyof typeof vars.headingLevel;
}

export const globalHeadingStyle = ({ weight = 'regular', level }: GlobalHeadingProps): StyleRule => ({
  fontFamily: vars.fontFamily,
  fontWeight: vars.headingWeight[weight],
  color: vars.foregroundColor.neutral,
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

const textToneVars = createThemeContract({
  critical: null,
  caution: null,
  info: null,
  promote: null,
  positive: null,
  brandAccent: null,
  formAccent: null,
  neutral: null,
  secondary: null,
  link: null,
});

export const tone = styleVariants(textToneVars, (toneVar) => ({
  color: toneVar,
}));
