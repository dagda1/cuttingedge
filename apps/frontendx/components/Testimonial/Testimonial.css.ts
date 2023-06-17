import { palette, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  borderTop: '1px dotted #0098d8',
  borderBottom: '1px dotted #0098d8',
  color: palette.black,
  fontStyle: 'italic',
});

globalStyle(`${root} blockquote`, {
  boxShadow: '0 0 6px rgb(0 0 0 / 50%)',
  background: palette.white,
  borderLeft: '0.5rem solid #DDD',
  width: '100%',
  margin: `${vars.space['small']} 0 ${vars.space['xxsmall']} 0`,
  padding: `${vars.space['xxsmall']} ${vars.space['xxsmall']} ${vars.space['xxsmall']} ${vars.space['small']}`,
});

globalStyle(`${root} blockquote:before`, {
  display: 'block',
  height: 0,
  content: '"“"',
  marginLeft: '-.95em',
  font: 'italic 400%/1 Cochin,Georgia,"Times New Roman", serif',
  color: palette.white,
});

globalStyle(`${root} blockquote:after`, {
  display: 'block',
  position: 'absolute',
  right: vars.space['xxsmall'],
  bottom: vars.space['large'],
  height: 0,
  content: '"”"',
  font: 'italic 400%/1 Cochin,Georgia,"Times New Roman", serif',
  color: palette.white,
});

globalStyle(`${root} a`, {
  color: palette.blue500,
});

globalStyle(`${root} p:first-child`, {
  padding: 0,
  margin: 0,
});

globalStyle(`${root} h2 a`, {
  color: palette.blue500,
  marginTop: 0,
});
