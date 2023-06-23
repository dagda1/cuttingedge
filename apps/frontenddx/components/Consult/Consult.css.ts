import { palette, responsiveStyle, vars } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

const buttonStyles = responsiveStyle({
  mobile: {
    width: '100%',
  },
  tablet: {
    width: '50%',
  },
  desktop: {
    width: '33%',
  },
});

export const divider = style({
  borderBottom: `5px solid ${palette.teal500}`,
  ...buttonStyles,
});

export const callButton = style({
  marginTop: vars.space['small'],
  ...buttonStyles,
});
