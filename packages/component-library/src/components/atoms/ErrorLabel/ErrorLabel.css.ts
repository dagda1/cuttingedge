import { globalStyle, style } from '@vanilla-extract/css';
import { responsiveFont } from 'src/style/typography/typography.css';
import { vars } from '../../../style/themes/vars.css';

export const root = style({
  ...responsiveFont(),
  color: vars.foregroundColor.error,
  fontWeight: vars.fontWeight.regular,
  marginTop: vars.space['1x'],
  marginBottom: vars.space['1x'],
  marginLeft: 0,
  listStyle: 'none',
});

globalStyle(`.${root} li`, {
  paddingTop: 0,
  display: 'flex',
  alignItems: 'center',
});
