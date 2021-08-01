import { StyleRule } from '@vanilla-extract/css';
import { responsiveStyle } from '../responsive-style';
import { vars } from '../themes/vars.css';

export const responsiveFont = (): StyleRule => {
  console.log({ a: vars.fonts.text.paragraph.mobile });
  return responsiveStyle({
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
  });
};
