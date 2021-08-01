import { StyleRule } from '@vanilla-extract/css';
import { responsiveStyle } from '../responsive-style';
import { vars } from '../themes/vars.css';

export const responsiveFont = (): StyleRule =>
  responsiveStyle({
    mobile: {
      fontSize: vars.text.paragraph.mobile,
    },
    tablet: {
      fontSize: vars.text.paragraph.tablet,
    },
    desktop: {
      fontSize: vars.text.paragraph.desktop,
    },
  });
