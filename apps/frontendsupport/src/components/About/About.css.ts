import { style } from '@vanilla-extract/css';

export const background = style({
  selectors: {
    '&:before': {
      content: '""',
      background: `url('https://res.cloudinary.com/ddospxsc8/image/upload/o_20/v1690453264/code_mmdqb8.png') no-repeat center center fixed`,
      backgroundSize: 'cover',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0.2,
      zIndex: -1,
    },
  },
});
