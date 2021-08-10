import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../../style/themes/vars.css';
import { responsiveFont } from '../../../style/typography/typography.css';

export const item = style({
  position: 'relative',
  fontWeight: vars.fontWeight.regular,
  lineHeight: '1.25',
  display: 'block',
  minHeight: '40px',
  marginBottom: '10px',
  paddingLeft: '40px',
  clear: 'left',
});

globalStyle(`${item} input`, {
  cursor: 'pointer',
  position: 'absolute',
  zIndex: 1,
  top: '-2px',
  left: '-2px',
  width: vars.radios.regular.width,
  height: vars.radios.regular.height,
  margin: 0,
  opacity: 0,
});

globalStyle(`${item} label:before`, {
  content: "''",
  position: 'absolute',
  top: 0,
  left: 0,
  width: '40px',
  height: '40px',
  border: '2px solid currentColor',
  borderRadius: '50%',
  background: 'transparent',
});

globalStyle(`${item} label:after`, {
  content: "''",
  position: 'absolute',
  top: '10px',
  left: '10px',
  width: '0',
  height: '0',
  borderRadius: '50%',
  background: 'currentColor',
});

globalStyle(`${item} input:checked + label:after`, {
  border: '10px solid black',
});

globalStyle(`${item} label`, {
  padding: '8px 15px 5px',
  display: 'inline-block',
});

export const small = style({});
export const large = style({});
export const stacked = style({});
export const inline = style({});
export const content = style({
  ...responsiveFont(),
  fontWeight: vars.fontWeight.regular,
});
