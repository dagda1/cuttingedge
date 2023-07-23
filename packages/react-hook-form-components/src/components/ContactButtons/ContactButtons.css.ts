import { responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const callButton = style({
  width: '100%',
  ...responsiveStyle({
    mobile: {
      display: 'block',
    },
    tablet: {
      display: 'inline-flex',
    },
  }),
});

globalStyle(`${callButton} button:first-child`, {
  marginRight: vars.space['small'],
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
  right: '15px',
  top: '-10px',
  borderRadius: '18px',
});

export const content = style({
  width: '100%',
  padding: '10px 5px',
});
