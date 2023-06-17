import { palette } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const imgBox = style({
  position: 'relative',
  width: '100%',
  height: '300px',
  overflow: 'hidden',
  boxShadow: '0 25px 35px rgb(0 0 0 / 10%)',
});

globalStyle(`${imgBox} .parallax-outer .parallax-inner`, {
  position: 'absolute',
  right: 0,
  marginTop: '200px',
  marginBottom: '40px',
  padding: '40px',
  background: `${palette.gray800}`,
  maxWidth: '400px',
  color: '#fff',
  boxShadow: '0 25px 35px rgba(0, 0, 0, 0.1)',
  borderBottom: '6px solid #4ac7ff',
});

globalStyle(`${imgBox} img`, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

globalStyle(`${imgBox} img:hover`, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '105% !important',
  height: '105% !important',
  objectFit: 'cover',
  transitionDuration: '2s',
});
