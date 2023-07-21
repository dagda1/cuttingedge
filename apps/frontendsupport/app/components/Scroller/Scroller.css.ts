import { keyframes, style } from '@vanilla-extract/css';
import cue from '~/images/arrowdown.png';

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
  width: '100px',
  height: '100px',
  background: `url(${cue}) no-repeat center center fixed`,
  position: 'relative',
  left: '50px',
});
