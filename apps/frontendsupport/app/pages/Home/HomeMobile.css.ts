import { responsiveStyle } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const bg = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  ...responsiveStyle({
    mobile: {
      backgroundAttachment: 'scroll',
    },
    desktop: {
      backgroundAttachment: 'fixed',
    },
  }),
});
