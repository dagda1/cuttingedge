import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { responsiveStyle } from '@cutting/component-library';

const spinY = keyframes({
  from: {
    transform: 'rotateY(0deg)',
  },
  to: {
    transform: 'rotateY(360deg)',
  },
});

export const main = style({
  display: 'flex',
  justifyContent: 'center',
});

export const container = style([
  {
    perspective: '800px',
    perspectiveOrigin: 'center',
    ...responsiveStyle({
      mobile: {
        width: '80%',
      },
      tablet: {
        width: '33.3333%',
      },
    }),
  },
]);

export const shape = style({
  transformOrigin: '50% 90% 0px',
  transformStyle: 'preserve-3d',
  transform: 'rotateX(20deg) rotateY(40deg)',
  position: 'relative',
  animation: `${spinY} 8s infinite linear`,
});

const baseL = 300;
const halfBase = baseL / 2;
const apothem = baseL; //(1/2 base) / cos(theta)
const apexAngle = '30deg'; // apex angle = 180 - 90(right-angle) - α
const baseMove = 0 - (apothem - halfBase);

export const base = style({
  position: 'absolute',
  width: `${baseL}px`,
  height: `${baseL}px`,
  backgroundColor: 'rgba(147, 81, 166, 0.9)',
  transform: `rotateX(90deg) translate3d(0px, 0px, ${baseMove}px)`,
  opacity: 0.5,
  selectors: {
    ['&:after']: {
      content: 'TERRAFORM',
    },
  },
});

globalStyle(`${shape} div:not(${base})`, {
  position: 'absolute',
  borderLeft: `${halfBase}px solid transparent`,
  borderRight: `${halfBase}px solid transparent`,
  borderBottom: `${apothem}px solid`,
  transformOrigin: `${halfBase}px ${apothem}px 0`,
  opacity: '0.5',
});

globalStyle(`${shape} div:after`, {
  position: 'absolute',
  top: `${halfBase}px`,
  textAlign: 'center',
  color: '#fff',
  fontSize: '1.75em',
  textTransform: 'uppercase',
  left: '50%',
  transform: 'translateX(-50%)',
});

export const front = style({
  borderBottomColor: '#e04545 !important',
  transform: `rotateY(0deg) translate3d(0px, 0px, ${halfBase}px) rotateX(${apexAngle})`,
  selectors: {
    [`&:after`]: {
      content: 'D3',
    },
  },
});

export const back = style({
  borderBottomColor: '#ccaf5a !important',
  transform: `rotateY(90deg) translate3d(0px, 0px, ${halfBase}px) rotateX(${apexAngle})`,
  selectors: {
    [`&:after`]: {
      content: 'node',
    },
  },
});

export const left = style({
  borderBottomColor: '#800000 !important',
  transform: `rotateY(180deg) translate3d(0px, 0px, ${halfBase}px) rotateX(${apexAngle})`,
  selectors: {
    [`&:after`]: {
      content: 'TYPESCRIPT',
    },
  },
});

export const right = style({
  borderBottomColor: '#4ccfc8 !important',
  transform: `rotateY(270deg) translate3d(0px, 0px, ${halfBase}px) rotateX(${apexAngle})`,
  selectors: {
    [`&:after`]: {
      content: 'REACT',
    },
  },
});
