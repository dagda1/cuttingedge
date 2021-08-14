import { globalStyle, style, composeStyles } from '@vanilla-extract/css';
import { vars } from '../../../style/themes/vars.css';
import { responsiveFont } from '../../../style/typography/typography.css';

export const item = style({
  position: 'relative',
  fontWeight: vars.fontWeight.regular,
  display: 'flex',
  alignItems: 'center',
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

globalStyle(`${item} label`, {
  ...responsiveFont(),
  fontWeight: vars.fontWeight.regular,
  paddingLeft: vars.space['3x'],
  display: 'inline-block',
  touchAction: 'manipulation',
  boxSizing: 'border-box',
  zIndex: 1,
});

globalStyle(`${item} label:before`, {
  content: "''",
  position: 'absolute',
  top: 0,
  left: 0,
  width: '40px',
  height: '40px',
  border: `${vars.radios.borderWidth} solid ${vars.radios.borderColor}`,
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

globalStyle(`${item} input:focus + label:before`, {
  borderWidth: '4px',
  boxShadow: `0 0 0 4px ${vars.accessibility.accessibleOutline.backgroundColor} !important`,
});

globalStyle(`${item} input:checked + label:after`, {
  border: `10px solid ${vars.radios.borderColor}`,
});

export const small = composeStyles(item);

globalStyle(`${small} label:before,${small} label:after`, {
  transform: 'scale(0.5)',
});

export const inline = composeStyles(
  item,
  style({
    marginRight: vars.space['3x'],
  }),
);

globalStyle(`${inline}:not(${small}) label`, {
  marginRight: vars.space['2x'],
});
