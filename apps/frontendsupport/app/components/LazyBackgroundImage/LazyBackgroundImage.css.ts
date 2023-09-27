import { responsiveStyle } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const bg = style({});

export const bgStatic = style({
  selectors: {
    '&:before': {
      content: '""',
      background: `url('https://res.cloudinary.com/ddospxsc8/image/upload/v1689953393/frontendsupport/pain_wide_jjmyp6.png') no-repeat center center fixed`,
      backgroundSize: 'cover',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0.2,
    },
  },
});

export const bgRepeat = style({
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
      transform: 'translateZ(0)',
      position: 'fixed',
      willChange: 'transform',
    },
    desktop: {
      backgroundAttachment: 'fixed',
      position: 'absolute',
      transform: 'none',
      willChange: 'auto',
    },
  }),
});
