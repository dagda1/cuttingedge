import { globalStyle, style } from '@vanilla-extract/css';
import { palette } from '~/style/palette.css';
import { vars } from '~/style/themes/vars.css';

export const root = style({
  position: 'relative',
  borderTop: '1px dotted #0098d8',
  borderBottom: '1px dotted #0098d8',
});

globalStyle(`${root} blockquote`, {
  boxShadow: '0 0 6px rgb(0 0 0 / 50%)',
  background: palette.white,
  borderLeft: '0.5rem solid transparent',
  width: '100%',
  margin: `${vars.space['medium']} 0 ${vars.space['xsmall']} 0`,
  padding: `${vars.space['xsmall']} ${vars.space['xsmall']} ${vars.space['xsmall']} ${vars.space['small']}`,
});

globalStyle(`${root} blockquote::before`, {
  content: '"”"',
  display: 'block',
  position: 'absolute',
  right: vars.space['xsmall'],
  bottom: vars.space['large'],
  height: 0,
  font: 'italic 400%/1 Cochin,Georgia,"Times New Roman", serif',
  color: palette.white,
});

globalStyle(`${root} blockquote:after`, {
  content: '"”"',
  display: 'block',
  position: 'absolute',
  right: vars.space['xsmall'],
  bottom: vars.space['large'],
  height: 0,
  font: 'italic 400%/1 Cochin,Georgia,"Times New Roman", serif',
  color: palette.white,
});
