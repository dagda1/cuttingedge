import { globalStyle, style } from '@vanilla-extract/css';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  flexShrink: 0 /* added this */,
});

globalStyle(`${main} h1`, {
  marginTop: 0,
  marginBottom: 0,
  paddingTop: 0,
  paddingBottom: 0,
});

export const italic = style({
  color: '#fff',
  fontStyle: 'italic',
  fontWeight: 100,
  letterSpacing: '1px',
  lineHeight: '1.5em',
  textTransform: 'none',
});

export const center = style({
  textAlign: 'center',
});

export const srAanchor = style({
  outline: 0,
});
