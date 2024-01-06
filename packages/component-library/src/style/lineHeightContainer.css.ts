import { styleVariants } from '@vanilla-extract/css';
import { vars } from './themes/vars.css';
import { responsiveStyle } from './responsive-style';

export const lineHeightContainer = styleVariants(vars.textSize, ({ mobile, tablet }) =>
  responsiveStyle({
    mobile: { height: mobile.lineHeight },
    tablet: { height: tablet.lineHeight },
  }),
);
