import type { ComplexStyleRule } from '@vanilla-extract/css';
import { keyframes, style } from '@vanilla-extract/css';

import { vars } from '~/style/themes/vars.css';

export const donutFill = keyframes({
  to: {
    strokeDasharray: '0 100',
  },
});

export const textSlideUp = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(0%)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(-50%)',
  },
});

export const donut = style({
  width: '12.5rem',
  height: '12.5rem',
  position: 'relative',
});

const frameAndCircle: ComplexStyleRule = {
  strokeWidth: '0.125rem',
  fill: 'none',
};

const isNegativeAndCircle: ComplexStyleRule = {
  transform: 'rotate(-90deg) scaleY(-1)',
};

export const donutFrame = style({
  ...frameAndCircle,
  stroke: vars.foregroundColor.critical,
});

export const donutCircle = style({
  ...frameAndCircle,
  stroke: vars.buttons.primary.background,
  strokeLinecap: 'round',
  transform: 'rotate(-90deg)',
  transformOrigin: '50% 50%',
  animation: `${donutFill} 2s reverse`,
});

export const donutIsNegatvie = style({
  ...isNegativeAndCircle,
});

export const donutCanvas = style({
  width: '100%',
  height: '100%',
  display: 'block',
  position: 'relative',
  zIndex: 2,
});

export const maximumScoreDonut = style({
  stroke: 'none',
});

export const donutText = style({
  fontFamily: 'monospace',
  fontSize: '3rem',
  letterSpacing: '-0.15rem',
  textAlign: 'center',
  position: 'absolute',
  top: '50%',
  right: '0',
  left: '0',
  zIndex: 3,
  transform: 'translateY(-50%)',
  animation: `${textSlideUp} 2s linear`,
});
