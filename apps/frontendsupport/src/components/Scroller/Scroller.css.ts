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
  position: 'absolute',
  bottom: '2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  opacity: 1,
});

export const arrow = style({
  animation: `${pulse} 1.5s infinite`,
});
