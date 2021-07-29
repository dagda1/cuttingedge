import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../../style/themes/vars.css';

export const root = style({
  fontSize: vars.fontSize['1x'],
  lineHeight: vars.lineHeight['4x'],
  color: vars.foregroundColor.error,
  fontWeight: vars.fontWeight.regular,
  marginTop: vars.space['2x'],
  marginBottom: vars.space['2x'],
  marginLeft: 0,
  listStyle: 'none',
});

globalStyle(`.${root} li`, {
  paddingTop: 0,
  display: 'flex',
  alignItems: 'center',
});
