import { palette, responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const main = style({
  display: 'flex',
  position: 'relative',
  background: palette.gray800,
  flex: 1,
  alignItems: 'center',
});

export const container = style({
  textAlign: 'center',
  zIndex: 11,
});

export const fullHeight = style({
  ...responsiveStyle({
    mobile: {
      minHeight: `calc(100vh - 160px)`,
    },
    tablet: {
      minHeight: `calc(100vh - 130px)`,
    },
  }),
});

globalStyle(`${main} h1`, {
  opacity: 1,
  marginTop: '0',
  fontWeight: 'bold',
  ...responsiveStyle({
    mobile: {
      lineHeight: '1.25',
      fontSize: '50px',
    },
    desktop: {
      fontSize: '80px',
    },
  }),
});

globalStyle(`${main} h2`, {
  ...responsiveStyle({
    mobile: {
      minHeight: vars.space['large'],
    },
    tablet: {
      minHeight: vars.space['large'],
    },
    wide: {
      minHeight: vars.space['large'],
    },
  }),
});
