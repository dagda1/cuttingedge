import { globalStyle, globalFontFace, style } from '@vanilla-extract/css';
import { palette, responsiveStyle, vars } from '@cutting/component-library';

globalFontFace('Oswald', {
  fontStyle: 'normal',
  fontWeight: 200,
  src: "url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Sora&display=swap')",
});

globalStyle('body', {
  background: palette.gray800,
  overflowX: 'hidden',
  ...responsiveStyle({
    mobile: {
      letterSpacing: 'normal',
    },
    tablet: {
      letterSpacing: '1px',
    },
  }),
});

globalStyle('fieldset', {
  paddingLeft: 0,
});

globalStyle('h2', {
  fontWeight: 300,
  margin: 0,
  padding: 0,
});

globalStyle('ul', {
  margin: 0,
});

globalStyle('header', {
  position: 'fixed',
  zIndex: 33,
  left: 0,
  right: 0,
  boxShadow: '0 4px 8px 0 rgba(0,0,0,.2)',
});

globalStyle('header > div', {
  ...responsiveStyle({
    mobile: {
      display: 'block',
    },
    tablet: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }),
});

globalStyle('main section', {
  position: 'relative',
  ...responsiveStyle({
    mobile: {
      padding: '1rem 0 0 0',
    },
    tablet: {
      padding: '3rem 0 0 0',
    },
  }),
});

globalStyle('dl,dd,dt', {
  margin: 0,
  padding: 0,
  border: 0,
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline',
});


export const cookieContainer = style({
  alignItems: 'center !important',
});

export const cookieContent = style({
  display: 'flex',
  flexGrow: 1,
  flexShrink: 0,
  ...responsiveStyle({
    mobile: {
      justifyContent: 'center',
    },
    desktop: {
      justifyContent: 'flex-end',
    },
  }),
});

export const buttonWrapper = style({
  flexGrow: 1,
  flexShrink: 0,
  display: 'flex',
  ...responsiveStyle({
    mobile: {
      justifyContent: 'center',
    },
    desktop: {
      justifyContent: 'flex-start',
    },
  }),
});
