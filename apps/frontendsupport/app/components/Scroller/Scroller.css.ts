import { responsiveStyle } from '@cutting/component-library';
import { keyframes, style } from '@vanilla-extract/css';

const pulse = keyframes({
  '0%': {
    opacity: '0',
    transform: 'translateX(-50%) translateY(-5px)',
  },
  '50%': {
    opacity: '1',
    transform: 'translateX(-50%) translateY(0)',
  },
  '100%': {
    opacity: '0',
    transform: 'translateX(-50%) translateY(5px)',
  },
});

export const scroller = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  opacity: 1,
});

export const arrow = style({
  animation: `${pulse} 1.5s infinite`,
  position: 'relative',
  ...responsiveStyle({
    mobile: {
      left: 0,
    },
    tablet: {
      left: '25px',
    },
  }),
});
