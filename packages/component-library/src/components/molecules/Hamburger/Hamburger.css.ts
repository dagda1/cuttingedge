import { globalStyle, style } from '@vanilla-extract/css';
import { palette } from '~/style';

export const container = style({
  position: 'relative',
  top: '5%',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '2rem',
  height: '2rem',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  zIndex: 11,

  selectors: {
    '&:focus': {
      outline: 'none',
    },
  },
});

globalStyle(`${container} div`, {
  width: '2rem',
  height: '0.25rem',
  borderRadius: '10px',
  transition: 'all 0.3s linear',
  position: 'relative',
  transformOrigin: '1px',
});

globalStyle(`${container}.dark div`, {
  background: palette.slate950,
});

globalStyle(`${container}.light div`, {
  background: palette.white,
});

globalStyle(`${container} div.open`, {
  background: '#EFFFFA',
});

globalStyle(`${container} div:first-child`, {
  transform: 'rotate(0)',
});

globalStyle(`${container}.open div:first-child`, {
  transform: 'rotate(45deg)',
});

globalStyle(`${container} div:nth-child(2)`, {
  transform: 'translateX(0)',
  opacity: 1,
});

globalStyle(`${container}.open div:nth-child(2)`, {
  opacity: 0,
  transform: 'translateXS(20px)',
});

globalStyle(`${container} div:nth-child(3)`, {
  transform: 'rotate(0)',
});

globalStyle(`${container}.open div:nth-child(3)`, {
  transform: 'rotate(-45deg)',
});
