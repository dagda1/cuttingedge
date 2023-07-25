import { responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const callButton = style({});

globalStyle(`${callButton} button`, {
  width: 'auto',
});

globalStyle(`${callButton} button:first-child`, {
  marginRight: vars.space['small'],
});

export const modalContainer = style({
  ...responsiveStyle({
    mobile: {
      width: '90vw',
    },
    tablet: {
      width: '100%',
    },
  }),
});

export const modal = style({});

globalStyle(`${modal} fieldset`, {
  border: 'none',
});

export const close = style({
  cursor: 'pointer',
  position: 'absolute',
  display: 'block',
  padding: '2px 5px',
  lineHeight: '20px',
  right: '10px',
  top: '-10px',
  borderRadius: '18px',
});

export const content = style({
  width: '100%',
  padding: '10px 5px',
});
