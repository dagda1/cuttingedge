import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '~/style/themes/vars.css';

export const item = style({
  position: 'relative',
  fontWeight: vars.textWeight.regular,
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
  // ...responsiveTextStyleRule.body,
  fontWeight: vars.textWeight.regular,
  paddingLeft: vars.space['1x'],
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
  background: 'transparent',
});

globalStyle(`${item} input[type="checkbox"]:checked + label:after`, {
  content: "''",
  boxSizing: 'border-box',
  position: 'absolute',
  top: '11px',
  left: '9px',
  width: '23px',
  height: '12px',
  transform: 'rotate(-45deg)',
  border: 'solid',
  borderWidth: '0 0 5px 5px',
  borderTopColor: 'transparent',
  background: 'transparent',
});

globalStyle(`${item} input[type="radio"] + label:before`, {
  borderRadius: '50%',
});

globalStyle(`${item} input[type="radio"] + label:after`, {
  content: "''",
  position: 'absolute',
  top: '10px',
  left: '10px',
  width: '0',
  height: '0',
  background: 'currentColor',
  borderRadius: '50%',
});

globalStyle(`${item} input:focus + label:before`, {
  borderWidth: '4px',
  boxShadow: `0 0 0 4px ${vars.accessibility.accessibleOutline.backgroundColor} !important`,
});

globalStyle(`${item} input:checked + label:after`, {
  border: `10px solid ${vars.radios.borderColor}`,
});

export const small = style([item]);

globalStyle(`${small} label:before`, {
  transform: 'scale(0.5)',
});

globalStyle(`${small} label:after`, {
  transform: 'scale(0.5)',
});

export const inline = style([
  item,
  {
    marginRight: 0,
  },
]);

globalStyle(`${inline}:not(${small}) label`, {
  marginRight: vars.space['1x'],
  marginTop: '4px',
});

globalStyle(`${inline}${small} label`, {
  paddingLeft: 0,
  marginTop: '4px',
});
