import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('footer', {
  border: '10px solid green',
});

export const hidden = style({
  display: 'none',
});

globalStyle(`body`, {
  background: `url('${'/lightening.jpg'}') no-repeat center center fixed`,
  backgroundSize: 'cover',
});

export const footer = style({
  width: '100%',
});

globalStyle('h1', {
  textShadow:
    '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff, 0 0 55px #ffffff,0 0 75px #ffffff',
});
