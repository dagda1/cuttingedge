import { responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const callButton = style({});

globalStyle(`${callButton} button`, {
  width: 'auto',
});

globalStyle(`${callButton} button:first-child`, {
  marginRight: vars.space['small'],
});

globalStyle('.popup-content', {
  margin: vars.space['small'],
  ...responsiveStyle({
    wide: {
      width: '33%',
    },
    desktop: {
      width: '50%',
    },
    tablet: {
      width: '75%',
    },
    mobile: {
      width: '95%',
    },
  }),
});

export const modalContainer = style({
  border: `1px solid ${vars.foregroundColor.primary}`,
  borderRadius: vars.borderRadius.large,
  backgroundColor: vars.backgroundColor.secondary,
  ...responsiveStyle({
    mobile: {
      display: 'block',
    },
    tablet: {
      display: 'inline-flex',
    },
  }),
});

export const popup = style({
  width: '100%',
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
