import { globalStyle, style, keyframes } from '@vanilla-extract/css';
import { palette } from '@cutting/component-library';
import cue from '~/images/cue.svg';

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
  color: palette.white,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  opacity: 1,
});

globalStyle(`${scroller} p`, {
  transition: 'all .6s cubic-bezier(.19,1,.22,1)',
  transitionDelay: '.1s',
  fontSize: '1.5rem',
  fontStyle: 'italic',
});

export const arrow = style({
  animation: `${pulse} 1.5s infinite`,
  width: '9px',
  height: '32px',
  backgroundImage: `url(${cue})`,
});
