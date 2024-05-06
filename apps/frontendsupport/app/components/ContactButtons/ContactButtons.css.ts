import { vars } from '@cutting/component-library';
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

export const modal = style({
  zIndex: 310,
});

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

globalStyle('.bg-white', {
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '90vh',
});

globalStyle('.border-b', {
  padding: '1.25rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});
