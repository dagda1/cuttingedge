import { StyleRule } from '@vanilla-extract/css';
import { responsiveStyle } from '../responsive-style';
import { vars } from '../themes/vars.css';

export const responsiveFont = (): StyleRule => {
  return {
    fontFamily: vars.fontFamily.body,
    ...responsiveStyle({
      mobile: {
        fontSize: vars.fonts.text.paragraph.mobile,
        lineHeight: vars.lineHeight.text.paragraph.mobile,
      },
      tablet: {
        fontSize: vars.fonts.text.paragraph.tablet,
        lineHeight: vars.lineHeight.text.paragraph.tablet,
      },
      desktop: {
        fontSize: vars.fonts.text.paragraph.desktop,
        lineHeight: vars.lineHeight.text.paragraph.desktop,
      },
      wide: {
        fontSize: vars.fonts.text.paragraph.wide,
        lineHeight: vars.lineHeight.text.paragraph.wide,
      },
    }),
  };
};

export const responsiveHeadingFont = (heading: keyof typeof vars.fonts.headings): StyleRule => {
  return {
    fontFamily: vars.fontFamily.heading,
    ...responsiveStyle({
      mobile: {
        fontSize: vars.fonts.headings[heading].mobile,
        lineHeight: vars.lineHeight.headings[heading].mobile,
      },
      tablet: {
        fontSize: vars.fonts.headings[heading].tablet,
        lineHeight: vars.lineHeight.headings[heading].tablet,
      },
      desktop: {
        fontSize: vars.fonts.headings[heading].desktop,
        lineHeight: vars.lineHeight.headings[heading].desktop,
      },
      wide: {
        fontSize: vars.fonts.headings[heading].wide,
        lineHeight: vars.lineHeight.headings[heading].wide,
      },
    }),
  };
};
