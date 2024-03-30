import { responsiveStyle, vars } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const container = style({
  background: 'rgba(17, 24, 39, 0.5)',
  display: 'flex',
  overflowY: 'auto',
  overflowX: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 300,
});

export const body = style({
  background: vars.backgroundColor.secondary,
  boxShadow:
    'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px',
  borderRadius: vars.borderRadius.large,
  zIndex: 33,
  width: '100%',
  height: 'auto',
  padding: '1rem',
  position: 'relative',
  ...responsiveStyle({
    wide: {
      width: '50%',
    },
    desktop: {
      width: '60%',
    },
    tablet: {
      width: '75%',
    },
    mobile: {
      width: '95%',
    },
  }),
});

export const closeButton = style({
  background: 'transparent',
  border: 'none',
});

export const button = style({
  marginTop: vars.space['small'],
});
