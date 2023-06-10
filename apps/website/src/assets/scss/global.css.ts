import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('footer', {
  width: '100%',
});

export const hidden = style({
  display: 'none',
});

globalStyle(`body`, {
  background: `url('${'/lightening.jpg'}') no-repeat center center fixed`,
  backgroundSize: 'cover',
});

globalStyle('h1', {
  textShadow:
    '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff, 0 0 55px #ffffff,0 0 75px #ffffff',
});
