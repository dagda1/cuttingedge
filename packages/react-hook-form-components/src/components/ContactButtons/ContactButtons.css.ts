import { responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const callButton = style({});

globalStyle(`${callButton} button`, {
  width: 'auto',
});

globalStyle(`${callButton} button:first-child`, {
  marginRight: vars.space['small'],
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
  margin: vars.space['small'],
});

globalStyle('h-full', {
  height: '100%',
});

globalStyle('w-full', {
  width: '100%',
});

globalStyle('relative', {
  position: 'relative',
});

globalStyle('[data-testid="modal-overlay"]', {
  background: 'rgba(17, 24, 39, 0.5)',
  // border: '10px solid green',
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

globalStyle('[role="dialog"]', {
  // border: '10px solid pink',
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

globalStyle('.bg-white', {
  // border: '10px solid green',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '90vh',
});

globalStyle('.border-b', {
  // border: '10px solid cyan',
  padding: '1.25rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

globalStyle('button[aria-label="Close"]', {
  // border: '10px solid white',
  fontSize: '.875rem',
  lineHeight: '1.25rem',
  backgroundColor: 'transparent',
  borderRadius: '0.5rem',
  display: 'inline-flex',
  alignItems: 'center',
  marginLeft: 'auto',
  color: vars.foregroundColor.primary,
});
